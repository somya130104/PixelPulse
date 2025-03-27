"use client"; // Must be at the top for Client Component

import React, { useEffect, createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Initialize Convex Client using environment variable ✅
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

// Define AuthContext
const AuthContext = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = useMutation(api.users.createNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        const result = await createUser({
          name: user?.displayName,
          email: user?.email,
          pictureURL: user?.photoURL,
        });

        console.log("User created at Provider.js central one:", result);
        setUser(result);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <ConvexProvider client={convex}>
      <AuthContext.Provider value={{ user,setUser }}>
        <PayPalScriptProvider
          options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
        >
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </NextThemesProvider>
        </PayPalScriptProvider>
      </AuthContext.Provider>
    </ConvexProvider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a Provider");
  }
  return context;
};

export default Provider;
