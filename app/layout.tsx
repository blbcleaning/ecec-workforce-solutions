import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PageIndicator } from '@/components/page-indicator'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'ECEC Workforce Solutions | NCCS Certification & Compliance',
    template: '%s | ECEC Workforce Solutions',
  },
  description: 'Australia\'s first evidence-based infection prevention governance framework for ECEC. NCCS certification, compliance tools, and consulting for childcare centres and cleaning companies.',
  generator: 'v0.app',
  metadataBase: new URL('https://ececworkforcesolutions.au'),
  keywords: [
    'NCCS certification',
    'childcare cleaning',
    'infection prevention',
    'ECEC compliance',
    'childcare WHS',
    'biohazard management',
    'early childhood education',
    'childcare centre compliance',
    'cleaning certification Australia',
    'SWA Biohazard Code',
  ],
  authors: [{ name: 'ECEC Workforce Solutions' }],
  creator: 'ECEC Workforce Solutions',
  publisher: 'ECEC Workforce Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://ececworkforcesolutions.au',
    siteName: 'ECEC Workforce Solutions',
    title: 'ECEC Workforce Solutions | NCCS Certification & Compliance',
    description: 'Australia\'s first evidence-based infection prevention governance framework for ECEC. NCCS certification, compliance tools, and consulting for childcare centres and cleaning companies.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ECEC Workforce Solutions - NCCS Certification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECEC Workforce Solutions | NCCS Certification & Compliance',
    description: 'Australia\'s first evidence-based infection prevention governance framework for ECEC.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PageIndicator />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
