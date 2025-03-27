import React from "react";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import RemotionComposition from "./../app/_components/RemotionComposition";
import { Captions } from "lucide-react";

const VideoData = {
  audioUrl:
    "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1743069923613.mp3?alt=media&token=733d0525-b121-48fe-9d00-89ce9df34e83",
  captionJson: [
    {
      confidence: 0.9847088,
      end: 0.48,
      start: 0.24,
      word: "ever",
    },
    {
      confidence: 0.9991406,
      end: 0.71999997,
      start: 0.48,
      word: "seen",
    },
    {
      confidence: 0.99920386,
      end: 0.88,
      start: 0.71999997,
      word: "a",
    },
    {
      confidence: 0.9992275,
      end: 1.1999999,
      start: 0.88,
      word: "rainbow",
    },
    {
      confidence: 0.99592227,
      end: 1.9199998,
      start: 1.1999999,
      word: "inside",
    },
    {
      confidence: 0.99906135,
      end: 2.24,
      start: 2,
      word: "let's",
    },
    {
      confidence: 0.999897,
      end: 2.3999999,
      start: 2.24,
      word: "make",
    },
    {
      confidence: 0.98837566,
      end: 2.9599998,
      start: 2.3999999,
      word: "one",
    },
    {
      confidence: 0.99709433,
      end: 3.1999998,
      start: 2.96,
      word: "you'll",
    },
    {
      confidence: 0.9998202,
      end: 3.36,
      start: 3.1999998,
      word: "need",
    },
    {
      confidence: 0.9973105,
      end: 3.52,
      start: 3.36,
      word: "a",
    },
    {
      confidence: 0.99954945,
      end: 3.6799998,
      start: 3.52,
      word: "clear",
    },
    {
      confidence: 0.9999311,
      end: 4,
      start: 3.6799998,
      word: "glass",
    },
    {
      confidence: 0.9998282,
      end: 4.16,
      start: 4,
      word: "of",
    },
    {
      confidence: 0.99549526,
      end: 4.64,
      start: 4.16,
      word: "water",
    },
    {
      confidence: 0.9992925,
      end: 4.72,
      start: 4.64,
      word: "a",
    },
    {
      confidence: 0.9998348,
      end: 4.96,
      start: 4.72,
      word: "small",
    },
    {
      confidence: 0.89521617,
      end: 5.44,
      start: 4.96,
      word: "mirror",
    },
    {
      confidence: 0.9997749,
      end: 5.52,
      start: 5.44,
      word: "and",
    },
    {
      confidence: 0.99929225,
      end: 5.68,
      start: 5.52,
      word: "a",
    },
    {
      confidence: 0.99612373,
      end: 6.3999996,
      start: 5.68,
      word: "flashlight",
    },
    {
      confidence: 0.99845576,
      end: 6.72,
      start: 6.3999996,
      word: "place",
    },
    {
      confidence: 0.99916303,
      end: 6.8799996,
      start: 6.72,
      word: "the",
    },
    {
      confidence: 0.999925,
      end: 7.12,
      start: 6.8799996,
      word: "glass",
    },
    {
      confidence: 0.9997044,
      end: 7.2,
      start: 7.12,
      word: "of",
    },
    {
      confidence: 0.99985325,
      end: 7.44,
      start: 7.2,
      word: "water",
    },
    {
      confidence: 0.9997609,
      end: 7.68,
      start: 7.44,
      word: "on",
    },
    {
      confidence: 0.9966491,
      end: 7.7599998,
      start: 7.68,
      word: "a",
    },
    {
      confidence: 0.99986947,
      end: 8,
      start: 7.7599998,
      word: "table",
    },
    {
      confidence: 0.9953153,
      end: 8.32,
      start: 8,
      word: "near",
    },
    {
      confidence: 0.9993191,
      end: 8.48,
      start: 8.32,
      word: "a",
    },
    {
      confidence: 0.9707086,
      end: 9.04,
      start: 8.48,
      word: "wall",
    },
    {
      confidence: 0.99654454,
      end: 9.76,
      start: 9.28,
      word: "submerge",
    },
    {
      confidence: 0.9998803,
      end: 9.92,
      start: 9.76,
      word: "the",
    },
    {
      confidence: 0.99977726,
      end: 10.16,
      start: 9.92,
      word: "mirror",
    },
    {
      confidence: 0.99529713,
      end: 10.639999,
      start: 10.16,
      word: "partially",
    },
    {
      confidence: 0.9985776,
      end: 10.8,
      start: 10.639999,
      word: "in",
    },
    {
      confidence: 0.9997526,
      end: 10.96,
      start: 10.8,
      word: "the",
    },
    {
      confidence: 0.99978334,
      end: 11.2,
      start: 10.96,
      word: "water",
    },
    {
      confidence: 0.7836075,
      end: 11.679999,
      start: 11.2,
      word: "angled",
    },
    {
      confidence: 0.99772096,
      end: 12.16,
      start: 11.679999,
      word: "slightly",
    },
    {
      confidence: 0.74886435,
      end: 13.255,
      start: 12.695,
      word: "now",
    },
    {
      confidence: 0.9976255,
      end: 13.415,
      start: 13.255,
      word: "shine",
    },
    {
      confidence: 0.9991804,
      end: 13.575,
      start: 13.415,
      word: "the",
    },
    {
      confidence: 0.99817693,
      end: 14.055,
      start: 13.575,
      word: "flashlight",
    },
    {
      confidence: 0.9979887,
      end: 14.295,
      start: 14.055,
      word: "into",
    },
    {
      confidence: 0.9993686,
      end: 14.375,
      start: 14.295,
      word: "the",
    },
    {
      confidence: 0.9998734,
      end: 14.615,
      start: 14.375,
      word: "water",
    },
    {
      confidence: 0.8424625,
      end: 15.014999,
      start: 14.615,
      word: "hitting",
    },
    {
      confidence: 0.99939835,
      end: 15.175,
      start: 15.014999,
      word: "the",
    },
    {
      confidence: 0.9985607,
      end: 15.655,
      start: 15.175,
      word: "submerged",
    },
    {
      confidence: 0.99973255,
      end: 15.895,
      start: 15.655,
      word: "part",
    },
    {
      confidence: 0.9994282,
      end: 15.975,
      start: 15.895,
      word: "of",
    },
    {
      confidence: 0.99968886,
      end: 16.135,
      start: 15.975,
      word: "the",
    },
    {
      confidence: 0.97809005,
      end: 16.695,
      start: 16.135,
      word: "mirror",
    },
    {
      confidence: 0.9995808,
      end: 17.095,
      start: 16.775,
      word: "adjust",
    },
    {
      confidence: 0.9994585,
      end: 17.255001,
      start: 17.095,
      word: "the",
    },
    {
      confidence: 0.99964166,
      end: 17.575,
      start: 17.255001,
      word: "mirror",
    },
    {
      confidence: 0.9977495,
      end: 17.735,
      start: 17.575,
      word: "and",
    },
    {
      confidence: 0.9970546,
      end: 17.815,
      start: 17.735,
      word: "the",
    },
    {
      confidence: 0.999511,
      end: 18.295,
      start: 17.815,
      word: "flashlight",
    },
    {
      confidence: 0.99686146,
      end: 18.615,
      start: 18.295,
      word: "until",
    },
    {
      confidence: 0.9967715,
      end: 18.775,
      start: 18.615,
      word: "a",
    },
    {
      confidence: 0.99994636,
      end: 19.175,
      start: 18.775,
      word: "beautiful",
    },
    {
      confidence: 0.99945015,
      end: 19.575,
      start: 19.175,
      word: "rainbow",
    },
    {
      confidence: 0.9998399,
      end: 20.055,
      start: 19.575,
      word: "appears",
    },
    {
      confidence: 0.9997768,
      end: 20.215,
      start: 20.055,
      word: "on",
    },
    {
      confidence: 0.9997658,
      end: 20.295,
      start: 20.215,
      word: "the",
    },
    {
      confidence: 0.99893194,
      end: 20.855,
      start: 20.295,
      word: "wall",
    },
    {
      confidence: 0.9993723,
      end: 21.814999,
      start: 21.575,
      word: "this",
    },
    {
      confidence: 0.9994899,
      end: 22.135,
      start: 21.814999,
      word: "happens",
    },
    {
      confidence: 0.99789435,
      end: 22.375,
      start: 22.135,
      word: "because",
    },
    {
      confidence: 0.9971976,
      end: 22.695,
      start: 22.375,
      word: "light",
    },
    {
      confidence: 0.9993826,
      end: 23.095,
      start: 22.695,
      word: "bends",
    },
    {
      confidence: 0.92767674,
      end: 23.415,
      start: 23.095,
      word: "or",
    },
    {
      confidence: 0.99681664,
      end: 23.974998,
      start: 23.415,
      word: "refracts",
    },
    {
      confidence: 0.99185926,
      end: 24.134998,
      start: 23.974998,
      word: "when",
    },
    {
      confidence: 0.99945873,
      end: 24.295,
      start: 24.134998,
      word: "it",
    },
    {
      confidence: 0.9995216,
      end: 24.615,
      start: 24.295,
      word: "passes",
    },
    {
      confidence: 0.99918765,
      end: 24.855,
      start: 24.615,
      word: "through",
    },
    {
      confidence: 0.998696,
      end: 25.175,
      start: 24.855,
      word: "water",
    },
    {
      confidence: 0.9561902,
      end: 25.415,
      start: 25.175,
      word: "and",
    },
    {
      confidence: 0.998928,
      end: 25.575,
      start: 25.415,
      word: "then",
    },
    {
      confidence: 0.9938577,
      end: 25.895,
      start: 25.575,
      word: "reflects",
    },
    {
      confidence: 0.9980817,
      end: 26.134998,
      start: 25.895,
      word: "off",
    },
    {
      confidence: 0.9991192,
      end: 26.295,
      start: 26.134998,
      word: "the",
    },
    {
      confidence: 0.8474221,
      end: 26.615,
      start: 26.295,
      word: "mirror",
    },
    {
      confidence: 0.9989557,
      end: 27.354937,
      start: 26.794937,
      word: "separating",
    },
    {
      confidence: 0.99963284,
      end: 27.594936,
      start: 27.354937,
      word: "the",
    },
    {
      confidence: 0.99929583,
      end: 27.754936,
      start: 27.594936,
      word: "white",
    },
    {
      confidence: 0.99975425,
      end: 27.994938,
      start: 27.754936,
      word: "light",
    },
    {
      confidence: 0.99887973,
      end: 28.234938,
      start: 27.994938,
      word: "into",
    },
    {
      confidence: 0.9939574,
      end: 28.394938,
      start: 28.234938,
      word: "its",
    },
    {
      confidence: 0.999326,
      end: 28.634937,
      start: 28.394938,
      word: "different",
    },
    {
      confidence: 0.88861614,
      end: 29.194937,
      start: 28.634937,
      word: "colors",
    },
    {
      confidence: 0.9992797,
      end: 29.354937,
      start: 29.194937,
      word: "just",
    },
    {
      confidence: 0.99962306,
      end: 29.514936,
      start: 29.354937,
      word: "like",
    },
    {
      confidence: 0.99931955,
      end: 29.674938,
      start: 29.514936,
      word: "a",
    },
    {
      confidence: 0.99982506,
      end: 29.914936,
      start: 29.674938,
      word: "real",
    },
    {
      confidence: 0.9555789,
      end: 30.714937,
      start: 29.914936,
      word: "rainbow",
    },
    {
      confidence: 0.99929285,
      end: 31.034937,
      start: 30.794937,
      word: "try",
    },
    {
      confidence: 0.9996654,
      end: 31.194937,
      start: 31.034937,
      word: "it",
    },
    {
      confidence: 0.99958116,
      end: 31.354937,
      start: 31.194937,
      word: "out",
    },
    {
      confidence: 0.9916687,
      end: 31.514936,
      start: 31.354937,
      word: "and",
    },
    {
      confidence: 0.99891424,
      end: 31.834938,
      start: 31.514936,
      word: "amaze",
    },
    {
      confidence: 0.9993876,
      end: 31.994938,
      start: 31.834938,
      word: "your",
    },
    {
      confidence: 0.7752793,
      end: 32.634937,
      start: 31.994938,
      word: "friends",
    },
    {
      confidence: 0.6280997,
      end: 33.19494,
      start: 32.794937,
      word: "science",
    },
    {
      confidence: 0.5368815,
      end: 33.67494,
      start: 33.19494,
      word: "experiment",
    },
    {
      confidence: 0.8620529,
      end: 35.19494,
      start: 33.67494,
      word: "rainbowkidsscience",
    },
  ],
  images: [
    "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1743069933137.png?alt=media&token=c795e233-c2fd-4ded-b357-eada11eb37ea",
    "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1743069933727.png?alt=media&token=3cd0d375-82e7-4c3b-8cf2-210904d4d871",
    "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1743069934203.png?alt=media&token=10106335-b78a-4ac1-b69c-f210b320cabd",
    "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1743069934870.png?alt=media&token=5b5e906e-0878-4476-b2e8-d695981603df",
  ],
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="pixelpulse"
        component={RemotionComposition}
        durationInFrames={
          VideoData?.captionJson.length > 0
            ? Number(Math.floor(
                VideoData?.captionJson[VideoData?.captionJson.length - 1].end *
                  30)
              )
            : Number(100)
        }
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          VideoData: VideoData,
        }}
      />
    </>
  );
};
