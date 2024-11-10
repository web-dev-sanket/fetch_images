'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
  const [Images, setImages] = useState([])
  //to get the fetch item without on click
  // useEffect(()=>{
  //   getimages()
  // },[])
  
  const getimages = async () =>{
   try {
    const response =  await axios.get("https://picsum.photos/v2/list")
    const data = response.data
    console.log(Images)
    setImages(data)
   } catch (error) {
    console.error("error fetching images")
   }
  }
  return(
    <div>
      <button onClick={getimages} className='bg-red-400 p-7 m-5 text-blue-500 font-bold'>
        click on me
      </button>
      <p className='m-4 font-bold text-lg'>To get the fetch images</p>
      <div className='p-10'>
        {Images.map((name, i)=>{
           return <img key={i} src={name.download_url} width={450} height={450} className='p-8 rounded inline-block'/>
        })}
      </div>
    </div>
  )
}

export default page