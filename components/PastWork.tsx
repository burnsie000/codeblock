import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'
const Link = dynamic(() => import('next/link'))

interface PastWorkProps {
    image: string,
}

const PastWork: React.FC<PastWorkProps> = ({image}) => {
  return (
    <div className='w-full h-full py-[2rem] flex flex-col md:flex-row relative justify-center md:justify-between lg:justify-between xl:justify-between items-center md:p-36'>
        <div className='md:w-1/2 w-full flex-1 relative flex p-1 sm:p-1 md:p-2 lg:p-4 xl:p-6 mx-auto'>
            <Image title='CodeBlock Past Work' quality={30} layout='responsive' priority={false} loading='lazy' src={image} width={688} height={688} alt='Our past work - CodeBlock' className='flex flex-1 relative rounded-3xl shadow-neon items-center justify-center mx-auto aspect-square max-width-[6rem] w-1/2 md:w-full h-1/2 md:max-w-[40rem]' />
        </div>
        <div className='flex flex-1 my-[1rem] sm:my-2rem md:my-[3rem] lg:my-[5rem] xl:my-[7rem] flex-col relative w-full md:w-1/2 h-full p-6 text-center justify-center items-center space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-12'>
            <h2 className='font-extrabold text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-5xl text-primary text-center justify-center items-center relative flex mx-auto'>
                Our Past Work
            </h2>
            <p className='font-semibold text-md sm:text-md lg:text-xl md:text-lg xl:text-2xl text-white text-center justify-center items-center mx-auto'>
            Brady Burns, the lead developer at CodeBlock and a seasoned web developer in Toronto, has significantly improved online visibility for clients like a Maryland hearing clinic, showcasing our expertise in web development and SEO.
            </p>
            <p className='flex relative text-center items-center justify-center mx-auto font-regular text-sm sm:text-sm md:text-sm lg:text-md xl:text-md text-white'>
            Brady Burns has done numerous work in the web development space and search engine optimization (SEO) space. While he was a digital marketer, Brady did work for a hearing clinic in Maryland called 3D Hearing, where Brady increased the visibility of 3D Hearings website by 110% in 2 months. This increase in search engine performance lead to 3D Hearing getting more calls and more new clients as a result of the SEO work, including the technical SEO and code, provided by Brady Burns and the digital marketing agency he worked for.
            </p>
            <Link prefetch={true} rel='dns-prefetch' className='relative my-8 flex bg-black border-primary hover:text-primary transition-all ease-in-out border-2 rounded-3xl hover:shadow-neon px-4 py-2 w-[20rem] md:w-[25rem] items-center text-center justify-center mx-auto' href='/about-us' aria-label='Read More About Our Past Work'>Read More About Our Past Work</Link>
        </div>
    </div>
  )
}

export default PastWork