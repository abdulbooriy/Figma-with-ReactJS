import React from "react";
import Hero from "../hero/Hero";
import Brand from "../brands/Brand";
import Products from "../products/Products";
import Client from "../clients/Client";
import Newsletter from "../newsletter/Newsletter";

const Main = () => {
  return (
    <main>
      <Hero />
      <Brand />
      <Products />
      <Client />
      <Newsletter />
    </main>
  );
};

export default Main;
