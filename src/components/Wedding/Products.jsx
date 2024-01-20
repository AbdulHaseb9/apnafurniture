import React from "react";
import box1 from "../../assets/images/WeddingPackages/Box1jpg.jpg";
import box1hover from "../../assets/images/WeddingPackages/box1hover.jpg";
import box2 from "../../assets/images/WeddingPackages/Box2.jpg";
import box2hover from "../../assets/images/WeddingPackages/box2hover.jpg";
import box3 from "../../assets/images/WeddingPackages/Box3.jpg";
import box3hover from "../../assets/images/WeddingPackages/box3hover.jpg";
import box4 from "../../assets/images/WeddingPackages/Box4.jpg";
import box4hover from "../../assets/images/WeddingPackages/box4hover.jpg";
import box5 from "../../assets/images/WeddingPackages/Box5.jpg";
import box5hover from "../../assets/images/WeddingPackages/box5hover.jpg";
import box6 from "../../assets/images/WeddingPackages/Box6.jpg";
import box6hover from "../../assets/images/WeddingPackages/box6hover.jpg";
import box7 from "../../assets/images/WeddingPackages/Box7.jpg";
import box7hover from "../../assets/images/WeddingPackages/box7hover.jpg";
import box8 from "../../assets/images/WeddingPackages/Box8.jpg";
import box8hover from "../../assets/images/WeddingPackages/box8hover.jpg";
import box9 from "../../assets/images/WeddingPackages/Box9.jpg";
import box9hover from "../../assets/images/WeddingPackages/box9hover.jpg";
import box10 from "../../assets/images/WeddingPackages/Box10.jpg";
import box10hover from "../../assets/images/WeddingPackages/box10hover.jpg";
import box11 from "../../assets/images/WeddingPackages/Box11.jpg";
import box11hover from "../../assets/images/WeddingPackages/box11hover.jpg";
import box12 from "../../assets/images/WeddingPackages/Box12.jpg";
import box12hover from "../../assets/images/WeddingPackages/box12hover.jpg";
import box13 from "../../assets/images/WeddingPackages/Box13.jpg";
import box13hover from "../../assets/images/WeddingPackages/box13hover.jpg";
import box14 from "../../assets/images/WeddingPackages/Box14.jpg";
import box14hover from "../../assets/images/WeddingPackages/box14hover.jpg";
import box15 from "../../assets/images/WeddingPackages/Box15.jpg";
import box15hover from "../../assets/images/WeddingPackages/box15hover.jpg";

export const Products = () => {
  const prod = [
    {
      image: box1,
      hover: box1hover,
      name: "Keny Double Bed Set",
      price: "Rs62,000",
    },
    {
      image: box2,
      hover: box2hover,
      name: "Vaitel Double Bed Set",
      price: "Rs70,000",
    },
    {
      image: box3,
      hover: box3hover,
      name: "Caffery Double Bed Set",
      price: "Rs73,000",
    },
    {
      image: box4,
      hover: box4hover,
      name: "Garren Double Bed Set",
      price: "Rs73,000",
    },
    {
      image: box5,
      hover: box5hover,
      name: "Matz Upholstery Double Bed Set",
      price: "Rs87,000",
    },
    {
      image: box6,
      hover: box6hover,
      name: "Calvis Upholstery Double Bed Set",
      price: "Rs97,000",
    },
    {
      image: box7,
      hover: box7hover,
      name: "Beverly Iron Double Bed Set",
      price: "Rs87,000",
    },
    {
      image: box8,
      hover: box8hover,
      name: "Coin Double Bed Set",
      price: "Rs82,000",
    },
    {
      image: box9,
      hover: box9hover,
      name: "Derry Iron Double Bed Set",
      price: "Rs58,000",
    },
    {
      image: box10,
      hover: box10hover,
      name: "Tessa Upholstery Double Bed Set",
      price: "Rs77,000",
    },
    {
      image: box11,
      hover: box11hover,
      name: "Niko Double Bed Set",
      price: "Rs155,000",
    },
    {
      image: box12,
      hover: box12hover,
      name: "Zavier Double Bed Set",
      price: "Rs135,000",
    },
    {
      image: box13,
      hover: box13hover,
      name: "Roland Double Bed Set",
      price: "Rs195,000",
    },
    {
      image: box14,
      hover: box14hover,
      name: "Crosby Double Bed Set",
      price: "Rs180,000",
    },
    {
      image: box15,
      hover: box15hover,
      name: "Luxury Double Bed Set",
      price: "Rs245,000",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 my-14">
      {prod.map((items, index) => {
        return (
          <div
            className="px-3 py-2 group/hide hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            key={index}
          >
            <div className="h-[130px] md:h-[210px] lg:h-[300px] xl:h-[340px] w-full relative group cursor-pointer overflow-hidden">
              <img
                src={items.image}
                alt={`${items.name} Image`}
                className="z-30 absolute top-0 left-0 w-full"
              />
              <img
                src={items.hover}
                w-full
                alt={`${items.name} Image`}
                className="group-hover:z-40 absolute top-0 left-0 group-hover:scale-110 transition-all duration-700 w-full"
              />
            </div>
            <div className="flex justify-center flex-col items-center py-3">
              <div>
                <h4 className="cursor-pointer hover:text-[#0C0E4B] transition-all duration-150 font-semibold">
                  {items.name}
                </h4>
              </div>
              <div className="text-xs text-[#9e9e9e] my-1">
                <i className="fa fa-star cursor-pointer"></i>
                <i className="fa fa-star cursor-pointer"></i>
                <i className="fa fa-star cursor-pointer"></i>
                <i className="fa fa-star cursor-pointer"></i>
                <i className="fa fa-star cursor-pointer"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold">{items.price}</h4>
              </div>
              <div className="my-2 flex items-center gap-2">
                <div className="bg-[#b3b1b1] text-white h-7 hidden lg:flex items-center px-2 cursor-pointer invisible group-hover/hide:visible hover:bg-[#0C0E4B] transition-all duration-300">
                  <i className="fa fa-heart"></i>
                </div>
                <div className="bg-[#b3b1b1] text-white h-7 flex items-center px-2 cursor-pointer hover:bg-[#0C0E4B] transition-colors duration-300">
                  <i className="fa fa-shopping-bag hidden md:block"></i>
                  <p className="mx-1 text-xs md:text-base">ADD TO CART</p>
                </div>
                <div className="bg-[#b3b1b1] text-white h-7 hidden lg:flex items-center px-2 cursor-pointer invisible group-hover/hide:visible hover:bg-[#0C0E4B] transition-colors duration-300">
                  <i class="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
