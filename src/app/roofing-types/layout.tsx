import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Types | S NEW ROOF - Orange County',
  description: 'Explore our roofing types including asphalt shingles, clay tile, metal, and flat roofing. Expert installation in Orange County.',
};

export default function RoofingTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
