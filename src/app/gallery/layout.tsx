import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Project Gallery | S NEW ROOF',
  description: 'Browse our completed roofing projects across Orange County and LA County. See before & after photos of roof replacements, repairs, storm damage restoration, and more. Quality craftsmanship you can trust.',
  keywords: [
    'roofing gallery',
    'roofing projects',
    'before after roof',
    'roof replacement photos',
    'roof repair pictures',
    'Orange County roofing',
    'roofing portfolio',
    'completed roofing jobs',
    'roof installation photos',
    'storm damage repair photos',
  ],
  openGraph: {
    title: 'Roofing Project Gallery | S NEW ROOF',
    description: 'Browse our completed roofing projects across Orange County. See quality craftsmanship in action.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'S NEW ROOF Project Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Project Gallery | S NEW ROOF',
    description: 'Browse our completed roofing projects across Orange County. See quality craftsmanship in action.',
    images: ['/og-image.png'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
