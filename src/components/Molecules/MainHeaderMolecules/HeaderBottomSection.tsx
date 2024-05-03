import Link from "next/link";
import { isDropDownMenuVisible } from "@/contexts/RecoilAtoms";
import { memo } from "react";
import { useRecoilState } from "recoil";

const HeaderBottomSection = memo(({ flexDirection }: any) => {
  const [dropDownMenu, setDropDownMenu] = useRecoilState(isDropDownMenuVisible);

  return (
    <>
      <nav
        className={`flex ${flexDirection} md:justify-between justify-center flex-wrap gap-4 items-center`}
      >
        <div
          className={`flex ${flexDirection} items-center md:justify-between justify-center gap-4 flex-wrap`}
        >
          <Link
            // on mouse enter (hovered) show drop-down menu
            onMouseEnter={() => setDropDownMenu(true)}
            href="/shop"
            id="product-drop-down"
            className="flex items-center gap-1 font-semibold text-base relative"
          >
            products categorization
            <img
              src="/images/png/arrow-left.png"
              alt="arrow-left"
              className="w-3 h-3 object-cover rotate-90"
            />
          </Link>
          {/*drop-down items */}
          <ul
            // on mouse leave (not hovered) hide drop-down menu
            onMouseLeave={() => setDropDownMenu(false)}
            id="drop-down-items"
            className={`absolute bg-white drop-shadow-md p-10 max-w-screen-sm w-full top-40 z-50 rounded-3xl flex justify-between gap-4 transition-all duration-300 ${
              // on mouse leave / enter styles for drop-down menu
              dropDownMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <section className="flex flex-col gap-4 items-start justify-between border-black border-r-2 pr-2 basis-1/3">
              <Link
                href="/shop/cosmetic"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                Cosmetic
              </Link>
              <Link
                href="/shop/skin-products"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                Skin products
              </Link>
              <Link
                href="/shop/hair-products"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                Hair products
              </Link>
              <Link
                href="/shop/bathroom-products"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                Bathroom products
              </Link>
              <Link
                href="/shop/health-products"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                health products
              </Link>
              <Link
                href="/shop/appliances"
                className="font-semibold text-lg text-black text-nowrap hover:text-primary-color transition-all duration-300"
              >
                Appliances
              </Link>
            </section>
            <section className="basis-2/3 flex flex-col gap-4 items-start justify-between"></section>
          </ul>
          <Link
            href="#"
            className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
          >
            Brands
            <img
              src="/images/png/badge-icon.png"
              alt="badge-icon"
              className="w-6 h-6 object-cover"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
          >
            organizational
            <img
              src="/images/png/organisation-icon.png"
              alt="organisation-icon"
              className="w-6 h-6 object-cover"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
          >
            Counseling
            <img src="/images/png/chat-icon.png" alt="chat-icon" className="w-6 h-6 object-cover" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
          >
            gift card
            <img src="/images/png/gift-icon.png" alt="gift-icon" className="w-6 h-6 object-cover" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
          >
            weblog
            <img src="/images/png/blog-icon.png" alt="blog-icon" className="w-6 h-6 object-cover" />
          </Link>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 text-base font-normal text-black hover:after:w-full hover:after:h-1 relative after:absolute after:w-0 after:transition-all after:duration-500 after:-bottom-2 hover:after:bg-primary-color"
        >
          branches Sorme
          <img
            src="/images/png/direction-icon.png"
            alt="direction-icon"
            className="w-6 h-6 object-cover"
          />
        </Link>
      </nav>
      {/* black background effect when drop-down menu is visible */}
      {dropDownMenu && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-30"></div>
      )}
    </>
  );
});

export default HeaderBottomSection;
