import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// Icons
import { FaPlus } from "react-icons/fa6";

// images
import profile from "../../images/profile.jpg";

// component
import StoryItem from "./StoryItem";
import { useSelector } from "react-redux";
const Story = () => {

  //  user data
  let userInfo = useSelector((state)=>state.userInfo.value)
  console.log(userInfo.user);
  

  // Story slider function
  const settings = {
    className: "center",
    // variableWidth: true,
    // adaptiveHeight: true,
    infinite: true,
    slidesToShow: 7,
    swipeToSlide: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
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
    <div className=" relative z-[1] pb-5 lg:mt-[75px] mt-[120px] ">
      <div className="container">
        <div className="flex lg:h-[200px] h-[150px] gap-x-2 ">
          <div className="lg:min-w-[150px] min-w-[100px] lg:max-w-[150px] max-w-[100px]  rounded-md overflow-hidden relative  shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] ">
            <img
              src={userInfo.user?.photoURL}
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
          <div className="w-full gap-x-2 overflow-x-hidden">
            <Slider {...settings}>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
              <StoryItem name="Md. Shakhawat" profile={profile}/>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
