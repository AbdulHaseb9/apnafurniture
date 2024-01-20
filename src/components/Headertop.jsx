import React from "react";

export const Headertop = () => {
  return (
    <div>
      <div className="bg-[#4d4b66] flex justify-end py-2 ">
        <div className="text-white text-xs lg:flex gap-4 hidden">
          <a href="#">My Wishlist</a>
          <a href="#">Orders</a>
          <a href="#">Addresses</a>
          <a href="#">Order Tracking</a>
          <a href="#">Customer Reviews</a>
          <a href="#">
            <i className="fa fa-user px-1"></i>
            Log In
          </a>
        </div>
        <div className="text-white mx-4 lg:mx-20 flex gap-4 text-xs items-center">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa fa-wifi"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};
