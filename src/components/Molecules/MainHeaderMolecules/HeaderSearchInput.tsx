import { memo } from "react";

const HeaderSearchInput = memo(() => {
  return (
    <label className="flex items-center gap-2 w-60 h-10 rounded-lg bg-secondary-color">
      <div className="flex items-center justify-center w-11 h-10 rounded-lg bg-primary-color p-2">
        <img
          src="/images/png/search-input-icon.png"
          alt="search-icon"
          className="w-6 h-6 object-cover"
        />
      </div>
      <input
        type="text"
        className="font-normal text-xs text-black bg-transparent outline-none"
        placeholder="Product search and..."
      />
    </label>
  );
});

export default HeaderSearchInput;
