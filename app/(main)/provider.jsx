"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import AppSidebar from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useAuthContext } from "@/app/provider";
import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function DashboardProvider({ children }) {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    user && checkUserAuthenticated();
  }, [user]);

  const checkUserAuthenticated = async () => {
    if (!user) {
      router.replace("/");
    }
  };
  return (
    <div>
      <PayPalScriptProvider
        options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full px-2 py-2">
            <AppHeader />
            <div className="p-10">{children}</div>
          </div>
        </SidebarProvider>
      </PayPalScriptProvider>
    </div>
  );
}

export default DashboardProvider;
