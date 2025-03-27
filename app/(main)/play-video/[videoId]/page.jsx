"use client";
import React, { use } from "react";
import RenderPlay from "../Components/RenderPlay";
import VideoInfo from "../Components/VideoInfo";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { Video } from "remotion";

function PlayVideo() {
  const { videoId } = useParams();
  const [VideoData, setVideoData] = useState(null);
  const convex = useConvex();
  const GetVideoDataById = async () => {
    const result = await convex.query(api.VideoData.GetVideoById, {
      videoId: videoId,
    });
    console.log(result);
    setVideoData(result);
  };
  useEffect(() => {
    videoId && GetVideoDataById();
  }, [videoId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <RenderPlay VideoData={VideoData} className = "rounded-xl"/>
      </div>

      <div>
        <VideoInfo VideoData={VideoData}/>
      </div>
    </div>
  );
}

export default PlayVideo;
