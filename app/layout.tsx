import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <body>
        <div className="md:mx-40 sm:mx-0 xs:mx-40">
          <div className="navbar bg-base-100">
            <div className="flex-auto">
              <Link href="/" className="btn btn-ghost text-xl p-0">
                <Image
                  width={200}
                  height={200}
                  alt="Bar Berlin"
                  src={"/banner.jpeg"}
                />
              </Link>
            </div>

            <div className="flex-none">
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-primary"
                  >
                    Open drawer
                  </label>
                </div>
                <div className="drawer-side z-[1]">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <Link href="/">Startseite</Link>
                    </li>
                    <li>
                      <Link href="/impressum">Impressum</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
