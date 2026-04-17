import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import BackToTop from '../../Components/BackToTop'
import WhatsAppBtn from '../../Components/WhatsAppBtn'

function MainLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <WhatsAppBtn />
        <BackToTop />
        <Footer />
    </div>
  )
}

export default MainLayout