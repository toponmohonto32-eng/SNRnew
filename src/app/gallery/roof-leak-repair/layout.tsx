import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Leak Repair & Restoration Project | S NEW ROOF',
  description: 'See our roof leak repair project in Orange County. Complete leak diagnosis and repair for Tom and Anna. Interior ceiling restoration, attic insulation replacement, and new flashing installation.',
  keywords: [
    'roof leak repair',
    'leak detection',
    'roof repair Orange County',
    'ceiling water damage',
    'flashing repair',
    'attic insulation replacement',
    'roof restoration',
    'emergency leak repair',
  ],
  openGraph: {
    title: 'Roof Leak Repair & Restoration Project | S NEW ROOF',
    description: 'Complete leak diagnosis and repair. Interior restoration and new flashing installation.',
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
