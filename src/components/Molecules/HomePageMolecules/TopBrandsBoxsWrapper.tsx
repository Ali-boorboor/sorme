import TopBrandsBox from "./TopBrandsBox";
import { memo } from "react";

const TopBrandsBoxsWrapper = memo(() => {
  return (
    <section className="flex justify-center flex-wrap lg:justify-between items-center gap-4">
      <TopBrandsBox cover="/images/jpg/top-brands-box-img1.jpg" />
      <TopBrandsBox cover="/images/jpg/top-brands-box-img2.jpg" />
      <TopBrandsBox cover="/images/jpg/top-brands-box-img3.jpg" />
    </section>
  );
});

export default TopBrandsBoxsWrapper;
