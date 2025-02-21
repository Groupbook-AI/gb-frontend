import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s | Groupbook',  
    default: 'Groupbook | Simplifying Group Travel',
  },
  description: 'Groupbook streamlines group travel by offering seamless booking solutions, ensuring a hassle-free experience for any group event.',
  keywords: 'group travel, event booking, group booking solutions, seamless booking platform, hotel room blocks, event accommodation, team travel management, destination marketing tools, convention event booking, group accommodation management',
  robots: 'index, follow',  
  // openGraph: {
  //   title: 'Groupbook | Simplifying Group Travel',
  //   description: 'Simplifying Group Travel for teams, events, and organizations with easy booking solutions.',
  //   url: 'https://www.groupbook.com',  
  //   image: '/path/to/image.jpg',  // Image for Open Graph (Facebook, LinkedIn, etc.)
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Groupbook | Simplifying Group Travel',
  //   description: 'Simplifying Group Travel for teams, events, and organizations.',
  //   image: '/path/to/image.jpg',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
