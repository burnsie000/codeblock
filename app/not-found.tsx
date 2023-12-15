import Link from "next/link"
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="text-center itens-center flex-col justify-center relative py-[10rem] flex w-full h-full space-y-10">
        <Image loading='eager' priority src='/codeblock.svg' className='relative flex items-center justify-center mx-auto' alt='codeblock logo' width={250} height={200} />
        <h2 className="text-xl md:text-5xl text-primary font-extrabold">There was a problem.</h2>
        <p className="text-white font-semibold text-lg md:text-2xl">We could not find the page you were looking for.</p>
        <p className='text-white font-regular text-md md:text-lg'>Go back to the <Link prefetch={true} arua-label='Home page' className='text-primary text-semibold underline underline-offset-4' href="/">Home page</Link> to find out more about our website development services in Toronto.</p>
    </main>
  )
}