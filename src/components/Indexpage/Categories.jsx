import React from "react";
import OfficeChairsimg from "../../assets/images/categories/Office-Chairs.webp";
import OfficeTablesimg from "../../assets/images/categories/Office-Tables.webp";
import DoubleBedsimg from "../../assets/images/categories/Double-Beds.webp";
import SofaSetsimg from "../../assets/images/categories/Sofa-Sets.webp";
import diningtableimg from "../../assets/images/categories/Dining-Tables.webp";
import weddingpackagesimg from "../../assets/images/categories/Bed-sets.webp";
import kidfurnitureimg from "../../assets/images/categories/Kids-furniture.webp";
import centertableimg from "../../assets/images/categories/Center-Tables.webp";
import bunkbedimg from "../../assets/images/categories/Bunk-Beds.webp";
import cupboardsimg from "../../assets/images/categories/Wardrobes-and-cupboards.webp";
import bartoolsimg from "../../assets/images/categories/Bar-Stools.webp";
import { Link } from "react-router-dom";

export const Categories = () => {
  const packages = [
    {
      imgsrc: OfficeChairsimg,
      name: "OFFICE CHAIRS",
      quantity: "399 PRODUCTS",
    },
    {
      imgsrc: OfficeTablesimg,
      name: "OFFICE TABLES",
      quantity: "237 PRODUCTS",
    },
    {
      imgsrc: DoubleBedsimg,
      name: "DOUBLE BEDS",
      quantity: "384 PRODUCTS",
    },
    {
      imgsrc: SofaSetsimg,
      name: "SOFA SETS",
      quantity: "83 PRODUCTS",
    },
    {
      imgsrc: diningtableimg,
      name: "DINING TABLES",
      quantity: "140 PRODUCTS",
    },
    {
      imgsrc: weddingpackagesimg,
      name: "WEDDING PACKAGES",
      quantity: "163 PRODUCTS",
      path: "weddingpackages",
    },
    {
      imgsrc: kidfurnitureimg,
      name: "KIDS FURNITURE",
      quantity: "234 PRODUCTS",
    },
    {
      imgsrc: centertableimg,
      name: "CENTER TABLES",
      quantity: "76 PRODUCTS",
    },
    {
      imgsrc: bunkbedimg,
      name: "BUNK BEDS",
      quantity: "99 PRODUCTS",
    },
    {
      imgsrc: cupboardsimg,
      name: "CUPBOARDS",
      quantity: "77 PRODUCTS",
    },
    {
      imgsrc: bartoolsimg,
      name: "BAR STOOLS",
      quantity: "64 PRODUCTS",
    },
  ];
  return (
    <div className="px-5 lg:px-14">
      <h2 className="relative text-center font-bold text-lg before:content-[' '] before:h-[1px] before:w-1/12 md:before:w-[30%] lg:before:w-[34%] before:bg-black before:absolute before:left-0 md:before:left-4 before:top-[13px] after:content-[' '] after:h-[1px] after:w-1/12 md:after:w-[30%] lg:after:w-[34%] after:bg-black after:absolute after:right-0 md:after:right-4 after:top-[13px]">
        BROWSE OUR CATEGORIES
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {packages.map((item, index) => {
          return (
            <Link to={item.path}>
              <div className="flex justify-center">
                <div className="relative cursor-pointer" key={index}>
                  <div>
                    <img
                      src={item.imgsrc}
                      alt="Categories Images"
                      className="rounded-full w-44 md:w-56"
                    />
                  </div>
                  <div className="bg-white text-center absolute bottom-0 left-0 w-full h-16">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-[#222529]">{item.quantity}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
