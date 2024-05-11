import DashboardBox from "@/components/Molecules/DashboardPagesMolecules/DashboardBox";
import DashboardPages from "@/components/Templates/DashboardPages";
import { memo } from "react";

const DashboardPage = memo(() => {
  return (
    <DashboardPages>
      <section className="flex flex-col items-center justify-center gap-20 h-full flex-wrap">
        <section className="flex justify-center items-center gap-20 flex-wrap">
          <DashboardBox
            href="orders"
            title="20 Orders"
            text="Active Orders"
            icon="/images/png/check-out-cart.png"
          />
          <DashboardBox
            href="wallet"
            title="20 transaction"
            text="Bank transactions"
            icon="/images/png/wallet-icon.png"
          />
        </section>
        <section className="flex gap-20 justify-center items-center flex-wrap">
          <DashboardBox
            href="favorites"
            title="20 Favorites"
            text="Favorites to order"
            icon="/images/png/like-heart-icon.png"
          />
          <DashboardBox
            href="support"
            title="20 Active"
            text="Support tickets"
            icon="/images/png/support-icon.png"
          />
        </section>
      </section>
    </DashboardPages>
  );
});

export default DashboardPage;
