import { memo } from "react";

const ContactSupportSection = memo(() => {
  return (
    <section className="flex gap-10 items-center lg:justify-between lg:flex-nowrap flex-wrap-reverse justify-center">
      <div className="flex flex-col gap-8 w-full lg:basis-1/2">
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-black text-3xl">Contact support</h3>
          <p className="font-normal text-black text-lg">Answer as soon as possible</p>
        </div>
        <form className="flex flex-col gap-4">
          <section className="flex items-center justify-center md:justify-between gap-8 lg:flex-nowrap flex-wrap">
            <fieldset className="border-2 border-primary-color flex justify-start items-center p-2 rounded-md w-full lg:basis-1/2 h-20">
              <legend className="font-normal text-black text-xl">Name</legend>
              <input
                type="text"
                className="placeholder:text-light-gray font-normal text-base text-black bg-transparent outline-none"
                placeholder="Ali BoorBoor"
              />
            </fieldset>
            <fieldset className="border-2 border-primary-color flex justify-start items-center p-2 rounded-md w-full lg:basis-1/2 h-20">
              <legend className="font-normal text-black text-xl">Email</legend>
              <input
                type="email"
                className="placeholder:text-light-gray font-normal text-base text-black bg-transparent outline-none"
                placeholder="ali@gmail.com"
              />
            </fieldset>
          </section>
          <fieldset className="border-2 border-primary-color flex justify-start items-center p-2 rounded-md basis-full h-40">
            <legend className="font-normal text-black text-xl">your message</legend>
            <textarea
              className="placeholder:text-light-gray font-normal text-base text-black bg-transparent outline-none w-full h-40 resize-none"
              placeholder="Hello, in my opinion..."
            ></textarea>
          </fieldset>
          <button className="font-semibold text-white text-xl bg-primary-color py-1 px-8 rounded-3xl w-32 m-auto">
            Send
          </button>
        </form>
      </div>
      <div className="w-full lg:basis-1/2 h-full rounded-3xl overflow-hidden">
        <img
          src="images/jpg/contact-support-img.jpg"
          alt="support-image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
});

export default ContactSupportSection;
