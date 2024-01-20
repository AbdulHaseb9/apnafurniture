import React from "react";

export const Elementor = () => {
  const ele = [
    {
      icon: "fa-solid fa-truck",
      heading: "SAFE SHIPPING",
      text: "In all major cities across pakistan",
      value: 1,
    },
    {
      icon: "fa-solid fa-face-smile",
      heading: "CUSTOMER REVIEWS",
      text: "View all customer reviews.",
      value: 2,
    },
    {
      icon: "fa-solid fa-clock",
      heading: "CUSTOMER SUPPORT",
      text: "Call us anytime: 0331-8999222",
      value: 3,
    },
    {
      icon: "fa-solid fa-dollar-sign",
      heading: "COMPETITIVE PRICES",
      text: "Quality with affordability ensured",
      value: 4,
    },
  ];

  return (
    <div className="py-16">
      <div className="px-5 lg:px-14 w-full md:flex justify-center flex-wrap">
        {ele.map((data, item) => {
          return (
            <div
              className={`flex justify-center items-center md:items-start gap-4 flex-col md:flex-row md:w-1/4 relative lg:after:h-full lg:after:bg-[#9e9e9e] lg:after:w-[1px] ${
                data.value == 4 ? `after:w-[0px]` : null
              } my-6`}
              key={item}
            >
              <div>
                <i className={`${data.icon} text-2xl text-[#313131]`}></i>
              </div>
              <div className="w-56 md:w-32 md:text-left text-center">
                <h3 className="font-bold text-xl leading-9">{data.heading}</h3>
                <p className="text-xs text-[#9e9e9e] leading-6">{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
