import React from "react";
import avatar from "../../assets/images/Services/avatar.png";
import nochat from "../../assets/images/Services/chat.png";
import dots from "../../assets/images/Services/more.png";

export const Services = () => {
  const secdata = [
    {
      img: avatar,
      heading: "Customer Support",
      paragraph:
        " If it’s furniture, we are here to serve you in the best manner possible. Contact Apnafurniture.pk anytime: 03318999222",
    },
    {
      img: dots,
      heading: "Wide Range",
      paragraph:
        "We strive to provide something for everyone on Apnafurniture.pk with regular uploads of new furniture products. Visit us regularly!",
    },
    {
      img: nochat,
      heading: "No Mis-commitments",
      paragraph:
        "We deliver what we display. “No mis- commitments” is something that everyone understands at Apnafurniture.pk!",
    },
  ];

  return (
    <div className="px-5 lg:px-14 flex flex-col md:flex-row justify-between items-center py-8 space-y-6 md:space-y-0">
      {secdata.map((element, index) => {
        return (
          <div className="w-56">
            <div className="flex justify-center items-center h-24">
              <img src={element.img} alt="Avatar Image" className="w-20" />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-lg my-3 text-[#0c1f27]">
                {element.heading}
              </h2>
              <p className="text-center text-sm text-[#222020]">
                {element.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
