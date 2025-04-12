"use client";
import React, { use } from "react";
import Image from "next/image";
import { useAuthContext } from "@/app/provider";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Gem,
  HomeIcon,
  LucideFileVideo,
  Search,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Create New Video",
    url: "/create-new-video",
    icon: LucideFileVideo,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: WalletCards,
  },
];

function AppSidebar() {
  const path = usePathname();
  const { user } = useAuthContext();
  console.log("User at Sidebar Content:", user); // Add this line to check if user is available

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col items-center gap-x-1 w-full mt-3">
          <div className="flex items-center gap-x-2 gap-y-1">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <h2 className="font-bold text-3xl">PixelPulse</h2>
          </div>
          <h2 className="text-xs text-center text-gray-400">
            AI Short Video Generator
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="mx-3 mt-11">
            <Link href="/create-new-video">
              <Button className="w-full">+ Create New Video</Button>
            </Link>
          </div>
          <SidebarMenu className="mt-5">
            {MenuItems.map((item, index) => (
              <SidebarMenuItem key={index} className="mt-2 mx-3">
                <SidebarMenuButton isActive={path === item.url} className="p-5">
                  <Link href={item.url} className="flex items-center gap-4 p-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-5 border rounded-lg mb-6 bg-gray-800">
          <div className="flex items-center justify-between">
            <Gem className="text-gray-400" />
            <h2 className="text-gray-400">{user?.credits} Credits Left</h2>
          </div>
          <Button className="w-full mt-5">Buy More Credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
