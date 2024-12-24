import React, { useState } from 'react';

// icons
import { MdClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { GoCommentDiscussion } from "react-icons/go";
import { FaShare } from "react-icons/fa6";


const Post = ({profile , name , visiblity , text , imgView , videoView ,imgLink}) => {

    // like function
    let [like , setLike] = useState(false);

  return (
    <div className='container p-2 shadow2 rounded-md mt-2'>
        <div className="flex relative">
            <img src={profile} alt="profile" className='w-[50px] h-[50px] object-cover rounded-full  ' />
            <div className="ml-3">
                <h3 className='font-aldrich    '>{name}</h3>
                <p className='font-ubuntu text-clrthird'>{visiblity}</p>
            </div>
            <div className="absolute flex top-0 right-0 gap-5">
                <button type='button'className='text-xl w-[40px] h-[20px] bg-clrthird/10 rounded-md grid place-items-center '><BsThreeDots /></button>
                <button type='button'className='text-xl w-[40px] h-[20px] bg-clrthird/10 rounded-md grid place-items-center '><MdClose/></button>
            </div>
        </div>
        <p className='mt-2 p-2 lg:w-1/2 text-justify'>{text} 
            <span className='block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur officia labore nesciunt? Dolorem itaque cumque ducimus doloremque, repellat eaque?</span>
        </p>
        <img src={imgLink} alt="imgLink" className={`${imgView} h-[300px] lg:w-1/2 object-cover`} />
        <video src="" controls className={`${videoView}`}></video>
        <div className="flex mt-1 justify-between text-clrthird font-ubuntu border-b">
            <p>Likes</p>
            <p>Comments</p>
            <p>Shares</p>
        </div>
        <div className="flex justify-between mt-1">
            <button type='button'className={`text-lg ${like ? 'text-brand' : 'text-clrthird'}`} onClick={()=> setLike(prevState => !prevState)}><SlLike/></button>
            <button type='button'className={`text-lg text-clrthird`}><GoCommentDiscussion/></button>
            <button type='button'className={`text-lg text-clrthird`}><FaShare/></button>
        </div>
    </div>
  )
}

export default Post