import { AdProductBoxPropsType } from "@/types/MoleculesType";
import { memo } from "react";

const AdProductBox = memo((props: AdProductBoxPropsType) => {
  return (
    <div className="w-72 h-72 rounded-3xl overflow-hidden">
      <img src={props.cover} alt="ad-products-img" className="w-full h-full object-cover" />
    </div>
  );
});

export default AdProductBox;
