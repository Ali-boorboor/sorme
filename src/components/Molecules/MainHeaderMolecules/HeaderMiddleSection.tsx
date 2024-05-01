import SormeLogo from "@/components/Atoms/SormeLogo";
import HeaderSearchInput from "./HeaderSearchInput";
import { memo } from "react";

const HeaderMiddleSection = memo(() => {
  return (
    <section className="flex items-center justify-center md:justify-between flex-wrap gap-4">
      <div className="flex items-center gap-6 justify-center md:gap-10 flex-wrap">
        <SormeLogo />
        <HeaderSearchInput />
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center justify-center gap-1 h-10 font-semibold text-base p-2 text-black bg-white border border-black rounded-md">
          Seller
          <img
            src="/images/png/seller-box-icon.png"
            alt="box-icon"
            className="object-cover w-6 h-6 brightness-0"
          />
        </button>
        <button className="flex items-center justify-center gap-1 h-10 text-base p-2 font-semibold text-black bg-white border border-black rounded-md">
          Sign In / SingUp
          <img
            src="/images/png/user-icon.png"
            alt="user-icon"
            className="object-cover w-5 h-5 brightness-0"
          />
        </button>
        <button className="flex items-center justify-center rounded-md w-10 h-10 bg-secondary-color relative">
          <span className="flex items-center justify-center absolute w-6 h-6 bg-primary-color text-white text-base font-normal -top-2 -left-2 rounded-full">
            0
          </span>
          <img src="/images/png/cart-icon.png" alt="cart-icon" className="w-8 h-8 object-cover" />
        </button>
      </div>
    </section>
  );
});

export default HeaderMiddleSection;
