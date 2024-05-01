import AdProductBox from "./AdProductBox";
import { memo } from "react";

const AdProductsBoxs = memo(() => {
  return (
    <section className="flex items-center justify-center md:justify-between gap-6 flex-wrap">
      <AdProductBox cover="/images/png/first-ad-box-img.png" />
      <AdProductBox cover="/images/jpg/second-ad-box-img.jpg" />
      <AdProductBox cover="/images/png/third-ad-box-img.png" />
      <AdProductBox cover="/images/png/fourth-ad-box-img.png" />
    </section>
  );
});

export default AdProductsBoxs;
