import Link from "next/link";
import Image from "next/image";

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
              <button className="btn btn-primary">Speisekarte</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/carte.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
