import Link from "next/link";
import { memo } from "react";

const BreadCrumb = memo(() => {
  return (
    <div className="flex gap-2 items-center text-zinc-500">
      <Link href="#" className="hover:text-black transition-all duration-300 font-normal text-base">
        Home
      </Link>
      <span>
        <img
          src="/images/png/arrow-left.png"
          alt="left-arrow"
          className="w-4 h-4 object-cover opacity-65"
        />
      </span>
      <Link href="#" className="hover:text-black transition-all duration-300 font-normal text-base">
        Store
      </Link>
      <span>
        <img
          src="/images/png/arrow-left.png"
          alt="left-arrow"
          className="w-4 h-4 object-cover opacity-65"
        />
      </span>
      <Link href="#" className="hover:text-black transition-all duration-300 font-normal text-base">
        Skin Care
      </Link>
    </div>
  );
});

export default BreadCrumb;
