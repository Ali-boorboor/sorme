import MainHeader from "../Organisms/MainHeader";
import { memo } from "react";

const Error404 = memo(() => {
  return (
    <>
      <MainHeader />
      <main className="w-full h-screen mt-2">
        <section className=" p-4 pt-20 bg-[url('/images/png/error-page-bg-image.png')] bg-cover w-full h-full flex gap-4 flex-col justify-start items-center text-white">
          <h1 className="font-semibold text-8xl md:text-9xl">404</h1>
          <h2 className="font-semibold text-3xl md:text-7xl text-center">page not found</h2>
          <label className="flex gap-6 mt-6 items-center bg-white rounded-3xl px-4 py-2 max-w-lg w-full">
            <img
              src="/images/png/search-input-icon.png"
              alt="search-icon"
              className="w-10 h-10 object-cover"
            />
            <input
              type="text"
              className="w-full outline-none bg-transparent text-black font-normal text-lg placeholder:text-black"
              placeholder="Product search and..."
            />
          </label>
        </section>
      </main>
    </>
  );
});

export default Error404;
