"use client";
import { useAuthContext } from "@/app/provider.js";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";

function AppHeader() {
  const { user } = useAuthContext();
  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger />
      <Image
        src={user?.pictureURL}
        alt="user_photo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
}

export default AppHeader;
