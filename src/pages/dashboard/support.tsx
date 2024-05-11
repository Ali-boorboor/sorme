import SupportPageLeftSection from "@/components/Molecules/DashboardPagesMolecules/SupportPageLeftSection";
import SupportPageRightSection from "@/components/Molecules/DashboardPagesMolecules/SupportPageRightSection";
import DashboardPages from "@/components/Templates/DashboardPages";
import { memo } from "react";

const SupportPage = memo(() => {
  return (
    <DashboardPages>
      <section className="flex flex-wrap md:flex-nowrap gap-10 justify-center items-center max-w-[60rem] m-auto bg-white rounded-lg drop-shadow-md">
        <SupportPageLeftSection />
        <SupportPageRightSection />
      </section>
    </DashboardPages>
  );
});

export default SupportPage;
