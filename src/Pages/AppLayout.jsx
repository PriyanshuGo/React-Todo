import React from 'react'
import Navbar from '../components/AppLayout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/AppLayout/Footer'

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
