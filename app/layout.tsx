import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie-Magic",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} text-zinc-800`}>
        {children}
      </body>
    </html>
  );
}
