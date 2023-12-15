import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))
const What = dynamic(() => import('@/components/What'))
const WhatReverse = dynamic(() => import('@/components/WhatReverse'))
import React from 'react'
const OurStory = dynamic(() => import('@/components/OurStory'))
const OurPastWork = dynamic(() => import('@/components/OurPastWork'))
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'



export async function generateMetadata(): Promise<Metadata> {
return {
  title: `About Us | Toronto Website Design & Development Experts`,
  description: 'eCommerce website. Small Business website. CodeBlock provides the premium eCommerce development services & small business web development services in Toronto.',
  alternates: {
    canonical: 'https://www.thecodeblock.dev/about-us'
  },
  openGraph: {
    images: ['/opengraph-image.png', '/twitter-image.png'],
    url: '/about-us',
    description: 'TheCodeBlock.dev',
    title: 'CodeBlock',
    type: 'website',
  },
}
}

const page = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  let { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('about-us-hero.png')
  const hero = publicUrl
  let { data } = await supabase.storage.from('webphotos').getPublicUrl('SEOWIN.webp')
  const SEOWIN = data.publicUrl

  const getTriumphs = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('triumphs.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getBraeden = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('Braeden.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getAboutUs = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('About-us.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getOurStory = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('OurStory.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getOurPastWork = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('OurPastWork.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getCoding = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('coding.webp')
    const triumphs = publicUrl
    return triumphs
  }
  const getBenefitServices = async () => {
    "use server"
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: {publicUrl} } = await supabase.storage.from('webphotos').getPublicUrl('Benefitsservices.webp')
    const triumphs = publicUrl
    return triumphs
  }

  const getBenefitsServicesUrl = await getBenefitServices()
  const BenefitServices = getBenefitsServicesUrl

  const getCodingUrl = await getCoding()
  const coding = getCodingUrl

  const OurPastWorkUrl = await getOurPastWork()
  const OurPastWorkImage = OurPastWorkUrl

  const getOurStoryUrl = await getOurStory()
  const OurStoryImage = getOurStoryUrl

  const getAboutUsUrl = await getAboutUs()
  const aboutUs = getAboutUsUrl

  const getBraedenUrl = await getBraeden()
  const Braeden = getBraedenUrl

  const triumphs = await getTriumphs()
  const triumph = triumphs
  
  return (
    <main className='flex flex-1 relative w-full z-0 flex-col'>
      <Hero heading='We Know First Hand How Bad Digital Marketing Agencies Can Be at S.E.O...'
      subheading='Many Digital Marketing Agencies are so Devoted to Keywords That They Forget One Critical Factor In Your Webpages Ability To Rank.'
      paragraph='Welcome to the digital crafting space of CodeBlock, where pioneering technology meets creative excellence. At the core of our ethos, we blend innovative web design and robust web application development to sculpt state-of-the-art digital experiences. Our journey is marked by a relentless pursuit of perfection after experiencing the horrors of digital marketing agency SEO. We solve this by delivering web solutions that are not only visually stunning but also functionally superior. With a team of seasoned experts, CodeBlock stands as a beacon of expertise in the ever-evolving landscape of web development, committed to elevating your digital presence to new heights.'
      cta='Discover our Portfolio'
      backgroundImage={hero}
      />
      <What 
      heading='Meet The Developer'
      subheading='The lead developer at CodeBlock, Brady Burns, is a full stack developer who primarily uses NextJS.'
      paragraph='Brady has been coding forever. Brady first learned how to code in HTML, CSS, and Javascript when he was 12 years old. Brady continued to learn how to code, and learned many JavaScript frameworks and other programming languages since he first learned to code in 2012. Brady Burns is able to build blazing fast websites using the latest technology and frameworks like ReactJS, NextJS, and Python. Before joining CodeBlock, Brady Was a digital marketer for a digital marketing agency, and helped clients boost their rankings on google by over 100% in 2 months.'
      problem='Many digital marketing agencies stuff keywords into your pages and pray that they rank on google. It is nothing you couldnt do in 5 extra minutes yourself. They truly believe that their is no way to increase your rank other than keyword stuffing every last paragraph of each of your pages to maybe someday rank high on google. DO NOT LET THEM FOOL YOU. One of the biggest factors when it comes to ranking on Google is your sites performance. This is for many reasons but primarily because a faster, better optimized website is easier for Googles crawlers to index, and because it leads to a better user experience, which Google also keeps track of. Because of this, the SEO you have been paying for is obviously inadequate, but what is the solution? The solution is to build a better performing website so that google can actually index the keywords your marketers have been stuffing into your pages and so that you stop having people leave your website so quickly, leading to more conversions.'
      image={aboutUs}
      />
      <WhatReverse 
      heading='Meet Your Customer Support Team'
      subheading='Braeden Vallis is a Criminology graduate who has been pursuing a career in client relations since he graduated Carleton University in April 2022.'
      paragraph=' After graduating, Braeden found work as a Behavioural Support Specialist at Safe Management Group Inc. and worked a second job as a legal assistant for Robert Geurts, A solo Practitioner Lawyer in Toronto Ontario. These roles have taught braeden how to communicate effectively and appropriately in order to maintain positive customer relations. Braeden Vallis helps customers by anwering their inquiries into our services and assisting new customers in purchasing the right services for their business.'
      problem='Similar to our lead developer, Brady Burns, Braeden saw that many customers of digital marketing agencies were not receiving the results they paid for. They hired digital marketers to do their SEO and get their website put up, but all they got for their hard earned money was a squarespace site that looks the exact same as everyone elses site, and a bunch of paragraphs all over the site that do not entirely make sense because someone is simply just stuffing keywords all over the place anywhere they fit. Braeden joined CodeBlock to help solve this problem by giving his clients full transparency of their situation, and ensuring their needs and their businesses needs are met.'
      image={Braeden}
      />
      <OurStory 
      heading='Our Story'
      image={OurStoryImage}
      paragraph='CodeBlock was started in November 2023 in Oakville Ontario. The founders of CodeBlock, Brady Burns and Braeden Vallis, Noticed that many digital marketing agencies were not very knowledgeable at website building and SEO. This came at a detriment to those agencies clients because the clients got cookie cutter websites that loaded slow, hurt user experience, conveyed distrust, and made it generally annoying to use their website. Many of the clients we saw were confused as to what these agencies were doing, and felt like all the agencies did was type out gibberish into the page to stuff it with keywords. Not to mention, the website was run on slow overpacked servers, and the websites had way too much unused javascript and css which were affecting the indexing by Googles Webcrawlers. This hurt these clients abilities to rank and this is why Brady Burns and Braeden Vallis started Codeblock.'
      />
      <OurPastWork 
      heading='Crafting Digital Triumphs: The CodeBlock Odyssey'
      subheading='A Journey of Innovation and Excellence'
      image={BenefitServices}
      paragraph='At CodeBlock, our journey into the realms of web development and digital marketing is more than just a business venture; its a narrative of transformative success and innovation. Led by our visionary lead developer and digital marketing guru, Brady Burns, we have charted a course through the complex digital landscape, marked by groundbreaking achievements. Bradys journey, characterized by his mastery of SEO and a keen eye for detail in web solutions, stands as a testament to the transformative power of strategic digital marketing combined with technical prowess. His approach has not only elevated the online presence of our clients but has also reshaped the way we think about the intersection of web development and digital marketing. Under his guidance, CodeBlock has become synonymous with excellence, innovation, and an unwavering commitment to delivering web solutions that are not just effective but also set new standards in the digital world.'
      imageTwo={OurPastWorkImage}
      paragraphTwo='Before the inception of CodeBlock, Brady Burns honed his expertise in the digital marketing realm, achieving remarkable feats in web development and SEO. His work with a Maryland-based hearing clinic, 3D Hearing, stands as a shining example of his prowess. Within just two months, Bradys strategic SEO interventions led to a staggering 110% increase in search visibility for 3D Hearings website. This remarkable surge not only boosted the clinics Google rankings but also translated into a significant uptick in client calls and new client engagements. The success story of 3D Hearing is a clear reflection of the potency of strategic SEO and technical excellence.'
      imageThree={coding}
      paragraphThree='This experience was a pivotal moment, leading to the birth of CodeBlock. Driven by a vision to revolutionize the industry standard, CodeBlock was founded on the principle that website performance is not just a metric but a cornerstone of digital success. Our philosophy is rooted in the understanding that fast-loading, high-performance websites, particularly those crafted in Next.js, are not only more favorable for Googles indexing but are also pivotal in enhancing user experience and conversion rates.'
      imageFour={triumph}
      paragraphFour='At CodeBlock, we challenge the status quo of relying on generic, template-based websites. We believe in the power of custom-coded solutions that stand apart in both form and function. Our commitment goes beyond the superficial aesthetics of digital presence; we delve deep into the technical aspects that drive performance, ensuring our clients websites are not just visible but impactful.'
      imageFive={SEOWIN}
      paragraphFive='Our ethos is simple yet profound: Delivering excellence in web development and SEO that translates into tangible business growth for our clients. At CodeBlock, we dont just build websites; We craft digital experiences that resonate, engage, and convert. This commitment to excellence is what sets us apart and drives our journey forward.'
      />
    </main>
  )
}

export default page