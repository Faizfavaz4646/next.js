'use client'
import burger from '@/app/assets/burger.jpeg';
import meal from '@/app/assets/meal.jpeg';
import Image from 'next/image';
import dish from '@/app/assets/dish.jpg'

import { useEffect, useState } from 'react';
const images=[
    {image:burger, alt:"a burger"},
    {image:meal, alt:"a delicious meal"},
    {image:dish, alt:"a delicious dish"},
    
]
export default function Imageslideshow(){
    const [currentImage,setCurrentImage]=useState(0);
    useEffect(()=>{
        const interval= setInterval(() => {
            setCurrentImage((prevImage)=>
                prevImage < images.length - 1 ? prevImage + 1:0
            );
            
        },5000);
        return ()=> clearInterval(interval)
    },[]);
    return(
      <div className="w-full h-auto text-center">
      <Image
        src={images[currentImage].image}
        alt={images[currentImage].alt}
        width={200}
        height={200}
        className="mx-auto rounded-lg h-50  transition-all duration-1000"
      />
    </div>
    )
}