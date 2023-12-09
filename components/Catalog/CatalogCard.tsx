import Image from "next/image";

type CatalogCardTypes = {
  title: string;
  path: string;
  alt: string;
  text: string;
  catalog: string;
  heigth:number
  width:number
};

export default function CatalogCard({
  title,
  text,
  path,
  alt,
  catalog,
  heigth,
  width
}: CatalogCardTypes) {
  return (
    <div className="p-8 bg-neutral-100 w-1/2">
      <div className="flex text-4xl ">
        <Image src={path} height={heigth} width={width} alt={alt} />
        <h1 className="m-auto uppercase">{title}</h1>
      </div>
      <div className="py-8">{text}</div>
      <button className="uppercase py-1 text-xl cursor-pointer hover:bg-neutral-200">каталог {catalog}</button>
    </div>
  );
}
