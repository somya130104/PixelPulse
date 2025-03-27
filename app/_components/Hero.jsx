import React from "react";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";

function Hero() {
  return (
    <div className="p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48">
      <h2 className="font-bold text-6xl text-center">
        AI Powered Short Video Generator
      </h2>
      <p className="mt-4 text-2xl text-center text-gray-500">
        Drop jaws with AI-crafted short vids—blazing fast, wicked smart, and
        ready to slay the feed with next-level vibes in a snap.
      </p>

      <div className="mt-7 flex gap-8">
        <Button size="lg" variant="myown">
          Explore
        </Button>
        <Authentication>
          <Button size="lg">Get Started</Button>
        </Authentication>
      </div>
    </div>
  );
}

export default Hero;
