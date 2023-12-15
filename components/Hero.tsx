import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import ('next/link'))
import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


interface HeroProps {
    heading: string,
    subheading: string,
    paragraph: string,
    cta: string,
    backgroundImage: string,
    image?: string
}

const Hero: React.FC<HeroProps> = ({heading, paragraph, subheading, cta, backgroundImage, image}) => {
  return (
    <div className='w-full h-screen relative flex-1 items-center justify-center flex'>
        <Image title={heading} priority={true} quality={30} layout='fill' loading='eager' src={backgroundImage} alt={heading} className='flex-1 md:absolute relative top-[15rem] md:top-0 z-0 object-cover h-screen aspect-[3840/2128] brightness-[0.7]' />
        <div className='flex py-10 sm:py-28 relative md:flex-col h-screen xl:h-screen items-center top-[2rem] sm:top-6 px-6 justify-between space-y-10 w-full'>
            <div className='flex-col my-auto bg-[rgb(255,255,255)] md:pb-12 sm:pt-12  px-2 lg:px-10 lg:py-4 xl:py-2 w-full md:w-3/5 rounded-3xl flex bg-opacity-50 max-h-[35rem] md::max-h-full backdrop-filter backdrop-blur-md mx-auto relative items-center h-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-full xl:w-5/6 2xl:w-4/6 text-center justify-center space-y-1 sm:space-y-2 md:space-y-2 lg:space-y-4 2xl:space-y-8'>
                <h1 className='text-center text-primary mx-auto justify-center text-lg sm:text:xl md:text-2xl lg:text-3xl xl:text-5xl flex relative items-center font-extrabold'>{heading}</h1>
                
                <h2 className='text-center text-primary mx-auto justify-center text-md sm:text-lg md:text-lg lg:text-xl xl:text-3xl flex relative my-1 lg:my-2 font-bold'>{subheading}</h2>
                
                <p className='max-w-[80rem] text-black font-semibold text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl my-1 lg:my-2 justify-center text-center items-center mx-auto drop-shadow-3xl relative whitespace-wrap flex-wrap '>{paragraph}</p>
                <Link type='tel' className='relative md:my-1 flex bg-black border-primary my-3 lg:my-2 hover:text-primary transition-all ease-in-out border-2 rounded-3xl hover:shadow-neon md:hover:shadow-neon-lg  px-4 py-2 w-[15rem] items-center text-center justify-center font-bold mx-auto' href='tel:2896813887' aria-label={cta}>{cta}</Link>
            </div>
            <Link prefetch={true} href='#sectionTwo' aria-label='section two'><MdKeyboardDoubleArrowDown size={100} className='fill-primary relative hidden transition-all ease-in-out xl:flex hover:animate-pulse hover:cursor-pointer items-center justify-center mx-auto animate-bounce' /></Link>
        </div>
    </div>
  ) 
}

export default Hero