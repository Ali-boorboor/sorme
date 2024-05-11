import { memo } from "react";

const WalletPageLeftSection = memo(() => {
  return (
    <section className="flex flex-col gap-4 bg-white rounded-lg md:basis-2/5 h-80">
      <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-between items-center bg-zinc-100 drop-shadow-md rounded-lg py-2 px-4">
        <img
          src="/images/png/increase-icon.png"
          alt="inventory-icon"
          className="w-20 h-20 object-cover"
        />
        <p className="text-black font-semibold text-lg text-center w-32">Inventory increase</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-between items-center bg-zinc-100 drop-shadow-md rounded-lg py-2 px-4">
        <img
          src="/images/png/transfer-icon.png"
          alt="inventory-icon"
          className="w-20 h-20 object-cover"
        />
        <p className="text-black font-semibold text-lg text-center w-32">Inventory transfer</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-between items-center bg-zinc-100 drop-shadow-md rounded-lg py-2 px-4">
        <img
          src="/images/png/increase-icon.png"
          alt="inventory-icon"
          className="w-20 h-20 object-cover rotate-180"
        />
        <p className="text-black font-semibold text-lg text-center w-32">Inventory withdrawal</p>
      </div>
    </section>
  );
});

export default WalletPageLeftSection;
