import DashboardMainHeader from "@/components/Organisms/DashboardMainHeader";
import MainSidebar from "@/components/Molecules/DashboardPagesMolecules/MainSidebar";
import { memo } from "react";

const DashboardPages = memo(({ children }: any) => {
  return (
    <>
      <DashboardMainHeader />
      <main className="flex gap-4 justify-between">
        <MainSidebar />
        <section className="basis-4/5 p-4 mt-10">{children}</section>
      </main>
    </>
  );
});

export default DashboardPages;
