`use client`;
import CatalogCard from "@/components/Catalog/CatalogCard";
import HeroSection from "@/components/HeroSection/HeroSection";
const str_title_weightLoss =
  "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.";
const str_title_weightGain =
  "Заработать авторитет среди дворовых котов и даже собак?Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex gap-12 py-12 pr-12">
        <CatalogCard
          title="похудение"
          path="/cat_back.png"
          alt="cat"
          text={str_title_weightLoss}
          catalog="slim"
        heigth={106}
        width={100}
        />
        <CatalogCard
          title="набор массы"
          path="/cat.png"
          alt="cat"
          text={str_title_weightGain}
          catalog="pro"
          heigth={100}
          width={130}
        />
      </div>
    </>
  );
}
