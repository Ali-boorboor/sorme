import { memo } from "react";

const AdProductBox = memo(({ cover }: any) => {
  return (
    <div className="w-72 h-72 rounded-3xl overflow-hidden">
      <img src={cover} alt="ad-products-img" className="w-full h-full object-cover" />
    </div>
  );
});

export default AdProductBox;
