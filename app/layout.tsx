import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FAQ } from "@/components/faq";

export const metadata = {
  title: "YouTube Thumnail Downloader",
  description: "YouTube Thumnail Downloader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <FAQ />
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
