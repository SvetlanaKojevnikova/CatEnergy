"use client";
// import Image from "next/image";
import Image from "../../public/Map.png";

export default function SectionMap({}: any) {
  return (
    <div className="bg-map h-[400px] relative">
      <div className="absolute top-24 left-24 flex w-[570px] p-16 bg-white">
        <div className="uppercase text-xl">приглашаем к&nbsp;сотрудничеству дилеров!</div>
        <div>
          <p className="pb-2">ул. Большая Конюшенная, д. 19/8</p>
          <p>Санкт-Петербург</p>
        </div>
      </div>
    </div>
  );
}
