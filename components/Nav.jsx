import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from './Theme';
const Nav = () => {
  return (
        
          <nav className='flex-between gap-x-1 w-full mb-2 max-sm:gap-x-0 min-w-[360px] bg-white'>
            <Link href='/' className='flex gap-2 flex-center pl-1 max-sm:gap-0'>
              <Image
                src='/assets/GDSC_CRCE.png'
                alt='logo'
                width={400}
                height={200}
                className='object-contain'
              />
            </Link>
            <div className='flex pr-28'>
              <Link href='/posts' className='blue_link'>Home</Link>
              <Link href='/about' className='blue_link'>About Us</Link>
              <Link href='/about' className='blue_link'>What We Do</Link>
              <Link href='/about' className='blue_link'>Events</Link>
              <Link href='/about' className='blue_link'>Our Team</Link>
              <Link href='/about' className='blue_link'>Contact Us</Link>
              <ThemeToggle />
            </div>
          </nav>
        )
        


  
}
//*max-sm:hidden*//
export default Nav