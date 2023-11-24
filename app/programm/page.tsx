import Image from "next/image";

export default function Impressum() {
  return (
    <div className="flex justify-center px-4 py-4 bg-base-200">
      <Image
        src="/carte.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
