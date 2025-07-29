import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "./globals.css";

const kodchasan = Kodchasan({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Chrysalis",
  description: "Component Library Website",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodchasan} antialiased h-[100vh] w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
