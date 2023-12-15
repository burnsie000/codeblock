import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'

interface WhatProps {
    heading?: string,
    subheading: string,
    paragraph: string,
    paragraphTwo?: string,
    problem?: string,
    image?: string,
    video?: string
    boldText?: string,
    boldTextTwo?: string,
}

const What: React.FC<WhatProps> = ({ heading, subheading, paragraph, image, video, problem, paragraphTwo, boldText, boldTextTwo }) => {
  return (
    <div className='w-full h-full md:h-full border-t-2 border-primary flex-col lg:flex-row justify-center py-8 md:py-10 lg:py-16 xl:py-24 2xl:py-36 px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28 flex relative items-center md:space-y-8 space-y-10'>
        <div className='relative flex w-full md:w-1/2 mx-auto'>
            {image && (
                <Image title={heading} quality={30} loading='lazy' src={image} layout='responsive' width={6672} height={4448} alt={heading ? heading : subheading} className='aspect-[3840/2560] object-cover lg:max-w-[30rem] xl:max-w-[40rem] 2xl:max-w-[50rem] rounded-3xl mx-auto flex flex-1 relative justify-center items-center shadow-neon md:shadow-neon-md lg:shadow-neon-lg xl:shadow-neon-xl' />
            )}
            {video && (
                <video src={video} title={heading} autoPlay={false} controls className='flex relative items-center justify-center mx-auto' />
            )}
        </div>
        <div className='flex relative flex-col w-full md:w-full lg:w-1/2 lg:max-w-1/2 md-max-w-2/3 h-1/2 md:h-full justify-center text-center my-auto items-center mx-auto md:p-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 lg:p-2 space-y-8 lg:space-y-4 xl:space-y-12'>
            {heading && (
                <h2 className='flex relative lg:text-3xl xl:text-5xl text-center justify-center text-primary font-extrabold mx-auto'>
                    {heading}
                </h2>
            )}
            <h3 className={`flex relative mx-auto text-center justify-center lg:text-lg ${heading ? 'text-white' : 'text-primary'} xl:text-2xl font-semibold`}>{subheading}</h3>
            {boldText && (
                    <p className='flex relative mx-auto justify-center text-center font-bold text-primary lg:text-md xl:text-lg'>{boldText}</p>
                )}
            {problem && (
                
                <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{problem}</p>
            )}
            {boldTextTwo && (
                    <p className='flex relative mx-auto justify-center text-center font-bold text-primary lg:text-md xl:text-lg'>{boldTextTwo}</p>
                )}
            <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{paragraph}</p>
            
            {paragraphTwo && (
                <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{paragraphTwo}</p>
            )}
        </div>
    </div>
  )
}

export default What