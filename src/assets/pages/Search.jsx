import React from 'react';



// Icons 
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { PiScanThin } from "react-icons/pi";
import { useNavigate } from 'react-router';




const Search = () => {
  // variables
  let navigate = useNavigate()
  return (
    <section className='py-2 h-screen fixed top-0 left-0 w-full bg-primarytxt'>
        <div className="container">
            {/* search box start */}
            <div className="flex items-center gap-3  ">
                <div className="w-fit" onClick={()=>navigate(-1)}><IoIosArrowRoundBack className='text-3xl cursor-pointer'/></div>
                <div className="w-full relative">
                  <PiScanThin className='absolute top-[8px] left-[10px]  '/>
                  <input type="text" className='pl-[35px] w-full bg-clrthird/10 rounded-[20px] outline-none py-1 px-2 font-ubuntu text-clrthird border ' placeholder='Search..' />
                </div>
                <div className="w-fit"><BsSearch className='text-xl cursor-pointer'/></div>
            </div>
            {/* search box end */}
        </div>
    </section>
  )
}

export default Search