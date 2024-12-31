
import Link from 'next/link';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const sidebarToggel = useSelector((state) => state.sidebar.isOpen);

  const sidenav = [
    {name: 'Home', link: '/'},
    {name: 'Business', link: '/business'},
    {name: 'Entertainment', link: '/entertainment'},
    {name: 'Health', link: '/health'},
    {name: 'Science', link: '/science'},
    {name: 'Sports', link: '/sports'},
    {name: 'Technology', link: '/technology'},
  ]



  return (
    <div className={`${sidebarToggel ? " block ": " hidden "}w-64 bg-white shadow-lg fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        {/* <h1 className='text-2xl text-black font-bold'>Admin Dashboard</h1> */}
        <div className='flex border border-black  '>
        <input type='text' placeholder='search topic,news and more' className='w-full p-2'/>
        <button className='bg-gray-900 text-white px-3 py-2'> <FaSearch/></button>
        </div>
      </div>
      <hr/>
      <ul className='mt-3 text-black font-medium  '>

       {
        sidenav.map((item, index ) => (
          <li key={index} className='mb-2 rounded hover:shadow hover:bg-gray-200 py-2'>
            <Link href={item.link} className='px-3' > {item.name}</Link>
        </li>
        ))
       }
        
      </ul>
    </div>
  )
}

export default Sidebar


