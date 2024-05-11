import { memo } from "react";

const SupportPageLeftSection = memo(() => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 p-4 w-full md:basis-2/5 h-[30rem]">
      <p className="text-black font-semibold text-xl text-center bg-zinc-100 p-4 rounded-lg drop-shadow-md w-full">
        support ticket
      </p>
      <form
        className="flex flex-col gap-4 bg-zinc-100 p-4 rounded-lg drop-shadow-md h-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <section className="flex gap-4 justify-center md:justify-between items-center md:flex-nowrap flex-wrap">
          <fieldset className="border-2 border-primary-color rounded-lg p-1 w-full md:basis-1/2">
            <legend className="font-normal text-black text-lg p-1">Name</legend>
            <input
              type="text"
              placeholder="Soroush Rasou"
              className="placeholder:text-zinc-400 font-light text-black text-lg outline-none w-full h-full p-2 bg-transparent"
            />
          </fieldset>
          <fieldset className="border-2 border-primary-color rounded-lg p-1 w-full md:basis-1/2">
            <legend className="font-normal text-black text-lg p-1">Email</legend>
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="placeholder:text-zinc-400 font-light text-black text-lg outline-none w-full h-full p-2 bg-transparent"
            />
          </fieldset>
        </section>
        <fieldset className="border-2 border-primary-color rounded-lg p-2">
          <legend className="font-normal text-black text-lg p-1">your message</legend>
          <textarea
            className="resize-none placeholder:text-zinc-400 font-light text-black text-lg outline-none w-full h-full bg-transparent"
            placeholder="Hello, in my opinion..."
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="font-semibold text-white bg-primary-color text-lg rounded-full m-auto px-8 py-1 transition-all duration-300 hover:scale-105"
        >
          Send
        </button>
      </form>
    </section>
  );
});

export default SupportPageLeftSection;
