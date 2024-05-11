import HeaderTopImage from "../Molecules/MainHeaderMolecules/HeaderTopImage";
import HeaderMiddleSection from "../Molecules/MainHeaderMolecules/HeaderMiddleSection";
import HeaderBottomSection from "../Molecules/MainHeaderMolecules/HeaderBottomSection";
import { memo } from "react";
import { isMenuVisible } from "@/contexts/RecoilAtoms";
import { useRecoilState } from "recoil";

const MainHeader = memo(() => {
  // state to show / hide menu for phone size
  const [menu, setMenu] = useRecoilState(isMenuVisible);

  return (
    <header className="flex flex-col gap-3 bg-white sticky top-0 z-20 border-b border-zinc-300">
      <HeaderTopImage />
      <section className="max-w-[86rem] w-full m-auto flex flex-col gap-3 p-4">
        <HeaderMiddleSection seller={true} />
        <button
          className="w-10 h-10 m-auto bg-primary-color p-2 rounded-full inline-block sm:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <img
              src="/images/svg/menu-close-svg.svg"
              alt="menu-icon"
              className="w-6 h-6 object-cover"
            />
          ) : (
            <img src="/images/svg/menu-svg.svg" alt="menu-icon" className="w-6 h-6 object-cover" />
          )}
        </button>
        <div className="hidden sm:inline-block">
          <HeaderBottomSection flexDirection="flex-row" />
        </div>
        {menu && <HeaderBottomSection flexDirection="flex-col" />}
      </section>
    </header>
  );
});

export default MainHeader;
