import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import{FaBars, FaSearch} from 'react-icons/fa'
import { toggleSidebar } from '../Store/Features/Sidebar/SidebarSlice';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const dispatch = useDispatch ();
  const sidebarToggel = useSelector((state) => state.sidebar.isOpen);



  return (
    <nav className='bg-gray-50 px-4 py-3 mb-1 flex justify-between '>
        <div className='flex items-center text-xl'>
            {/* <FaBars className='text-white me-4 cursor-pointer' onClick={() => SetsidebarToggel(!sidebarToggel)}/> */}
            { sidebarToggel ? (<IoClose className='text-gray-900 me-4 cursor-pointer' onClick={() => dispatch(toggleSidebar())}/>) : (<FaBars className='text-gray-900 me-4 cursor-pointer' onClick={() => dispatch(toggleSidebar())}/>) }
            
            <span className='text-white font-semibold'>E-com</span>
        </div>
        <div className='flex items-center ml-auto  gap-x-2'>

                <span className='bg-gray-900 text-white mx-1 px-2 py-1'>B</span>
                <span className='bg-gray-900 text-white mx-1 px-2 py-1'>B</span>
                <span className='bg-gray-900 text-white mx-1 px-2 py-1'>C</span>
                
        </div>

        <div className='flex items-center ml-auto  gap-x-5 mr-10'>
           
                <button className='bg-gray-900 text-white px-3 py-2'>Register</button>
                <button className='hover:bg-gray-900 hover:text-white px-3 py-2'>Login</button>
               
        </div>

       
    </nav>
  )
}

export default Navbar
