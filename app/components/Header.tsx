"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="h-[5vh] w-[100vw] fixed flex items-center justify-between px-10">
      <div>
        <Image src="images/logo.svg" alt="Tesla logo" width={100} height={40} />
      </div>

      <div className="hidden lg:flex gap-7 ] uppercase font-bold">
        <p>
          <a href="#model-s">Model S</a>
        </p>
        <p>
          <a href="#model-x">Model X</a>
        </p>
        <p>
          <a href="#model-y">Model Y</a>
        </p>
        <p>
          <a href="#model-three">Model 3</a>
        </p>
        <p>
          <a href="#accessories">Accessories</a>
        </p>
      </div>

      <div className="flex items-center gap-10 uppercase cursor-pointer font-bold">
        <p className="hidden md:block">
          <a href="#">Shop</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Tesla Account</a>
        </p>
        <p>
          <MdMenu size={25} className="cursor-pointer" onClick={toggleMenu} />
        </p>
      </div>

      <div
        className={`fixed top-0 bottom-0 right-0 w-[300px] z-10 transform ease-in duration-200 list-none p-5 bg-white ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Existing Inventory
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Used Inventory
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Trade-In
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Cybertruck
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Roadster
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              New Products
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Updates
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Test Drive
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Charging Stations
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Tesla Insurance
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Financing Options
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Service Centre Locations
            </a>
          </li>
          <li className="py-[15px] border-b-2">
            <a href="#" className="font-semibold">
              Powerwall
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
