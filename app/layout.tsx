import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-auto">
              <Link href="/" className="btn btn-ghost text-xl">
                <Image
                  width={200}
                  height={200}
                  alt="Bar Berlin"
                  src={"/banner.jpeg"}
                />
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/impressum">Impressum</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mockup-window border bg-base-300 m-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
