import React,{useState} from 'react'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';

const Navbar =() => {
    const [nav,setNav] = useState(false)//we're using the useState hook to manage the state of the navigation menu. nav represents whether the menu is open or closed, and setNav is a function to update its state.
     
    const handleNav = () =>{  //This function toggles the value of nav when called, effectively opening or closing the navigation menu.
        setNav(!nav)
    }

  return (
    //    .....navv.....
    <div className='flex justify-between items-center text-white h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>react</h1>
      <ul className='hidden md:flex  p-8'>
        <li className='p-4 hover:text-gray-700'>Company</li>
        <li className='p-4 hover:text-gray-700'>Home</li>
        <li className='p-4 hover:text-gray-700'>Resource</li>
        <li className='p-4 hover:text-gray-700'>About</li>
        <li className='p-4 hover:text-gray-700'>Contact</li>
    
      </ul>
      {/*This renders a menu icon for mobile view. It toggles the navigation menu when clicked, displaying either the open menu icon (AiOutlineMenu) or the close menu icon (AiOutlineClose) based on the state. */}
       <div onClick = {handleNav} className=' block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
      
       </div>
       <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-gray-[#00300] m-0 pt-4 transition-transform duration-100 ${
          !nav ? '-translate-x-full' : ''
        }`}
      >
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>

        
         <ul className='uppercase pt-14'>
         <li className='p-4 border-b border-gray-600 hover:text-gray-700'>home</li>
        <li className='p-4 border-b border-gray-600 hover:text-gray-700'>company</li>
        <li className='p-4 border-b border-gray-600 hover:text-gray-700'>Resource</li>
        <li className='p-4 border-b border-gray-600 hover:text-gray-700'>About</li>
        <li className='p-4' >Contact</li>
    
         </ul>
       </div>
    </div>
    
  )
}

export default Navbar
