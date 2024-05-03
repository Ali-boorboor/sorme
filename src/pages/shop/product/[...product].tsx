import ProductProfile from "@/components/Templates/ProductProfile";
import { useRouter } from "next/router";
import { memo } from "react";

const ProductProfilePage = memo(() => {
  const route = useRouter();

  return <ProductProfile />;
});

export default ProductProfilePage;
