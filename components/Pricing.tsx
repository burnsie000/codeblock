import React from 'react'

interface PricingProps {
    productOne: string,
    productOnePrice: string,
    productOneIncludes?: string[],
    productTwo: string,
    productTwoPrice: string,
    productTwoIncludes?: string[],
    productThree?: string,
    productThreePrice?: string,
    productThreeIncludes?: string[],
    heading: string,

}

const Pricing: React.FC<PricingProps> = ({productOne, productTwo, productThree, productOnePrice, productTwoPrice, productThreePrice, productOneIncludes, productTwoIncludes, productThreeIncludes, heading}) => {
    productOneIncludes = ['NextJS website that is optimized for SEO.', 'Up to 10 Web Pages.', 'Server Setup', 'Under 0.5 Second First Contentful Paint.', 'Website Design.', 'Responsive Design.', 'Mobile-Friendly.', 'Interactive Media.', 'SSL Certificate.', 'UX Design.']
    productTwoIncludes = ['NextJS website that is optimized for SEO.', 'Up to 50 Web Pages.', 'Server Setup', 'Under 0.5 Second First Contentful Paint.', 'Website Design.', 'Responsive Design.', 'Mobile-Friendly.', 'Interactive Media.', 'SSL Certificate.', 'UX Design.']
    productThreeIncludes= ['NextJS website that is optimized for SEO.', 'Up to 100 Web Pages.', 'Server Setup', 'Under 0.5 Second First Contentful Paint.', 'Website Design.', 'Responsive Design.', 'Mobile-Friendly.', 'Interactive Media.', 'SSL Certificate.', 'UX Design.', '2,000 - 10,000 Users Supported.']
    const includesOne = productOneIncludes.map((include) => {
        <li className='flex relative mx-auto justify-center items-center text-center font-regular text-sm md:text-md lg:text-lg text-white'>
            {include}
        </li>
    })
    const includesTwo = productTwoIncludes.map((include) => {
        <li className='flex relative mx-auto justify-center items-center text-center font-regular text-sm md:text-md lg:text-lg text-white'>
            {include}
        </li>
    })
    
    const includesThree = productThreeIncludes?.map((include) => {
        <li className='flex relative mx-auto justify-center items-center text-center font-regular text-sm md:text-md lg:text-lg text-white'>
            {include}
        </li>
    })
    let n = 0
    
  return (
    <div className='flex flex-1 relative w-full h-full justify-center items-center bg-gradient-radial from-primary from-0% to-[rgb(20,20,20)] to-25% lg:to-50% text-center flex-col md:space-y-10 space-y-6 py-16 md:px-24 '>
        <h2 className='text-center my-24 relative flex mx-auto items-center justify-center font-extrabold text-primary xl:text-5xl lg:text-2xl text-xl'>
            {heading}
        </h2>
        <div className='flex flex-col md:flex-row justify-between relative items-center space-y-8 md:space-y-0 lg:space-x-24'>
            <div className='flex relative w-full h-full px-2 py-4 flex-col md:flex-row items-center text-center justify-between space-y-2 md:space-y-4 xl:space-y-6'>
                <div className='w-full border-4 border-primary h-full 2xl:h-[40rem] flex flex-col transition-all ease-in-out hover:transition-all hover:ease-in-out hover:scale-110 relative items-center justify-center text-center mx-auto px-2 md:px-4 xl:px-6 py-4 md:py-8 xl:py-12 bg-[rgb(20,20,20)] bg-opacity-40 backdrop-filter backdrop-blur-xl shadow-neon rounded-3xl md:shadow-neon-lg xl:shadow-neon-xl space-y-4 md:space-y-8 xl:space-y-12'>
                    <h3 className='flex relative mx-auto items-center justify-center text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary font-semibold'>
                        {productOne}
                    </h3>
                    <p className='flex relative mx-auto items-center justify-start text-left font-regular text-md md:text-lg xl:text-lg text-white'><strong className='font-semibold text-primary'>Development Cost / Project Cost:{' '}</strong>{productOnePrice}</p>
                    <label className='flex relative items-start justify-start w-full px-6 lg:px-12 font-semibold text-lg text-primary'> Includes:</label>
                    <ul className='items-start flex-col justify-start flex relative'>
                        {productOneIncludes?.map((include) => <li key={Math.floor(Math.random()*10000)} className='flex relative justify-start items-start text-left font-regular text-sm md:text-md lg:text-lg text-white'>{include}</li>)}
                    </ul>
                </div>
            </div>
            <div className='flex relative w-full h-full px-2 py-4 flex-col md:flex-row items-center text-center justify-between space-y-2 md:space-y-4 xl:space-y-6'>
                <div className='w-full border-4 border-primary h-full 2xl:h-[40rem] flex flex-col transition-all ease-in-out hover:transition-all hover:ease-in-out hover:scale-110 relative items-center justify-center text-center mx-auto px-2 md:px-4 xl:px-6 py-4 md:py-8 xl:py-12 bg-[rgb(20,20,20)] bg-opacity-40 backdrop-filter backdrop-blur-xl shadow-neon rounded-3xl md:shadow-neon-lg xl:shadow-neon-xl space-y-4 md:space-y-8 xl:space-y-12'>
                    <h3 className='flex relative mx-auto items-center justify-center text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary font-semibold'>
                        {productTwo}
                    </h3>
                    <p className='flex relative mx-auto items-center justify-start text-left font-regular text-md md:text-lg xl:text-lg text-white'><strong className='font-semibold text-primary'>Development Cost / Project Cost:{' '}</strong>{productTwoPrice}</p>
                    <label className='flex relative items-start justify-start w-full px-6 lg:px-12 font-semibold text-lg text-primary'> Includes:</label>
                    <ul className='items-start flex-col justify-start flex relative'>
                        {productTwoIncludes?.map((include) => <li key={Math.floor(Math.random()*10000)} className='flex relative justify-start items-start text-left font-regular text-sm md:text-md lg:text-lg text-white'>{include}</li>)}
                    </ul>
                </div>
            </div>
            {productThree && (
                <div className='flex relative w-full h-full px-2 py-4 flex-col md:flex-row items-center text-center justify-between space-y-2 md:space-y-4 xl:space-y-6'>
                    <div className='w-full h-full 2xl:h-[40rem] flex flex-col transition-all ease-in-out hover:transition-all hover:ease-in-out hover:scale-110 relative items-center justify-center text-center mx-auto px-2 md:px-4 xl:px-6 py-4 md:py-8 xl:py-12 border-4 border-primary bg-[rgb(20,20,20)] bg-opacity-40 backdrop-filter backdrop-blur-xl shadow-neon rounded-3xl md:shadow-neon-lg xl:shadow-neon-xl space-y-4 md:space-y-8 xl:space-y-12'>
                        <h3 className='flex relative mx-auto items-center justify-center text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary font-semibold'>
                            {productThree}
                        </h3>
                        <p className='flex relative mx-auto items-center justify-start text-left font-regular text-md md:text-lg xl:text-lg text-white'><strong className='font-semibold text-primary'>Development Cost / Project Cost:{' '}</strong>{productThreePrice}</p>
                        <label className='flex relative items-start justify-start w-full px-6 lg:px-12 font-semibold text-lg text-primary'> Includes:</label>
                        <ul className='items-start flex-col justify-start flex relative'>
                            {productThreeIncludes?.map((include) => <li key={Math.floor(Math.random()*10000)} className='flex relative justify-start items-start text-left font-regular text-sm md:text-md lg:text-lg text-white'>{include}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Pricing