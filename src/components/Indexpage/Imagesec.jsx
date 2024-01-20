import React from "react";
import imgone from "../../assets/images/imagesection/Custom-Furniture.jpg";
import imgtwo from "../../assets/images/imagesection/Office-Chairs.jpg";
import imgthree from "../../assets/images/imagesection/Restaurant-Furniture.jpg";

export const Imagesec = () => {
  return (
    <div className="px-5 lg:px-14 md:flex gap-5">
      <div className="my-4">
        <img
          src={imgone}
          alt="Custom Furniture Image"
          className="w-full h-full"
        />
      </div>
      <div className="my-4">
        <img src={imgtwo} alt="Office Chairs Image" className="w-full h-full" />
      </div>
      <div className="my-4">
        <img
          src={imgthree}
          alt="Restaurant Furniture Image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
