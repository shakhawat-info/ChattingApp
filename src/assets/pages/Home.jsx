import React, { useState, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// Icons
import { BsPlusSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

// images
import profile from "../images/profile.jpg";

// components
import Navbtm from "./Components/Navbtm";
import Menu from "./Components/Menu";
import Story from "./Components/Story";

// Images
const Home = () => {
  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };

  // Story slider function
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 8,
    swipeToSlide: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* Nav Start */}
      <nav className="lg:px-5 px-2 lg:py-3 py-2 shadow relative z-[1]">
        <div className="container">
          <div className="flex justify-between items-center  ">
            <span className="font-aldrich lg:text-3xl text-lg font-black capitalize text-brand   ">
              ochigram
            </span>
            <ul className="flex gap-x-3 ">
              <li className="topIcon hoverEfct relative">
                <BsPlusSquare />
              </li>
              <li className="topIcon hoverEfct relative">
                <BsSearch />
              </li>
              <li className="topIcon hoverEfct relative" onClick={MenuVisiblity} >
                <CgMenuRight />
              </li>
            </ul>
          </div>
          <div className="flex justify-between w-full lg:absolute lg:top-[15px] lg:left-[50%] lg:translate-x-[-47%] lg:w-1/4 ">
            <div className=" w-full mt-2 lg:mt-0">
              <Navbtm />
            </div>
          </div>
        </div>
      </nav>
      {/* Nav Start */}

      {/* ==== Story Section Start */}

      <div className=" relative z-[1] h-screen ">
        <div className="container">
          <div className="flex lg:h-[200px] h-[150px] gap-x-2 ">
            <div className="lg:min-w-[150px] min-w-[100px] lg:max-w-[150px] max-w-[100px]  rounded-md overflow-hidden relative  shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] ">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-0 bg-primarytxt w-full text-center font-aldrich pb-2  pt-5  ">
                <button
                  type="button"
                  className="mx-auto absolute top-[-17px] left-[40%] bg-brand lg:p-2 p-1 rounded-full text-primarytxt text-xl "
                >
                  <FaPlus />
                </button>
                <h5 className="text-[12px] lg:text-xl  ">Create Story</h5>
              </div>
            </div>
            <div className="w-full h-full gap-x-2 overflow-x-hidden">
              <Slider {...settings}>
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
                <Story profile={profile} name="Md. Shakhawat" stry={profile} />
              </Slider>
            </div>
          </div>
          <Menu memu={memu} menuClose={() => setMenu(false)} />
        </div>
      </div>

      {/* ==== Story Section End */}
    </>
  );
};

export default Home;
