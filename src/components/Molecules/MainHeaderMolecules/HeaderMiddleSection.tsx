import SormeLogo from "@/components/Atoms/SormeLogo";
import HeaderSearchInput from "./HeaderSearchInput";
import Link from "next/link";
import { memo } from "react";
import { HeaderMiddleSectionPropsType } from "@/types/MoleculesType";

const HeaderMiddleSection = memo((props: HeaderMiddleSectionPropsType) => {
  return (
    <section
      className={`flex items-center justify-center md:justify-between flex-wrap gap-4 ${
        props.seller ? "" : "max-w-[86rem] w-full m-auto p-4"
      }`}
    >
      <div className="flex items-center gap-6 justify-center md:gap-10 flex-wrap">
        <SormeLogo />
        <HeaderSearchInput />
      </div>
      <div className="flex items-center gap-7">
        {props.seller && (
          <button className="flex items-center justify-center gap-1 h-10 font-semibold text-base p-2 text-black bg-white border border-black rounded-md transition-all duration-300 hover:bg-primary-color hover:scale-105">
            Seller
            <img
              src="/images/png/seller-box-icon.png"
              alt="box-icon"
              className="object-cover w-6 h-6 brightness-0"
            />
          </button>
        )}
        <Link
          href="/login"
          className="flex items-center justify-center gap-1 h-10 text-base p-2 font-semibold text-black bg-white border border-black rounded-md text-nowrap transition-all duration-300 hover:bg-primary-color hover:scale-105"
        >
          Sign In / SingUp
          <img
            src="/images/png/user-icon.png"
            alt="user-icon"
            className="object-cover w-5 h-5 brightness-0"
          />
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center justify-center rounded-md w-10 h-10 bg-secondary-color relative transition-all duration-300 hover:scale-95 after:absolute after:h-full after:w-1 after:border-l after:border-black after:-left-4"
        >
          <span className="flex items-center justify-center absolute w-6 h-6 bg-primary-color text-white text-base font-normal -top-2 -left-2 rounded-full">
            0
          </span>
          <img src="/images/png/cart-icon.png" alt="cart-icon" className="w-7 h-7 object-cover" />
        </Link>
      </div>
    </section>
  );
});

export default HeaderMiddleSection;
