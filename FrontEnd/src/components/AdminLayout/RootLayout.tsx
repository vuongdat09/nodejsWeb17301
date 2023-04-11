import React from 'react'
import AdminLayout from './AdminLayout'
import {Outlet} from "react-router-dom"


const RootLayout = () => {
  return (
    <div>
    <AdminLayout />
    </div>
  )
}

export default RootLayout