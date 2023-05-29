import React from 'react'
import{Link} from "react-router-dom";


const Header = () => {
  return (
    <div id='home' className='flex bg-purple-700 py-2 px-2 md:px-14 lg:px-16 xl:px-16'>
      <div className='text-white font-extrabold p-2'><Link to="/">TregaDev's</Link></div>
      <div className='bg-black text-white font-bold p-2 rounded-lg shadow-lg ml-auto'><Link to="/contact">Get In Touch</Link></div>
    </div>
  )
}

export default Header;