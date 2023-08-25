import React from 'react'
import SidebarComponent from './SidebarComponent'
import Maincontainner from './Maincontainner'

const Body = () => {
  return (
      <div className='flex'>
      <SidebarComponent/>
      
      <Maincontainner/>
      </div>
  )
}

export default Body