import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div className="h-[100vh] ">
      <Section
        name="Model S"
        description="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-s.jpg"
      />
       <Section
        name="Model X"
        description="Luxury SUV with falcon-wing doors and impressive range."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-x.jpg"
      />
      <Section
        name="Model Y"
        description="Compact electric sedan with exceptional performance and efficiency."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        image="model-y.jpg"
      />
      <Section
          name="Model 3"
          description="All-electric sedan delivering performance, style, and innovation."
          leftbtn="Custom Order"
          rightbtn="Existing Inventory"
          image="model-3.jpg"
      />
         
    </div>
  );
};

export default Home;
