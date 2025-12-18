import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}
