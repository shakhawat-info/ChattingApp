import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'
import Menu from './Menu'
const Layout = () => {
  return (
    <>
    <Nav/>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default Layout