import React from "react";
import Section from "./Section";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-[100vh] ">
        <Header />
      <Section
        name="Model S"
        id="model-s"
        description="Order Online for Touchless Delivery."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-s.jpg"
      />
      <Section
        name="Model X"
        id="model-x"
        description="Luxury SUV with falcon-wing doors and impressive range."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-x.jpg"
      />
      <Section
        name="Model Y"
        id="model-y"
        description="Compact electric sedan with exceptional performance and efficiency."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-y.jpg"
      />
      <Section
        name="Model 3"
        id="model-three"
        description="All-electric sedan delivering performance, style, and innovation."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-3.jpg"
      />
      <Section
        name="Lowest Cost Solar Panels in America."
        description="Money-back guarantee"
        leftbtn="Order Now"
        rightbtn="Learn More"
        image="solar-panel.jpg"
      />
      <Section
        name="Solar for New Roofs "
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels."
        leftbtn="Order Now"
        rightbtn="Learn More"
        image="solar-roof.jpg"
      />
      <Section name="Accessories" leftbtn="Shop Now" image="accessories.jpg" />
    </div>
  );
};

export default Home;
