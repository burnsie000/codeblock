import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'

interface OurStoryProps {
    heading: string,
    image: string,
    paragraph: string,
}

const OurStory: React.FC<OurStoryProps> = ({heading, image, paragraph}) => {
  return (
    <div className='flex flex-col w-full h-full py-24 relative items-center justify-center text-center flex-1 space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-10 xl:space-y-16'>
        <div className='flex relative mx-auto w-full md:w-2/3 text-center items-center justify-center'>
            <h2 className='flex relative items-center justify-center text-center mx-auto text-primary text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold'>
                {heading}
            </h2>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image title={heading} quality={30} loading='lazy' layout='responsive' priority={false} src={image} alt={heading} height={3059} width={4904} className='aspect-[4904/3059] rounded-xl shadow-neon flex relative mx-auto w-3/4 md:w-full justify-center object-fit items-center' />
        </div>
        <div>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default OurStory