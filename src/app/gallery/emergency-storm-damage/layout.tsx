import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Storm Damage Repair Project | S NEW ROOF',
  description: 'See our 24/7 emergency storm damage repair project in Orange County. Complete roof restoration with insurance claim assistance, emergency tarping, and impact-resistant shingles. 19 photos documenting the process.',
  keywords: [
    'storm damage repair',
    'emergency roof repair',
    'roof restoration',
    'insurance claim roof',
    'storm damage photos',
    'Orange County roof repair',
    'emergency tarping',
    'impact resistant shingles',
  ],
  openGraph: {
    title: 'Emergency Storm Damage Repair Project | S NEW ROOF',
    description: '24/7 emergency storm damage repair with insurance claim assistance. See the complete restoration process.',
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
