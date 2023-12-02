import Image from "next/image";

export default function Header() {
  return (
    <div className="m-auto flex justify-between absolute top-2 pt-12 w-[1440px]">
      <div className="">
        <Image src="/logodesktop.png" width={200} height={59} alt="Logo" />
      </div>
      <div className="flex items-center text-xl z-10 text-white pr-12">
        <div className="uppercase px-4 ">главная</div>
        <div className="uppercase px-4">Каталог продукции</div>
        <div className="uppercase px-4">подбор программы</div>
      </div>
    </div>
  );
}
