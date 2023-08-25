import React from 'react'
import { useSelector } from 'react-redux'

const SidebarComponent = () => {



    const isMenuopen=useSelector(store=>store.app.isMenuopen)
  //this is called early return 
  if(!isMenuopen)return null
  
  
    return (
      <div className='p-5 shadow-lg w-48'>
          
          <ul>
              <li>
               Home 
              </li>
              <li>Shorts</li>
               <li>
                 Sports 
              </li>
               <li>
                 Gaming
              </li> <li>
                 Movies
              </li>

          </ul>
          





          <h1 className='font-bold p-5'>Subcriptions</h1>
          <ul>
              <li>
                 music 
              </li>
               <li>
                 sports 
              </li>
               <li>
                 gaming
              </li> <li>
                 movies
              </li>

          </ul>
          
          <h1 className='font-bold p-5'>watch later</h1>

            <ul>
              <li>
                 music 
              </li>
               <li>
                 sports 
              </li>
               <li>
                 gaming
              </li> <li>
                 movies
              </li>

          </ul>
    </div>
  )
}

export default SidebarComponent
