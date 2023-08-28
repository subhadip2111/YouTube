import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SidebarComponent = () => {



    const isMenuopen=useSelector(store=>store.app.isMenuopen)
  //this is called early return 
  if(!isMenuopen)return null
  
  
    return (
    <div className='p-5 shadow-lg w-48 bg-white'>
      <ul className='space-y-3'>
        <Link to='/'>
          <li className='text-gray-700 hover:text-black transition'>
            Home
          </li>
        </Link>
        <li className='text-gray-700 hover:text-black transition'>
          Shorts
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Sports
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Gaming
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Movies
        </li>
      </ul>

      <h1 className='font-bold p-5 text-gray-900'>Subscriptions</h1>
      <ul className='space-y-3'>
        <li className='text-gray-700 hover:text-black transition'>
          Music
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Sports
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Gaming
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Movies
        </li>
      </ul>

      <h1 className='font-bold p-5 text-gray-900'>Watch Later</h1>
      <ul className='space-y-3'>
        <li className='text-gray-700 hover:text-black transition'>
          Music
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Sports
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Gaming
        </li>
        <li className='text-gray-700 hover:text-black transition'>
          Movies
        </li>
      </ul>
    </div>
  )
}

export default SidebarComponent
