import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../Components/Nav'
import Menu from './Menu'
const RootLayout = () => {
  return (
    <>
      <Nav/>
      <Menu />
      <Outlet/>
    </>
  )
}

export default RootLayout