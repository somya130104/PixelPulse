import { createClient } from "@deepgram/sdk";//Audio Transcription Service
import { inngest } from "./client";
import axios from "axios";
import { generateImageScript } from "@/configs/aiModel";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const BASE_URL = "https://aigurulab.tech";

const ImagePrompt = `Generate Image prompt of {style} style with all details for each scene for a 30 seconds video: script : {script}  
- Just give specific image prompts depending on the storyline.  
- Do not give camera angle image prompts.  
- Follow the following schema and return JSON data (Max 4-5 Images):  
[
  {
    "imagePrompt": "",
    "sceneContent": "<Script Content>"
  }
]
`;

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const GenerateVideoData = inngest.createFunction(
  { id: "generate-video-data" },
  { event: "generate-video-data" },
  async ({ event, step }) => {
    try {
      const { script, topic, title, caption, videoStyle, voice, recordId } =
        event?.data;
      const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
      console.log("Event sent to Inngest:");

      // Generate Audio File (MP3)
      const GenerateAudioFile = await step.run(
        "GenerateAudioFile",
        async () => {
          const response = await axios.post(
            `${BASE_URL}/api/text-to-speech`,
            { input: script, voice: voice },
            {
              headers: {
                "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Generated Audio URL:", response.data.audio);
          return response.data.audio;
        }
      );

      // Generate Captions
      const GenerateCaptions = await step.run("GenerateCaptions", async () => {
        const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);
        try {
          const { result, error } =
            await deepgram.listen.prerecorded.transcribeUrl(
              { url: GenerateAudioFile },
              { model: "nova-3" }
            );

          if (error) throw new Error("Deepgram transcription failed");
          return result?.results?.channels?.[0]?.alternatives?.[0]?.words || [];
        } catch (err) {
          console.error("Error transcribing audio:", err);
          throw err;
        }
      });

      // Generate Image Prompts
      const GenerateImagePrompts = await step.run(
        "GenerateImagePrompts",
        async () => {
          const FINAL_PROMPT = ImagePrompt.replace(
            "{style}",
            videoStyle
          ).replace("{script}", script);
          const result = await generateImageScript.sendMessage(FINAL_PROMPT);
          return JSON.parse(result.response.text());
        }
      );

      // Generate Images
      const GeneratedImages = await step.run("generateImages", async () => {
        return await Promise.all(
          GenerateImagePrompts.map(async (image) => {
            const result = await axios.post(
              BASE_URL + "/api/generate-image",
              {
                width: 1024,
                height: 1024,
                input: image?.imagePrompt,
                model: "sdxl",
              },
              {
                headers: {
                  "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
                  "Content-Type": "application/json",
                },
              }
            );
            return result.data.image;
          })
        );
      });

      // Update the Database
      const UpdateDB = await step.run("updateDB", async () => {
        return await convex.mutation(api.VideoData.UpdateVideoRecord, {
          recordId: recordId,
          audioUrl: GenerateAudioFile,
          captionJson: GenerateCaptions,
          images: GeneratedImages,
        });
      });

      return "Execution Completed";
    } catch (error) {
      console.error("Error in GenerateVideoData function:", error);
      throw error;
    }
  }
);
