"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))
import { useState } from 'react'
import { RiMenuLine, RiMenu3Line } from 'react-icons/ri'

interface NavigationProps {
    logo: string,
}

const Navigation: React.FC<NavigationProps> = ({logo}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full max-h-[50px] h-[50px] lg:max-h-[60px] md:h-[60px] bg-transparent backdrop-filter backdrop-blur-sm py-8 lg:py-12 xl:py-16 xl:px-8 flex flex-row fixed px-6 justify-between items-center space-x-12 z-10">
        <div className='relative flex py-12 flex-row items-center h-[75px] w-1/3 justify-center md:justify-start px-16'>
            <Link prefetch={true} rel='dns-prefetch' href='/' aria-label='Home' role='button' className='hover:cursor-pointer relative flex'>
                <Image quality={80} layout='responsive' loading='eager' priority={true} src={logo} alt='CodeBlock Logo' height={150} width={230} className='flex relative sm:h-[75px] md:h-[75px] min-w-[75px] md:min-w-[100px] min-h-full max-w-[125px] items-center justify-center object-fit h-[2rem] w-full' />
            </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className='flex relative md:hidden bg-transparent justify-center cursor-pointer pr-4 z-10'>
            {isOpen ? <RiMenu3Line size={30} /> : <RiMenuLine size={30} />}
        </button>
        {isOpen && (
            <ul className='flex flex-col bg-black justify-center cursor-pointer capitalize py-6 items-center absolute top-0 left-[-3rem] w-full h-screen text-white font-semi-bold text-md text-center'>
                <li className='cursor-pointer capitalize py-6 text-2xl hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 active:text-primary'>
                    <Link rel='dns-prefetch' onClick={() => setIsOpen(!isOpen)} prefetch={true} href='/' aria-label='home'>Home</Link>
                </li>
                <li className='cursor-pointer capitalize py-6 text-2xl hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 active:text-primary'>
                    <Link rel='dns-prefetch' onClick={() => setIsOpen(!isOpen)} prefetch={true} href='/about-us' aria-label='about us'>About Us</Link>
                </li>
                <li className='cursor-pointer capitalize py-6 text-2xl hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 active:text-primary'>
                    <Link rel='dns-prefetch' onClick={() => setIsOpen(!isOpen)} prefetch={true} href='/services' aria-label='services'>Services</Link>
                </li>
                <li className='cursor-pointer capitalize py-6 text-2xl hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 active:text-primary'>
                    <Link rel='dns-prefetch' onClick={() => setIsOpen(!isOpen)} prefetch={true} href='/pricing' aria-label='pricing'>Pricing</Link>
                </li>
                <li className='cursor-pointer capitalize py-6 text-2xl hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 active:text-primary'>
                    <Link rel='dns-prefetch' onClick={() => setIsOpen(!isOpen)} prefetch={true} href='/blog' aria-label='blog'>Blog</Link>
                </li>
            </ul>
        )}
        <div className='hidden md:flex md:flex-row md:justify-between md:items-center text-white bg-transparent text-center text-lg font-semibold space-x-8'>
            <Link prefetch={true} href='/' aria-label='home' className='hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 whitespace-nowrap bg-transparent border-0'>Home</Link>
            <Link prefetch={true} href='/about-us' aria-label='about us' className='hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 whitespace-nowrap bg-none'>About Us</Link>
            <Link prefetch={true} href='/services' aria-label='services' className='hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 whitespace-nowrap'>Services</Link>
            <Link prefetch={true} href='pricing' aria-label='pricing' className='hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 whitespace-nowrap'>Pricing</Link>
            <Link prefetch={true} href='/blog' aria-label='blog' className='hover:text-primary hover:font-semibold hover:underline hover:underline-offset-2 whitespace-nowrap'>Blog</Link>
        </div>
    </nav>
  )
}

export default Navigation