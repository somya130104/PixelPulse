"use client";
import React, { useState } from "react";
import Image from "next/image";


export const options = [
  {
    name: "Realistic",
    image: "/realistic.png",
  },
  {
    name: "Cinematic",
    image: "/cinematic.png",
  },
  {
    name: "Cartoon",
    image: "/3d.png",
  },
  {
    name: "WaterColor",
    image: "/watercolor.png",
  },
  {
    name: "Cyberpunk",
    image: "/cyberpunk.png",
  },
  {
    name: "GTA",
    image: "/gta.png",
  },
  {
    name: "Anime",
    image: "/anim.png",
  },
];

function VideoStyle({ onHandleInputChange }) {
  const [selectedStyle, setSelectedStyle] = useState("");

  return (
    <div className="mt-5">
      <h2>Video Styles</h2>
      <p className="text-sm text-gray-400 mb-1">Select video style</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-lg ${
              selectedStyle === option.name ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => {
              setSelectedStyle(option.name);
              onHandleInputChange("videoStyle", option.name);
            }}
          >
            <Image
              src={option.image}
              alt={option.name}
              width={500}
              height={200}
              className={`h-[70px] lg:h-[130px] xl:h-[180px] object-cover rounded-lg p-1 hover:border border-gray-300 ${selectedStyle === option.name ? "border" : ""}`}   
            />
            <h2 className="absolute bottom-1 text-center w-full">
              {option.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoStyle;
