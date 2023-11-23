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
      <div className="justify-items-center content-center">
        <Image
          src="/carte.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/hero.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/hero.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/hero.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/hero.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
