import DashboardPages from "@/components/Templates/DashboardPages";
import { memo } from "react";

const OrdersPage = memo(() => {
  return (
    <DashboardPages>
      <section className="flex justify-center items-start h-full pt-8">
        <table className="w-4/5">
          <thead className="">
            <tr className="">
              <th className="font-semibold text-black text-sm md:text-lg capitalize py-2">Order</th>
              <th className="font-semibold text-black text-sm md:text-lg capitalize py-2">Date</th>
              <th className="font-semibold text-black text-sm md:text-lg capitalize py-2">Condition</th>
              <th className="font-semibold text-black text-sm md:text-lg capitalize py-2">Total</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-t border-black text-center">
              <td className="font-semibold text-black text-sm md:text-lg py-2">#2546</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">2022/02/01</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">Awaiting review</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">$60</td>
            </tr>
            <tr className="border-t border-black text-center">
              <td className="font-semibold text-black text-sm md:text-lg py-2">#2546</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">2022/02/01</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">Awaiting review</td>
              <td className="font-semibold text-black text-sm md:text-lg py-2">$60</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DashboardPages>
  );
});

export default OrdersPage;
