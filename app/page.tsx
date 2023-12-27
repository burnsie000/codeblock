import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))
const What = dynamic(() => import('@/components/What'))
const How = dynamic(() => import('@/components/How'))
const Features = dynamic(() => import('@/components/Features'))
const FAQ = dynamic(() => import('@/components/FAQ'))
import Script from 'next/script'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import toast, { Toaster } from 'react-hot-toast'

export const runtime = 'edge'

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug} = params;
  const siteURL = 'https://www.thecodeblock.dev/';

  return {
    title: 'CodeBlock Toronto: Next.js Web Development Experts',
    description: "Toronto's top Next.js web development by CodeBlock. We offer unique, fast, SEO-optimized web design and development services.",
    alternates: {
      canonical: `${siteURL}`,
    },
    openGraph: {
      images: ['/opengraph-image.png', '/twitter-image.png'],
      url: '/',
      description: 'TheCodeBlock.dev',
      title: 'CodeBlock',
      type: 'website',
    },
  };
}

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  let { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('hero.png')
  const hero = publicUrl
  const { data: {session}} = await supabase.auth.getSession()
  const notify = async () => toast('You have been signed in.')
  if (session) {
    notify()
  }

  const getBenefitOne = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('benefitOne.webp')
    const hearing = publicUrl
    return hearing
  }
  const getBenefitTwo = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('benefitTwo.webp')
    const hearing = publicUrl
    return hearing
  }
  const getBenefitThree = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('benefitThree.webp')
    const hearing = publicUrl
    return hearing
  }
  const getAdobeStock = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('AdobeStock_457462002.webp')
    const hearing = publicUrl
    return hearing
  }
  
  const adobeUrl = await getAdobeStock()
  const adobe = adobeUrl

  const getOne = await getBenefitOne()
  const benefitOne = getOne

  const getTwo = await getBenefitTwo()
  const benefitTwo = getTwo

  const getThree = await getBenefitThree()
  const benefitThree = getThree

  return (
    <main className="flex relative w-full z-0 flex-col">
      <Toaster />
      <Hero heading='Reach More Customers With A Blazing Fast Website'
      subheading='Custom Websites Built With The Latest Frameworks'
      cta='Schedule a Call Today!'
      backgroundImage={hero}
      paragraph='At CodeBlock, a leading website development company in Toronto, we understand the importance of fast websites. Our custom web development services are designed to boost your Google search ranking by enhancing your sites speed, making your web page visitors experience smoother and more enjoyable.'
      />
      <What heading='Our Custom Web Development Helps Your Business Stand Out' subheading='If you have a cookie cutter website from a website builder like Squarespace, Wordpress, Wix, and others, you could be missing out on many new customers...' paragraph='If your current website, built with a website builder like Squarespace, WordPress, Wix, or others, is slow, you are likely losing potential new customers. Slow websites frustrate web browsers, leading them to abandon your site. This is where CodeBlock, a premier web development company in Toronto, steps in.

        When you hire CodeBlock to develop your website, we  use the latest frameworks and technology such as ReactJS, NextJS, and ExpressJS to optimize your code and to boost your page loading speeds for your website. With our blazing fast websites, you will certainly see a massive difference in your sites Google Search rankings and you will absolutely convert more of your web page visitors into paying customers.' image={adobe}
      problem='Cookie-cutter websites often overload with JavaScript files, slowing down web browsers. As a top-notch web development agency in Toronto, CodeBlock uses advanced technologies like ReactJS, NextJS, and ExpressJS to combat this issue, enhancing your sites loading speeds and search engine ranking.'  />
      < How 
      title='What Do I Get With A Custom Coded Website That I Cannot Get With A Website Builder Website?'
      benefitOne="Faster Page Load Speeds"
      featureOne='Unlike standard website builders, our custom web development at CodeBlock leverages modern frameworks for faster page load speeds. This not only improves the user experience for your web page visitors but also enhances your sites indexability, crucial for SEO.'
      imageOne={benefitOne}
      benefitTwo='Better Control Over The Websites Design and Functionality'
      featureTwo='With CodeBlock, a renowned web development company in Toronto, the sky is the limit for your design choices. Our custom websites offer greater control over design and functionality compared to cookie-cutter websites, ensuring your site stands out among website development companies in Toronto.'
      imageTwo={benefitTwo}
      benefitThree='Better Search Engine Rankings'
      featureThree='A custom website from CodeBlock, a leading website development agency, ensures better search engine rankings. We focus on making your site more indexable, giving you an edge over competitors with cookie-cutter websites.'
      imageThree={benefitThree}
      />
      <Features />
      <FAQ />
      <Script id='structured-data' strategy='lazyOnload' type="application/ld+json">
       {` {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "CodeBlock",
          "image": "https://www.thecodeblock.dev/codeblock.svg",
          "telephone": "(289) 681-3887",
          "email": "",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto"
          }
        }`}
      </Script>
    </main>
  )
}
