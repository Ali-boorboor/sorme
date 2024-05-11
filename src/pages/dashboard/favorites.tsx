import FavoritePageBox from "@/components/Molecules/DashboardPagesMolecules/FavoritePageBox";
import DashboardPages from "@/components/Templates/DashboardPages";
import { memo } from "react";

const FavoritesPage = memo(() => {
  return (
    <DashboardPages>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-center max-w-[50rem] m-auto">
        <FavoritePageBox />
        <FavoritePageBox />
        <FavoritePageBox />
        <FavoritePageBox />
      </section>
    </DashboardPages>
  );
});

export default FavoritesPage;
