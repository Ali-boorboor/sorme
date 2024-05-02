import { memo } from "react";

const SortFilters = memo(() => {
  return (
    <nav className="bg-secondary-color p-2 flex justify-start gap-6 items-center rounded-md drop-shadow-md">
      <p className="font-normal text-lg text-gray-500 text-nowrap">Order By:</p>
      <div className="list-none flex gap-2 items-center justify-start flex-wrap">
        <li className="font-normal text-base text-gray-500 text-nowrap transition-all duration-300 hover:text-white hover:bg-primary-color rounded-lg bg-zinc-300 py-1 px-4 cursor-pointer">
          Bestselling
        </li>
        <li className="font-normal text-base text-gray-500 text-nowrap transition-all duration-300 hover:text-white hover:bg-primary-color rounded-lg bg-zinc-300 py-1 px-4 cursor-pointer">
          Most expensive
        </li>
        <li className="font-normal text-base text-gray-500 text-nowrap transition-all duration-300 hover:text-white hover:bg-primary-color rounded-lg bg-zinc-300 py-1 px-4 cursor-pointer">
          cheapest
        </li>
        <li className="font-normal text-base text-gray-500 text-nowrap transition-all duration-300 hover:text-white hover:bg-primary-color rounded-lg bg-zinc-300 py-1 px-4 cursor-pointer">
          Name : A to Z
        </li>
        <li className="font-normal text-base text-gray-500 text-nowrap transition-all duration-300 hover:text-white hover:bg-primary-color rounded-lg bg-zinc-300 py-1 px-4 cursor-pointer">
          Name : Z to A
        </li>
      </div>
    </nav>
  );
});

export default SortFilters;
