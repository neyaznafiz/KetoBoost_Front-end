import React from "react";
import Banner from "./HomeComp/Banner";
import HeroSection from "./HomeComp/HeroSection";
import Ingredients from "./HomeComp/Ingredients ";
import Logo from "./HomeComp/Logo";
import Process from "./HomeComp/Process";
import Testimonials from "./HomeComp/Testimonials";
import Warning from "./HomeComp/Warning";
import SupInfo from "./HomeComp/SupInfo";
import KetoBoost from "./HomeComp/KetoBoost";
import OrderOffer from "./HomeComp/OrderOffer";
import Discount from "./HomeComp/Discount";
import Delivery from "./HomeComp/Delivery";
import Guarantee from "./HomeComp/Guarantee";
import QAndA from "./HomeComp/QAndA";
import Organization from "./HomeComp/Organization";
import Info from "./HomeComp/Info";

const HomePage = () => {
  return (
    <div className="">
      <Process />
      <Warning />
      <Logo />
      <Banner />
      <Organization />
      <HeroSection />
      <SupInfo />
      <Ingredients />
      <Info />
      <KetoBoost />
      <OrderOffer />
      <Delivery />
      <Testimonials />
      <Discount />
      <Guarantee />
      <QAndA />
      <Discount />
    </div>
  );
};

export default HomePage;
