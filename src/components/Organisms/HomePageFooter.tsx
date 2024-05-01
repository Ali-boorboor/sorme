import MainFooter from "./MainFooter";
import ContactSupportSection from "../Molecules/HomePageMolecules/ContactSupportSection";
import { memo } from "react";

const HomePageFooter = memo(() => {
  return (
    <section className="max-w-[86rem] w-full m-auto flex flex-col gap-14 p-4">
      <ContactSupportSection />
      <MainFooter />
    </section>
  );
});

export default HomePageFooter;
