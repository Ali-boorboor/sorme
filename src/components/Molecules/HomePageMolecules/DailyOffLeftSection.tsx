import { memo } from "react";

const DailyOffLeftSection = memo(() => {
  return (
    <section className="flex gap-1 items-center">
      <div className="pl-8 py-4 flex flex-col gap-4">
        <img src="/images/png/daily-offs-box-img.png" alt="box-img" className="w-48 h-48" />
        <p className="font-semibold text-2xl text-center">Daily Off</p>
      </div>
      <p className="font-semibold text-3xl -rotate-90">12:24:33</p>
    </section>
  );
});

export default DailyOffLeftSection;
