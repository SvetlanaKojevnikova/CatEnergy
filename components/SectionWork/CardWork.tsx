import Image from "next/image";

type CardWorkTypes = {
  path: string;
  alt: string;
  text: string;
  pathnumber: string;
  width: number;
};

export default function CardWork({
  path,
  alt,
  text,
  pathnumber,
  width
}: CardWorkTypes) {
  return (
    <div className="relative w-64 py-8">
      <div className="flex justify-end ">
        <Image src={path} width={width} height={250} alt={alt} />
      </div>
      <div className="absolute top-8">
        <div className="">
          <Image src={pathnumber} width={80} height={80} alt="Logo" />
        </div>
        <div className="z-20 py-8 text-neutral-600">{text}</div>
      </div>
    </div>
  );
}
