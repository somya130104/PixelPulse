"use client";
import React, { useEffect } from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Easing,
} from "remotion";
import { Img, Audio } from "remotion";
import { interpolate } from "remotion";
// Helper function to parse CSS string to React style object
const parseStyleString = (styleString) => {
  if (!styleString) return {};
  const style = {};
  styleString.split(";").forEach((declaration) => {
    const [property, value] = declaration.split(":").map((s) => s.trim());
    if (property && value) {
      const reactProperty = property
        .trim()
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      style[reactProperty] = value.trim();
    }
  });
  return style;
};

function RemotionComposition({ VideoData, setDurationInFrame }) {
  const captions = VideoData?.captionJson || [];
  const { fps } = useVideoConfig();
  const imageList = VideoData?.images || [];
  const frame = useCurrentFrame();

  // Calculate total duration from captions
  const totalDuration =
    captions.length > 0
      ? Math.floor(captions[captions.length - 1].end * fps)
      : 100;

  // Calculate duration per image (with 25% overlap for smooth transitions)
  const imageDuration = Math.floor((totalDuration / imageList.length) * 1.25);

  useEffect(() => {
    if (VideoData) {
      setDurationInFrame(totalDuration);
    }
  }, [VideoData, totalDuration, setDurationInFrame]);

  // Slow zoom in/out effect for each image
  const getZoomEffect = (startFrame, durationFrames) => {
    const zoomCycleDuration = durationFrames * 0.8;
    const zoomProgress = interpolate(
      frame,
      [startFrame, startFrame + zoomCycleDuration],
      [0, 1],
      { extrapolate: "clamp" }
    );

    const zoomScale =
      1 + (Math.sin(zoomProgress * Math.PI * 2 - Math.PI / 2) * 0.05 + 0.05);

    return zoomScale;
  };

  // Smooth crossfade transition between images
  const getTransition = (index, currentFrame) => {
    const startTime = index * imageDuration * 0.75;
    const endTime = startTime + imageDuration;
    const transitionDuration = fps * 1.0;

    if (currentFrame < startTime + transitionDuration) {
      const progress = interpolate(
        currentFrame,
        [startTime, startTime + transitionDuration],
        [0, 1],
        { easing: Easing.out(Easing.cubic), extrapolate: "clamp" }
      );

      return {
        opacity: progress,
        transform: `scale(${getZoomEffect(startTime, imageDuration)})`,
      };
    }

    if (currentFrame > endTime - transitionDuration) {
      const progress = interpolate(
        currentFrame,
        [endTime - transitionDuration, endTime],
        [0, 1],
        { easing: Easing.in(Easing.cubic), extrapolate: "clamp" }
      );

      return {
        opacity: 1 - progress,
        transform: `scale(${getZoomEffect(startTime, imageDuration)})`,
      };
    }

    return {
      opacity: 1,
      transform: `scale(${getZoomEffect(startTime, imageDuration)})`,
    };
  };

  const getCurrentCaption = (currentFrame) => {
    const currentTimestamp = currentFrame / fps;
    const currentCaption = captions.find(
      (caption) =>
        currentTimestamp >= caption.start && currentTimestamp <= caption.end
    );
    return currentCaption ? currentCaption.word : "";
  };

  // XL Caption styling with neon effects
  const captionStyle = {
    // Text size and styling
    fontSize: "4.5rem", // Extra large size
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    lineHeight: "1.2",

    // Neon color effects
    color: "rgb(34, 197, 94)",
    textShadow: `
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px rgb(34, 197, 94),
      0 0 40px rgb(34, 197, 94),
      0 0 60px rgb(34, 197, 94)
    `,

    // Background and spacing
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "1rem 2rem",
    borderRadius: "1rem",

    // Positioning
    position: "relative",
    margin: "auto auto",
    maxWidth: "90%",
    bottom: "50",

    // Override with any custom styles from VideoData
    ...parseStyleString(VideoData?.caption?.style),
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {imageList.map((image, index) => {
        const startTime = index * imageDuration * 0.75;

        return (
          <Sequence
            key={index}
            from={Math.max(0, startTime - fps * 0.5)}
            durationInFrames={imageDuration + fps * 1.5}
          >
            <AbsoluteFill
              style={{
                ...getTransition(index, frame),
                transition: `all ${1.0}s cubic-bezier(0.33, 1, 0.68, 1)`,
                willChange: "transform, opacity",
              }}
            >
              <Img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transformOrigin: "center center",
                }}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {/* XL Caption Display */}
      <AbsoluteFill
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "120px",
          zIndex: 10,
        }}
      >
        <div style={captionStyle}>{getCurrentCaption(frame)}</div>
      </AbsoluteFill>

      {VideoData?.audioUrl && <Audio src={VideoData.audioUrl} />}
    </AbsoluteFill>
  );
}

export default RemotionComposition;
