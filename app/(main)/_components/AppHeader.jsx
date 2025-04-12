"use client";
import { useAuthContext } from "@/app/provider.js";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import Image from "next/image";

function AppHeader() {
  const { user, logout } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
  };

  const imageSrc = user?.pictureURL || "/default-avatar.png"; // Make sure to have a default avatar in your public folder

  return (
    <div className="p-3 flex justify-between items-center relative">
      <SidebarTrigger />
      {imageSrc && (
        <div className="relative">
          <Image
            src={imageSrc}
            alt="user_photo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-10">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm bg-black text-gray-300 hover:bg-gray-800 hover:text-white rounded-md border border-gray-300 transition duration-200 ease-in-out"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AppHeader;
