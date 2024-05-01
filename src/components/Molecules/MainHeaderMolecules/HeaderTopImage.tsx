import { memo } from "react";

const HeaderTopImage = memo(() => {
  return (
    <section className="flex items-center justify-around bg-[url('/images/png/top-header-img.png')] bg-cover bg-center p-2">
      <p className="font-bold text-xl text-ternary-color">70 $ Off + Gift</p>
      <button className="py-1 px-4 rounded-md bg-quaternary-color text-xl font-bold text-secondary-color text-center align-top">
        Register Now
      </button>
    </section>
  );
});

export default HeaderTopImage;
