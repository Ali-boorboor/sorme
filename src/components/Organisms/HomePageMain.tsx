import Slider from "../Molecules/HomePageMolecules/Slider";
import AdProductsBoxs from "../Molecules/HomePageMolecules/AdProductsBoxs";
import DailyOffSection from "../Molecules/HomePageMolecules/DailyOffSection";
import TopBrandsSection from "../Molecules/HomePageMolecules/TopBrandsSection";
import TopBrandsBoxsWrapper from "../Molecules/HomePageMolecules/TopBrandsBoxsWrapper";
import OurServicesBoxsWrapper from "../Molecules/HomePageMolecules/OurServicesBoxsWrapper";
import { memo } from "react";
import HomePageFooter from "./HomePageFooter";

const HomePageMain = memo(() => {
  return (
    <main className="max-w-[86rem] w-full m-auto flex flex-col gap-14 p-4 mt-2">
      <Slider />
      <AdProductsBoxs />
      <DailyOffSection />
      <TopBrandsSection />
      <TopBrandsBoxsWrapper />
      <OurServicesBoxsWrapper />
    </main>
  );
});

export default HomePageMain;
