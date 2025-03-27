"use client";
import React from "react";
import Topic from "./_components/Topic";
import VideoStyle from "./_components/VideoStyle";
import Voice from "./_components/Voice";
import Captions from "./_components/Captions";
import { Button } from "@/components/ui/button";
import { Loader2Icon, WandSparkles } from "lucide-react";
import Preview from "./_components/Preview";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuthContext } from "@/app/provider";
import { useState } from "react";
import { toast } from "react-toastify";

function CreateNewVideo() {
  const [formData, setFormData] = React.useState();
  const createInitialVideoRecord = useMutation(api.VideoData.CreateVideoData);
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const GenerateVideo = async () => {
    if (user?.credits <= 0) {
      toast.error("Please add more credits.");
      return;
    }
    if (
      formData.title &&
      formData.topic &&
      formData.videoStyle &&
      formData.voice &&
      formData.caption &&
      formData.script
    ) {
      setLoading(true);
      const response = await createInitialVideoRecord({
        title: formData.title,
        topic: formData.topic,
        script: formData.script,
        videoStyle: formData.videoStyle,
        caption: formData.caption,
        voice: formData.voice,
        uid: user?._id,
        createdBy: user?.email,
        credits: user?.credits,
        status: "pending",
      });
      console.log(response);
      try {
        const result = await axios.post("/api/generate-video-data", {
          ...formData,
          recordId: response,
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Please fill all the fields");
      console.log(formData);
      return;
    }
  };

  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        {/* Topic & Script */}
        <div className="col-span-2 border p-7 rounded-xl h-[72vh] overflow-auto">
          <Topic onHandleInputChange={onHandleInputChange} />
          <VideoStyle onHandleInputChange={onHandleInputChange} />
          <Voice onHandleInputChange={onHandleInputChange} />
          <Captions onHandleInputChange={onHandleInputChange} />
          <Button
            className="mt-5 w-full"
            onClick={GenerateVideo}
            disabled={loading}
          >
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <WandSparkles />
            )}{" "}
            Generate Video
          </Button>
        </div>
        <div>
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
