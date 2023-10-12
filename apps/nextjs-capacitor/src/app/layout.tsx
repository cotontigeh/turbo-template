import "./globals.css";
import { Inter } from "next/font/google";
import { NextIonicProvider } from "./NextIonicProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIonicProvider>{children}</NextIonicProvider>
      </body>
    </html>
  );
}
