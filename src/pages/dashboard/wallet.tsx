import WalletPageLeftSection from "@/components/Molecules/DashboardPagesMolecules/WalletPageLeftSection";
import WalletPageRightSection from "@/components/Molecules/DashboardPagesMolecules/WalletPageRightSection";
import DashboardPages from "@/components/Templates/DashboardPages";
import { memo } from "react";

const WalletPage = memo(() => {
  return (
    <DashboardPages>
      <section className="flex flex-wrap md:flex-nowrap gap-10 items-center justify-center max-w-[58rem] m-auto">
        <WalletPageLeftSection />
        <WalletPageRightSection />
      </section>
    </DashboardPages>
  );
});

export default WalletPage;
