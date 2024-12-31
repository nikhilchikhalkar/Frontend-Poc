'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import SubNavbar from '../Components/SubNavbar';
import { useSelector } from 'react-redux';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader'; 
import axios from 'axios'; 
import Card from '../Components/Card';
import { use } from 'react';
import SEO from '../Components/SEO';



const seoData = {
  title: "Welcome to My News Web application",
  description: "This is an amazing website built with Next.js, showcasing SEO best practices.",
  keywords: "Next.js, SEO, web development, JavaScript, React",
  author: "Nikhil Chikhalkar",
  image: "",
  url: "https://www.bbc.com",
  type: "website",
};

const HomePage = ({params}) => {
  const {Page} = params ? use( params) : {};
  const sidebarToggel = useSelector((state) => state.sidebar.isOpen);


  const [loader, setLoader] = useState(false); 
  const [err, setErr] = useState(false); 
  const [news, setNews] = useState([]); 

  // Function to fetch data
  const datafetch = async () => {
    try {
      setLoader(true); 
      setErr(false); 

      const response = await axios.get(
        Page
          ? `https://newsdata.io/api/1/news?apikey=pub_415085d39d1c2af7190d411530c3646f5b2c6&category=${Page}&country=in&language=en`
          : `https://newsdata.io/api/1/news?apikey=pub_415085d39d1c2af7190d411530c3646f5b2c6&country=in&language=en`
      );

      if (response?.data?.results) {
        setNews(response.data.results); 
      } else {
        setNews([]); 
      }

      setLoader(false); 

    } catch (error) {
      setLoader(false); 
      console.error(error); 

      // Check for specific error message from the API
      if (error?.response?.data?.results?.message === "The category you provided does not exist in our database.") {
        setErr(true); 
      } 
    }
  };


  useEffect(() => {
    setLoader(true)
    setErr(false)
    datafetch(); // datafetch function call 
    
  }, [Page]); 


  if (err) {
    return <ErrorPage />;
  }

  return (
    <>
     <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        author={seoData.author}
        image={seoData.image}
        url={seoData.url}
        type={seoData.type}
      />
    <div className="flex">
    <Sidebar />
    <div className={` ${sidebarToggel? "ml-64": ""} w-full `}>
   <Navbar/>
   <SubNavbar/>
     {
       loader ? (<Loader/>) : (
          <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   mt-4 mx-auto ">
     {
       news.map((item, index) => (
        <div key={index}>

          <Card creator={item.creator}
 category={item.category}
 image_url={item.image_url}
 title={item.title}
 pubDate={item.pubDate}
 link={item.link}
 />
 </div>
       ))
     }
    
   </div>
       )
     }
  
 </div>
  </div>
    </>
    
  );
};

export default HomePage;
