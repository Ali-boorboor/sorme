import HeaderMiddleSection from "../Molecules/MainHeaderMolecules/HeaderMiddleSection";
import { memo } from "react";

const DashboardMainHeader = memo(() => {
  return (
    <header className="sticky top-0 shadow-md shadow-zinc-300 z-50 bg-white">
      <HeaderMiddleSection seller={false} />
    </header>
  );
});

export default DashboardMainHeader;
