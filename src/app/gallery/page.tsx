'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Camera,
  Layers,
  Filter,
  Eye,
  AlertTriangle,
  Home,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

const galleryProjects = [
  {
    id: 'emergency-storm-damage',
    slug: 'emergency-storm-damage',
    title: 'Emergency Storm Damage Repair',
    titleEs: 'Reparación de Emergencia por Tormenta',
    location: 'Orange County, CA',
    description: '24/7 emergency response with complete storm damage repair. Insurance claim assistance, emergency tarping, and full roof restoration with impact-resistant shingles.',
    descriptionEs: 'Respuesta de emergencia 24/7 con reparación completa de daños por tormenta. Asistencia con reclamos de seguro, encarpado de emergencia y restauración completa.',
    image: 'https://i.ibb.co.com/HsXNfmH/1.jpg',
    type: 'storm',
    typeLabel: 'Storm Damage',
    typeLabelEs: 'Daños por Tormenta',
    duration: '5 days',
    durationEs: '5 días',
    warranty: '25 Years',
    warrantyEs: '25 Años',
    sqft: '3,200 sq ft',
    features: ['24/7 Emergency Response', 'Insurance Claim Help', 'Impact-Resistant Shingles', 'Complete Restoration'],
    featuresEs: ['Respuesta 24/7', 'Ayuda con Seguro', 'Tejas Resistentes al Impacto', 'Restauración Completa'],
    featured: true,
    galleryCount: 19,
  },
  {
    id: 'complete-roof-replacement',
    slug: 'complete-roof-replacement',
    title: 'Complete Roof Replacement',
    titleEs: 'Reemplazo Completo de Techo',
    location: 'Orange County, CA',
    description: 'Full tear-off and premium architectural shingle installation on a ranch-style home. Features CertainTeed R-38 insulation, Owens Corning underlayment.',
    descriptionEs: 'Retiro completo e instalación de tejas arquitectónicas premium en casa estilo rancho. Incluye aislamiento CertainTeed R-38 y subcapa Owens Corning.',
    image: 'https://i.ibb.co.com/21Dy54MD/1.jpg',
    type: 'shingle',
    typeLabel: 'Shingle Roofing',
    typeLabelEs: 'Techos de Tejas',
    duration: '4 days',
    durationEs: '4 días',
    warranty: '30 Years',
    warrantyEs: '30 Años',
    sqft: '2,800 sq ft',
    features: ['Complete Tear-Off', 'Premium Architectural Shingles', 'R-38 Insulation', '30-Year Warranty'],
    featuresEs: ['Retiro Completo', 'Tejas Arquitectónicas Premium', 'Aislamiento R-38', 'Garantía de 30 Años'],
    featured: false,
    galleryCount: 37,
  },
  {
    id: 'shingle-roof-santa-ana',
    slug: 'shingle-roof-santa-ana',
    title: 'Shingle Roof Installation',
    titleEs: 'Instalación de Techo de Tejas',
    location: 'Santa Ana, CA',
    description: 'Complete roof replacement with premium architectural shingles for Brett Ohls & Lorraine. Features 10 stunning project photos showing the full transformation.',
    descriptionEs: 'Reemplazo completo de techo con tejas arquitectónicas premium para Brett Ohls y Lorraine. Incluye 10 impresionantes fotos del proyecto.',
    image: 'https://i.ibb.co.com/mVBX77b3/Untitled-design-4.png',
    type: 'shingle',
    typeLabel: 'Shingle Roofing',
    typeLabelEs: 'Techos de Tejas',
    duration: '3 days',
    durationEs: '3 días',
    warranty: '30 Years',
    warrantyEs: '30 Años',
    sqft: '2,450 sq ft',
    features: ['Premium Architectural Shingles', '30-Year Warranty', 'Complete Tear-Off', 'New Underlayment'],
    featuresEs: ['Tejas Arquitectónicas Premium', 'Garantía de 30 Años', 'Retiro Completo', 'Nueva Subcapa'],
    featured: false,
    galleryCount: 10,
  },
  {
    id: 'roof-leak-repair',
    slug: 'roof-leak-repair',
    title: 'Roof Leak Repair & Restoration',
    titleEs: 'Reparación de Fugas y Restauración',
    location: 'Orange County, CA',
    description: 'Complete leak diagnosis and repair for Tom and Anna. Interior ceiling damage restoration, attic insulation replacement, and new flashing installation.',
    descriptionEs: 'Diagnóstico completo de fugas y reparación para Tom y Anna. Restauración de daño interior del techo, reemplazo de aislamiento y nuevo flashing.',
    image: 'https://i.ibb.co.com/pv1m1h6V/Whats-App-Image-2026-03-21-at-3-56-45-AM-1.jpg',
    type: 'repair',
    typeLabel: 'Leak Repair',
    typeLabelEs: 'Reparación de Fuga',
    duration: '2 days',
    durationEs: '2 días',
    warranty: '10 Years',
    warrantyEs: '10 Años',
    sqft: '1,800 sq ft',
    features: ['Leak Diagnosis', 'Flashing Repair', 'Insulation Replacement', 'Interior Restoration'],
    featuresEs: ['Diagnóstico de Fuga', 'Reparación de Flashing', 'Reemplazo de Aislamiento', 'Restauración Interior'],
    featured: false,
    galleryCount: 15,
  },
];

