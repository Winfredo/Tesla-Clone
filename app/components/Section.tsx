import React from "react";
interface SectionProps {
  name: string;
  description?: string;
  image?: string;
  leftbtn: string;
  rightbtn?: string;
}
const Section: React.FC<SectionProps> = ({
  name,
  description,
  image,
  leftbtn,
  rightbtn,
}) => {
  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/images/${image})`,
      }}
    >
      <div className=" pt-[15vh] text-center">
        <h1 className="font-bold text-[25px]">{name}</h1>
        <p className="font-light">{description}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:flex mt-2 mb-[70px]">
          <div className="bg-[rgba(23,26,32,0.8)] cursor-pointer text-[14px] h-[40px] mb-2 md:mb-0  md:mr-2 flex justify-center items-center w-[256px] text-white text-center rounded-[100px] opacity-[0.85] uppercase">
            {leftbtn}
          </div>
          {rightbtn && (
            <div className="bg-white h-[40px] cursor-pointer text-[14px] w-[256px] flex justify-center items-center text-black text-center rounded-[100px] opacity-[0.6 5] uppercase">
              {rightbtn}
            </div>
          )}
        </div>
        <img
          src="/images/down-arrow.svg"
          width={40}
          className="animate-animateDown overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Section;
