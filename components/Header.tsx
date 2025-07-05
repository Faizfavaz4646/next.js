'use client'
import Image from "next/image";
import Link from "next/link";
import poster from "@/app/assets/poster.jpg";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname=usePathname();
  const LinkStyle=(path:string)=>
    pathname === path
  ?' text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-400 clip-text text-blue-600 font-bold'
  :'text-white'
  return (
    <header>
      <div className="relative w-full h-96">
        <Image 
          src={poster} 
          alt="poster"
          fill
          className="object-cover"
        />
      </div>

      <nav className="bg-black text-white flex gap-5 text-xl justify-center py-4">
       
       
        <Link href="/" className={LinkStyle('/')}> Home</Link>
        <Link href="/meals" className={LinkStyle('/meals')}>Browse Meals</Link>
        <Link href="/community" className={LinkStyle('/community')}>Foodies Community</Link>
      </nav>
    </header>
  );
}
