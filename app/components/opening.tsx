import Image from "next/image";
export default function Opening() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="divider">Öffnungszeiten - Horario - Opening Hours</div>
      </div>
      <div className="m-4 text-xs flex justify-center md:text-xs md:flex-2">
        <div className="m-2">
          <h2>
            <Image
              src={"https://flagsapi.com/DE/shiny/64.png"}
              width={28}
              height={28}
              alt="lang"
            />
          </h2>
          <p>
            <strong>Montag bis Freitag:</strong> ab 17 Uhr
          </p>
          <p>
            <strong>Samstag und Sonntag:</strong> ab 12 Uhr
          </p>
        </div>
        <div className="m-2">
          <Image
            src={"https://flagsapi.com/ES/shiny/64.png"}
            width={28}
            height={28}
            alt="lang"
          />
          <p>
            <strong>Lunes a viernes:</strong> a las 17 h
          </p>
          <p>
            <strong>Sábado y domingo:</strong> de las 12
          </p>
        </div>
        <div className="m-2">
          <Image
            src={"https://flagsapi.com/GB/shiny/64.png"}
            width={28}
            height={28}
            alt="lang"
          />
          <p>
            <strong>Monday to Friday:</strong> from 17 h
          </p>
          <p>
            <strong>Saturday and Sunday:</strong> from 12 h
          </p>
        </div>
      </div>
    </>
  );
}
