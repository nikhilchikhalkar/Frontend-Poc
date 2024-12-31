import React from 'react'

const SubNavbar = () => {
    const subnav = [
        {name: 'Home', link: '/'},
        {name: 'Business', link: '/business'},
        {name: 'Entertainment', link: '/entertainment'},
        {name: 'Health', link: '/health'},
        {name: 'Science', link: '/science'},
        {name: 'Sports', link: '/sports'},
        {name: 'Technology', link: '/technology'},
      ]
  return (
    <>
    <hr/>
       <nav className='bg-gray-300 px-4 py-3 md:flex justify-center hidden  '>
              <ul className='flex gap-x-5  items-center font-semibold'>
               
                {
                    subnav.map((item, index) => (
                         <li key={index}>
                    <a href={item.link}>
                        {item.name}
                    </a>
                </li>
                    ))
                }
               
               
              </ul>
             
          </nav>
          </>
  )
}

export default SubNavbar
