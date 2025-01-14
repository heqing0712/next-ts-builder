import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { BaseHeader } from "@/components/layout/base-header";
import "./styles/layout.scss";
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
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="app">
        <BaseHeader />
        <div className="main">{children}</div>
      </div>
    </ThemeProvider>
  );
}
