import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CenterTextProps {
    heading?: string,
    subheading?: string,
    boldText: string,
    paragraphOne?: string,
    paragraphTwo?: string,
    boldTextOne?: string,
    paragraphThree?: string,
    boldTextTwo?: string,
    paragraphFour?: string,
    boldTextThree?: string,
    paragraphFive?: string,
    boldTextFour?: string,
    paragraphSix?: string,
    paragraphSeven?: string,
    imageOne?: string,
    imageTwo?: string,
    imageThree?: string,
    cta?: string,

}

const CenterText: React.FC<CenterTextProps> = ({heading, subheading, boldText, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix, paragraphSeven, imageOne, imageTwo, cta, imageThree, boldTextOne, boldTextTwo, boldTextThree, boldTextFour}) => {
  return (
    <div className='w-full h-full border-t-4 border-dotted md:border-dashed border-primary flex relative flex-1 flex-col items-center justify-center text-center py-8 md:py-10 2xl:py-20 xl:py-16 lg:py-12 2xl:space-y-12 xl:space-y-24 lg:space-y-16 md:space-y-12 md:px-12 px-10 space-y-8 lg:px-24 xl:px-36 2xl:px-44'>
        {heading && (
            <h2 className='flex relative lg:text-3xl xl:text-5xl text-center justify-center text-primary font-extrabold mx-auto'>
                {heading}
            </h2>
        )}
        {subheading && (
            <h3 className='flex relative text-lg md:text-xl lg:text-2xl xl:text-3xl text-center justify-center text-primary font-bold mx-auto'>
                {subheading}
            </h3>
        )}
        
        <p className={`flex relative text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center ${subheading ? 'text-white' : 'text-primary'} font-semibold mx-auto`}>
            {boldText}
        </p>
        
        {paragraphOne && (
            <p className='flex relative text-sm md:text-md lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {paragraphOne}
            </p>
        )}
        {imageOne && (
            <Image title={heading} quality={30} loading='lazy' src={imageOne} width={6672} height={4448} alt={heading ? heading : boldText} className='aspect-[3840/2560] object-cover md:max-w-[30rem] lg:max-w-[40rem] xl:max-w-[40rem] 2xl:max-w-[70rem] rounded-3xl mx-auto flex flex-1 relative justify-center items-center shadow-neon md:shadow-neon-md lg:shadow-neon-lg xl:shadow-neon-xl' />
        )}
        {paragraphTwo && (
            <p className='flex relative flex-col text-sm md:text-md lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {boldTextOne && (
                    <strong className='text-primary text-semibold my-4 whitespace-nowrap flex-1'>{boldTextOne}</strong>
                )}
                {paragraphTwo}
            </p>
        )}
        {paragraphThree && (
            <p className='flex relative text-sm md:text-md flex-col lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {boldTextTwo && (
                    <strong className='text-primary text-semibold my-4 whitespace-nowrap'>{boldTextTwo}</strong>
                )}
                {paragraphThree}
            </p>
        )}
        {paragraphFour && (
            <p className='flex relative text-sm md:text-md flex-col lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {boldTextThree && (
                    <strong className='text-primary text-semibold my-4 whitespace-nowrap'>{boldTextThree}</strong>
                )}
                {paragraphFour}
            </p>
        )}
        {imageTwo && (
            <Image title={heading} quality={30} loading='lazy' src={imageTwo} width={6672} height={4448} alt={heading ? heading : boldText} className='aspect-[3840/2560] object-contain md:max-w-[30rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[70rem] rounded-3xl mx-auto flex flex-1 relative justify-center items-center shadow-neon md:shadow-neon-md lg:shadow-neon-lg xl:shadow-neon-xl' />
        )}
        {paragraphFive && (
            <p className='flex relative text-sm md:text-md flex-col lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {boldTextFour && (
                    <strong className='text-primary text-semibold my-4 whitespace-nowrap'>{boldTextFour}</strong>
                )}
                {paragraphFive}
            </p>
        )}
        {paragraphSix && (
            <p className='flex relative text-sm md:text-md lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {paragraphSix}
            </p>
        )}
        {imageThree && (
            <Image title={heading} quality={30} loading='lazy' src={imageThree} width={6672} height={4448} alt={heading ? heading : boldText} className='aspect-[3840/2560] object-contain md:max-w-[30rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[70rem] rounded-3xl mx-auto flex flex-1 relative justify-center items-center shadow-neon md:shadow-neon-md lg:shadow-neon-lg xl:shadow-neon-xl' />
        )}
        {paragraphSeven && (
            <p className='flex relative text-sm md:text-md lg:text-lg xl:text-lg text-center justify-center text-white font-regular mx-auto'>
                {paragraphSeven}
            </p>
        )}
        {cta && (
            <Link prefetch={false} type='tel' className='relative md:my-1 flex bg-black border-primary my-3 lg:my-2 hover:text-primary transition-all ease-in-out border-2 rounded-3xl hover:shadow-neon md:hover:shadow-neon-lg px-4 py-2 w-[15rem] items-center text-center justify-center font-bold mx-auto' href='tel:2896813887' aria-label={cta}>{cta}</Link>
        )}
    </div>
  )
}

export default CenterText