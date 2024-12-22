import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// components
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import ChatID from './Components/ChatID';
import ChatBubbles from './Components/ChatBubbles';



// icons
import { FcSettings } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { PiChats } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { TbMessageCircleUp } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";


// Images 
import profile from '../images/profile.jpg'

const Message = () => {
  // variables
  let navigate = useNavigate();

  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };

//   messages ID slider
const settings = {
    className: "center",
    // variableWidth: true,
    // adaptiveHeight: true,
    infinite: true,
    slidesToShow: 17,
    swipeToSlide: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 15,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 13,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };


  return (
    <>
      <Nav menu={MenuVisiblity} friends={()=> navigate('/friends')} home={()=> navigate('/home')} message={()=> navigate('/message')} />
      <Menu memu={memu} menuClose={() => setMenu(false)} />
    
    <section>
        <div className="container">
            {/* message option setting start */}
            <div className="flex justify-between ">
                <h3 className='font-aldrich font-medium text-lg   '>Messages</h3>
                <div className="flex gap-x-2 ">
                    <button type='button' className='p-2 text-lg '><FcSettings/></button>
                    <button type='button' className='p-2 text-lg '><BsSearch/></button>
                </div>
            </div>
            {/* message option setting end */}

            {/* messages ID start */}
            <div className="lg:hidden">
                <Slider {...settings}>
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatBubbles profile={profile} name="Md. Shakhawat Hossain" />
                </Slider>
            </div>
            {/* messages ID end */}

            {/* messages main start */}
            <div className="flex gap-2">
                <div className="w-full lg:w-1/4 lg:h-screen overflow-scroll flex flex-col gap-2">
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                    <ChatID profile={profile} name="Md. Shakhawat Hossain" />
                </div>
                <div className="lg:w-3/4 p-2 bg-clrthird/10 rounded-md">
                    <div className="flex justify-between items-center border-b-2 border-clrthird/10  ">
                        <div className="flex gap-2">
                           <img src={profile} alt="profile" className='w-[40px] h-[40px] object-cover rounded-full   ' />
                           <div>
                            <h4 className='font-ubuntu   '>Md. Shakhawat Hossain</h4>
                            <p className='font-ubuntu text-[12px] text-clrthird/70   '><span>active</span> <span>20m</span> <span>ago</span></p>
                           </div>
                        </div>
                        <div className="flex gap-5">
                            <FiPhoneCall className='text-lg' />
                            <BsCameraVideo className='text-lg' />
                            <FcInfo className='text-lg' />
                            <IoIosArrowForward className='text-lg' />
                        </div>
                    </div>
                </div>
            </div>
            {/* messages main end */}



            {/* messages option bottom start */}
            <div className="flex justify-between">
                <button type='button'><PiChats/></button>
                <button type='button'><BsPeople/></button>
                <button type='button'><TbMessageCircleUp/></button>
            </div>
            {/* messages option bottom end */}
        </div>
    </section>
    </>
  )
}

export default Message