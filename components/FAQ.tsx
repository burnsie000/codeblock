"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const Accordion = dynamic(() => import('@mui/material/Accordion'))
const AccordionSummary = dynamic(() => import('@mui/material/AccordionSummary'))
const AccordionDetails = dynamic(() => import('@mui/material/AccordionDetails'))
const Typography = dynamic(() => import('@mui/material/Typography'))
const ExpandMoreIcon = dynamic(() => import('@mui/icons-material/ExpandMore'))

const FAQ = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='w-full h-full flex-col relative flex items-center justify-center p-12'>
        <h2 className='font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl my-12 text-primary text-center flex relative mx-auto'>
            Frequently Asked Questions
        </h2>
        <div className='relative flex flex-col items-center justify-center w-full md:w-1/3'>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                className='relative flex'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-sm md:text-md lg:text-lg xl:text-xl' sx={{ color: 'text.primary' }}>What Does a Web Developer Do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                At CodeBlock, a web developer is responsible for both website design and development, focusing on creating robust web applications that meet our clients needs. Our team specializes in web development and internet applications, combining technical proficiency with creative design. We are adept at e-commerce website development, particularly in markets like London, where online commerce is booming. Our developers possess a wide range of web developer skills, ensuring each project is handled with expertise and precision.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ color: 'text.secondary' }}>
                    How Long Does It Take to Become a Web Developer?
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Becoming a proficient web developer typically requires several years of experience, especially in specialized areas like web application development. At CodeBlock, our team members have spent years honing their skills in web design development and internet programming. We ensure our developers stay at the forefront of the evolving web, continuously updating their knowledge to provide the best service in the ever-changing landscape of web technology.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography  className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ color: 'text.secondary' }}>
                    How Much Does a Web Developer Cost?
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    he cost of hiring a web developer from a web development agency like CodeBlock varies depending on the projects complexity and scope. For instance, an e-commerce website development project in London might have different pricing than a simple website redesign. We offer competitive rates for our website design and development services, ensuring that our clients receive value for their investment in our expertly crafted web solutions.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>What Do Web Developers Do Daily?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Daily activities at CodeBlock include various aspects of web design and development. Our developers engage in coding, testing, and deploying web applications, ensuring each project aligns with our high standards. As a leading web application development company, we focus on creating user-friendly, efficient, and aesthetically pleasing websites. Our team collaborates closely, leveraging their collective expertise in web development and internet applications to deliver top-notch results.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Is There a Good Future for Web Developers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                The future for web developers, especially in niches like e-commerce website development and web application development, is very promising. The digital landscape is continuously evolving, and at CodeBlock, we are committed to staying ahead of these changes. Our expertise in web development and internet applications positions us to adapt to new trends and technologies, ensuring that our services remain relevant and valuable in the long term.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Is There a Good Future for Web Developers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                The future for web developers, especially in niches like e-commerce website development and web application development, is very promising. The digital landscape is continuously evolving, and at CodeBlock, we are committed to staying ahead of these changes. Our expertise in web development and internet applications positions us to adapt to new trends and technologies, ensuring that our services remain relevant and valuable in the long term.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>What is a Website Development Agency?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                A website development agency, such as CodeBlock, is a professional firm that specializes in creating, designing, and managing websites. Our services range from web design and development to web application development, with a keen focus on delivering high-quality and efficient digital solutions. As a web development agency, CodeBlock prides itself on its expertise in various aspects of internet programming and web development.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>How Much Does it Cost to Build a Website with an Agency?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                The cost of building a website with an agency like CodeBlock varies based on project complexity and specific requirements. For instance, e-commerce website development or extensive web application development may have different pricing structures. At CodeBlock, we offer transparent pricing tailored to the unique needs of each project, ensuring clients receive value and quality.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>How Many Hours Does it Take to Build a Website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                The time to build a website can vary significantly. At CodeBlock, we leverage our web developer skills to streamline the process, focusing on efficiency without compromising quality. A simple website may take a few weeks, while more complex projects, such as e-commerce sites or intricate web applications, might require several months of development.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Do You Have to Pay Monthly to Have a Website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                With CodeBlock, the payment structure depends on the specific services required. Some projects may involve one-time development fees, while others, like ongoing maintenance or web hosting, might require monthly payments. We ensure our clients understand all costs upfront for their website design and development needs.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>How Much Does a Web Designer Charge Per Hour?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Hourly rates for web designers vary based on experience and project complexity. At CodeBlock, we ensure competitive pricing for our web design development services. Clients can expect clear communication regarding costs to ensure there are no surprises.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Does it Cost Money to Make a Website for a Small Business?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, developing a website for a small business typically involves costs. However, at CodeBlock, we offer scalable solutions tailored to the size and budget of the business. From basic web design to more comprehensive web application development, we cater to various price points.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Can I Make a Website for Free?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                While there are free tools available for website creation, professional web development agencies like CodeBlock provide a level of customization, efficiency, and technical expertise that free options cannot match. Our web design and development services ensure a professional, high-performing website tailored to your specific business needs.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>How Much is Your Website Worth?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                The value of a website created by CodeBlock is measured not just in monetary terms but also in its effectiveness, user engagement, and ROI. We focus on creating websites that are valuable assets to your business, incorporating the latest trends in web development and internet applications.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>Do Web Development Agencies Make Money?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, web development agencies like CodeBlock generate revenue by providing expert services in web design, development, and maintenance. Our business model is built on delivering high-quality digital solutions that meet the evolving needs of our clients in the dynamic web landscape.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='w-full justify-center text-center relative items-center px-0 md:px-4' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className='relative flex items-center justify-center text-center mx-auto font-bold text-black text-sm md:text-md lg:text-lg xl:text-xl' sx={{ width: '60', flexShrink: 1 }}>What Can I Expect from a Web Design Agency?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                From CodeBlock, you can expect comprehensive services in website design and development, including e-commerce solutions, web application development, and responsive design. Our commitment is to deliver top-tier, custom digital solutions that align with your business goals and enhance your online presence.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}

export default FAQ