import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import LoginPage from "./(authGroup)/login/page";
import { Navbar } from "@/components/ui/shared/navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" richColors></Toaster>
        <Navbar />
        {/* <Navbar></Navbar> */}
        <LoginPage></LoginPage>
      </body>
    </html>
  );
}