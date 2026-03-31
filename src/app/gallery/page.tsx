'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Camera,
  Home,
  Building,
  Layers,
  Sun,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

const galleryProjects = [
  {
    id: 1,
    title: 'Tile Roof Replacement',
    location: 'Santa Ana, CA',
    description: 'Complete tile roof replacement on a 3,200 sq ft home. Premium clay tiles with 30-year manufacturer warranty. Project completed in 4 days.',
    image: '/tile-roof.png',
    type: 'Tile Roofing',
    duration: '4 days',
    warranty: '30 Years',
    features: ['Premium Clay Tiles', 'New Underlayment', 'Ridge Vent Installation', 'Gutter Cleaning'],
  },
  {
    id: 2,
    title: 'Shingle Roof Installation',
    location: 'Irvine, CA',
    description: 'Architectural shingle installation with 30-year warranty. Complete tear-off and replacement with upgraded ventilation system.',
    image: '/shingle-roof.png',
    type: 'Shingle Roofing',
    duration: '3 days',
    warranty: '30 Years',
    features: ['Architectural Shingles', 'Improved Ventilation', 'Ice & Water Shield', 'Drip Edge Installation'],
  },
  {
    id: 3,
    title: 'Flat Roof Repair',
    location: 'Anaheim, CA',
    description: 'Commercial flat roof repair and coating. TPO membrane installation with heat-welded seams for superior waterproofing.',
    image: '/flat-roof.png',
    type: 'Flat Roof',
    duration: '2 days',
    warranty: '20 Years',
    features: ['TPO Membrane', 'Heat-Welded Seams', 'Reflective Coating', 'Drainage Optimization'],
  },
  {
    id: 4,
    title: 'Storm Damage Restoration',
    location: 'Huntington Beach, CA',
    description: 'Complete restoration after wind damage. Insurance claim assistance provided. Emergency tarping and permanent repairs.',
    image: '/storm-damage.png',
    type: 'Storm Damage',
    duration: '5 days',
    warranty: '25 Years',
    features: ['Insurance Claim Help', 'Emergency Tarping', 'Full Replacement', 'Debris Removal'],
  },
  {
    id: 5,
    title: 'Professional Roofing Team',
    location: 'Orange County, CA',
    description: 'Our experienced team installing a new roof with attention to detail and quality craftsmanship.',
    image: '/roofing-team.png',
    type: 'Installation',
    duration: 'Various',
    warranty: '30 Years',
    features: ['Expert Craftsmen', 'Quality Materials', 'Safety First', 'Clean Work Site'],
  },
  {
    id: 6,
    title: 'Owner Samuel',
    location: 'Orange & LA County',
    description: 'Samuel, owner and founder of S NEW ROOF, brings over 15 years of roofing experience to every project.',
    image: '/avatar.png',
    type: 'Leadership',
    duration: 'Since 2008',
    warranty: 'Quality Guarantee',
    features: ['15+ Years Experience', 'Family Owned', 'Local Expert', 'Customer Focused'],
  },
];

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/0RZwPVxK/Untitled-design-5.png" 
                alt="S NEW ROOF Logo" 
                className="h-10 sm:h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gray-900">S NEW ROOF</span>
                <p className="text-xs text-[#F97316]">Your Neighborhood Roofer</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="tel:+17147704756"
                className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#F97316] transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                (714) 770-4756
              </a>
              <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <Link href="/#contact">Get Free Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#EA580C] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
              <Camera className="w-4 h-4 inline mr-2" />
              Our Work
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our completed roofing projects across Orange and LA County. See the quality craftsmanship that sets us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F97316] text-white rounded-full text-xs font-semibold">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-700">
                        <Calendar className="w-4 h-4 text-[#F97316]" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>{project.warranty}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free inspection and see how we can transform your roof. Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#F97316] hover:bg-gray-100"
                asChild
              >
                <Link href="/#contact">Schedule Free Inspection</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-4 h-4" />
                  (714) 770-4756
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} S NEW ROOF. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </footer>
    </div>
  );
}
