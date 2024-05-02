import BreadCrumb from "@/components/Molecules/ShopPageMolecules/BreadCrumb";
import ProductBox from "@/components/Molecules/ShopPageMolecules/ProductBox";
import SortFilters from "@/components/Molecules/ShopPageMolecules/SortFilters";
import { memo } from "react";

const ShopPageMain = memo(() => {
  return (
    <main className="max-w-[86rem] w-full m-auto flex flex-col gap-6 p-4 mb-20">
      <BreadCrumb />
      <SortFilters />
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center">
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
        <ProductBox
          cover="/images/jpg/daily-off-pr-makeup-second-img.jpg"
          text="Blush Flormar model Terracotta"
          usersCount="20"
          price="60"
        />
      </section>
    </main>
  );
});

export default ShopPageMain;
