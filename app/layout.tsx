import type { Metadata } from "next";
import Header from "./components/header";
import Opening from "./components/opening";
import Footer from "./components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bar Berlin Teneriffa Meets Sylt",
  description: "Bar Berlin Meets Sylt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <div className="lg:px-20">
          <Header />
          <div className="mockup-window border border-transparent bg-base-50 m-1">
            {children}
            <Opening />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
