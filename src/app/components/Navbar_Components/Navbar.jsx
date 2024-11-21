import React from 'react'
import Youtubeimage from './Youtubeimage'
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <div className='flex gap-14'>

        <div className='flex items-center gap-6 ml-7'> 
        <RxHamburgerMenu/>
        <Youtubeimage/>
        </div>


    <div>
    <SearchBar/>
    </div>

    </div>
  )
}

export default Navbar
