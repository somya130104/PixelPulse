import React, { useState } from "react";

const captionOptions = [
  {
    name: "Youtuber",
    style:
      "color: rgb(250, 204, 21); font-size: 1.875rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px; padding: 0.25rem 0.75rem; border-radius: 0.5rem;",
  },
  {
    name: "Supreme",
    style:
      "color: white; font-size: 1.875rem; font-weight: 700; font-style: italic; text-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px; padding: 0.25rem 0.75rem; border-radius: 0.5rem;",
  },
  {
    name: "Neon",
    style:
      "color: rgb(34, 197, 94); font-size: 1.875rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; text-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px; padding: 0.25rem 0.75rem; border-radius: 0.5rem;",
  },
  {
    name: "Glitch",
    style:
      "color: rgb(236, 72, 153); font-size: 1.875rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.75rem; border-radius: 0.5rem;",
  },
  {
    name: "Fire",
    style:
      "color: rgb(239, 6, 0); font-size: 1.875rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.75rem; border-radius: 0.5rem;",
  },
  {
    name: "Futuristic",
    style:
      "font-size: 1.875rem; font-weight: 700; background: linear-gradient(to right, rgb(45, 212, 191), rgb(147, 197, 253)) text ; -webkit-text-fill-color: transparent; text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;",
  },
];

function Captions({ onHandleInputChange }) {
  const [selectedCaption, setSelectedCaption] = useState(null);

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold">Captions Style</h2>
      <p className="text-sm text-gray-400 mb-3">Select caption style</p>

      <div className="flex flex-wrap gap-4 mt-2">
        {captionOptions.map((option, index) => (
          <div
            key={index}
            className={`cursor-pointer p-3 dark:bg-slate-900 rounded-lg border transition-all ${
              selectedCaption === option.name
                ? "border-white bg-gray-700" // Highlight the selected caption
                : "border-transparent"
            } hover:border-white`}
            onClick={() => {
              setSelectedCaption(option.name); // Update the selected option
              onHandleInputChange('caption' ,option); // Pass selected option to parent
            }}
          >
            <h2 style={parseStyle(option.style)}>{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to convert a CSS string into a React style object
export const parseStyle = (styleString) => {
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

export default Captions;
