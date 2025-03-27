import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { helloWorld } from "@/inngest/function";
import { GenerateVideoData } from "@/inngest/function";
import axios from "axios";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld,
    GenerateVideoData,
  ],
});
