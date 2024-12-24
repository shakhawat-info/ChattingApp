import React, { useState } from 'react';
import { useNavigate } from 'react-router';


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




// components
import Nav from './Components/Nav';
import Menu from './Components/Menu'
import { button } from '@material-tailwind/react';

const Profile = () => {
      // variables
  let navigate = useNavigate();

  // Menu function
  let [memu, setMenu] = useState(false);
  let MenuVisiblity = () => {
    setMenu((prevState) => !prevState);
  };


//   Profile option function

let [activebtn , setActivebtn] = useState(1);





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


  return (
    <>
    {/* nav and menu */}
    <Nav menu={MenuVisiblity} friends={()=> navigate('/friends')} home={()=> navigate('/home')} message={()=> navigate('/message')} />
    <Menu memu={memu} menuClose={() => setMenu(false)}/>

    {/* Profile */}
    <section className='pb-10'>
        <div className="container">
            <div className="shadow rounded-md">

               {/* Profile Image */}
               <div className="relative">
                <img src={cover} alt="cover" className='w-full h-[400px] object-cover   ' />
                <img src={profile} alt="profile" className='w-[150px] h-[150px] rounded-full object-cover absolute bottom-[-100px] right-0 border-2 border-brand     ' />
               </div>


               {/* Profile Name & username */}
               <div className="text-right pr-[170px] py-5">
                <h2 className='font-aldrich font-bold text-xl    '>Md. Shakhawat Hossain</h2>
                <p className='font-ubuntu text-clrthird  '>@shakhawat.dev</p>
               </div>


               {/* Profile Bio */}
               <div className="text-center mt-2">
                <h4 className='text-clrthird'>
                    <span className='block'>"আমি ব্যর্থতা কে মেনে নিতে পারি</span>
                    <span className='block'>কিন্তু আমি চেষ্টা না করাকে মেনে নিতে পারিনা"</span>
                    <span className='block'>_মাইকেল জর্ডান</span>
                </h4>
               </div>



               {/* Profile options  */}
               <div className="flex gap-5 py-2 px-5 mt-10 border-t font-ubuntu   ">
                   <button type='button' onClick={()=> setActivebtn(1)} className={`${activebtn === 1 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Posts</button>
                   <button type='button' onClick={()=> setActivebtn(2)} className={`${activebtn === 2 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>About</button>
                   <button type='button' onClick={()=> setActivebtn(3)} className={`${activebtn === 3 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Photos</button>
                   <button type='button' onClick={()=> setActivebtn(4)} className={`${activebtn === 4 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Videos</button>
                   <button type='button' onClick={()=> setActivebtn(5)} className={`${activebtn === 5 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Friends</button>
                   <button type='button' onClick={()=> setActivebtn(6)} className={`${activebtn === 6 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Groups</button>
                   <button type='button' onClick={()=> setActivebtn(7)} className={`${activebtn === 7 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Musics</button>
                   <button type='button' onClick={()=> setActivebtn(8)} className={`${activebtn === 8 ? 'text-brand border-b-brand' : 'text-clrthird border-b-transparent'} optnBtn `}>Books</button>
               </div>

            </div>


            {/* Profile info & postBox */}
            <div className="flex mt-2">

                {/* postBox */}
                <div className="w-[60%]">
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
                      <div className="flex flex-wrap gap-y-5 gap-x-5 p-2 ">
                        <button type='button' className='postOption '><CiImageOn className='text-brand text-lg'/><span>Upload Photos</span></button>
                        <button type='button' className='postOption '><IoImagesOutline className='text-brand text-lg'/><span>Create Albums</span></button>
                        <button type='button' className='postOption '><BsEmojiWink className='text-brand text-lg'/><span>Fellings/Activity</span></button>
                        <button type='button' className='postOption '><IoColorPaletteOutline className='text-brand text-lg'/><span>Colored Posts</span></button>
                        <button type='button' className='postOption '><BsCameraReels className='text-brand text-lg'/><span>Upload Reels</span></button>
                        <button type='button' className='postOption '><GoVideo className='text-brand text-lg'/><span>Upload Video</span></button>
                      </div>

                      {/* post button */}
                      <div className="text-right p-2">

                        <button type='button' className={`py-2 px-[50px] font-ubuntu font-semibold rounded-md tracking-[2px] ${postbtn ? 'bg-brand text-primarytxt ' : 'bg-clrthird/10 text-clrthird' }  `}>Post</button>
                      </div>

                    </div>
                  </div>

                  {/* post filter */}
                  <div className="flex gap-5 mt-2  p-2">
                    <button type='button' onClick={()=>setPostoptn(1)} className={`postFilter ${postoptn === 1 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><MdAlignHorizontalLeft/><span>all</span></button>
                    <button type='button' onClick={()=>setPostoptn(2)} className={`postFilter ${postoptn === 2 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><RxFileText/><span>text</span></button>
                    <button type='button' onClick={()=>setPostoptn(3)} className={`postFilter ${postoptn === 3 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><IoLinkOutline/><span>links</span></button>
                    <button type='button' onClick={()=>setPostoptn(4)} className={`postFilter ${postoptn === 4 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><CiImageOn/><span>images</span></button>
                    <button type='button' onClick={()=>setPostoptn(5)} className={`postFilter ${postoptn === 5 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><GoVideo/><span>videos</span></button>
                    <button type='button' onClick={()=>setPostoptn(6)} className={`postFilter ${postoptn === 6 ? 'bg-brand text-primarytxt' : 'bg-clrthird/10 '} `}><LiaPollSolid/>polls</button>
                  </div>


                </div>
            </div>



        </div>
    </section>
    </>
  )
}

export default Profile