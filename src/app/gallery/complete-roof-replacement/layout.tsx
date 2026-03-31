import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Roof Replacement Project | S NEW ROOF',
  description: 'View our complete roof replacement project in Orange County. Full tear-off with premium architectural shingles, CertainTeed R-38 insulation, and Owens Corning underlayment. 37 project photos.',
  keywords: [
    'roof replacement',
    'full roof tear-off',
    'architectural shingles',
    'CertainTeed roofing',
    'Owens Corning',
    'roof installation',
    'Orange County roof replacement',
    'new roof installation',
  ],
  openGraph: {
    title: 'Complete Roof Replacement Project | S NEW ROOF',
    description: 'Full tear-off with premium architectural shingles. See the complete roof replacement process.',
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
