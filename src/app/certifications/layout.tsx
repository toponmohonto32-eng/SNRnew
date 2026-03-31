import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Roofing Certifications | S NEW ROOF',
    template: '%s | S NEW ROOF',
  },
  description: 'Learn about our roofing certifications from top manufacturers. GAF Master Elite, Owens Corning Preferred, CertainTeed SELECT ShingleMaster, and TAMKO Pro certifications.',
  keywords: [
    'roofing certification',
    'GAF certification',
    'Owens Corning preferred',
    'CertainTeed ShingleMaster',
    'TAMKO Pro',
    'roofing warranty',
    'manufacturer certification',
    'certified roofing contractor',
  ],
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
