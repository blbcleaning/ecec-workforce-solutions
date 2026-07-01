import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PromoBar } from '@/components/promo-bar'
import { ExitIntentPopup } from '@/components/exit-intent-popup'
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
  verification: {
    other: {
      'facebook-domain-verification': '2wsngc70zn03vigdu0ynbye8wv4s4i',
    },
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
        <Script id="snitcher-radar" strategy="afterInteractive">
          {`!function(e){"use strict";var t=e&&e.namespace;if(t&&e.profileId&&e.cdn){var i=window[t];if(i&&Array.isArray(i)||(i=window[t]=[]),!i.initialized&&!i._loaded)if(i._loaded)console&&console.warn("[Radar] Duplicate initialization attempted");else{i._loaded=!0;["track","page","identify","group","alias","ready","debug","on","off","once","trackClick","trackSubmit","trackLink","trackForm","pageview","screen","reset","register","setAnonymousId","addSourceMiddleware","addIntegrationMiddleware","addDestinationMiddleware","giveCookieConsent"].forEach((function(e){var a;i[e]=(a=e,function(){var e=window[t];if(e.initialized)return e[a].apply(e,arguments);var i=[].slice.call(arguments);return i.unshift(a),e.push(i),e})})),-1===e.apiEndpoint.indexOf("http")&&(e.apiEndpoint="https://"+e.apiEndpoint),i.bootstrap=function(){var t,i=document.createElement("script");i.async=!0,i.type="text/javascript",i.id="__radar__",i.setAttribute("data-settings",JSON.stringify(e)),i.src=[-1!==(t=e.cdn).indexOf("http")?"":"https://",t,"/releases/latest/radar.min.js"].join("");var a=document.scripts[0];a.parentNode.insertBefore(i,a)},i.bootstrap()}}else"undefined"!=typeof console&&console.error("[Radar] Configuration incomplete")}({
  "apiEndpoint": "radar.snitcher.com",
  "cdn": "cdn.snitcher.com",
  "namespace": "Snitcher",
  "profileId": "sbaDKwWOuE"
});`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1796211565087386');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1796211565087386&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <PromoBar />
        {children}
        <ExitIntentPopup />
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
