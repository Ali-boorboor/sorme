import React, { memo } from "react";

const TopBrandsBox = memo(({ cover }: any) => {
  return (
    <div className="w-96 h-96 flex flex-col items-center">
      <img
        src={cover}
        alt="top-brands-box-img"
        className="w-full h-4/5 object-cover rounded-t-3xl"
      />
      <div className="border-2 border-zinc-300 py-2 px-4 rounded-b-3xl w-full flex flex-col gap-4">
        <p className="text-base font-normal text-black">
          The most complete review of Kaman products
        </p>
        <div className="h-1/5 w-full flex items-center justify-between">
          <p className="text-light-gray font-normal text-base">hamid</p>
          <p className="text-light-gray font-normal text-base">2023/10/15</p>
        </div>
      </div>
    </div>
  );
});

export default TopBrandsBox;
