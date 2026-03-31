import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n/context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snewroof.com'),
  title: {
    default: "S NEW ROOF | Professional Roofing Services in Orange County, CA",
    template: "%s | S NEW ROOF"
  },
  description: "S NEW ROOF - Orange County's trusted family-owned roofing company since 2010. Expert roof repair, replacement, emergency leak repair, storm damage restoration. Free inspections. Licensed & insured. Call (714) 770-4756.",
  keywords: [
    "roofing company Orange County",
    "roof repair Santa Ana",
    "roof replacement Anaheim",
    "emergency leak repair",
    "storm damage roof",
    "tile roofing California",
    "shingle roof installation",
    "free roof inspection",
    "roofing contractor near me",
    "best roofer Orange County",
    "residential roofing services",
    "commercial roofing CA",
    "roof leak repair",
    "roof maintenance",
    "gutter installation"
  ],
  authors: [{ name: "S NEW ROOF", url: "https://snewroof.com" }],
  creator: "S NEW ROOF",
  publisher: "S NEW ROOF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_US',
    url: 'https://snewroof.com',
    siteName: 'S NEW ROOF',
    title: 'S NEW ROOF | Professional Roofing Services in Orange County, CA',
    description: "Orange County's trusted family-owned roofing company. Expert roof repair, replacement, emergency services. Free inspections. Call (714) 770-4756.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'S NEW ROOF - Professional Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S NEW ROOF | Professional Roofing Services',
    description: "Orange County's trusted roofing company. Free inspections, expert repairs. Call (714) 770-4756.",
    images: ['/og-image.png'],
    creator: '@snewroof',
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://snewroof.com',
    languages: {
      'en-US': 'https://snewroof.com',
      'es-US': 'https://snewroof.com?lang=es',
    },
  },
  category: 'Home Services',
  classification: 'Roofing Contractor',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'S NEW ROOF',
  image: 'https://snewroof.com/og-image.png',
  '@id': 'https://snewroof.com',
  url: 'https://snewroof.com',
  telephone: '+1-714-770-4756',
  email: 'info@snewroof.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Santa Ana',
    addressLocality: 'Santa Ana',
    addressRegion: 'CA',
    postalCode: '92701',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7455,
    longitude: -117.8677,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Santa Ana',
    },
    {
      '@type': 'City',
      name: 'Anaheim',
    },
    {
      '@type': 'City',
      name: 'Irvine',
    },
    {
      '@type': 'City',
      name: 'Garden Grove',
    },
    {
      '@type': 'City',
      name: 'Fullerton',
    },
    {
      '@type': 'City',
      name: 'Costa Mesa',
    },
    {
      '@type': 'City',
      name: 'Newport Beach',
    },
    {
      '@type': 'City',
      name: 'Huntington Beach',
    },
    {
      '@type': 'City',
      name: 'Tustin',
    },
    {
      '@type': 'City',
      name: 'Orange',
    },
    {
      '@type': 'City',
      name: 'Westminster',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '285',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Roofing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Replacement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Leak Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tile Roofing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shingle Roofing',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/snewroof',
    'https://www.instagram.com/snewroof',
    'https://www.youtube.com/@snewroof',
    'https://www.linkedin.com/company/snewroof',
    'https://www.yelp.com/biz/s-new-roof-santa-ana',
    'https://www.tiktok.com/@snewroof',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Meta Pixel (Facebook) - Dataset ID: 2821242534737429 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2821242534737429');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Microsoft Clarity - vprp9afoh6 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vprp9afoh6");
            `,
          }}
        />

        {/* Go High Level External Tracking */}
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_f0a09374a6094ab9a4c1345ca43b3c48"
          async
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#F97316" />
        <meta name="msapplication-TileColor" content="#F97316" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-white text-foreground`}
      >
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-M8LXQ2ZN" />

        {/* Meta Pixel Noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2821242534737429&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
