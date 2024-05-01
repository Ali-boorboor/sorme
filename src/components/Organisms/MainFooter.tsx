import SormeLogo from "../Atoms/SormeLogo";
import { memo } from "react";

const MainFooter = memo(() => {
  return (
    <footer className="max-w-[86rem] w-full m-auto flex flex-col gap-16 p-2 mt-2">
      <section className="flex items-center gap-6 justify-center md:justify-between flex-wrap">
        <section className="flex flex-col gap-6">
          <SormeLogo />
          <div className="flex items-center gap-6">
            <img src="/images/png/enamad-img.png" alt="enamad-img" className="w-20 h-20" />
            <img src="/images/png/kasb-majazi-img.png" alt="enamad-img" className="w-20 h-20" />
            <img src="/images/png/enamad-digital-img.png" alt="enamad-img" className="w-20 h-20" />
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-center md:justify-between gap-4 md:gap-40">
            <p className="font-semibold text-gray-500 text-2xl flex items-center gap-2">
              <img
                src="/images/png/email-footer-icon.png"
                alt="email-img"
                className="w-8 h-8 object-cover"
              />
              Email Address:
            </p>
            <p className="font-semibold text-gray-500 text-2xl flex items-center gap-2">
              <img
                src="/images/png/phone-footer-icon.png"
                alt="phone-img"
                className="w-8 h-8 object-cover"
              />
              Phone Call:
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-between gap-4 md:gap-40">
            <p className="font-semibold text-gray-500 text-2xl">info@sorme.com</p>
            <p className="font-semibold text-gray-500 text-2xl">02177111258</p>
          </div>
        </section>
      </section>
      <p className="font-normal text-base text-black text-center">
        All material and intellectual rights of this website are reserved for "Sormeh" ©2020-2024 |
        Made With❤️By Ali boorboor
      </p>
    </footer>
  );
});

export default MainFooter;
