import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Headermain = () => {
  return (
    <header>
      <div className="bg-[#2D3192] py-5 px-5 lg:px-14 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <i className="fa fa-bars text-white text-2xl cursor-pointer lg:hidden"></i>
          <Link to={"/"}>
            <img src={logo} alt="ApnaFurniture Logo" className="w-[140px]" />
          </Link>
        </div>
        <div className="bg-[#ffffff] w-96 h-10 lg:flex items-center rounded-3xl hidden">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent outline-none px-5 text-sm text-[#8d8d8d] placeholder:text-xs w-7/12"
          />
          <div className="cursor-pointer w-4/12">
            <select className="bg-transparent text-xs outline-none text-[#8d8d8d]">
              <option>All Categories</option>
            </select>
          </div>
          <div className="w-1/12 flex items-center text-[#8d8d8d] cursor-pointer">
            <i className="fa fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white leading-3 hidden lg:block">
            <i className="fa fa-phone px-2 text-sm"></i>
            <span>
              Call Us Now <br />
              <b> +92 331 8999222</b>
            </span>
          </div>
          <div className="mx-4">
            <div className="relative cursor-pointer">
              <i className="fa fa-shopping-bag text-white text-3xl"></i>
              <span className="text-white text-xs px-[4px] bg-red-700 rounded-full absolute top-0 right-4">
                0
              </span>
              <i className="fa fa-angle-down ml-2 text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-5 hidden lg:px-14 lg:flex justify-between items-center gap-5 flex-wrap text-sm font-semibold">
        <Link
          to={"/"}
          className="hover:text-[#2D3192] active:text-[##2D3192] transition-all "
        >
          HOME
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all flex items-center gap-1">
          PRODUCTS <i className="fa fa-angle-down"></i>
        </Link>
        <Link
          to={"weddingpackages"}
          className="hover:text-[#2D3192] active:text-[##2D3192] transition-all"
        >
          WEDDING PACKAGES
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          BLOG
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          IMPORT
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          ABOUT
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          CONTACT
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          CUSTOMER REVIEWS
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          LIVE UPDATES
        </Link>
        <Link className="hover:text-[#2D3192] active:text-[##2D3192] transition-all">
          SPECIAL OFFERS!
        </Link>
      </div>
    </header>
  );
};
