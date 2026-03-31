import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRoofingTypeBySlug, getAllRoofingTypeSlugs, roofingTypes } from '@/lib/roofing-types';
import dynamic from 'next/dynamic';

const RoofingTypeClient = dynamic(() => import('./RoofingTypeClient'), { ssr: true });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoofingTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const roofingType = getRoofingTypeBySlug(slug);

  if (!roofingType) {
    return {
      title: 'Roofing Type Not Found',
    };
  }

  return {
    title: `${roofingType.name} | S NEW ROOF - Orange County Roofing`,
    description: roofingType.description,
    keywords: [
      roofingType.name.toLowerCase(),
      'roofing',
      'roof installation',
      'Orange County',
      'S NEW ROOF',
      'roofing contractor',
      ...roofingType.features.map((f) => f.toLowerCase()),
    ],
    openGraph: {
      title: `${roofingType.name} | S NEW ROOF`,
      description: roofingType.description,
      type: 'website',
    },
  };
}

export default async function RoofingTypePage({ params }: Props) {
  const { slug } = await params;
  const roofingType = getRoofingTypeBySlug(slug);

  if (!roofingType) {
    notFound();
  }

  const otherTypes = roofingTypes.filter((t) => t.slug !== slug);

  return <RoofingTypeClient roofingType={roofingType} otherTypes={otherTypes} />;
}
