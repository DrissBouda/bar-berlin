import Link from "next/link";

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
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold text-warning shadow-md bar-berlin">
              Bar Berlin Teneriffa
            </h1>
            <p className="mb-5 bar-berlin">
              Playa Salytien, Lokal Nr. 17 38660 Playa de Las Americas, Adeje
              Santa Cruz de Tenerife +34 922 787 188
            </p>
            <div className="indicator m-8">
              <span className="indicator-item badge badge-error text-white bar-berlin">
                +10
              </span>
              <Link href="/speisekarte">
                <button className="btn btn-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                  </svg>
                  Speisekarte
                </button>
              </Link>
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-error text-white bar-berlin">
                Neu
              </span>
              <Link href="/programm">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Unseres Programm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
