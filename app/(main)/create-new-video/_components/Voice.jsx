import React from "react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const voiceOptions = [
  {
    value: "af_sarah",
    name: " 🇺🇸 Sarah (Female)",
  },
  {
    value: "af_sky",
    name: " 🇺🇸 Sky (Female) ",
  },
  {
    value: "am_adam",
    name: " 🇺🇸 Adam (Male)",
  },
  {
    value: "hf_alpha",
    name: "🇮🇳 Alpha (Female)",
  },
  {
    value: "hf_beta",
    name: "🇮🇳 Beta (Female)",
  },
  {
    value: "hm_omega",
    name: "🇮🇳 Omega (Male)",
  },
  {
    value: "hm_psi",
    name: "🇮🇳 Psi (Male)",
  },
  {
    value: "am_echo",
    name: "🇺🇸 Echo (Male)",
  },
  {
    value: "am_eric",
    name: "🇺🇸 Eric (Male)",
  },
  {
    value: "am_fenrir",
    name: "🇺🇸 Fenrir (Male)",
  },
  {
    value: "am_liam",
    name: "🇺🇸 Liam (Male)",
  },
  {
    value: "am_michael",
    name: "🇺🇸 Michael (Male)",
  },
  {
    value: "am_onyx",
    name: "🇺🇸 Onyx (Male)",
  },
];

function Voice({ onHandleInputChange }) {
  const [selectedVoice, setSelectedVoice] = useState();
  return (
    <div className="mt-5">
      <h2>Video Voice</h2>
      <p className="text-sm text-gray-400 ">Select Voice for your video</p>
      <ScrollArea className="h-[200px] w-full p-4">
        <div className="grid grid-cols-2 gap-3 ">
          {voiceOptions.map((option, index) => (
            <h2
              key={index}
              className={`cursor-pointer p-3 dark:bg-slate-900 rounded-lg hover:border-white border border-transparent ${selectedVoice === option.name ? "border-white bg-secondary" : ""}`}
              onClick={() => {
                setSelectedVoice(option.name);
                onHandleInputChange("voice", option.value);
              }}
            >
              {option.name}
            </h2>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Voice;
