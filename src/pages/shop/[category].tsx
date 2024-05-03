import Shop from "@/components/Templates/Shop";
import { useRouter } from "next/router";
import { memo } from "react";

const ProductsByCategoryPage = memo(() => {
  const route = useRouter();

  return <Shop />;
});

export default ProductsByCategoryPage;
