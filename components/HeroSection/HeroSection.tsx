'use client'
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex right-70 left-0 w-[1440px] relative">
      <div className="m-auto w-1/2 px-20">
        <h1 className="text-6xl leading-[60px]">
          Функциональное питание для котов
        </h1>
        <p className="text-xl uppercase py-12">Занялся собой? Займись котом!</p>
        <button className="bg-green-600 text-xl align-center text-white py-3.5 px-6 uppercase">
          подобрать программу
        </button>
      </div>
      <div className="relative">
        <Image src="/catbackground.png" width={720} height={698} alt="catbackground" />
        <div className="absolute top-36 rigth-10">
          <Image src="/index-can.png" width={552} height={499} alt="Банка с кормом" />
        </div>
      </div>
    </div>
  );
}
