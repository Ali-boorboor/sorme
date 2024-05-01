import HeaderTopImage from "../Molecules/MainHeaderMolecules/HeaderTopImage";
import HeaderMiddleSection from "../Molecules/MainHeaderMolecules/HeaderMiddleSection";
import HeaderBottomSection from "../Molecules/MainHeaderMolecules/HeaderBottomSection";
import { memo } from "react";

const MainHeader = memo(() => {
  return (
    <header className="flex flex-col gap-3">
      <HeaderTopImage />
      <section className="max-w-[86rem] w-full m-auto flex flex-col gap-3 p-4">
        <HeaderMiddleSection />
        <HeaderBottomSection />
      </section>
    </header>
  );
});

export default MainHeader;