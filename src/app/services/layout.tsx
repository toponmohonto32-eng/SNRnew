import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Roofing Services | S NEW ROOF',
    template: '%s | S NEW ROOF',
  },
  description: 'Professional roofing services in Orange County. Roof repair, replacement, emergency leak repair, storm damage restoration, skylight installation, tile roofing, and more. Free inspections.',
  keywords: [
    'roofing services',
    'roof repair',
    'roof replacement',
    'emergency roof leak',
    'storm damage repair',
    'tile roofing',
    'shingle roofing',
    'skylight installation',
    'gutter services',
    'Orange County roofing',
    'Santa Ana roofer',
    'free roof inspection',
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
