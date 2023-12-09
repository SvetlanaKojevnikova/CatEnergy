import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between px-12 py-14 bg-neutral-100">
      <div className="uppercase text-2xl">
        <span className="font-bold">cat</span> energy
      </div>
      <div className="flex gap-4">
        <Image src="/vk.svg" width={30} height={22} alt="Logo" />
        <Image src="/vector.svg" width={23} height={23} alt="Logo" />
        <Image src="/facebook.svg" width={28} height={33} alt="Logo" />
      </div>
      <div
        className="flex"
      >
        <div className="text-lg text-neutral-600 mr-4 items-center">HTML Academy</div>
        <div>
          <Image src="/Лого_html.svg" width={27} height={33} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
