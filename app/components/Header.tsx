import React from "react";

const Header = () => {
  return (
    <div className="h-[5vh] w-[100vw]  fixed flex items-center justify-between px-10">
      <div>
        <img src="images/logo.svg" alt="Tesla logo" />
      </div>

      <div className="flex gap-10 uppercase">
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </div>

      <div className="flex gap-10 uppercase cursor-pointer">
        <p>
          <a href="#">Shop</a>
        </p>
        <p>
          <a>Tesla Account</a>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Header;
