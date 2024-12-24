import React, { useState } from 'react';
import { useNavigate } from 'react-router';


// images
import cover from '../images/profilecover.jpg';
import profile from '../images/profile.jpg';


// components
import Nav from './Components/Nav';
import Menu from './Components/Menu'

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

// console.log(activebtn);

// Post box function
let [postBox , setPostbox] = useState(false);

let postbxView =()=>{
    setPostbox(true)
}

  return (
    <>
    {/* nav and menu */}
    <Nav menu={MenuVisiblity} friends={()=> navigate('/friends')} home={()=> navigate('/home')} message={()=> navigate('/message')} />
    <Menu memu={memu} menuClose={() => setMenu(false)}/>

    {/* Profile */}
    <section className=''>
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
            <div className="flex mt-5">

                {/* postBox */}
                <div className="w-[60%]">
                  <div className="flex gap-3 shadow2 p-2 rounded-md">
                    <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover  ' />
                    <input type="text" placeholder="What's on you mind? Md. Shakhawat."  className='w-full outline-none    '  onClick={()=>setPostbox(true) } />
                  </div>

                </div>
            </div>



        </div>
    </section>
    </>
  )
}

export default Profile