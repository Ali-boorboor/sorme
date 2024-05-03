import BreadCrumb from "../Molecules/ShopPageMolecules/BreadCrumb";
import { memo } from "react";

const ProductProfileMain = memo(() => {
  return (
    <main className="max-w-[86rem] w-full m-auto flex flex-col gap-2 p-4 mb-20">
      <BreadCrumb />
      <section className="flex items-center justify-between gap-4 md:flex-nowrap flex-wrap">
        <div className="flex gap-1 md:gap-4 items-center justify-center w-full md:basis-2/5 flex-wrap-reverse">
          <div className="flex flex-col gap-4 justify-center">
            <img
              src="/images/png/like-heart-icon.png"
              alt="like-icon"
              className="w-10 h-10 object-cover transition-all duration-300 hover:scale-90 hover:brightness-50 cursor-pointer"
            />
            <img
              src="/images/png/share-icon.png"
              alt="share-icon"
              className="w-10 h-10 object-cover transition-all duration-300 hover:scale-90 hover:brightness-50 cursor-pointer"
            />
          </div>
          <img
            src="/images/jpg/pr-cream-img.jpg"
            alt="product-cover"
            className="max-w-96 max-h-96 min-w-60 min-h-60 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-between border-2 border-primary-color px-4 py-8 rounded-3xl w-full md:basis-3/5">
          <p className="font-normal text-black text-lg flex flex-col gap-1 items-start">
            Matte floral pancake
            <span className="font-normal text-base text-gray-400">Product ID : 654659</span>
          </p>
          <p className="font-normal text-black text-lg text-justify">
            Floral pancake, which is made of natural materials, is soft, very light on the skin and
            does not feel heavy on the skin in any way. Also, this pancake does not dry the skin,
            does not rub on the skin, has a high durability and a velvety and natural look. gives to
            the face
          </p>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="font-normal text-black text-lg">Product rating</p>
            <div className="flex gap-2 items-center">
              <img
                src="/images/png/star-icon.png"
                alt="star-icon"
                className="w-4 h-4 object-cover"
              />
              <img
                src="/images/png/star-icon.png"
                alt="star-icon"
                className="w-4 h-4 object-cover"
              />
              <img
                src="/images/png/star-icon.png"
                alt="star-icon"
                className="w-4 h-4 object-cover"
              />
              <img
                src="/images/png/star-icon.png"
                alt="star-icon"
                className="w-4 h-4 object-cover"
              />
              <img
                src="/images/png/star-icon.png"
                alt="star-icon"
                className="w-4 h-4 object-cover"
              />
            </div>
            <p className="font-normal text-black text-lg">20 person</p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center md:justify-between gap-2 md:gap-6 md:flex-nowrap flex-wrap">
        <div className="border-2 border-primary-color p-4 rounded-3xl flex flex-col justify-center items-center gap-6 w-full md:basis-1/2 h-40">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-primary-color text-xl relative after:absolute after:w-9 after:border after:border-primary-color after:left-1/2 after:-translate-x-1/2 after:-rotate-45 text-opacity-50 after:bottom-1/2 after:top-1/2">
              120$
            </p>
            <p className="font-bold text-white bg-primary-color py-1 px-2 rounded-full text-base">
              25%
            </p>
            <p className="font-bold text-primary-color text-xl">67$</p>
          </div>
          <button className="transition-all duration-300 bg-primary-color text-white p-2 rounded-full text-base font-semibold hover:scale-105">
            Add to cart
          </button>
        </div>
        <div className="border-2 border-primary-color p-4 rounded-3xl flex justify-center items-center gap-6 w-full md:basis-1/2 h-40">
          <div className="border-r-2 border-primary-color pr-6 h-4/5 flex flex-col justify-center items-start gap-4">
            <p className="font-normal text-black text-lg flex items-center gap-2">
              <img
                src="/images/png/product-profile-shop.png"
                alt="shop-icon"
                className="w-10 h-10 object-cover"
              />
              Seller : sorme
            </p>
            <p className="font-normal text-black text-lg flex items-center gap-2">
              <img
                src="/images/png/product-profile-valid.png"
                alt="tick-icon"
                className="w-10 h-10 object-cover"
              />
              Brand : Follero
            </p>
          </div>
          <p className="font-normal text-black text-lg w-48 flex gap-2 items-center">
            <img
              src="/images/png/product-profile-truck.png"
              alt="truck-img"
              className="w-16 h-16 object-cover"
            />
            Free shipping to New York
          </p>
        </div>
      </section>
    </main>
  );
});

export default ProductProfileMain;
