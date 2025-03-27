"use client";
import { useAuthContext } from "@/app/provider.js";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";

function AppHeader() {
  const { user } = useAuthContext();

  // Provide a fallback image if pictureURL is not available
  const imageSrc = user?.pictureURL || "/default-avatar.png"; // Make sure to have a default avatar in your public folder

  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger />
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="user_photo"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
}

export default AppHeader;
