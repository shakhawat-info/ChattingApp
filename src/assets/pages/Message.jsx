import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { getDatabase, ref, onValue ,set , push, remove, update} from "firebase/database";
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router';
import moment from 'moment';


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
import { RiArrowDownSLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { RiShareForwardLine } from "react-icons/ri";
import { FcDeleteDatabase } from "react-icons/fc";
import { LiaReplySolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";
import { GoIssueClosed } from "react-icons/go";



// images
import ChatBg from '../images/Chatbg.jpg'
import { current } from '@reduxjs/toolkit';


const Message = () => {


  // message input box
  let [type , setType] = useState(false);
  let [typed , setTyped ] = useState('');
  let [sms , setSms] = useState([]);
  let [isedit , setIsedit] = useState(false)
  let typing = (e)=>{
    if(e.target.value){
      setType(true);
      setTyped(e.target.value);
    }
    else{
      setType(false);
      setTyped('');
      setIsedit(false)
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

  // DataBase
  const db = getDatabase();
  const currentUser = useSelector((state)=> state.userInfo.value)
  const [chatID , setChatID] = useState([]) 
  let [openedID , setOpenedID] = useState('')
  
  useEffect(()=>{
    // Fatch friends from dataBase
    const friendRef = ref(db, 'Friends');
    onValue(friendRef, (snapshot) => {
      let FriendsList = [];
      snapshot.forEach((item)=>{
        if(item.val().receiver.uid === currentUser.user.uid){
          FriendsList.push({...item.val().sender })
        }if(item.val().sender.uid === currentUser.user.uid){
          FriendsList.push({...item.val().receiver })
        }
      })
      setChatID(FriendsList);
    });
    
    
  },[])


// open chatBox
let [chat , setChat] = useState(false);
let [allChat , setAllChat] = useState([]);
let [chathistory , setChathistory] = useState([])
let [openChatID , setOpenChatID] = useState([]);
let openChat = (chatID)=>{
  setOpenChatID(null);
  setOpenChatID([chatID]);
  setOpenedID(chatID.uid);
  
} 




// SMS send function
let Send = (receiver)=>{
  setOpenedID(receiver.uid)
  set(push(ref(db , "messages/")),{
    senderID: currentUser.user.uid,
    receiverID: receiver.uid,
    SMS: typed,
    time: `${new Date().getFullYear()} - ${new Date().getMonth()+1} - ${new Date().getDate()} - ${new Date().getHours()} - ${new Date().getMinutes()+1} - ${new Date().getSeconds()+1}`
  })
  .then(()=>{
    setTyped('');
    setType(false);
  })
  
}

useEffect(()=>{
const messagesRef = ref(db, 'messages/' );
onValue(messagesRef, (snapshot) => {
  let smsArr = [];
  snapshot.forEach((item)=>{
    
    if(currentUser.user.uid == item.val().senderID && openedID == item.val().receiverID || 
       currentUser.user.uid == item.val().receiverID && openedID == item.val().senderID ){
        smsArr.push(item);
    }
  })
  setSms(smsArr)
});

},[openedID])


// smsMenu
let [smsindexmenu , setSmsindexmenu] = useState(null);
let [isSMSmenu , setIsSMSmenu] = useState(false)
const smsMenu = (smsItem , index)=>{
  setSmsindexmenu(index);
  setIsSMSmenu(true)
  
  
}
useEffect(()=>{
  setSmsindexmenu(smsindexmenu);
},[smsindexmenu])


// unsendsms
let unsendsms = (smsItem)=>{
remove(ref(db , `messages/${smsItem.key}`))
.then(()=>{
  setIsSMSmenu(false)
})
}


// editsms
let [editID , setEditID] = useState('')
let editsms = (smsItem)=>{
  setType(true);
  setTyped(smsItem.val().SMS);
  setIsSMSmenu(false);
  setIsedit(true);
  setEditID(smsItem.key)
}

// updatesms
let updatesms = ()=>{
  
  update(ref(db , `messages/${editID}`),{
    SMS: typed
  })
  .then(()=>{
  setType(false);
  setTyped('');
  setIsedit(false);
  setEditID('')
  })
  
}
  return (
    <section className='h-screen overflow-scroll'>
        <div className="container relative">
            {/* message option setting start */}
            <div className="flex justify-between shadow px-2 ">
                <h3 className='font-aldrich font-medium text-lg   '>Messages</h3>
                <div className="flex gap-x-2 ">
                    <button type='button' className='p-2 text-lg '><FcSettings/></button>
                    <button type='button' className='p-2 text-lg '><BsSearch/></button>
                </div>
            </div>
            {/* message option setting end */}

            {/* messages ID start */}
            <div className="lg:hidden">
                {/* <Slider {...ChatBobbles}>
                </Slider> */}
            </div>
            {/* messages ID end */}

            {/* messages main start */}
            <div className="flex gap-2 mt-1">
                <div key="root" className="w-full lg:w-1/4  overflow-scroll flex flex-col lg:gap-2 gap-1">
                {chatID.map((item)=>(
                  <div key={item.key} onClick={()=>openChat(item)} className={`flex  h-auto items-center gap-2 relative bg-clrthird/10 hover:bg-transparent p-1 rounded-md duration-[.2s] cursor-pointer lg:mr-0 mr-1`}>
                    <img src={item.photoURL} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
                    <div className="">
                      <p className={`truncate text-[12px] lg:text-[16px] font-ubuntu text-clrthird  `} >{item.displayName }</p>
                      <p className='text-clrthird/60  text-[12px] '></p>
                    </div>
                  </div>
                ))}
                </div>
                {openChatID.map((item)=>(
                <div key={item.key} className="lg:w-3/4 h-screen rounded-md shadow flex flex-col justify-between items-center relative  ">
                  <img src={ChatBg} alt="Chatbg" className='absolute top-0 left-0 opacity-[.5] z-[-1] w-full h-full object-cover   '/>
                    <div className="flex p-2 justify-between items-center shadow bg-primarytxt/70 w-full  ">
                        <div className="flex gap-2">
                           <img src={item.photoURL} alt="profile" className='w-[40px] h-[40px] object-cover rounded-full border border-brand   ' />
                           <div>
                            <h4 className='font-ubuntu   '>{item.displayName}</h4>
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

                    <div className="text-center">
                      <img src={item.photoURL} alt="profile" className='w-[150px] h-[150px] rounded-full mx-auto border-2 border-brand  ' />
                      <h2 className='text-center font-aldrich font-bold text-xl mt-2 text-primarytxt '>{item.displayName}</h2>
                      <p className="font-ubuntu text-darkprimary   ">You are friends on <span className=" ">SocioGram</span></p>
                      <Link to="" className='px-5 py-1 bg-brand rounded-md mt-3 text-primarytxt font-semibold inline-block  '>View Profile</Link>
                    </div>
                    

                    {/* Chat SMS */}
                    <div className="flex flex-col gap-1 w-full px-3 ">
                      {sms.map((smsItem , index)=>(
                      <div className={`flex w-full  ${smsItem.val().senderID == currentUser.user.uid ? 'justify-end ' : 'justify-start'}`}>
                        <div className={`flex gap-[4px] w-[45%] items-end ${smsItem.val().senderID == currentUser.user.uid ? 'flex-row ' : 'flex-row-reverse '} `}>
                          <div className={`max-w-[95%] w-fit relative rounded-[20px] py-2 px-5  ${smsItem.val().senderID == currentUser.user.uid ? 'bg-brand rounded-br-none ml-auto' : 'bg-gray-500 rounded-bl-none mr-auto' }`}>
                            <p className={`font-ubuntu  w-full text-justify text-primarytxt break-words   `}>{smsItem.val().SMS}</p>
                            <div className={`flex relative ${smsItem.val().senderID == currentUser.user.uid && 'justify-end' }`}>
                              <p className={` text-primarytxt text-[10px]  font-aldrich font-thin `}>{moment(smsItem.val().time , "YYYYMMDD h:mm:ss ").fromNow()}</p>
                              <RiArrowDownSLine onClick={()=>smsMenu(smsItem , index)} className={`absolute bottom-[0px] text-primarytxt cursor-pointer ${smsItem.val().senderID == currentUser.user.uid ? 'right-[-15px]' : 'left-[-15px]'}  `}/>
                              {smsindexmenu === index && isSMSmenu && 
                              <ul className={` absolute bottom-0 overflow-hidden bg-white pb-2 pt-5 rounded-md ${smsItem.val().senderID == currentUser.user.uid ? 'right-0' : 'left-0'}`}>
                                <CgClose onClick={()=> setIsSMSmenu(false)} className='cursor-pointer absolute top-0 right-0 bg-brand/20 w-[30px] h-[20px] rounded-bl-[10px] '/>
                                {smsItem.val().senderID == currentUser.user.uid && <li onClick={()=> editsms(smsItem)} className='flex items-center gap-3 px-5 hover:bg-brand/10 cursor-pointer  '><CiEdit/> <span>edit</span></li>}
                                <li className='flex items-center gap-3 px-5 hover:bg-brand/10 cursor-pointer  '><RiShareForwardLine/> <span>forward</span></li>
                                {smsItem.val().senderID == currentUser.user.uid && <li onClick={()=> unsendsms(smsItem)} className='flex items-center gap-3 px-5 hover:bg-brand/10 cursor-pointer  '><FcDeleteDatabase/> <span>unsend</span></li>}
                                <li className='flex items-center gap-3 px-5 hover:bg-brand/10 cursor-pointer  '><LiaReplySolid/> <span>reply</span></li>
                              </ul>
                              }
                            </div>
                          </div>
                          <img src={smsItem.val().senderID == currentUser.user.uid ? currentUser.user.photoURL : item.photoURL} alt="profile" className='w-[15px] h-[15px] rounded-full object-cover '/>
                        </div>
                      </div>
                      ))}
                    </div>

                    <div className=" w-full flex items-center pb-1 gap-2 px-2 bg-primarytxt pt-[4px]">
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
                        <input type="text" value={typed} className='w-full bg-clrthird/10 rounded-[20px] outline-none px-2 ' placeholder='Message' onChange={typing} />
                      </div>
                      <div className="w-fit">
                        
                        {type && isedit && <GoIssueClosed onClick={updatesms}/>}
                        {type && !isedit && <CiLocationArrow1 className='text-brand text-lg cursor-pointer  ' onClick={()=> Send(item)}/>}
                        {!type && !isedit && <BsEmojiWink/>}
                      </div>
                    </div>
                </div>
                ))}
                {openChatID.length == 0 && 
                <div>asdfasfs</div>
                }
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
  )
}

export default Message