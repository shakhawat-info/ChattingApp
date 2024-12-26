import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// components
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import ChatID from './Components/ChatID';



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
import { GoPlusCircle } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiWink } from "react-icons/bs";
import { RiMic2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

// Images 
import profile from '../images/profile.jpg';

const Message = () => {


  // message input box
  let [type , setType] = useState(false);
  let typing = (e)=>{
    if(e.target.value){
      setType(true);
    }
    else{
      setType(false);
    }
  }


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

const ChatBobbles = {
  ...settings,
  centerPadding: "5px",
}

  return (
    <>
      <Nav />
      <Menu />
    
    <section className='h-screen overflow-scroll'>
        <div className="container relative">
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
                <Slider {...ChatBobbles}>
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="" smsNumber="" nameWidth="50px" smsimg="flex-col"  />
                </Slider>
            </div>
            {/* messages ID end */}

            {/* messages main start */}
            <div className="flex gap-2 mt-1">
                <div className="w-full lg:w-1/4 lg:h-screen overflow-scroll flex flex-col lg:gap-2 gap-1 ">
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                     <ChatID profile={profile} name="Md. Shakhawat Hossain" chatSMS="Hello Sir?" smsNumber="13" nameWidth='fit' bg="ok" />
                </div>
                <div className="lg:w-3/4 lg:block hidden rounded-md shadow relative   ">
                    <div className="flex p-2 justify-between items-center shadow border-clrthird/10   ">
                        <div className="flex gap-2">
                           <img src={profile} alt="profile" className='w-[40px] h-[40px] object-cover rounded-full   ' />
                           <div>
                            <h4 className='font-ubuntu   '>Md. Shakhawat Hossain</h4>
                            <p className='font-ubuntu text-[12px] text-clrthird/70   '><span>active</span> <span>20m</span> <span>ago</span></p>
                           </div>
                        </div>
                        <div className="flex gap-5">
                            <FiPhoneCall className='text-lg text-brand ' />
                            <BsCameraVideo className='text-lg text-brand ' />
                            <FcInfo className='text-lg' />
                            <IoIosArrowForward className='text-lg text-brand ' />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex  items-center pb-1 gap-2 px-2 ">
                      <div className="flex w-fit gap-3 items-center">
                        {type ?
                        <MdOutlineKeyboardArrowRight className='text-lg text-brand cursor-pointer  ' onClick={()=> setType(false)} />
                         :
                        <>
                          <GoPlusCircle className='text-lg text-brand  cursor-pointer ' />
                          <CiCamera className='text-[20px] text-brand  cursor-pointer ' />
                          <CiImageOn className='text-lg text-brand  cursor-pointer ' />
                          <RiMic2Line className='text-lg text-brand cursor-pointer  ' />
                        </>
                        }

                      </div>
                      <div className="w-full relative">
                        <input type="text" className='w-full bg-clrthird/10 rounded-[20px] outline-none px-2 ' placeholder='Message' onChange={typing} />
                      </div>
                      <div className="w-fit">
                        {type ?
                        <CiLocationArrow1 className='text-brand text-lg cursor-pointer  ' />
                        :
                        <BsEmojiWink className='text-brand text-lg cursor-pointer  ' />
                        }
                      </div>
                    </div>
                </div>
            </div>
            {/* messages main end */}



            {/* messages option bottom start */}
            <div className="flex lg:hidden justify-between fixed bottom-0 left-0 w-full border-t bg-primarytxt p-2  ">
                <button type='button' className='flex items-center gap-2 text-lg font-ubuntu font-medium capitalize text-clrthird  ' ><PiChats/><span>Chats</span></button>
                <button type='button' className='flex items-center gap-2 text-lg font-ubuntu font-medium capitalize text-clrthird  ' ><BsPeople/><span>groups</span></button>
                <button type='button' className='flex items-center gap-2 text-lg font-ubuntu font-medium capitalize text-clrthird  ' ><TbMessageCircleUp/>requests</button>
            </div>
            {/* messages option bottom end */}
        </div>
    </section>
    </>
  )
}

export default Message