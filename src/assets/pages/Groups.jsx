import React, { useEffect, useRef, useState } from 'react';
import { getDatabase, push, ref, set ,onValue, remove  } from "firebase/database";


// icons
import { GoPlusCircle } from "react-icons/go";
import { FcInvite } from "react-icons/fc";
import { CiTimer } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';



const Groups = () => {
  // variables
  const db = getDatabase();
  let [groups , setGroups] = useState([]);
  let [searchGroup , setSearchGroup] = useState([])
  let [creategroupModal , setCreategroupModal] = useState(false);
  let [viewGroupname , setViewGroupname] = useState('show');
  let [nameerr , setNameerr] = useState('')
  let [viewGroupPublicity , setViewGroupPublicity] = useState('hide')
  let [publicityErr , setPublicityErr] = useState('')
  let currentUser = useSelector((state)=>state.userInfo.value);



  // CloseGroupCreateModal function
  let CloseGroupCreateModal = ()=>{
    setCreategroupModal(false);
    setViewGroupname('show');
    setViewGroupPublicity('hide')
    setNameerr('')
    setGroupName('')
  }

  // name func
  let [groupName , setGroupName] = useState('')
  let nameInput = (e)=>{
    setNameerr('')
    setGroupName(e.target.value);
  }
  let nameNext = ()=>{
    if(!groupName) setNameerr('Group name can not be empty!');
    if(groupName && groupName.length < 4) setNameerr('Name must have 4 carecter');
    if(groupName && groupName.length >= 4) {
      setViewGroupname('hide');
      setViewGroupPublicity('show');
    }
  }
  
  // back to name
  let backTOname = ()=>{
    setViewGroupname('show');
    setViewGroupPublicity('hide');
  }

  // viewGroupPublicity func
  let PublicRef = useRef();
  let PrivateRef = useRef();

  let privacyNext = ()=>{
    if(!PublicRef.current.checked && !PrivateRef.current.checked) setPublicityErr('Please select one.');

    // group object
    let group = {name: groupName , visiblity: PublicRef.current.checked ? 'public' : 'private' , CreatedBy: currentUser.user.uid  }
    
    if(PublicRef.current.checked || PrivateRef.current.checked){

      set(push(ref(db, 'Groups/' )), {
        group
      }).then(()=>{
        setCreategroupModal(false);
        setViewGroupname('show');
        setViewGroupPublicity('hide')
        setNameerr('')
        setGroupName('')
        setPublicityErr('');
        PublicRef.current.checked === false
        PrivateRef.current.checked === false
      })
    }
  }

  // find groups
  useEffect(()=>{
    const groupRef = ref(db, 'Groups/');
    onValue(groupRef, (snapshot) => {
      let userGroup = []
       snapshot.forEach((groupItem)=>{
        if(groupItem.val().group.CreatedBy == currentUser.user.uid){
          userGroup.push(groupItem)
        }
      })
      setGroups(userGroup)
    });
  },[])


  // LeaveGruop function
  let LeaveGruop =(itemgroup)=>{
    remove(ref(db , 'Groups/' + itemgroup.key))

    // remove the group
    setGroups((prevList) => prevList.filter((prevItem) => prevItem.key !== itemgroup.key));
  }

  // Search function
  let Search = (e)=>{
    let searchArr = []
    groups.map((item)=>{
      if(item.val().group.name.toLowerCase().includes(e.target.value.toLowerCase())){
        searchArr.push(item);
      }
    })
    setSearchGroup(searchArr);
    
  }
  return (
    <div className='container'>
      {/* group top */}
      <div className="flex justify-between items-center py-1 border  px-2 rounded-md ">
        <h2 className="font-aldrich font-semibold text-clrthird text-xl ">Groups</h2>
        <ul className="flex gap-10">
          <li onClick={()=> setCreategroupModal(true)} className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><GoPlusCircle className='text-xl'/><span>Create Group</span></li>
          <li className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><FcInvite className='text-xl'/><span>Invites</span></li>
          <li className='flex flex-col items-center text-clrthird font-ubuntu cursor-pointer '><CiTimer className='text-xl'/><span>Pending Joins</span></li>
        </ul>
      </div>

      {/* group view selection */}
      <div className="flex gap-10 p-2 border border-t-0 rounded-md">
        <button type="button" className={`font-ubuntu text-clrthird`}>Your Groups</button>
        <button type="button" className={`font-ubuntu text-clrthird`}>Others Group</button>
      </div>

      {/* Groups */}
      <div className="flex flex-col">
        <input type="search" onChange={Search} className='border outline-none py-1 px-3 mb-2 font-ubuntu text-clrthird  ' placeholder='Search groups...'/>
      {searchGroup.length > 0 ?
      <>
        {searchGroup.map((itemgroup , index)=>(
       <div key={index} className="flex flex-col p-2 border border-t-0 rounded-md  ">
         <div className="flex justify-between items-center ">
           <div className="flex gap-4 w-[80%]">
             <img src="https://picsum.photos/200/300" alt="groupImage" className='w-[50px] h-[50px] object-cover rounded-[12px]   '/>
             <div className="">
               <h2 className="font-aldrich   ">{itemgroup.val().group.name}</h2>
               <h5 className='font-ubuntu text-clrthird/50  '><span>203</span> members</h5>
             </div>
           </div>
           <button onClick={()=> LeaveGruop(itemgroup)} type="button" className='font-ubuntu py-1 px-5 bg-brand/10 text-clrthird h-fit rounded-md  '>Leave</button>
         </div>
       </div>
         ))}
      </>
       :
       <> 
        {groups.map((itemgroup , index)=>(
       <div key={index} className="flex flex-col p-2 border border-t-0 rounded-md  ">
         <div className="flex justify-between items-center ">
           <div className="flex gap-4 w-[80%]">
             <img src="https://picsum.photos/200/300" alt="groupImage" className='w-[50px] h-[50px] object-cover rounded-[12px]   '/>
             <div className="">
               <h2 className="font-aldrich   ">{itemgroup.val().group.name}</h2>
               <h5 className='font-ubuntu text-clrthird/50  '><span>203</span> members</h5>
             </div>
           </div>
           <button onClick={()=> LeaveGruop(itemgroup)} type="button" className='font-ubuntu py-1 px-5 bg-brand/10 text-clrthird h-fit rounded-md  '>Leave</button>
         </div>
       </div>
         ))}
        </>
      }
      </div>


      {/* Group create modal */}
      {creategroupModal && 
      <div className="grid place-items-center w-full h-screen bg-clrthird/20 fixed top-0 left-0 ">
        <div className=" w-[50%] h-fit p-5 bg-primarytxt border rounded-md relative ">
          {/* Close btn */}
          <button onClick={CloseGroupCreateModal} type="button" className='absolute top-0 right-0 text-xl text-clrthird p-2    '><IoCloseCircleOutline/></button>

          {/* group name */}
          {viewGroupname == 'show' &&
          <div className="">
            <h4 className='font-aldrich text-clrthird  '>Enter your group name.</h4>
            <input onChange={nameInput} value={groupName} type="text" className=' w-full border outline-none py-1 px-3 rounded-[5px] text-clrthird  ' placeholder='Group Name...'/>
            <p className="font-ubuntu text-[14px] text-red-500  ">{nameerr}</p>
            <div className="flex justify-end mt-5">
              <button onClick={nameNext} type='button' className=' font-ubuntu text-primarytxt bg-brand py-1 px-3 font-medium rounded-md  '>Next</button>
            </div>
          </div>
          }
          {/* group privacy */}
          {viewGroupPublicity == 'show' &&
          <div className="">
            <h4 className='font-aldrich text-clrthird  '>What is your group publicity?</h4>
            <label htmlFor="public" className='flex items-center gap-3 capitalize text-clrthird font-ubuntu cursor-pointer  '><input onChange={()=> setPublicityErr('')} type="radio" name="publicity" id="public" ref={PublicRef}/><span>Public</span></label>
            <label htmlFor="private" className='flex items-center gap-3 capitalize text-clrthird font-ubuntu cursor-pointer  '><input onChange={()=> setPublicityErr('')} type="radio" name="publicity" id="private" ref={PrivateRef}/> <span>Private</span></label>
            <p className="font-ubuntu text-[14px] text-red-500">{publicityErr}</p>
            <div className="flex justify-between mt-5">
              <button onClick={backTOname} type='button' className='font-ubuntu text-brand bg-clrthird/10 py-1 px-3 font-medium rounded-md'>Back</button>
              <button onClick={privacyNext} type='button' className=' font-ubuntu text-primarytxt bg-brand py-1 px-3 font-medium rounded-md  '>Next</button>
            </div>
          </div>
          }



        </div>
      </div>
      }


    </div>
  )
}

export default Groups