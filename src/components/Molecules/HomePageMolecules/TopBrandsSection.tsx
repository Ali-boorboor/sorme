import { memo } from "react";

const TopBrandsSection = memo(() => {
  return (
    <section className="flex flex-col items-center gap-12">
      <h2 className="font-semibold text-black text-3xl flex items-center gap-2 justify-center">
        <img
          src="/images/png/top-brands-badge-img.png"
          alt="top-brands-badge-img"
          className="w-12 h-12"
        />
        Top brands
      </h2>
      <div className="flex items-center gap-4 justify-center md:justify-between w-full flex-wrap">
        <img
          src="/images/png/first-top-brand.png"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/second-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/third-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/fourth-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/fifth-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/sixth-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
        <img
          src="/images/jpg/seventh-top-brand.jpg"
          alt="top-brands-logo-img"
          className="w-40 h-20"
        />
      </div>
    </section>
  );
});

export default TopBrandsSection;
