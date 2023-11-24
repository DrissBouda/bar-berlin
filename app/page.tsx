import Link from "next/link";
import Opening from "./components/opening";

export default function Home() {
  return (
    <main>
      <div
        className="hero max-h-screen"
        style={{
          backgroundImage: "url(hero1.jpg)",
          height: 450,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Herzlich Willkommen</h1>
            <p className="mb-5">Bar Berlin Teneriffa Meets Sylt</p>
            <Link href="/speisekarte">
              <button className="btn btn-warning m-3">Speisekarte</button>
            </Link>
            <Link href="/programm">
              <button className="btn btn-dark">Unser Programm</button>
            </Link>
          </div>
        </div>
      </div>
      <Opening />
    </main>
  );
}
