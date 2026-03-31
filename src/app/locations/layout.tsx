import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Service Areas | S NEW ROOF',
    template: '%s | S NEW ROOF',
  },
  description: 'S NEW ROOF serves all of Orange County and LA County including Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, and more. Free estimates.',
  keywords: [
    'roofing Orange County',
    'roofing LA County',
    'Santa Ana roofer',
    'Anaheim roofing',
    'Irvine roof repair',
    'roofing contractor near me',
    'local roofing company',
    'Orange County roof replacement',
    'Los Angeles County roofing',
  ],
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
