import React from 'react'
// icons
import { GoHome } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { PiMessengerLogoThin } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { PiVideoLight } from "react-icons/pi";
import { RiStore2Line } from "react-icons/ri";


const Navbtm = () => {
  return (
    <div className="w-full">
    <ul className="flex justify-between">
        <li className='NavbtmIcon'><GoHome /></li>
        <li className='NavbtmIcon'><GoPeople /></li>
        <li className='NavbtmIcon'><PiMessengerLogoThin /></li>
        <li className='NavbtmIcon'><VscBell /></li>
        <li className='NavbtmIcon'><PiVideoLight /></li>
        <li className='NavbtmIcon'><RiStore2Line /></li>
    </ul>
</div>
  )
}

export default Navbtm