import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certified Roofing Manufacturer Partners | S NEW ROOF',
  description: 'S NEW ROOF is certified by top roofing manufacturers including GAF Master Elite, Owens Corning, CertainTeed, and TAMKO. Get the best warranties and quality installation from certified professionals.',
  keywords: [
    'GAF Master Elite',
    'Owens Corning contractor',
    'CertainTeed SELECT ShingleMaster',
    'TAMKO Pro Certified',
    'roofing certifications',
    'roofing manufacturer warranty',
    'certified roofing contractor',
    'best roof warranty',
    'Orange County certified roofer',
    'quality roofing materials',
  ],
  openGraph: {
    title: 'Certified by Top Manufacturers | S NEW ROOF',
    description: 'We are certified by GAF, Owens Corning, CertainTeed & TAMKO. Get the best warranties up to 50 years from certified professionals.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'S NEW ROOF Certifications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified by Top Manufacturers | S NEW ROOF',
    description: 'We are certified by GAF, Owens Corning, CertainTeed & TAMKO. Get the best warranties up to 50 years.',
    images: ['/og-image.png'],
  },
};

export default function ManufacturersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
