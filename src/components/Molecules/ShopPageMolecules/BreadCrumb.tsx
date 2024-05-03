import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const BreadCrumb = memo(() => {
  const route = useRouter();
  const categoryRoute = route.query.category;
  const productRoute = route.query.product;

  return (
    <div className="flex gap-2 items-center text-zinc-500">
      <Link href="/" className="hover:text-black transition-all duration-300 font-normal text-base">
        Home
      </Link>
      <span>
        <img
          src="/images/png/arrow-left.png"
          alt="left-arrow"
          className="w-4 h-4 object-cover opacity-65"
        />
      </span>
      <Link
        href="/shop"
        className="hover:text-black transition-all duration-300 font-normal text-base"
      >
        Store
      </Link>
      {categoryRoute ? (
        <>
          <span>
            <img
              src="/images/png/arrow-left.png"
              alt="left-arrow"
              className="w-4 h-4 object-cover opacity-65"
            />
          </span>
          <Link
            href={`/shop/${String(categoryRoute).toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-black transition-all duration-300 font-normal text-base capitalize"
          >
            {String(categoryRoute).replace("-", " ")}
          </Link>
        </>
      ) : productRoute ? (
        <>
          <span>
            <img
              src="/images/png/arrow-left.png"
              alt="left-arrow"
              className="w-4 h-4 object-cover opacity-65"
            />
          </span>
          <Link
            href={`/shop/${String(productRoute[0]).toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-black transition-all duration-300 font-normal text-base capitalize"
          >
            {String(productRoute[0]).replace("-", " ")}
          </Link>
        </>
      ) : null}
      {productRoute && (
        <>
          <span>
            <img
              src="/images/png/arrow-left.png"
              alt="left-arrow"
              className="w-4 h-4 object-cover opacity-65"
            />
          </span>
          <Link
            href={`/shop/${productRoute[0]}/${productRoute[1]}`}
            className="hover:text-black transition-all duration-300 font-normal text-base capitalize"
          >
            {String(productRoute[1]).replace("-", " ")}
          </Link>
        </>
      )}
    </div>
  );
});

export default BreadCrumb;
