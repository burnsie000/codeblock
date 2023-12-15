import { notFound } from "next/navigation"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: `CodeBlock | Page Not Found`,
      description: "We're sorry! The page you are looking for cannot be found!",
      openGraph: {
        images: ['/opengraph-image.png', '/twitter-image.png'],
        url: 'opengraph-image.png',
        description: 'TheCodeBlock.dev',
        title: 'CodeBlock',
        type: 'website',
      },
    }
    }

export default function NotFoundCatchAll() {
  notFound()
}