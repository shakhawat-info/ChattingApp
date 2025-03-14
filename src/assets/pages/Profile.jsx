import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


// images
import cover from '../images/profilecover.jpg';
import profile from '../images/profile.jpg';


// icons
import { TfiClose } from "react-icons/tfi";
import { FaEarthEurope } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FiUserMinus } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiHashtag } from "react-icons/ci";
import { GoMention } from "react-icons/go";
import { BsEmojiWink } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoImagesOutline } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsCameraReels } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { RxFileText } from "react-icons/rx";
import { IoLinkOutline } from "react-icons/io5";
import { LiaPollSolid } from "react-icons/lia";
import { LiaShareSolid } from "react-icons/lia";
import { FcWorkflow } from "react-icons/fc";
import { GiBookAura } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { IoTimeOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { MdMoreHoriz } from "react-icons/md";




// components
import FriendList from './Components/FriendList';






const Profile = () => {
      // variables
  let navigate = useNavigate();
  let [about , setAbout] = useState(false)
  



//   Profile option function


let [more , setMore] = useState(false);
let moreView = ()=>{
  setMore(prevState => !prevState)
}





// Post box function
let [postBox , setPostbox] = useState(false);


// Post visiblity function
let [visiblity , setVisiblity] = useState('');
let [visiblityoption , setVisiblityoption] = useState(false);

let postView = (e)=>{
  setVisiblity(e.target.innerHTML);
  setVisiblityoption(false);
}


// post Button
let [postbtn , setPostbtn] = useState('');
let postbtnFn = (e)=>{
  setPostbtn(e.target.value)
}


// Post options
let [postoptn , setPostoptn] = useState(1);


// userdata

let userInfo = useSelector((state)=>state.userInfo.value);


// view functions
let [view , setView] = useState('post');
let showPost = ()=>{
  setView('post')
  setAbout(false)
}

let showFriends =()=>{
  setView('friends')
  setAbout(false)
  setMore(prevState => !prevState)
}

let showPhoto = ()=>{
  setView('photos')
  setAbout(false)
}

let showVideo = ()=>{
  setView('videos')
  setAbout(false)
  setMore(prevState => !prevState)
}

let showGroups = ()=>{
  setView('groups')
  setAbout(false)
  setMore(prevState => !prevState)
}

let showMusics = ()=>{
  setView('musics')
  setAbout(false)
  setMore(prevState => !prevState)
}

let showBooks = ()=>{
  setView('books')
  setAbout(false)
  setMore(prevState => !prevState)
}


let showAbout = ()=>{
  setAbout(true)
}
  return (
    <>
    {/* Profile */}
    <section className='pb-10'>
        <div className="container">
            <div className="shadow rounded-md">

               {/* Profile Image */}
               <div className="relative">
                <img src={cover} alt="cover" className='w-full h-[170px] lg:h-[400px] object-cover   ' />
                <img src={userInfo.user.photoURL} alt="profile" className='lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]  rounded-full object-cover absolute lg:bottom-[-100px] bottom-[-50px] right-0 border-2 border-brand     ' />
               </div>


               {/* Profile Name & username */}
               <div className="text-right lg:pr-[170px] pr-[110px] lg:py-5 py-2">
                <h2 className='font-aldrich font-bold lg:text-xl text-[16px]    '>{userInfo.user.displayName}</h2>
                <p className='font-ubuntu text-clrthird  '>@{userInfo.userName}</p>
                
               </div>


               {/* Profile Bio */}
               <div className="text-center mt-2">
                <h4 className='text-clrthird text-[14px] lg:text-nor'>
                    <span className='block'>"আমি ব্যর্থতা কে মেনে নিতে পারি</span>
                    <span className='block'>কিন্তু আমি চেষ্টা না করাকে মেনে নিতে পারিনা"</span>
                    <span className='block'>_মাইকেল জর্ডান</span>
                </h4>
               </div>



               {/* Profile options  */}
               <div className="flex gap-5 py-2 px-5 mt-10 border-t font-ubuntu relative  ">
                   <button type='button' onClick={showPost} className={`${view === 'post' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Posts</button>
                   <button type='button' onClick={showAbout}  className={`${about ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn lg:absolute top-0 right-0 lg:bg-brand lg:text-primarytxt lg:py-1 lg:px-5 lg:h-full flex items-center gap-2 lg:rounded-br-[5px] `}> <span>About</span> <LiaShareSolid className="rotate-[90deg] hidden lg:inline-block "/> </button>
                   <button type='button' onClick={showPhoto} className={`${view === 'photos' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Photos</button>
                   <button onClick={moreView} type='button' className='optnBtn flex items-center gap-2 lg:hidden '><MdMoreHoriz/><span>See more</span></button>
                   <div className={`gap-5 ${!more ? 'hidden lg:flex' : 'flex flex-col lg:flex-row absolute lg:relative z-[1] top-[100%] lg:left-[0px] left-[240px] lg:p-0 p-2 lg:shadow-none shadow2 '} bg-primarytxt `}>
                     <button type='button' onClick={showVideo} className={`${view === 'videos' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Videos</button>
                     <button type='button' onClick={showFriends} className={`${view === 'friends' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Friends</button>
                     <button type='button' onClick={showGroups} className={`${view === 'groups' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Groups</button>
                     <button type='button' onClick={showMusics} className={`${view === 'musics' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Musics</button>
                     <button type='button' onClick={showBooks} className={`${view === 'books' ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Books</button>
                   </div>
               </div>

            </div>


            {/* Profile info & postBox */}
            {view === 'post' &&
              <div className={`flex lg:flex-row flex-col-reverse justify-between mt-2`}>

                {/* postBox */}
                <div className="lg:w-[60%] lg:mt-0 mt-2">
                  <div className={`${postBox ? 'h-auto ' : 'h-[70px]'} overflow-hidden shadow2`}>
                    <div className="flex gap-3 justify-between  p-2 rounded-md relative" >
                       <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
                       {postBox ?
                       <button type='button' className='cursor-pointer w-[50px] h-[30px] rounded-bl-[20px] absolute top-0 right-0 grid place-items-center bg-clrthird/10' onClick={()=> setPostbox(false)} ><TfiClose /></button>
                       :
                       <input type="text" placeholder="What's on you mind? Md. Shakhawat."  className='w-full outline-none  ' onClick={()=> setPostbox(true)} />
                       // 
                       }
                    </div>
                    <div className="w-full h-auto">
                      <textarea onChange={postbtnFn} name="status" id="status" placeholder="What's on your mind?" className='w-full h-[100px] p-2 outline-none  '></textarea>
                      

                      {/* post visiblity and reaction  */}
                      <div className="flex justify-between items-center px-2 border-b">
                        {/* post visiblity */}
                        <div className="relative p-2">
                          <h4 className='font-ubuntu text-clrthird py-1 px-2 border border-[#000] rounded-[20px] text-[14px] cursor-pointer  ' onClick={()=>setVisiblityoption(true)}>
                            {!visiblity && <p className='flex items-center gap-2'><FaEarthEurope/><span>Public</span> <MdKeyboardArrowDown/></p>}
                            {visiblity == 'Public' && <p className='flex items-center gap-2'><FaEarthEurope/><span>Public</span><MdKeyboardArrowDown/></p>}
                            {visiblity == 'Friends' && <p className='flex items-center gap-2'><GoPeople/> <span>Friends</span><MdKeyboardArrowDown/></p>}
                            {visiblity == 'Friends except' && <p className='flex items-center gap-2'><FiUserMinus/> <span>Friends except</span><MdKeyboardArrowDown/></p>}
                            {visiblity == 'Only me' && <p className='flex items-center gap-2'><LuUser/> <span>Only me</span><MdKeyboardArrowDown/></p>}
                          </h4>
                          <ul className={`${visiblityoption ? 'block ' : 'hidden'} bg-primarytxt absolute top-[90%] border left-0 w-[200px] p-2 `}>
                            <li className='flex items-center gap-2 cursor-pointer hover:bg-clrthird/10 p-1 ' onClick={postView}><FaEarthEurope/><span className='w-full'>Public</span></li>
                            <li className='flex items-center gap-2 cursor-pointer hover:bg-clrthird/10 p-1 ' onClick={postView}><GoPeople/> <span className='w-full'>Friends</span></li>
                            <li className='flex items-center gap-2 cursor-pointer hover:bg-clrthird/10 p-1 ' onClick={postView}><FiUserMinus/> <span className='w-full'>Friends except</span></li>
                            <li className='flex items-center gap-2 cursor-pointer hover:bg-clrthird/10 p-1 ' onClick={postView}><LuUser/> <span className='w-full'>Only me</span></li>
                          </ul>
                        </div>
                        {/* post mentions&tags */}
                        <div className="flex gap-3">
                          <CiHashtag className='cursor-pointer'/>
                          <GoMention className='cursor-pointer'/>
                          <BsEmojiWink className='cursor-pointer'/>
                        </div>
                      </div>


                      {/* post image/video & others */}
                      <div className="flex flex-wrap gap-y-5 gap-x-5 p-2 justify-between ">
                        <button type='button' className='postOption '><CiImageOn className='text-brand text-lg '/><span>Upload Photos</span></button>
                        <button type='button' className='postOption '><IoImagesOutline className='text-brand text-lg '/><span>Create Albums</span></button>
                        <button type='button' className='postOption '><BsEmojiWink className='text-brand text-lg'/><span>Fellings/Activity</span></button>
                        <button type='button' className='postOption '><IoColorPaletteOutline className='text-brand text-lg '/><span>Colored Posts</span></button>
                        <button type='button' className='postOption '><BsCameraReels className='text-brand text-lg '/><span>Upload Reels</span></button>
                        <button type='button' className='postOption '><GoVideo className='text-brand text-lg '/><span>Upload Video</span></button>
                      </div>

                      {/* post button */}
                      <div className="text-right p-2">

                        <button type='button' className={`py-2 px-[50px] font-ubuntu font-semibold rounded-md tracking-[2px] ${postbtn ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10 text-clrthird' }  `}>Post</button>
                      </div>

                    </div>
                  </div>

                  {/* post filter */}
                  <div className="flex gap-5 mt-2  p-2 overflow-x-scroll">
                    <button type='button' onClick={()=>setPostoptn(1)} className={`postFilter ${postoptn === 1 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><MdAlignHorizontalLeft/><span>all</span></button>
                    <button type='button' onClick={()=>setPostoptn(2)} className={`postFilter ${postoptn === 2 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><RxFileText/><span>text</span></button>
                    <button type='button' onClick={()=>setPostoptn(4)} className={`postFilter ${postoptn === 4 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><CiImageOn/><span>images</span></button>
                    <button type='button' onClick={()=>setPostoptn(5)} className={`postFilter ${postoptn === 5 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><GoVideo/><span>videos</span></button>
                    <button type='button' onClick={()=>setPostoptn(3)} className={`postFilter ${postoptn === 3 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><IoLinkOutline/><span>links</span></button>
                    <button type='button' onClick={()=>setPostoptn(6)} className={`postFilter ${postoptn === 6 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><LiaPollSolid/>polls</button>
                  </div>


                </div>

                {/* about box */}
                <div className={`p-2 shadow2 lg:w-[35%]  ${about ? 'block' : 'hidden lg:block'}`}>
                  <h2 className=' font-aldrich flex justify-end items-center gap-2  '>About <FcInfo/></h2>
                  <ul className='w-full mt-5 flex flex-col gap-2'>
                    <li className="flex items-center gap-2 font-ubuntu"><FcWorkflow/><span className='text-clrthird'>Works at</span> <b className='text-[14px]'>MERN</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><FcWorkflow/><span className='text-clrthird'>Works at</span> <b className='text-[14px]'>Creative IT Institute</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><GiBookAura/><span className='text-clrthird'>Studied at</span> <b className='text-[14px]'>Jadurchar , Bangladesh</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><GiBookAura/><span className='text-clrthird'>Went to</span> <b className='text-[14px]'>Divine pre-cadet and High School</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><HiOutlineHome/><span className='text-clrthird'>Lives in</span> <b className='text-[14px]'>Rangpur City</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><CiLocationOn/><span className='text-clrthird'>From in</span> <b className='text-[14px]'>Rowmary</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><FcLike/><b className='text-[14px]'>Single</b></li>
                    <li className="flex items-center gap-2 font-ubuntu"><IoTimeOutline/><span className='text-clrthird'>Joined</span><b className='text-[14px]'>{userInfo.creationTime}</b></li>
                    {/* {userInfo.metadata.creationTime}  */}
                    <li className="flex items-center gap-2 font-ubuntu"><BsThreeDots/><span className='text-clrthird'>See more</span><b className='text-[14px]'>  </b></li>
                  </ul>
                </div>



              </div>
            }
            {view === 'friends' &&
            <FriendList/>
            }



        </div>
    </section>
    </>
  )
}

export default Profile