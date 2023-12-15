import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'

interface WhatReverseProps {
    heading?: string,
    subheading: string,
    paragraph: string,
    problem: string,
    image?: string,
    video?: string,
    paragraphTwo?: string,
}

const WhatReverse: React.FC<WhatReverseProps> = ({ heading, subheading, paragraph, image, video, problem, paragraphTwo }) => {
  return (
    <div className='w-full h-full md:h-full border-t-2 border-primary border-dashed flex-col lg:flex-row justify-center flex relative items-center py-4 md:py-8 lg:py-16 xl:py-24 2xl:py-36 px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28 md:space-y-8 space-y-2'>
        <div className='flex relative flex-col w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 md:w-full lg:w-1/2 float-left lg:max-w-1/2 md-max-w-2/3 h-full md:h-full justify-center text-center my-auto items-center mx-auto lg:p-2 space-y-8 lg:space-y-4 xl:space-y-12'>
            {heading && (
                <h2 className='flex relative lg:text-3xl xl:text-5xl text-center justify-center text-primary font-extrabold mx-auto'>
                    {heading}
                </h2>
            )}
            <h3 className={`flex relative mx-auto text-center ${heading ? 'text-white' : 'text-primary'} justify-center lg:text-lg xl:text-2xl font-semibold`}>{subheading}</h3>
            <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{problem}</p>
            <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{paragraph}</p>
            {paragraphTwo && (
                <p className='flex relative mx-auto justify-center text-center font-regular lg:text-md xl:text-lg'>{paragraphTwo}</p>
            )}
        </div>
        <div className='relative flex w-full md:w-1/2 mx-auto'>
            {image && (
                <Image title={heading} quality={30} priority={false} loading='lazy' src={image} width={6672} layout='responsive' height={4448} alt={heading ? heading : subheading} className='aspect-[3840/2560] object-cover lg:max-w-[30rem] xl:max-w-[40rem] 2xl:max-w-[50rem] rounded-3xl mx-auto flex flex-1 relative justify-center items-center shadow-neon md:shadow-neon-md lg:shadow-neon-lg xl:shadow-neon-xl' />
            )}
            {video && (
                <video src={video} title={heading} autoPlay={false} controls className='flex relative items-center justify-center mx-auto' />
            )}
        </div>
    </div>
  )
}

export default WhatReverse