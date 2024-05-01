import DailyOffLeftSection from "./DailyOffLeftSection";
import DailyOffRightSection from "./DailyOffRightSection";
import { memo } from "react";

const DailyOffSection = memo(() => {
  return (
    <section className="text-white bg-primary-color rounded-3xl flex justify-center lg:justify-between items-center gap-4 flex-wrap">
      <DailyOffLeftSection />
      <DailyOffRightSection />
    </section>
  );
});

export default DailyOffSection;
