import ProductProfileMain from "../Organisms/ProductProfileMain";
import MainHeader from "../Organisms/MainHeader";
import MainFooter from "../Organisms/MainFooter";
import { memo } from "react";

const ProductProfile = memo(() => {
  return (
    <>
      <MainHeader />
      <ProductProfileMain />
      <MainFooter />
    </>
  );
});

export default ProductProfile;
