import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between p-12 relative">
      <div className="absolute top-0 right-0">
        <Image src="/catbackground.png" width={720} height={698} alt="Logo" />
      </div>
      <div>
        <Image src="/logodesktop.png" width={200} height={59} alt="Logo" />
      </div>
      <div className="flex items-center text-xl z-10 text-white">
        <div className="uppercase px-4 ">главная</div>
        <div className="uppercase px-4">Каталог продукции</div>
        <div className="uppercase px-4">подбор программы</div>
      </div>
    </div>
  );
}
