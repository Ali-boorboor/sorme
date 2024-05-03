import Link from "next/link";
import React, { memo } from "react";

const SormeLogo = memo(() => {
  return (
    <Link
      href="/"
      className="w-40 h-10 bg-center bg-cover bg-[url('/images/png/sorme-logo.png')]"
    ></Link>
  );
});

export default SormeLogo;
