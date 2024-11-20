import React from 'react'
import Youtubeimage from './Youtubeimage'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div>
        <div className='flex items-center gap-6 ml-7'> 
        <RxHamburgerMenu/>
        <Youtubeimage/>
        </div>

    </div>
  )
}

export default Navbar
