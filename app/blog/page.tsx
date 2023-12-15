import React from 'react'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `The CodeBlock Website Development Blog | Toronto`,
    description: "CodeBlock's Website Development Blog covers everything you need to know about eCommerce Website Development, SEO, and Small Business Website Development.",
    alternates: {
      canonical: 'https://www.thecodeblock.dev/blog'
    },
    openGraph: {
      images: ['/opengraph-image.png', '/twitter-image.png'],
      url: '/blog',
      description: 'TheCodeBlock.dev',
      title: 'CodeBlock',
      type: 'website',
    },
  }
  }

const page = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: {session} } = await supabase.auth.getSession()
  if (!session) {
    return redirect('/')
  }
  return (
    <div className='flex relative items-center flex-col justify-center w-full h-screen py-[5rem]'>
      blog page
    </div>
  )
}

export default page