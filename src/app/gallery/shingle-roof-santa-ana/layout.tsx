import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shingle Roof Installation Project | S NEW ROOF',
  description: 'See our shingle roof installation project in Santa Ana, CA. Premium architectural shingles with 30-year warranty for Brett Ohls & Lorraine. Complete roof replacement with professional installation.',
  keywords: [
    'shingle roof installation',
    'Santa Ana roofing',
    'architectural shingles',
    'roof replacement Santa Ana',
    '30 year warranty roof',
    'asphalt shingle roof',
    'Orange County roofer',
  ],
  openGraph: {
    title: 'Shingle Roof Installation Project | S NEW ROOF',
    description: 'Premium architectural shingle installation in Santa Ana. 30-year warranty included.',
    type: 'website',
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
