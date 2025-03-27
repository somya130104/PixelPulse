import React from "react";
import { options } from "./VideoStyle";
import Image from "next/image";

function Preview({ formData }) {
  const selectVideoStyle =
    formData && options.find((option) => option?.name === formData?.videoStyle);

  return (
    <div className="relative">
      <h2 className="mb-1.5 text-2xl">Preview</h2>
      <Image
        src={selectVideoStyle?.image}
        alt={selectVideoStyle?.name}
        height={300}
        width={1000}
        className="w-full h-[70vh] object-cover rounded-xl"
      />
      {console.log(formData)}
      <h2
        style={parseStyle(formData?.caption?.style)} // Apply inline style properly
        className="absolute bottom-8 text-center w-full"
      >
        {formData?.caption?.name}
      </h2>
    </div>
  );
}

// Function to convert CSS string to React style object
const parseStyle = (styleString) => {
  if (!styleString) return {}; // Ensure it doesn't crash if null
  return styleString
    .split(";")
    .filter((style) => style.trim().length > 0)
    .reduce((acc, style) => {
      let [property, value] = style.split(":");
      if (property && value) {
        acc[property.trim()] = value.trim();
      }
      return acc;
    }, {});
};

export default Preview;
