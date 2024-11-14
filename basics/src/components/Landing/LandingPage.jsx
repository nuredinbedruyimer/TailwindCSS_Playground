import React from "react";
import { hero, logoBookmark } from "../../../public/imgs/index.js";
import { Menu } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="   flex flex-col gap-24 ">
      <div className="flex container justify-between mt-10   md:mt-10  items-center">
        <div className="">
          <img src={logoBookmark} alt="Logo-Image" />
        </div>
        <div className="sm:flex gap-12 hidden items-center text-nure-text uppercase ">
          <a href="" className="text-sm font-bold">
            Features
          </a>
          <a href="" className="text-sm font-bold">
            Pricing
          </a>
          <a href="" className="text-sm font-bold">
            Contact
          </a>
          <button className="px-8 py-2 uppercase font-Poppins text-sm bg-nure-primary text-white rounded-md ">
            Login
          </button>
        </div>
        <div className="block sm:hidden">
          <Menu />
        </div>
      </div>
      <section className="relative">
        <div className="flex container flex-col-reverse sm:flex-row gap-12 justify-between  ">
          {/* Left Content*/}
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl text-slate-800 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className=" font-Poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque eos excepturi voluptatum provident impedit, dicta,
              eaque animi, qu as blanditiis magni vero explicabo officia
              aspernatur velit mollitia maxime rem consequatur harum!
            </p>
            <div className="flex justify-start gap-4">
              <button className=" btn btn-primary">Get Start In Chrome</button>
              <button className="btn btn-secondary">
                Get Start In Firefox
              </button>
            </div>
          </div>
          <div className="flex-1 z-20">
            <img src={hero} alt="Hero Image" className="" />
          </div>
          <div className="hidden sm:block h-72 lg:-right-20 right-0 top-32 overflow-hidden absolute w-2/4 bg-nure-primary rounded-l-full"></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
