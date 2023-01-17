import React from "react";
import Banner from "../Components/HomeComp/Banner";
import HeroSection from "../Components/HomeComp/HeroSection";
import Ingredients from "../Components/HomeComp/Ingredients ";
import Logo from "../Components/HomeComp/Logo";
import Process from "../Components/HomeComp/Process";
import Testimonials from "../Components/HomeComp/Testimonials";
import Warning from "../Components/HomeComp/Warning";
import SupInfo from "../Components/HomeComp/SupInfo";
import KetoBoost from "../Components/HomeComp/KetoBoost";
import OrderOffer from "../Components/HomeComp/OrderOffer";
import Discount from "../Components/HomeComp/Discount";
import Delivery from "../Components/HomeComp/Delivery";
import Guarantee from "../Components/HomeComp/Guarantee";
import QAndA from "../Components/HomeComp/QAndA";
import Organization from "../Components/HomeComp/Organization";
import Info from "../Components/HomeComp/Info";

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
