import React from 'react'
import SidebarComponent from './SidebarComponent'
// import Maincontainner from './Maincontainner'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router'

const Body = () => {
  return (
      <div className='flex'>
      <SidebarComponent/>
      <Outlet />
      
      </div>
  )
}

export default Body