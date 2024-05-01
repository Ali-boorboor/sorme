import { memo } from "react";

const DailyOffRightSection = memo(() => {
  return (
    <section className="rounded-tl-3xl rounded-bl-3xl flex items-center justify-center md:justify-end gap-1 overflow-hidden flex-wrap">
      <div className="w-52 h-60 bg-white px-4 py-8 flex flex-col gap-4 items-center justify-center">
        <img
          src="/images/jpg/daily-off-pr-second-cream-img.jpg"
          alt=""
          className="basis-4/5 h-4/5 object-cover"
        />
        <div className="flex items-center justify-between w-full">
          <p className="bg-primary-color text-white text-sm font-semibold py-1 px-3 rounded-2xl">
            25%
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-black text-xl">60$</p>
            <p className="text-sm text-gray-500 font-semibold line-through">120$</p>
          </div>
        </div>
      </div>
      <div className="w-52 h-60 bg-white px-4 py-8 flex flex-col gap-4 items-center justify-center">
        <img
          src="/images/jpg/daily-off-pr-cream-img.jpg"
          alt=""
          className="basis-4/5 h-4/5 object-cover"
        />
        <div className="flex items-center justify-between w-full">
          <p className="bg-primary-color text-white text-sm font-semibold py-1 px-3 rounded-2xl">
            25%
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-black text-xl">60$</p>
            <p className="text-sm text-gray-500 font-semibold line-through">120$</p>
          </div>
        </div>
      </div>
      <div className="w-52 h-60 bg-white px-4 py-8 flex flex-col gap-4 items-center justify-center">
        <img
          src="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          alt=""
          className="basis-4/5 h-4/5 object-cover"
        />
        <div className="flex items-center justify-between w-full">
          <p className="bg-primary-color text-white text-sm font-semibold py-1 px-3 rounded-2xl">
            25%
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-black text-xl">60$</p>
            <p className="text-sm text-gray-500 font-semibold line-through">120$</p>
          </div>
        </div>
      </div>
      <div className="w-52 h-60 bg-white px-4 pb-8 pt-12 flex flex-col gap-4 items-center justify-center">
        <img
          src="/images/jpg/daily-off-pr-makeup-img.jpg"
          alt=""
          className="basis-4/5 h-4/5 object-cover -rotate-90"
        />
        <div className="flex items-center justify-between w-full">
          <p className="bg-primary-color text-white text-sm font-semibold py-1 px-3 rounded-2xl">
            25%
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-black text-xl">60$</p>
            <p className="text-sm text-gray-500 font-semibold line-through">120$</p>
          </div>
        </div>
      </div>
      <div className="w-32 h-60 bg-white px-4 py-8 flex flex-col gap-4 items-center justify-center">
        <img
          src="/images/jpg/daily-off-pr-honey-img.jpg"
          alt=""
          className="w-full h-4/5 object-cover xl:translate-x-12"
        />
        <div className="flex items-center justify-between w-full">
          <p className="bg-primary-color text-white text-sm font-semibold py-1 px-3 rounded-2xl">
            25%
          </p>
        </div>
      </div>
    </section>
  );
});

export default DailyOffRightSection;
