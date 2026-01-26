import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "useReducer Hook Example",
  description: "Made by Matteo Sabbatini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
