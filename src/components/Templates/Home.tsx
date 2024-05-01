import MainHeader from "../Organisms/MainHeader";
import HomePageMain from "../Organisms/HomePageMain";
import HomePageFooter from "../Organisms/HomePageFooter";
import React, { memo } from "react";

const Home = memo(() => {
  return (
    <>
      <MainHeader />
      <HomePageMain />
      <HomePageFooter />
    </>
  );
});

export default Home;
