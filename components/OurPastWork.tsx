import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'

interface OurPastWorkProps {
    heading: string,
    subheading: string,
    image: string,
    paragraph: string,
    imageTwo: string,
    paragraphTwo: string,
    imageThree: string,
    paragraphThree: string,
    imageFour: string,
    paragraphFour: string,
    imageFive: string,
    paragraphFive: string,

}

const OurPastWork: React.FC<OurPastWorkProps> = ({heading, image, paragraph, subheading, paragraphTwo, imageTwo, paragraphThree, imageThree, paragraphFour, imageFour, paragraphFive, imageFive}) => {
  return (
    <div className='flex flex-col w-full h-full py-24 relative items-center justify-center text-center flex-1 space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-10 xl:space-y-16'>
        <div className='flex flex-col relative mx-auto w-full md:w-2/3 text-center items-center justify-center space-y-6 lg:space-y-8'>
            <h2 className='flex relative items-center justify-center text-center mx-auto text-primary text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold'>
                {heading}
            </h2>
            <h3 className='flex relative items-center justify-center text-center mx-auto text-primary text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold'>
                {subheading}
            </h3>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image title={heading} layout='responsive' quality={30} loading='lazy' priority={false} src={image} alt={heading} height={688} width={688} className='aspect-square rounded-xl shadow-neon flex relative mx-auto w-full md:w-1/2 md:max-w-[40rem] justify-center object-fit items-center' />
        </div>
        <div className='flex relative px-4 lg:px-20 xl:px-32'>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraph}
            </p>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image layout='responsive' title={subheading} quality={30} loading='lazy' priority={false} src={imageTwo} alt={subheading} height={1024} width={1792} className='rounded-xl aspect-[1792/1024] shadow-neon flex relative mx-auto w-3/4 md:w-[60rem] md:max-w-[60rem] justify-center object-fit items-center' />
        </div>
        <div className='flex relative px-4 lg:px-20 xl:px-32'>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraphTwo}
            </p>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image layout='responsive' title={heading} quality={30} priority={false} loading='lazy' src={imageThree} alt={subheading} height={1024} width={1024} className='rounded-xl aspect-square shadow-neon flex relative mx-auto w-3/4 md:w-[60rem] md:max-w-[60rem] justify-center object-fit items-center' />
        </div>
        <div className='flex relative px-4 lg:px-20 xl:px-32'>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraphThree}
            </p>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image layout='responsive' title={subheading} quality={30} priority={false} loading='lazy' src={imageFour} alt={heading} height={1024} width={1024} className='rounded-xl aspect-square shadow-neon flex relative mx-auto w-3/4 md:w-[60rem] md:max-w-[60rem] justify-center object-fit items-center' />
        </div>
        <div className='flex relative px-4 lg:px-20 xl:px-32'>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraphFour}
            </p>
        </div>
        <div className='flex relative mx-auto w-full md:w-3/4 text-center p-6 md:p-4 items-center justify-center'>
            <Image layout='responsive' title={heading} quality={30} priority={false} loading='lazy' src={imageFive} alt={heading} height={1024} width={1024} className='rounded-xl aspect-square shadow-neon flex relative mx-auto w-3/4 md:w-[60rem] md:max-w-[60rem] justify-center object-fit items-center' />
        </div>
        <div className='flex relative px-4 lg:px-20 xl:px-32'>
            <p className='flex relative mx-auto items-center justify-center text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-regular px-8 md:px-24 py-8 md:py-16 text-white'>
                {paragraphFive}
            </p>
        </div>
    </div>
  )
}

export default OurPastWork