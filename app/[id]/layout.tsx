import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-green-300")}>{children}</body>
    </html>
  );
}
