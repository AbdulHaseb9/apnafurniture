import React from "react";
import Fade from "../components/Indexpage/Slide";
import { Elementor } from "../components/Indexpage/Elementor";
import { Categories } from "../components/Indexpage/Categories";
import { Imagesec } from "../components/Indexpage/Imagesec";
import { Services } from "../components/Indexpage/Services";

export const Home = () => {
  return (
    <div>
      <Fade />
      <Elementor />
      <Categories />
      <Imagesec />
      <Services />
    </div>
  );
};
