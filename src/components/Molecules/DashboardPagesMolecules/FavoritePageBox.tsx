import Link from "next/link";
import { memo } from "react";

const FavoritePageBox = memo(() => {
  return (
    <Link href="/shop/product/cosmetic/cream/productID" className="flex md:flex-row flex-col justify-between items-center gap-2 rounded-lg drop-shadow-md overflow-hidden bg-white py-2 px-4 hover:drop-shadow-xl transition-all duration-300">
      <img
        src="/images/jpg/pr-cream-img.jpg"
        alt="product-cover"
        className="w-28 md:w-36 h-28 md:h-32 object-cover"
      />
      <p className="w-40 font-normal text-black text-base">Estee Lauder double wear powder cream</p>
      <div className="flex flex-row md:flex-col justify-between gap-8">
        <img
          src="/images/png/dislike-icon.png"
          alt="like-icon"
          className="w-6 h-6 object-cover hover:scale-105 transition-all duration-300"
        />
        <img src="/images/png/view-icon.png" alt="show-icon" className="w-6 h-6 object-cover hover:scale-105 transition-all duration-300" />
      </div>
    </Link>
  );
});

export default FavoritePageBox;
