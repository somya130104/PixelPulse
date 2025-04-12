import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider.js";
import ConvexClientProvider from "./ConvexClientProvider";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "PixelPulse",
  description: "The next generation short video generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
