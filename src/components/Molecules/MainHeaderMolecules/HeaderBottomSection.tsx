import { memo } from "react";

const HeaderBottomSection = memo(() => {
  return (
    <nav className="flex md:justify-between justify-center flex-wrap gap-4 items-center">
      <div className="flex items-center md:justify-between justify-center gap-4 flex-wrap">
        <a
          href="#"
          id="product-drop-down"
          className="flex items-center gap-1 font-semibold text-base"
        >
          products categorization
          <img
            src="/images/png/arrow-left.png"
            alt="arrow-left"
            className="w-3 h-3 object-cover rotate-90"
          />
        </a>
        <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
          Brands
          <img src="/images/png/badge-icon.png" alt="badge-icon" className="w-6 h-6 object-cover" />
        </a>
        <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
          organizational
          <img
            src="/images/png/organisation-icon.png"
            alt="organisation-icon"
            className="w-6 h-6 object-cover"
          />
        </a>
        <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
          Counseling
          <img src="/images/png/chat-icon.png" alt="chat-icon" className="w-6 h-6 object-cover" />
        </a>
        <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
          gift card
          <img src="/images/png/gift-icon.png" alt="gift-icon" className="w-6 h-6 object-cover" />
        </a>
        <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
          weblog
          <img src="/images/png/blog-icon.png" alt="blog-icon" className="w-6 h-6 object-cover" />
        </a>
      </div>
      <a href="#" className="flex items-center gap-1 text-base font-normal text-black">
        branches Sorme
        <img
          src="/images/png/direction-icon.png"
          alt="direction-icon"
          className="w-6 h-6 object-cover"
        />
      </a>
    </nav>
  );
});

export default HeaderBottomSection;
