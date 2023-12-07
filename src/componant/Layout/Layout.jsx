/* eslint-disable no-unused-vars */
import React from "react";
import HeroImg from "../HeroImg/HeroImg";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <section className="grid grid-cols-2 h-screen justify-center items-center max-lg:grid-cols-1">
          <div className="max-lg:hidden">
              <HeroImg></HeroImg>
              </div>
      <div className="flex flex-col justify-center items-center">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Layout;
