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
                    className="drawer-button btn btn-warning"
                  >
                    <svg
                      className="swap-off fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
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
                      <Link href="/">
                        <svg
                          width="1.13em"
                          height="1em"
                          viewBox="0 0 576 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                          ></path>
                        </svg>
                        Startseite
                      </Link>
                    </li>
                    <li>
                      <Link href="/impressum">
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 1024 768"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M928 320q-40 0-68 18.5T832 384v384H704V416q0-40-28-68t-68-28t-68 28t-28 68v352H384V256l64-64h64v50q55-50 128-50q49 0 91.5 23t68.5 63q26-40 68.5-63t91.5-23q32 0 64 11v135q-34-18-96-18m-736-64l-64 64v-72q-57-13-92.5-46T0 128q0-53 56-90.5T192 0t136 37.5t56 90.5t-56.5 90.5T192 256m64 64v448H128V384l64-64z"
                          />
                        </svg>
                        Impressum
                      </Link>
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
