import React from 'react';



// Icons 
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";





const Search = () => {
  return (
    <section className='py-2'>
        <div className="container">
            {/* search box start */}
            <div className="flex items-center gap-3  ">
                <div className="w-fit"><IoIosArrowRoundBack className='text-3xl cursor-pointer'/></div>
                <div className="w-full"><input type="text" className='w-full bg-clrthird/10 rounded-[20px] outline-none py-1 px-2  ' placeholder='Search..' /></div>
                <div className="w-fit"><BsSearch className='text-xl cursor-pointer'/></div>
            </div>
            {/* search box end */}
        </div>
    </section>
  )
}

export default Search