const categories = [
  { id: 'all', label: 'All Projects', labelEs: 'Todos los Proyectos', icon: Camera },
  { id: 'shingle', label: 'Shingle Roofing', labelEs: 'Techos de Tejas', icon: Layers },
  { id: 'storm', label: 'Storm Damage', labelEs: 'Daños por Tormenta', icon: AlertTriangle },
  { id: 'repair', label: 'Leak Repair', labelEs: 'Reparación de Fuga', icon: Wrench },
];

export default function GalleryPage() {
  const { isSpanish } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.type === activeCategory);

  const getText = (en: string, es: string) => isSpanish ? es : en;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/FbssB2VW/Untitled-design.png" 
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
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {getText('Get Free Inspection', 'Inspección Gratis')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/mVBX77b3/Untitled-design-4.png"
            alt="Professional Roofing Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {getText('Back to Home', 'Volver al Inicio')}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316] rounded-full text-white font-semibold mb-6"
            >
              <Camera className="w-5 h-5" />
              {getText('Project Gallery', 'Galería de Proyectos')}
            </motion.div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {getText('Our Roofing Projects', 'Nuestros Proyectos de Techos')}
            </h1>
            
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {getText(
                'Browse our completed roofing projects across Orange and LA County. See the quality craftsmanship that sets us apart.',
                'Explore nuestros proyectos de techos completados en Orange y LA County. Vea la calidad artesanal que nos distingue.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F97316] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="font-heading text-3xl sm:text-4xl font-bold">2,500+</div>
              <p className="text-white/80 text-sm">{getText('Projects Completed', 'Proyectos Completados')}</p>
            </div>
            <div className="text-white">
              <div className="font-heading text-3xl sm:text-4xl font-bold">15+</div>
              <p className="text-white/80 text-sm">{getText('Years Experience', 'Años de Experiencia')}</p>
            </div>
            <div className="text-white">
              <div className="font-heading text-3xl sm:text-4xl font-bold">100%</div>
              <p className="text-white/80 text-sm">{getText('Satisfaction Rate', 'Tasa de Satisfacción')}</p>
            </div>
            <div className="text-white">
              <div className="font-heading text-3xl sm:text-4xl font-bold">30</div>
              <p className="text-white/80 text-sm">{getText('Year Warranty', 'Años de Garantía')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 sm:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-500 shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-[#F97316] border border-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {getText(category.label, category.labelEs)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/gallery/${project.slug}`}>
                    <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                      {/* Image Container */}
                      <div className="relative h-64 sm:h-72 overflow-hidden">
                        <img
                          src={project.image}
                          alt={getText(project.title, project.titleEs)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 px-6 py-3 bg-[#F97316] rounded-full text-white font-semibold">
                            <Eye className="w-5 h-5" />
                            {getText('View Project', 'Ver Proyecto')}
                          </div>
                        </div>
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-500 text-white rounded-full text-xs font-bold shadow-lg">
                              ⭐ {getText('Featured', 'Destacado')}
                            </span>
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold shadow-lg">
                            {getText(project.typeLabel, project.typeLabelEs)}
                          </span>
                        </div>
                        
                        {/* Gallery Count */}
                        {project.galleryCount && (
                          <div className="absolute bottom-4 right-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/60 text-white rounded-full text-xs font-medium">
                              <Camera className="w-3.5 h-3.5" />
                              {project.galleryCount} {getText('Photos', 'Fotos')}
                            </span>
                          </div>
                        )}
                        
                        {/* Location */}
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-white">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{project.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F97316] transition-colors">
                          {getText(project.title, project.titleEs)}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {getText(project.description, project.descriptionEs)}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-[#F97316]" />
                            <span>{getText(project.duration, project.durationEs)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span>{getText(project.warranty, project.warrantyEs)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              {getText('Ready to Start Your Project?', '¿Listo para Comenzar su Proyecto?')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {getText(
                'Get a free inspection and see how we can transform your roof. Our team is ready to help.',
                'Obtenga una inspección gratis y vea cómo podemos transformar su techo. Nuestro equipo está listo para ayudar.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white h-14 px-8"
                asChild
              >
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {getText('Schedule Free Inspection', 'Programar Inspección Gratis')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-14 px-8"
                asChild
              >
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  (714) 770-4756
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://i.ibb.co/0RZwPVxK/Untitled-design-5.png" 
            alt="S NEW ROOF Logo" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-gray-500">
            © {new Date().getFullYear()} S NEW ROOF. {getText('All rights reserved.', 'Todos los derechos reservados.')} {getText('Licensed & Insured.', 'Licenciado y Asegurado.')}
          </p>
        </div>
      </footer>
    </div>
  );
}
