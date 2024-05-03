import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const ProductBox = memo(({ text, cover, price, usersCount }: any) => {
  const router = useRouter();

  return (
    <Link
      href={`/shop/product/${router.query.category}/cream/productID`}
      className="flex justify-between gap-4 w-96 h-60 rounded-md drop-shadow-md border-2 border-secondary-color bg-white py-4 px-6 cursor-pointer"
    >
      <div className="basis-1/2 flex flex-col gap-2 items-start justify-center">
        <img src={cover} alt="product-img" className="h-40 w-32 object-cover" />
        <p className="w-48 font-normal text-black text-base">{text}</p>
      </div>
      <div className="basis-1/2 flex gap-2 items-end">
        <p className="font-bold text-lg text-primary-color">{price}$</p>
        <div className="flex flex-col items-center gap-4 h-full justify-between">
          <p className="font-normal text-black text-base">{usersCount} person</p>
          <div className="flex flex-col gap-2 items-center">
            <img src="/images/png/star-icon.png" alt="star-icon" className="w-6 h-6 object-cover" />
            <img src="/images/png/star-icon.png" alt="star-icon" className="w-6 h-6 object-cover" />
            <img src="/images/png/star-icon.png" alt="star-icon" className="w-6 h-6 object-cover" />
            <img src="/images/png/star-icon.png" alt="star-icon" className="w-6 h-6 object-cover" />
            <img src="/images/png/star-icon.png" alt="star-icon" className="w-6 h-6 object-cover" />
          </div>
        </div>
      </div>
    </Link>
  );
});

export default ProductBox;
