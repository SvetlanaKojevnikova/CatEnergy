import Image from "next/image";

export default function Header() {
  return (
    <div className="m-auto flex justify-between absolute top-2 px-24 pt-14 w-[1440px]">
      <div className="">
        <Image src="/logodesktop.png" width={200} height={59} alt="Logo" />
      </div>
      <div className="flex items-center text-xl z-10 text-white gap-6 uppercase">
        <div>главная</div>
        <div>Каталог продукции</div>
        <div>подбор программы</div>
      </div>
    </div>
  );
}
