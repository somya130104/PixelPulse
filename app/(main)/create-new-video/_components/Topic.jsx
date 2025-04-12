"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon, SparkleIcon } from "lucide-react";
import { useAuthContext } from "@/app/provider";

const suggestions = [
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

function Topic({ onHandleInputChange }) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [scripts, setScripts] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedScriptIndex, setSelectedScriptIndex] = useState();
  const [currentGeneratedTopic, setCurrentGeneratedTopic] = useState("");
  const { user } = useAuthContext();

  const GenerateScriptPage = async () => {
    if (user?.credits <= 0) {
      toast.error("Please add more credits.");
      alert("Please add more credits.");
      return;
    }
    setLoading(true);
    setSelectedScriptIndex(null);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });
      console.log(result.data); // Handle the response as needed
      setScripts(result.data?.scripts);
      setCurrentGeneratedTopic(selectedTopic);
      setLoading(false);
    } catch (error) {
      console.error("Error generating script:", error);
      setLoading(false);
    }
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    onHandleInputChange("topic", topic);

    // Reset scripts if the topic changes from the one that was used to generate them
    if (topic !== currentGeneratedTopic) {
      setScripts(null);
      setSelectedScriptIndex(null);
      onHandleInputChange("script", "");
    }
  };

  return (
    <div>
      <h2 className="mb-2">Project Title</h2>
      <Input
        placeholder="Enter Project Title"
        onChange={(e) => {
          onHandleInputChange("title", e.target.value);
        }}
      />
      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-400">Select Topic for your video</p>
        <Tabs defaultValue="suggestions" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestions">
            <div>
              {suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  key={index}
                  className={`m-1 ${
                    selectedTopic === suggestion ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => {
                    handleTopicChange(suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter your own topic</h2>
              <Textarea
                value={selectedTopic}
                onChange={(e) => {
                  handleTopicChange(e.target.value);
                }}
              />
            </div>
          </TabsContent>
        </Tabs>

        {scripts?.length > 0 && currentGeneratedTopic === selectedTopic && (
          <div className="mt-2">
            <h2>Select the Script</h2>
            <div className="grid grid-cols-2 gap-5 mt-1.5 cursor-pointer">
              {scripts?.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg ${selectedScriptIndex === index && "border-white bg-secondary"}`}
                  onClick={() => {
                    setSelectedScriptIndex(index);
                    onHandleInputChange("script", item?.content);
                  }}
                >
                  <h2 className="line-clamp-4 text-sm text-gray-300">
                    {item.content}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {(!scripts || currentGeneratedTopic !== selectedTopic) && (
        <Button
          className="mt-3"
          size="sm"
          onClick={GenerateScriptPage}
          disabled={loading || !selectedTopic}
        >
          {loading ? <LoaderIcon className="animate-spin" /> : <SparkleIcon />}{" "}
          Generate Script
        </Button>
      )}
    </div>
  );
}

export default Topic;
