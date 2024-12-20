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
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><GoHome /></li>
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><GoPeople /></li>
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><PiMessengerLogoThin /></li>
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><VscBell /></li>
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><PiVideoLight /></li>
        <li className='NavbtmIcon hoverEfct relative hover:text-primarytxt overflow-hidden '><RiStore2Line /></li>
    </ul>
</div>
  )
}

export default Navbtm