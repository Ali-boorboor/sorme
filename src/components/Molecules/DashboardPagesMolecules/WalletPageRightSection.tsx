import { memo } from "react";

const WalletPageRightSection = memo(() => {
  return (
    <section className="bg-white flex flex-col gap-4 md:basis-3/5 h-80 md:m-0 mt-48">
      <div className="flex justify-between items-center gap-4 bg-zinc-100 rounded-lg p-4 drop-shadow-md">
        <p className="font-semibold text-lg text-black">balece of money</p>
        <p className="font-semibold text-lg text-black">60$</p>
      </div>
      <div className="bg-zinc-100 rounded-lg p-4 h-full drop-shadow-md">
        <table className="w-full">
          <thead>
            <tr>
              <th className="font-semibold text-black text-lg text-left py-2">Order</th>
              <th className="font-semibold text-black text-lg text-left py-2">Date</th>
              <th className="font-semibold text-black text-lg text-left py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-black">
              <td className="text-black font-semibold text-lg py-2">#2546</td>
              <td className="text-black font-semibold text-lg py-2">2022/02/01</td>
              <td className="text-black font-semibold text-lg py-2">-$60</td>
            </tr>
            <tr className="border-t border-black">
              <td className="text-black font-semibold text-lg py-2">#2546</td>
              <td className="text-black font-semibold text-lg py-2">2022/02/01</td>
              <td className="text-black font-semibold text-lg py-2">+$60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
});

export default WalletPageRightSection;
