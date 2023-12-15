"use client"
import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))
import React from 'react'
const FacebookRoundedIcon = dynamic(() => import('@mui/icons-material/FacebookRounded'))
const YouTubeIcon = dynamic(() => import('@mui/icons-material/YouTube'))
const InstagramIcon = dynamic(() => import('@mui/icons-material/Instagram'))
const TwitterIcon = dynamic(() => import('@mui/icons-material/Twitter'))
const LinkedInIcon = dynamic(() => import('@mui/icons-material/LinkedIn'))

interface FooterProps {
    logo: string,
}

const Footer: React.FC<FooterProps> = ({logo}) => {
  return (
    <footer className='flex w-full flex-1 flex-col relative items-center justify-center border-t-2 border-primary py-12'>
        <div className='flex w-full flex-1 flex-col md:flex-row mb-6 relative items-center justify-center md:justify-between'>
            <div className='flex flex-col relative justify-center items-center w-full md:w-1/3 h-full mx-auto px-24'>
                <Image title='CodeBlock Logo' loading='lazy' priority={false} src={logo} alt='CodeBlock Logo' height={75} width={125} className='flex relative mx-auto items-center justify-center my-2' />
                <h2 className='text-3xl font-bold text-primary flex relative mx-auto justify-center text-center mb-4 items-center'>
                    CodeBlock
                </h2>
                <p className='text-sm font-regular flex mx-auto text-center items-center justify-center text-white'>CodeBlock is a dynamic web development agency renowned for its innovative and efficient digital solutions. Specializing in web design, development, and SEO optimization, we are committed to delivering exceptional online experiences that drive success. Trust CodeBlock to bring your digital vision to life.</p>
            </div>
            <div className='relative flex flex-col w-full h-full md:w-1/3 justify-center items-center mx-auto space-y-2'>
                <h2 className='text-xl my-4 font-semibold text-primary text-center flex relative mx-auto justify-center items-center'>
                    Our Company
                </h2>
                <Link rel='dns-prefetch' prefetch={true} href='/' aria-label='Home' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    Home
                </Link>
                <Link rel='dns-prefetch' prefetch={true} href='/services' aria-label='Services' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    Services
                </Link>
                <Link rel='dns-prefetch' prefetch={true} href='/pricing' aria-label='Pricing' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    Pricing
                </Link>
                <Link rel='dns-prefetch' prefetch={true} href='/about-us' aria-label='About Us' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    About Us
                </Link>
            </div>
            <div className='relative flex flex-col w-full h-full md:w-1/3 justify-center items-center mx-auto space-y-2'>
                <h2 className='text-xl my-4 font-semibold text-primary text-center flex relative mx-auto justify-center items-center'>
                    Latest News & Updates
                </h2>
                <Link rel='dns-prefetch' prefetch={true} href='/news-and-updates' aria-label='News & Updates' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    News & Updates
                </Link>
                <Link rel='dns-prefetch' prefetch={true} href='/blog' aria-label='Blog' className='underline text-white text-md text-center flex relative mx-auto justify-center font-regular items-center'>
                    Blog
                </Link>
                <div className='flex relative w-full md:w-1/3 flex-row mx-auto items-center justify-center'>
                    <Link passHref={true} aria-label='facebook' rel='noopener noreferrer nofollow' prefetch={true} href='www.facebook.com/codeblock' className='relative flex mx-auto justify-center items-center fill-primary'><FacebookRoundedIcon className='relative flex mx-auto justify-center items-center fill-primary' /></Link>
                    <Link passHref={true} aria-label='youtube' rel='noopener noreferrer nofollow' prefetch={true} href='www.youtube.com/codeblock' className='relative flex mx-auto justify-center items-center fill-primary'><YouTubeIcon className='relative flex mx-auto justify-center items-center fill-primary' /></Link>
                    <Link passHref={true} aria-label='instagram' rel='noopener noreferrer nofollow' prefetch={true} href='www.instagram.com/codeblock' className='relative flex mx-auto justify-center items-center fill-primary'><InstagramIcon className='relative flex mx-auto justify-center items-center fill-primary' /></Link>
                    <Link passHref={true} aria-label='twitter' rel='noopener noreferrer nofollow' prefetch={true} href='www.twitter.com/codeblock' className='relative flex mx-auto justify-center items-center fill-primary'><TwitterIcon className='relative flex mx-auto justify-center items-center fill-primary' /></Link>
                    <Link passHref={true} aria-label='linkedin' rel='noopener noreferrer nofollow' prefetch={true} href='www.linkedin.com/company/codeblock' className='relative flex mx-auto justify-center items-center fill-primary'><LinkedInIcon className='relative flex mx-auto justify-center items-center fill-primary' /></Link>
                </div>
            </div>
        </div>
            <div className='flex relative justify-center items-center mb-4 text-center w-full h-full'>
                <div className='relative flex flex-col items-center justify-center w-full md:w-1/3 mx-auto h-full text-center space-y-2'>
                    <h2 className='flex-relative mx-auto justify-center items-center text-center text-primary text-3xl my-2 font-extrabold'>
                        Get in Touch!
                    </h2>
                    <div className='flex flex-col md:flex-row w-full justify-between items-center'>
                        <div className='flex flex-col w-full md:w-1/4 h-full relative space-y-2 items-center justify-center text-center mx-auto'>
                            <p className='text-center items-center justify-center mx-auto relative flex text-primary font-semibold text-lg'>
                                Email
                            </p>
                            <p className='flex relative items-center justify-center text-center text-sm text-white font-regular mx-auto'>braedenvallis@thecodeblock.dev</p>
                            <p className='flex relative items-center justify-center text-center text-sm text-white font-regular mx-auto'>bradyburns@thecodeblock.dev</p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/3 h-full space-y-2 relative items-center text-center justify-center mx-auto'>
                            <p className='text-center items-center justify-center mx-auto relative flex text-primary font-semibold text-lg'>
                                Phone
                            </p>
                            <p className='flex relative items-center justify-center text-center text-sm text-white font-regular mx-auto'>(289) 681-3887</p>
                            <p className='flex relative items-center justify-center text-center text-sm text-white font-regular mx-auto'>(289) 259-9139</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer