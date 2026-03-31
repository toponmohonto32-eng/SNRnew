'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Shield,
  Home,
  Users,
  Star,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

// Project Data
const projectData = {
  id: 'complete-roof-replacement',
  title: 'Complete Roof Replacement',
  titleEs: 'Reemplazo Completo de Techo',
  subtitle: 'Full Tear-Off & Premium Architectural Shingle Installation',
  subtitleEs: 'Retiro Completo e Instalación de Tejas Arquitectónicas Premium',
  location: 'Orange County, CA',
  mainImage: 'https://i.ibb.co.com/21Dy54MD/1.jpg',
  
  // Project Gallery Images (37 photos)
  gallery: [
    { id: 1, src: 'https://i.ibb.co.com/21Dy54MD/1.jpg', alt: 'Project overview - Roof decking installation' },
    { id: 2, src: 'https://i.ibb.co.com/gLSTkQC3/2.jpg', alt: 'Decking preparation and materials' },
    { id: 3, src: 'https://i.ibb.co.com/XkJ6qN0Q/3.jpg', alt: 'CertainTeed shingle bundles staged' },
    { id: 4, src: 'https://i.ibb.co.com/HfMwgWqr/4.jpg', alt: 'Plywood sheathing installation' },
    { id: 5, src: 'https://i.ibb.co.com/KcPPCH80/5.jpg', alt: 'R-38 insulation installation' },
    { id: 6, src: 'https://i.ibb.co.com/7JGdghYr/6.jpg', alt: 'Underlayment preparation' },
    { id: 7, src: 'https://i.ibb.co.com/67xNgpqK/7.jpg', alt: 'Roof deck completed' },
    { id: 8, src: 'https://i.ibb.co.com/RkFG8j7T/8.jpg', alt: 'DuraGuard underlayment application' },
    { id: 9, src: 'https://i.ibb.co.com/yFHVQ7my/9.jpg', alt: 'Quality inspection' },
    { id: 10, src: 'https://i.ibb.co.com/C4DrHSt/10.jpg', alt: 'Owens Corning underlayment' },
    { id: 11, src: 'https://i.ibb.co.com/SDDRxfjH/11.jpg', alt: 'Underlayment installation progress' },
    { id: 12, src: 'https://i.ibb.co.com/4RNy7LLj/12.jpg', alt: 'Roof preparation details' },
    { id: 13, src: 'https://i.ibb.co.com/cXQtBShv/13.jpg', alt: 'Decking and ventilation work' },
    { id: 14, src: 'https://i.ibb.co.com/mVzBRD7v/14.jpg', alt: 'Chimney flashing preparation' },
    { id: 15, src: 'https://i.ibb.co.com/Z6j1TKSQ/15.jpg', alt: 'Ice and water shield application' },
    { id: 16, src: 'https://i.ibb.co.com/DHrzGj8m/16.jpg', alt: 'Construction tools and materials' },
    { id: 17, src: 'https://i.ibb.co.com/4wkWj3Fq/17.jpg', alt: 'Roof edge preparation' },
    { id: 18, src: 'https://i.ibb.co.com/gx1thkN/18.jpg', alt: 'Final preparation stages' },
    { id: 19, src: 'https://i.ibb.co.com/q6hSrnB/19.jpg', alt: 'Material staging' },
    { id: 20, src: 'https://i.ibb.co.com/bMzYzVqp/20.jpg', alt: 'Roofing materials ready' },
    { id: 21, src: 'https://i.ibb.co.com/LX8zDPLB/21.jpg', alt: 'Project continuation' },
    { id: 22, src: 'https://i.ibb.co.com/CDLqdmf/22.jpg', alt: 'Deck preparation' },
    { id: 23, src: 'https://i.ibb.co.com/RT4tDmpg/23.jpg', alt: 'Underlayment layers' },
    { id: 24, src: 'https://i.ibb.co.com/JRwMD4s6/24.jpg', alt: 'Quality workmanship' },
    { id: 25, src: 'https://i.ibb.co.com/9kxYWLCH/26.jpg', alt: 'Roof deck progress' },
    { id: 26, src: 'https://i.ibb.co.com/S794ygx8/27.jpg', alt: 'Insulation detail' },
    { id: 27, src: 'https://i.ibb.co.com/s927d4kC/28.jpg', alt: 'Professional installation' },
    { id: 28, src: 'https://i.ibb.co.com/Mx0vCMFf/29.jpg', alt: 'Roof preparation complete' },
    { id: 29, src: 'https://i.ibb.co.com/Q5syXvz/30.jpg', alt: 'Material quality check' },
    { id: 30, src: 'https://i.ibb.co.com/h18ZyXTx/31.jpg', alt: 'Final inspection preparation' },
    { id: 31, src: 'https://i.ibb.co.com/nsL0dVKd/32.jpg', alt: 'DeckDefense underlayment' },
    { id: 32, src: 'https://i.ibb.co.com/SwMKcdvW/33.jpg', alt: 'Roofing project progress' },
    { id: 33, src: 'https://i.ibb.co.com/mryqYPdd/34.jpg', alt: 'Quality materials installed' },
    { id: 34, src: 'https://i.ibb.co.com/8nDw8V43/35.jpg', alt: 'Professional workmanship' },
    { id: 35, src: 'https://i.ibb.co.com/Y42rdLV2/36.jpg', alt: 'DeckDefense application' },
    { id: 36, src: 'https://i.ibb.co.com/CK80TShG/37.jpg', alt: 'Underlayment complete' },
    { id: 37, src: 'https://i.ibb.co.com/SwZZMZjV/Whats-App-Image-2026-03-05-at-8-00-54-AM.jpg', alt: 'Project overview - Ranch style home' },
  ],
  
  details: {
    duration: '4 Days',
    durationEs: '4 Días',
    warranty: '30 Years',
    sqft: '2,800 sq ft',
    type: 'Architectural Shingle',
    typeEs: 'Teja Arquitectónica',
    completionDate: 'Recent Project',
    completionDateEs: 'Proyecto Reciente',
  },
  
  description: `This comprehensive roof replacement project in Orange County showcases our commitment to quality craftsmanship and attention to detail. The homeowner's ranch-style home required a complete roof overhaul after years of wear and exposure to the Southern California elements.

Our team performed a complete tear-off of the existing roofing material, revealing the underlying deck condition. We replaced damaged sections of plywood sheathing and installed premium CertainTeed R-38 fiberglass insulation for enhanced energy efficiency.

The project features Owens Corning synthetic underlayment, DeckDefense protective barrier, and DuraGuard ice & water shield in critical areas. Premium architectural asphalt shingles were installed with proper alignment and fastening patterns for maximum durability and curb appeal.`,

  descriptionEs: `Este proyecto integral de reemplazo de techo en Orange County demuestra nuestro compromiso con la calidad artesanal y la atención al detalle. La casa estilo rancho del propietario requería una revisión completa del techo después de años de desgaste y exposición a los elementos del sur de California.

Nuestro equipo realizó un retiro completo del material de techo existente, revelando la condición de la cubierta subyacente. Reemplazamos secciones dañadas de revestimiento de madera contrachapada e instalamos aislamiento de fibra de vidrio CertainTeed R-38 premium para mayor eficiencia energética.`,
  
  processSteps: [
    { step: 1, title: 'Complete Tear-Off', titleEs: 'Retiro Completo', desc: 'Full removal of old roofing material down to the deck, exposing all underlying conditions.', descEs: 'Retiro completo del material de techo antiguo hasta la cubierta.' },
    { step: 2, title: 'Deck Inspection & Repair', titleEs: 'Inspección y Reparación', desc: 'Thorough inspection of plywood sheathing, replacement of damaged sections with new OSB decking.', descEs: 'Inspección exhaustiva del revestimiento de madera.' },
    { step: 3, title: 'Insulation Upgrade', titleEs: 'Mejora de Aislamiento', desc: 'Installation of CertainTeed R-38 fiberglass insulation for improved energy efficiency.', descEs: 'Instalación de aislamiento CertainTeed R-38.' },
    { step: 4, title: 'Premium Underlayment', titleEs: 'Subcapa Premium', desc: 'Owens Corning synthetic underlayment with DeckDefense and DuraGuard ice & water shield.', descEs: 'Subcapa sintética Owens Corning con DeckDefense.' },
    { step: 5, title: 'Shingle Installation', titleEs: 'Instalación de Tejas', desc: 'Architectural asphalt shingles installed with proper nailing pattern and alignment.', descEs: 'Tejas arquitectónicas instaladas profesionalmente.' },
    { step: 6, title: 'Final Inspection', titleEs: 'Inspección Final', desc: 'Complete quality inspection, flashing checks, and site cleanup.', descEs: 'Inspección completa de calidad y limpieza.' },
  ],
  
  features: [
    'Complete Tear-Off & Replacement',
    'New Plywood Decking',
    'CertainTeed R-38 Insulation',
    'Owens Corning Underlayment',
    'DeckDefense Protective Barrier',
    'DuraGuard Ice & Water Shield',
    'Premium Architectural Shingles',
    '30-Year Manufacturer Warranty',
    '10-Year Workmanship Guarantee',
    'Red Brick Chimney Flashing',
    'Improved Ventilation System',
    'Complete Site Cleanup',
  ],
  
  featuresEs: [
    'Retiro y Reemplazo Completo',
    'Nueva Cubierta de Madera',
    'Aislamiento CertainTeed R-38',
    'Subcapa Owens Corning',
    'Barrera Protectora DeckDefense',
    'Escudo de Hielo y Agua DuraGuard',
    'Tejas Arquitectónicas Premium',
    'Garantía del Fabricante de 30 Años',
    'Garantía de Trabajo de 10 Años',
    'Flashing de Chimenea de Ladrillo',
    'Sistema de Ventilación Mejorado',
    'Limpieza Completa del Sitio',
  ],
  
  testimonial: {
    quote: "S NEW ROOF did an amazing job on our complete roof replacement. The crew was professional, clean, and finished ahead of schedule. Our new roof looks fantastic!",
    quoteEs: "S NEW ROOF hizo un trabajo increíble en el reemplazo completo de nuestro techo. El equipo fue profesional, limpio y terminó antes de lo programado.",
    author: 'Homeowner',
    authorEs: 'Propietario',
    location: 'Orange County, CA',
    avatar: '/avatars/homeowner-2.png',
  },
};

export default function CompleteRoofReplacementPage() {
  const { isSpanish } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const getText = (en: string, es: string) => isSpanish ? es : en;

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleImages(prev => {
        if (prev.length >= projectData.gallery.length) {
          clearInterval(timer);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(projectData.gallery[index].src);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    let newIndex = currentImageIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? projectData.gallery.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === projectData.gallery.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(projectData.gallery[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/gallery" className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/FbssB2VW/Untitled-design.png" 
                alt="S NEW ROOF Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
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
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={projectData.mainImage}
          alt={getText(projectData.title, projectData.titleEs)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {getText('Back to Gallery', 'Volver a la Galería')}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316] rounded-full text-white font-semibold text-sm mb-4">
                <Home className="w-4 h-4" />
                {getText(projectData.details.type, projectData.details.typeEs)}
              </span>
              
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {getText(projectData.title, projectData.titleEs)}
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mb-4">
                {getText(projectData.subtitle, projectData.subtitleEs)}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{projectData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{getText(projectData.details.completionDate, projectData.details.completionDateEs)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-white">{getText(projectData.details.duration, projectData.details.durationEs)}</div>
              <p className="text-gray-400 text-sm">{getText('Duration', 'Duración')}</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-white">{projectData.details.warranty}</div>
              <p className="text-gray-400 text-sm">{getText('Warranty', 'Garantía')}</p>
            </div>
            <div className="text-center">
              <Home className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-white">{projectData.details.sqft}</div>
              <p className="text-gray-400 text-sm">{getText('Roof Size', 'Tamaño')}</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-white">37</div>
              <p className="text-gray-400 text-sm">{getText('Project Photos', 'Fotos')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {getText('Project Overview', 'Resumen del Proyecto')}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  {getText(projectData.description, projectData.descriptionEs).split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{para}</p>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  {getText('Our Process', 'Nuestro Proceso')}
                </h3>
                <div className="space-y-4">
                  {projectData.processSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{getText(step.title, step.titleEs)}</h4>
                        <p className="text-gray-600 text-sm">{getText(step.desc, step.descEs)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Features Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="sticky top-24 bg-gray-50 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#F97316]" />
                      {getText('Project Features', 'Características')}
                    </h3>
                    <ul className="space-y-3">
                      {(isSpanish ? projectData.featuresEs : projectData.features).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-12" asChild>
                        <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                          {getText('Get Free Inspection', 'Inspección Gratis')}
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full mt-3 h-12" asChild>
                        <a href="tel:+17147704756">
                          <Phone className="mr-2 w-4 h-4" />
                          (714) 770-4756
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316] rounded-full text-white font-semibold text-sm mb-4">
              <Camera className="w-4 h-4" />
              {getText('Project Gallery', 'Galería del Proyecto')}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
              {getText('Complete Project Documentation', 'Documentación Completa')}
            </h2>
            <p className="text-gray-600 mt-2">
              {getText('37 photos documenting our complete roof replacement process', '37 fotos documentando el proceso completo')}
            </p>
          </motion.div>

          {/* Animated Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {projectData.gallery.map((image, index) => (
              <AnimatePresence key={image.id}>
                {visibleImages.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                            <Camera className="w-5 h-5 text-gray-900" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-white text-xs font-medium">
                        {index + 1}/{projectData.gallery.length}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Loading indicator */}
          {visibleImages.length < projectData.gallery.length && (
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/10 text-[#F97316] rounded-full text-sm font-medium">
                <div className="w-4 h-4 border-2 border-[#F97316] border-t-transparent rounded-full animate-spin" />
                {getText(`Loading photos... ${visibleImages.length}/${projectData.gallery.length}`, `Cargando fotos... ${visibleImages.length}/${projectData.gallery.length}`)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 sm:py-16 bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-white font-medium italic leading-relaxed mb-6">
              "{getText(projectData.testimonial.quote, projectData.testimonial.quoteEs)}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={projectData.testimonial.avatar}
                  alt={getText(projectData.testimonial.author, projectData.testimonial.authorEs)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{getText(projectData.testimonial.author, projectData.testimonial.authorEs)}</p>
                <p className="text-white/80 text-sm">{projectData.testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              {getText('Ready for Your New Roof?', '¿Listo para su Nuevo Techo?')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {getText(
                'Get a free inspection and see how we can transform your home with a beautiful, durable new roof.',
                'Obtenga una inspección gratis y vea cómo podemos transformar su hogar.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white h-14 px-8" asChild>
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {getText('Schedule Free Inspection', 'Programar Inspección Gratis')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8" asChild>
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  (714) 770-4756
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={selectedImage}
              alt="Project image"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {projectData.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://i.ibb.co/0RZwPVxK/Untitled-design-5.png" 
            alt="S NEW ROOF Logo" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-gray-500">
            © {new Date().getFullYear()} S NEW ROOF. {getText('All rights reserved.', 'Todos los derechos reservados.')}
          </p>
        </div>
      </footer>
    </div>
  );
}
