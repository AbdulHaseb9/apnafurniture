import React from "react";

export const Topsection = () => {
  return (
    <div className="w-full">
      <div className="text-2xl text-center sm:text-left sm: text-[#8e8e8e] py-3">
        Wedding Packages
      </div>
      <div className="w-full text-center">
        <p className="text-[#8e8e8e]">
          Buy Wedding Furniture Packages online in Pakistan on Apnafurniture.pk
        </p>
        <br />
        <a href="#" className="text-red-400">
          ⭐ See all Customer Reviews
        </a>
        <br />
        <br />
        <a href="#" className="text-red-400">
          📞 Call for Details/Order: 03318999222
        </a>
      </div>
      <div className="mt-5 flex justify-between">
        <div>
          <h5 className="text-[#686868]">Sort By:</h5>
          <div>
            <select className="border cursor-pointer text-[#686868] outline-none text-sm py-1">
              <option>Sort by latest</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h5 className="text-[#686868]">Show:</h5>
            <div className="flex items-center gap-2">
              <div>
                <select className="border cursor-pointer text-[#686868] outline-none text-sm py-1">
                  <option>15. 12</option>
                  <option>18</option>
                  <option>9</option>
                </select>
              </div>
              <div className="border h-8 px-2 cursor-pointer hidden sm:flex items-center">
                <i className="fa fa-list"></i>
              </div>
              <div className="border h-8 px-2 cursor-pointer hidden sm:flex items-center">
                <i className="fa fa-border-none"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
