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
      <head>
        <link rel="shortcut icon" href="/favicon.png" sizes="any" />
      </head>
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
                    className="drawer-button btn base-300"
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
                  <div className="z-[2]">
                    <label
                      className="btn btn-circle drawer-overlay"
                      htmlFor="my-drawer-4"
                    >
                      {/* close icon */}
                      <svg
                        className="swap-off fill-current drawer-overlay"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                      >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                      </svg>
                    </label>
                  </div>
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
                          width="23.98"
                          height="24"
                          viewBox="0 0 1024 1025"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H640V737q0-13-9.5-22.5T608 705H416q-13 0-22.5 9.5T384 737v288H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19q20-20 49-19q29-1 49 19l444 444q19 19 19 46.5t-19.5 47"
                          />
                        </svg>
                        Startseite
                      </Link>
                    </li>
                    <li>
                      <Link href="/impressum">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601c0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164c0 .775-.62 1.492-1.679 1.492c-.886 0-1.308-.445-1.282-1.182c0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678c-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061c.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756c.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094"
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
