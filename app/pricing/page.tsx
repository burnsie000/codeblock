import dynamic from 'next/dynamic'
import React from 'react'
import { Metadata } from 'next'
const Hero = dynamic(() => import('@/components/Hero'))
const What = dynamic(() => import('@/components/What'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const PricingTwo = dynamic(() => import('@/components/PricingTwo'))
const CenterText = dynamic(() => import('@/components/CenterText'))
const WhatReverse = dynamic(() => import('@/components/WhatReverse'))
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `CodeBlock Website Development Cost and Add-ons`,
    description: 'Web development costs between $10,000 to $50,000 per project. Factors influencing pricing include the sites size, required features, and the amount of users.',
    alternates: {
      canonical: 'https://www.thecodeblock.dev/pricing'
    },
    openGraph: {
      images: ['/opengraph-image.png', '/twitter-image.png'],
      url: '/pricing',
      description: 'TheCodeBlock.dev',
      title: 'CodeBlock',
      type: 'website',
    },
  }
  }

const page = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  let { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('Pricing.webp')
  const hero = publicUrl

  const getPricingDevelopment = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('PricingDevelopment.webp')
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
  const getBenefitOne = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('benefitOne.webp')
    const url = publicUrl
    return url
  }
  const getSEOWIN = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('SEOWIN.webp')
    const url = publicUrl
    return url
  }
  const getBenefitThree = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('benefitThree.webp')
    const url = publicUrl
    return url
  }

  const getBenefitThreeUrl = await getBenefitThree()
  const BenefitThree = getBenefitThreeUrl

  const SEOWINUrl = await getSEOWIN()
  const SEOWIN = SEOWINUrl

  const getBenefitOneUrl = await getBenefitOne()
  const BenefitOne = getBenefitOneUrl

  const getUIDesignUrl = await getUIDesign()
  const UIDesign = getUIDesignUrl
  
  const PricingDevelopmentUrl = await getPricingDevelopment()
  const PricingDevelopment = PricingDevelopmentUrl

  return (
    <div className='flex relative w-full h-full flex-1 flex-col'>
      <Hero 
      heading='What do Custom Website Development Services Cost in Toronto?'
      subheading='We Figure out How Much Our Special Websites Cost by Looking at a Few Things.'
      paragraph="We think about the tools we need, how to make your website easy to find on Google (that's SEO), how big your website project is, and how quickly you need it. We also see if you want extra help, like writing stuff for your website or making sure it keeps working well. All these things help us decide how much it will cost."
      cta='Book Now!'
      backgroundImage={hero}
      />
      <What 
      image={PricingDevelopment}
      subheading='Premium Website Development Plans'
      paragraph='Our custom website development service packages are all high-quality. The difference between each package is the amount of high search rankings on Google. Typically, website development companies charge hundreds of dollars for a basic html or wordpress website. Our websites are designed with advanced frameworks in JavaScript, allowing your page to load in less than half a second! We have many packages to choose from because there is no one size fits all business type of solution.'
      />
      <Pricing 
      heading='Our Web Development Packages'
      productOne='Custom Website Development Plan'
      productOnePrice='$2,500'
      productTwo='Small Business Website Plan'
      productTwoPrice='$10,000'
      productThree='Corporate Ecommerce Plan'
      productThreePrice='$25,000'
      />
      <PricingTwo 
      productOne='SAAS Website Plan'
      productOnePrice='$50,000'
      productTwo='Corporate Website Plan'
      productTwoPrice='$100,000'
      />
      <CenterText 
      heading='Website Development Cost'
      boldText="We change our prices for making websites based on what you need. Think about your type of business, how big it is, and what you don't like about your current website."
      paragraphOne="If you have a big online store or commerce platform, you'll need a lot of pages. If you just want a website to show your work, you won't need as many. Our plans make sure your website works well on phones and computers (that's called responsive design), is easy to use (UX design), has a place for blogs, and is better than your old website. We don't hide extra costs. You pay for the website hosting, and we do everything else. You will receive a professionally designed website that is highly responsive and blazing fast to grow your business or ecommerce business."
      paragraphTwo="For websites that sell programs (SAAS), we have a special package. It includes a SAAS app, a news or blog section, and makes sure your website looks good on all devices and works better than before."
      paragraphThree="For small businesses in Toronto, we make websites that are good for phones and computers and set up your website right for SEO (so people can find you on Google). Our Toronto website development services are great for small businesses and big online stores."
      imageOne={UIDesign}
      />
      <WhatReverse 
      image={BenefitOne}
      subheading='Website Design and Development in Toronto'
      problem="Our company in Toronto, Ontario, makes really good websites for small businesses. With our Toronto web development services, we help you compete with big businesses by making great online stores that work well on all devices, have a place for news and blogs, and more."
      paragraph="Some Toronto companies that make websites or do digital marketing don't do a great job. They might use simple stuff like basic HTML or WordPress. We're different. We make the best websites that look great and are better than your competitors. We are the best website development company Toronto."
      />
      <CenterText 
      boldText='Why Choose CodeBlock Toronto?'
      paragraphOne='Expertise in Ecommerce Solutions: At CodeBlock website development services in Toronto, our ecommerce web developers in Toronto specialize in creating dynamic ecommerce platforms. We know the ins and outs of ecommerce website development, ensuring your online store not only looks good but also functions seamlessly.'
      boldTextOne='Responsive Design for All Devices:'
      paragraphTwo=' In todays mobile-centric world, having a website that performs well on all mobile devices is crucial. Our Toronto web developers focus on responsive design, making sure your website delivers a top-notch experience on smartphones, tablets, and desktops.'
      boldTextTwo="Customized Web Development Services:"
      paragraphThree=' We offer a range of web development services in Toronto, tailored to meet the specific needs of your business. From ecommerce solutions in Toronto to comprehensive web design and development, we cover it all.'
      boldTextThree='Top-Notch Ecommerce Web Development Company:'
      paragraphFour=' As a prominent ecommerce web development company in Toronto, we pride ourselves on creating ecommerce platforms that drive sales and enhance user experience.'
      boldTextFour='Advanced Ecommerce Web Development Services:'
      paragraphFive=' Our ecommerce web development services in Toronto are designed to provide you with a robust, secure, and scalable online store. We focus on every aspect of ecommerce, from inventory management to payment processing.'
      />
      <CenterText 
      boldText='Our Array of Services:'
      paragraphOne='Ecommerce Website Developers in Toronto: Our team consists of skilled ecommerce website developers who understand the nuances of creating a successful online store.'
      boldTextOne='Content Management Systems:'
      paragraphTwo=' We equip your website with user-friendly content management systems, allowing you to easily update your products or services.'
      boldTextTwo="Marketing Strategies for Online Presence:"
      paragraphThree=' Our marketing strategies are crafted to boost your online presence, helping you reach your target audience effectively.'
      boldTextThree='Conversion Rate Optimization:'
      paragraphFour=" We don't just create websites; we optimize them for higher conversion rates, ensuring that your visitors turn into customers."
      boldTextFour='Comprehensive Ecommerce Solutions:'
      paragraphFive=' From the initial concept to the final launch, our ecommerce solutions encompass every step of building a powerful ecommerce platform.'
      />
      <What 
      heading='Why We Stand Out:'
      subheading="We Understanding Your Business. We take the time to understand your business, whether you're just starting an online business or looking to expand your existing ecommerce store."
      boldText='Affordable Solutions: '
      problem='We offer competitive pricing for our web design and development services, making top-quality web development accessible to all businesses in Toronto.'
      boldTextTwo='Dedicated Customer Service: '
      paragraph="Our commitment to customer satisfaction sets us apart. We work closely with you to ensure that your website reflects your brand and meets your business goals."
      image={SEOWIN}
      
      />
      <WhatReverse 
      subheading='Get Started with CodeBlock Today!'
      problem="Ready to take your business online or elevate your existing website? Contact CodeBlock Toronto website development company, your go-to website development company in Toronto. With our team of skilled website developers and a comprehensive range of services, we are equipped to handle projects of any size and complexity."
      paragraph='Join the ranks of our satisfied customers and let us help you create an online presence that stands out. Whether it’s web development, ecommerce solutions, or crafting marketing strategies, CodeBlock is here to turn your digital dreams into reality.'
      paragraphTwo="Contact us now and embark on your journey to a successful online venture with CodeBlock Toronto!"
      image={BenefitThree}
      />
    </div>
  )
}

export default page