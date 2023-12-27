import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const Navigation = dynamic(() => import('@/components/Navigation'))
const Footer = dynamic(() => import('@/components/Footer'))
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const Script = dynamic(() => import ('next/script'))
import { Suspense } from 'react'
import Loading from './loading'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thecodeblock.dev/'),
  title: 'CodeBlock Toronto: Next.js Web Development Experts',
  description: "Toronto's top Next.js web development by CodeBlock. We offer unique, fast, SEO-optimized web design and development services.",
  openGraph: {
    images: [
      {
      url: '/twitter-image.png',
      height: 600,
      width: 1200,
      alt: 'CodeBlock Toronto: Next.js Web Development Experts',
      },
    ],
    url: 'https://www.thecodeblock.dev/',
    description: "Toronto's top Next.js web development by CodeBlock. We offer unique, fast, SEO-optimized web design and development services.",
    title: 'TheCodeBlock.dev',
    siteName: 'TheCodeBlock.dev',
    type: 'website',
    locale: 'en_CA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "CodeBlock",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_SC}` 
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: { publicUrl } } = await supabase.storage.from('webphotos').getPublicUrl('codeblock.svg')
  const logo = publicUrl
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navigation logo={logo} />
          {children}
        </Suspense>
        <SpeedInsights />
        <Analytics />
        <Footer
        logo={logo}
        />
        <Script
          strategy="lazyOnload"
          id='google-analytics'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id='google-analytics' strategy="lazyOnload">
          {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                      });
                  `}
        </Script>
      </body>
    </html>
  )
}
