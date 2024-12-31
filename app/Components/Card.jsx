import Link from 'next/link'
import React from 'react'

const Card = ({
    creator,
    category,
    image_url,
    title,
    pubDate,
    link,

}) => {
  return (
    <>
      <div 
       className=" mx-4 relative border-2 mt-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="absolute inline-flex items-center justify-center  h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-md m-2 p-2 top-2 end-2 dark:border-gray-900">
                      {creator ? creator : category}
                    </div>
                    <img
                      className="lg:h-48 mt-4 md:h-36 w-full object-contain object-center"
                      src={
                        image_url
                          ? `${image_url}`
                          : `https://demofree.sirv.com/nope-not-here.jpg`
                      }
                      alt={title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {category ? category : "General"}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Publish:- {pubDate}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          href={link? link : undefined}
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default Card
