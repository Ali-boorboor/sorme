import { memo } from "react";

const OurServicesBox = memo(({ icon, title, text }: any) => {
  return (
    <div className="flex items-center justify-between gap-4 w-72">
      <div className="border border-black p-2 w-20 h-20 rounded-3xl">
        <img src={icon} alt="service-box-avatar" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-black font-semibold text-xl">{title}</p>
        <p className="text-sm font-normal text-black">{text}</p>
      </div>
    </div>
  );
});

export default OurServicesBox;
