import React from "react";

export const Footer = () => {
  return (
    <div className="px-5 lg:px-14 bg-[#0c0e4b] py-12 mt-7 relative">
      <div className="text-[#a8a8a8]">
        <div className="absolute -top-7 md:-top-3 bg-[#C0BFDF] text-black tracking-wide font-bold px-2 w-52 md:w-auto py-1">
          QUDDUSI DESIGNER AND RENOVATION
        </div>
        <div>
          <ul>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                My Account
              </span>
            </li>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                Order Tracking
              </span>
            </li>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                Special Offers
              </span>
            </li>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                About Us
              </span>
            </li>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                Cart
              </span>
            </li>
            <li className="border-b border-[#a8a8a8] cursor-pointer pb-1 my-2">
              <i className="fa fa-angle-right text-xs pr-2"></i>
              <span className="hover:text-white transition-all duration-200">
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
