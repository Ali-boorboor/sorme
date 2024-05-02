import MainFooter from "@/components/Organisms/MainFooter";
import MainHeader from "@/components/Organisms/MainHeader";
import ShopPageMain from "@/components/Organisms/ShopPageMain";
import { memo } from "react";

const Shop = memo(() => {
  return (
    <>
      <MainHeader />
      <ShopPageMain />
      <MainFooter />
    </>
  );
});

export default Shop;
