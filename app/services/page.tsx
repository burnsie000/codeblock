import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))
import React from 'react'
import { Metadata } from 'next'
const What = dynamic(() => import('@/components/What'))
const WhatReverse = dynamic(() => import('@/components/WhatReverse'))
const CenterText = dynamic(() => import('@/components/CenterText'))
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Our Services | Website Development Services in Toronto`,
    description: 'At CodeBlock, we specialize in custom NextJS website development services,  and SEO services for small business and eCommerce development in Toronto',
    alternates: {
      canonical: 'https://www.thecodeblock.dev/services'
    },
    openGraph: {
      images: ['/opengraph-image.png', '/twitter-image.png'],
      url: '/services',
      description: 'TheCodeBlock.dev',
      title: 'CodeBlock',
      type: 'website',
    },
  }
  }

const page = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  let { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('Services.webp')
  const hero = publicUrl

  const getOurService = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('Ourservices.webp')
    const url = publicUrl
    return url
  }
  const getBenefitsService = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('Benefitsservices.webp')
    const url = publicUrl
    return url
  }
  const getServiceBenefits = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('ServiceBenefits.webp')
    const url = publicUrl
    return url
  }
  const getServiceEnhance = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('ServiceEnhance.webp')
    const url = publicUrl
    return url
  }
  const getUIDesign = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('UIDesign.webp')
    const url = publicUrl
    return url
  }
  const getUIPlanning = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('UIPlanning.webp')
    const url = publicUrl
    return url
  }
  const getEcommerce = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('ecommerce.webp')
    const url = publicUrl
    return url
  }
  const getEcommerceTwo = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('ecommerceTwo.webp')
    const url = publicUrl
    return url
  }
  const getHappyCustomer = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('HappyCustomer.webp')
    const url = publicUrl
    return url
  }
  const getLogo= async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('codeblock.svg')
    const url = publicUrl
    return url
  }

  const getLogoUrl = await getLogo()
  const logo = getLogoUrl

  const getHappyCustomerUrl = await getHappyCustomer()
  const HappyCustomer = getHappyCustomerUrl

  const getEcommerceTwoUrl = await getEcommerceTwo()
  const EcommerceTwo = getEcommerceTwoUrl

  const getEcommerceUrl = await getEcommerce()
  const Ecommerce = getEcommerceUrl

  const getUIPlanningUrl = await getUIPlanning()
  const UIPlanning = getUIPlanningUrl

  const getUIDesignUrl = await getUIDesign()
  const UIDesign = getUIDesignUrl

  const getServiceEnhanceUrl = await getServiceEnhance()
  const serviceEnhance = getServiceEnhanceUrl 

  const serviceBenefitsUrl = await getServiceBenefits()
  const serviceBenefits = serviceBenefitsUrl

  const getServiceBenefitsUrl = await getBenefitsService()
  const Benefitsservices = getServiceBenefitsUrl

  const getOurServicesUrl = await getOurService()
  const Ourservices = getOurServicesUrl

  return (
    <div className='relative flex w-full h-full flex-col flex-1 items-center justify-center text-center'>
      <Hero 
      backgroundImage={hero}
      heading='Our Services'
      subheading='Website Development Services in Toronto'
      paragraph='At CodeBlock, we specialize in custom NextJS website development services,  and SEO services for small business and eCommerce development in Toronto'
      cta="Let's Get Started!"
      />
      <What 
      heading='Turning Slow Websites into Fast, User-Friendly Experiences'
      subheading='We have all been there. We typed in a URL and hit enter and began to wait for the page to load. 10 seconds go by and your thinking that it is starting to take a while. You ask yourself "Is this site working?" That is exactly what your customers are wondering when they try to visit most sites from their phones.'
      paragraph='Welcome to CodeBlock, where we turn your web dreams into reality! Based in Toronto, we love to make high-quality, fast websites. We know how important your website is for your business. It is like your online home, where people come to visit and see what you are all about. We are a client-focused, customer-centric company that creates website solutions that deliver tangible business results.'
      problem='Have you ever been to a slow website? Its like waiting in a really long line at the store. Its no fun, right? Thats why we work hard to make websites that load super fast. We ensure that every website we build is much more accessible and engaging than any cookie cutter website. We create a multi-platform experience for your businesses customers that immerses your customers with an experience that is a reflection of your business.'
      image={Ourservices}
      />
      <WhatReverse 
      subheading='When a website loads quickly, your visitors are happy. They can find what they need without waiting and waiting. This means they will like visiting your website and will come back more often. Some people use website builders like Squarespace to make their websites. These are okay, but sometimes they make websites that look the same as lots of others.'
      problem='We call these "cookie-cutter" websites. They might be slow too because they use lots of big JavaScript files. Big files make websites take longer to show up on your screen. We harness the powers of server side rendering to make your website load faster. This is accomplished by creating a static html and css skeleton that is not interactive to show the user first. After the non-interactive skeleton is shown to the user, the server begins to render the javascript files so that the page can become interactive. By loading the heavy javascript files on the server afterwards, the webpage will have the content showing first, which makes the time til the user sees content on your website shorter.'
      paragraph='We are not just any web development company. We are a special team of web developers in Toronto who love to create websites that are unique just like you and your business. Our web development services are the best in Toronto. We focus on creating websites that excite and immerse your users, are mobile friendly with a responsive design, enhance the user experience and design, and make your website stand out from your competitors. With our agile web design and development, you will have the best website in your industry that runs on the latest technology. We do not just build websites. We pioneer new innovations that create experiences and revolutionize the way businesses use and see websites.'
      paragraphTwo='We listen to what you want and then use our skills to build a website that shows off the best of what you do. No two websites we make are the same. Each one is special, just like our clients. Our team knows all about web browsers and how to make websites look great on them.'
      image={Benefitsservices}
      />
      <What 
      subheading='Whether your visitors are using Chrome, Firefox, or any other web browser, your website will look perfect. And its not just on computers.'
      problem='We make sure your website looks awesome on phones and tablets too. Everyone who visits your site will have a great experience, no matter what device they are using.'
      paragraph='Now, lets talk about getting new customers. A great website can help you meet lots of new people who might want to buy what you are selling. We focus on making your website not just a place to visit, but a place where visitors become customers. Our goal is to make your website so good that when people see it, they think, "Wow, I want to be part of this!"'
      paragraphTwo='At CodeBlock, we are all about making your online dreams come true. We are one of the best website development companies in Toronto because we care about our clients and their websites. If you want a website that is fast, looks amazing, and helps your business grow, then you are in the right place. We cannot wait to start working with you and make your website the best it can be!'
      image={serviceBenefits}
      />
      <WhatReverse 
      heading='How CodeBlock Enhances Your Current Website'
      subheading='Transforming Your Online Presence with Expert Web Development'
      problem='Is your current website doing all it can for your business? At CodeBlock, we are here to take your site to the next level! We are Torontos best web development company. We are all about making websites that really help your business shine.'
      paragraph='Think about all the web page visitors who come to your website. They want to see something cool and interesting, right? Thats where we come in.'
      paragraphTwo='We are not just any web development company in Toronto; we are a team that cares about making your website the best it can be. Whether you are in Toronto or anywhere else, we are here to help. First, lets talk about how we make your website better. We look at your current website and think about the improvements we can make.'
      image={serviceEnhance}
      />
      <CenterText 
      boldText='Our team of website developers in Toronto are like detectives. They find out what is working well and what could be better. Maybe your website needs to be faster, or perhaps it could look more exciting. Whatever it is, we have got the skills to make it happen.'
      paragraphOne='We know that the best websites are the ones that are easy to use and look great. They need to work well on phones, tablets, and computers because people use all kinds of devices to go online these days. Our team makes sure that no matter how someone visits your site, it will look amazing and work perfectly. This is really important because if your website is easy to use, more people will want to visit it and stay for a while.'
      paragraphTwo="But we don't just stop at making your website look good. We also think about how to make it more helpful for your business. A great website can help you meet lots of new people who might be interested in what you do or sell."
      paragraphThree="Our job is to make your website so interesting and easy to use that these visitors will want to come back again and again. And when they like your website, they're more likely to become your customers."
      paragraphFour="At CodeBlock, we're proud to be a part of the web development community in Toronto. We're not just a company; we're a team that loves helping businesses grow. We offer all kinds of web development services, from small updates to big projects. No matter what you need, we're here to make it happen."
      paragraphFive="Choosing CodeBlock means choosing a web development agency in Toronto that really understands what your business needs. We're excited to work with you and show you just how great your website can be."
      paragraphSix="With our website design and development services, you will feel safe and secure knowing that you will be receiving a jaw dropping website that is blazing fast, secure, and immersive. We work closely with our clients to ensure that we don not give you a website your not 100% satisfied with or your money back guaranteed. Our custom website design is guaranteed to lead to more conversions, more clicks, and higher search engine rankings. After we complete your website, you will be fully ready to begin your email marketing and other digital marketing strategies knowing that what the agencies are doing will finally pay off now that you have the fundamental SEO completed."
      paragraphSeven="With our help, you can have a website that not only looks fantastic but also helps your business grow and succeed. So, are you ready to make your website awesome? Let's do it together!"
      cta='Sign Me Up'
      imageOne={UIDesign}
      imageTwo={UIPlanning}
      />
      <What
      heading='Building Your Online Store and Boosting Performance with CodeBlock' 
      subheading='Grow Your Small Business with Our Website Development Services'
      paragraph="At CodeBlock, a Toronto web development company, we specialize in building online stores and improving website performance. We sp. We're not just a website development agency; we're a team that helps your business grow in the digital world."
      image={Ecommerce}
      />
      <WhatReverse 
      subheading='Creating Online Stores for Small Businesses'
      problem='Do you sell products or services? Want to reach more people online? We make online stores that are easy to use and really cool. We think about your target audience; the people who would love to buy what you sell.'
      paragraph="Our websites make it easy for them to shop, whether they're on a computer or a phone. This is being mobile friendly. Being mobile friendly is super important because lots of people use their phones to shop online."
      paragraphTwo='We use the best programming languages and open-source tools to build your online store. Open source means that we use special software that lots of people can share and improve. This helps us make your website really good and keeps costs down, which is great for small businesses. We specialize in small business websites and eCommerce development.'
      image={EcommerceTwo}
      />
      <CenterText 
      boldText='Improving Website Performance'
      paragraphOne="Nobody likes a website that takes forever to load. That's why we work on improving your website's load time. Fast websites make visitors happy, and happy visitors are good for your business. We're like website mechanics; we fine-tune your site to make sure it runs smoothly and quickly."
      paragraphTwo='Good website performance is also important for something called "search engine optimization" or SEO. This means making your website easy for search engines like Google to find.'
      paragraphThree="When your website is easy to find, more people can discover your business. This is a big part of your marketing strategy. We get you viewed more often online. Getting more views online can bring lots of new customers to your small business."
      cta="Let's Get Started"
      imageOne={HappyCustomer}
      />
      <What 
      subheading='Choose CodeBlock for Your Small Business'
      paragraph="So, if you're a small business in Toronto and need a website, think about choosing CodeBlock. We're a Toronto website development company that really cares about helping your business succeed. We'll work with you to make a website that's just right for you and your customers. Let's make something amazing together!"
      paragraphTwo="When you choose CodeBlock to code your website, you get access to premium web host servers only available to custom coded websites. We also provide our clients with the best customer service, providing weekly check-ins so that we can make sure you are always satisfied. If you are not satisfied with the quality of work we provide, we will provide you with a full refund before in the first month, 75% refund in the second month, or a 50% refund for the third month and beyond."
      image={logo}
      />
    </div>
  )
}

export default page