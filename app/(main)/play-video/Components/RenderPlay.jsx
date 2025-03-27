"use client";
import React, { useState, useEffect } from "react";
import { Player } from "@remotion/player";
import RemotionComposition from "@/app/_components/RemotionComposition";

function RenderPlay({ VideoData }) {
  const [durationInFrame, setDurationInFrame] = useState(100); // Initial fallback duration

  // Ensure duration updates only when VideoData changes
  useEffect(() => {
    if (!VideoData) {
      setDurationInFrame(100); // Reset to default if no VideoData
    }
  }, [VideoData]);

  // Validate VideoData before rendering
  if (!VideoData) {
    return <div>No video data provided</div>;
  }

  return (
    <div>
      <Player
        component={RemotionComposition}
        compositionWidth={720}
        compositionHeight={1280}
        fps={30}
        durationInFrames={Math.max(durationInFrame, 100)} // Ensure minimum duration
        style={{
          width: "25vw",
          height: "70vh",
          maxWidth: "100%", // Prevent overflow on small screens
          aspectRatio: "720/1280",
          // Maintain aspect ratio
        }}
        controls
        inputProps={{
          VideoData,
          setDurationInFrame,
        }}
      />
    </div>
  );
}

export default RenderPlay;
