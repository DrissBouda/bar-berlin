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
        <div className="md:mx-40 sm:mx-0 xs:mx-40">
          <Header />
          <div className="mockup-window border bg-base-300 m-1">
            {children}
            <Opening />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
