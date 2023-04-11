import React from 'react'
import MainLayout from './MainLayout'
import { Outlet } from "react-router-dom"


const RootMain = () => {
  return (
    <div>
      <MainLayout />
      <Outlet />
    </div>
  )
}

export default RootMain