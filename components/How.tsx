import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
import React from 'react'

interface HowProps {
    title: string,
    benefitOne: string,
    featureOne: string,
    imageOne: string,
    benefitTwo: string,
    featureTwo: string,
    imageTwo: string,
    benefitThree: string,
    featureThree: string,
    imageThree: string,
}

const How: React.FC<HowProps> = ({ title, benefitOne, featureOne, imageOne, benefitTwo, featureTwo, imageTwo, benefitThree, featureThree, imageThree }) => {
  return (
    <div className='relative flex-1 flex-col w-full h-full justify-center items-center xl:px-6 p-2 md:p-4 lg:p-8 xl:p-24 bg-gradient-radial from-primary from-0% to-black to-75% lg:space-y-6 xl:space-y-12'>
        <h2 className='text-center justify-center flex relative mx-auto lg:text-3xl xl:text-5xl text-primary font-extrabold bg-opacity-0 bg-primary text-opacity-100 bg-clip-text my-24 px-2 md:px-48'>{title}</h2>
        <div className='bg-white shadow-neon rounded-3xl flex relative w-full flex-col md:flex-row p-8 my-12 bg-opacity-60 backdrop-filter backdrop-blur-3xl justify-between items-center'>
            <div className='flex relative items-center justify-center p-6 w-full h-full'>
                <Image title={title} quality={30} layout='responsive' priority={false} loading='lazy' src={imageOne} alt={benefitOne} width={2688} height={1536} className='flex relative max-w-[80rem] w-[5rem] h-[5rem] md:max-w-[50rem] aspect-[2048/1170] justify-center items-center mx-auto flex-1'/>
            </div>
            <div className='flex flex-col space-y-6 relative items-center justify-center p-2 md:p-6 w-full md:w-full h-full'>
                <h3 className='text-center items-center justify-center flex relative mx-auto text-lg lg:text-xl xl:text-2xl font-bold text-primary'>{benefitOne}</h3>
                <p className='text-center items-center justify-center text-white font-regular text-sm lg:text-md xl:text-lg mx-auto'>{featureOne}</p>
            </div>
        </div>
        <div className='bg-white shadow-neon rounded-3xl flex relative w-full flex-col md:flex-row p-8 my-12 bg-opacity-60 backdrop-filter backdrop-blur-3xl justify-between items-center'>
            <div className='flex flex-col space-y-6 relative items-center justify-center w-full p-2 md:p-6 md:w-1/2 h-full'>
                <h3 className='text-center items-center justify-center flex relative mx-auto text-lg lg:text-xl xl:text-2xl font-bold text-primary'>{benefitTwo}</h3>
                <p className='text-center items-center justify-center text-white font-regular text-sm lg:text-md xl:text-lg mx-auto'>{featureTwo}</p>
            </div>
            <div className='flex relative items-center justify-center p-2 md:p-6 w-full md:w-1/2 h-full'>
                <Image title={title} quality={65} priority={false} loading='lazy' src={imageTwo} alt={benefitTwo} width={2688} height={1536} layout='responsive' className='flex relative max-w-[50rem] aspect-[16/9] justify-center items-center mx-auto flex-1'/>
            </div>
        </div>
        <div className='bg-white shadow-neon rounded-3xl flex relative w-full flex-col md:flex-row p-2 md:p-8 my-2 md:my-12 bg-opacity-60 backdrop-filter backdrop-blur-3xl justify-between items-center'>
            <div className='flex relative items-center justify-center p-6 w-full md:w-1/2 h-full'>
                <Image title={title} quality={65} priority={false} loading='lazy' src={imageThree} alt={benefitThree} width={2688} height={1536} layout='responsive' className='flex relative max-w-[50rem] aspect-[16/9] justify-center items-center mx-auto flex-1'/>
            </div>
            <div className='flex flex-col space-y-6 relative items-center justify-center p-2 md:p-6 w-full md:w-1/2 h-full'>
                <h3 className='text-center items-center justify-center flex relative mx-auto text-lg lg:text-xl xl:text-2xl font-bold text-primary'>{benefitThree}</h3>
                <p className='text-center items-center justify-center text-white font-regular text-sm lg:text-md xl:text-lg mx-auto'>{featureThree}</p>
            </div>
        </div>
    </div>
  )
}

export default How