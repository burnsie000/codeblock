'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-full py-[10rem] flex relative items-center justify-center text-center flex-col space-y-10'>
        
        <svg id="Layer_2" fill='red' height={200} width={250} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.8 163.43">
            <defs>
                <style>
                .cls-1 {`
                    fill: #ec2526;
                    stroke-width: 0px;
                `}
                </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1" d="m96,74.03c0-14.25,9.53-19.52,24.49-19.92l21.41-29.28h-19.49c-35.25,0-61.2,19.8-61.2,49.2,0,14.73,6.66,27.65,17.8,36.82l19.21-26.27c-1.44-2.95-2.21-6.47-2.21-10.55Zm135.15-11.4V24.83c0-12.3-5.85-18.6-17.4-18.6h-10.8v20.25c5.25,0,7.8,2.25,7.8,7.05v27.3c0,7.35,2.55,12.15,7.65,14.55-5.1,2.55-7.65,7.2-7.65,14.4v27.45c0,4.65-2.55,6.9-7.8,6.9v20.4h10.8c11.55,0,17.4-6.3,17.4-18.6v-37.8c0-2.85,3-4.2,8.85-4.35v-16.8c-5.85-.15-8.85-1.5-8.85-4.35ZM19.65,24.83v37.8c0,2.85-3,4.2-9,4.35v16.8c6,.15,9,1.5,9,4.35v37.8c0,12.3,5.7,18.6,17.25,18.6h10.8v-20.4c-5.25,0-7.8-2.25-7.8-6.9v-27.45c0-7.2-2.55-11.85-7.5-14.4,4.95-2.4,7.5-7.2,7.5-14.55v-27.3c0-4.8,2.55-7.05,7.8-7.05V6.23h-10.8c-11.55,0-17.25,6.3-17.25,18.6Zm126.8,29.25h25.75l22.2-29.25h-26.56l-21.38,29.25Zm-30.59,41.84l-18.4,25.17c7.52,2.64,15.93,4.09,24.94,4.09h49.8l22.2-28.8h-72c-2.3,0-4.49-.16-6.54-.46Z"/>
            </g>
        </svg>
        {error.message && (
            <h2 className='md:text-5xl text-2xl text-center items-center justify-center relative flex mx-auto text-primary font-extrabold'>Something went wrong!</h2>
        )}
        {!error.message && (
            <h2 className='md:text-5xl text-2xl text-center items-center justify-center relative flex mx-auto text-primary font-extrabold'>Something went wrong!</h2>
        )}
      <button className='flex relative items-center justify-center mx-auto text-white text-semi-bold md:text-lg text-md rounded-3xl text-center px-10 border-primary border-2 bg-[rgb(20,20,20)] transition-all ease-in-out md:hover:shadow-neon-xl hover:shadow-neon hover:transition-all hover:ease-in-out hover:text-primary py-2'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}