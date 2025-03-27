const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'write a two different script for 30 Seconds video on Topic:Kids Story,\n• Give me response in JSON format and follow the schema\n\n{\n"scripts": [\n{\n"content": ""\n}\n]\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "scripts": [\n    {\n      "content": "Once upon a time, in a land filled with sparkling rivers and giggling trees, lived a little firefly named Flicker. Flicker was shy and his light wasn\'t as bright as the other fireflies. He worried he wouldn\'t be able to light up the Big Meadow for the annual Glow Festival. One day, he met a wise old owl who told him, \\"Your light shines from within, Flicker. Find what makes your heart glow, and your light will follow.\\" Flicker decided to help a lost ladybug find her way home. He then helped a group of snails cross a busy path. As he helped each one, Flicker felt a warmth spread through him, and his light began to shine brighter and brighter. At the Glow Festival, Flicker\'s light was the brightest of them all, not because he tried, but because his kindness made his heart, and his light, truly shine. #KidsStories #Storytime #KidsBooks"\n    },\n    {\n      "content": "Barnaby the bear was afraid of the dark. Every night, when the sun dipped below the horizon, Barnaby would hide under his covers, imagining spooky shadows dancing on his walls. One evening, his grandma gave him a small, smooth stone. \\"This,\\" she said, \\"is a worry stone. When you\'re afraid, hold it tight and think of all the things you love.\\" That night, Barnaby held the worry stone. He thought of his grandma\'s warm hugs, the taste of sweet berries, and the sound of the wind rustling through the leaves. Slowly, the fear began to fade. He noticed the soft glow of the moon, the twinkling stars, and the gentle hooting of an owl. Barnaby realized the dark wasn\'t scary, it was just different. And sometimes, different can be beautiful. From that night on, Barnaby still held his worry stone, but not because he was afraid. He held it to remember all the good things, even in the dark. #BedtimeStories #KidsBooks #ReadAloud"\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

export const generateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: '**Generate Image prompt of Cinematic style with all details for each scene for a 30 seconds video**  \nScript: Rosa Parks refused to give up her seat on a bus in 1955. Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in the Civil Rights Movement. One person\'s bravery can inspire lasting change for everyone.\n\n- Just give specific image prompts depending on the storyline.  \n- Do not give camera angle image prompts.  \n- Follow the following schema and return JSON data (Max 4-5 Images):  \n\n```json\n[\n  {\n    "imagePrompt": "",\n    "sceneContent": "<Script Content>"\n  }\n]\n```\n\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A vintage 1950s city bus interior. Rosa Parks, a Black woman with a dignified and weary expression, sits quietly in a seat near the front. Several white passengers are visible, some looking indifferent, others with subtle expressions of disapproval. The scene is dimly lit, with a sense of everyday segregation and tension.",\n    "sceneContent": "Rosa Parks refused to give up her seat on a bus in 1955."\n  },\n  {\n    "imagePrompt": "Close-up on Rosa Parks\' hands, clasped in her lap. Her expression is calm but resolute. The lighting highlights the texture of her skin and the simple clothing she wears. The overall feel is one of quiet strength and determination.",\n    "sceneContent": "Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in the Civil Rights Movement."\n  },\n  {\n    "imagePrompt": "A wide shot of a crowded street in Montgomery, Alabama, filled with Black protestors carrying signs and banners. The Montgomery bus boycott is in full swing. The atmosphere is charged with a mix of hope, anger, and determination. Vintage cars and storefronts line the street.",\n    "sceneContent": "One person\'s bravery can inspire lasting change for everyone."\n  }\n]\n```',
        },
      ],
    },
  ],
});

//const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//console.log(result.response.text());
