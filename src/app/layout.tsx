import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'
 
import "./scss/root.css";
import "./scss/globals.css";
import "./scss/layout.scss";
import   { BaseHeader } from "@/components/layout/base-header";
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
             attribute="class"
          defaultTheme="dark"

        >
        <div className="app">

          <BaseHeader />
          <div className="main">
          {children}
          </div>

    
          </div>
          </ThemeProvider>
      </body>
      </html>
 
  );
}
