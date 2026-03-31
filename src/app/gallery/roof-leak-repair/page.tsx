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
  Droplets,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

// Project Data
const projectData = {
  id: 'roof-leak-repair',
  title: 'Roof Leak Repair & Restoration',
  titleEs: 'Reparación de Fugas y Restauración',
  subtitle: 'Complete Leak Diagnosis & Interior Repair',
  subtitleEs: 'Diagnóstico Completo de Fugas y Reparación Interior',
  location: 'Orange County, CA',
  mainImage: 'https://i.ibb.co.com/pv1m1h6V/Whats-App-Image-2026-03-21-at-3-56-45-AM-1.jpg',
  homeowner: 'Tom and Anna',
  homeownerEs: 'Tom y Anna',
  
  // Project Gallery Images (15 photos)
  gallery: [
    { id: 1, src: 'https://i.ibb.co.com/pv1m1h6V/Whats-App-Image-2026-03-21-at-3-56-45-AM-1.jpg', alt: 'Interior ceiling damage assessment' },
    { id: 2, src: 'https://i.ibb.co.com/CsSSgc5H/Whats-App-Image-2026-03-21-at-3-56-45-AM.jpg', alt: 'Water damaged drywall inspection' },
    { id: 3, src: 'https://i.ibb.co.com/mVY6YZXW/Whats-App-Image-2026-03-21-at-3-56-46-AM-1.jpg', alt: 'Attic inspection for leak source' },
    { id: 4, src: 'https://i.ibb.co.com/gLmb9ZF7/Whats-App-Image-2026-03-21-at-3-56-46-AM-2.jpg', alt: 'Plumbing pipes and insulation check' },
    { id: 5, src: 'https://i.ibb.co.com/yn4b6Jsm/Whats-App-Image-2026-03-21-at-3-56-46-AM.jpg', alt: 'Roof underlayment inspection' },
    { id: 6, src: 'https://i.ibb.co.com/My4snMBN/Whats-App-Image-2026-03-21-at-3-56-47-AM-1.jpg', alt: 'Flashing repair area identified' },
    { id: 7, src: 'https://i.ibb.co.com/XfBjTW7w/Whats-App-Image-2026-03-21-at-3-56-47-AM-2.jpg', alt: 'Water infiltration point located' },
    { id: 8, src: 'https://i.ibb.co.com/G4V4KG23/Whats-App-Image-2026-03-21-at-3-56-47-AM-3.jpg', alt: 'Damaged materials removal' },
    { id: 9, src: 'https://i.ibb.co.com/JRdgzHhN/Whats-App-Image-2026-03-21-at-3-56-47-AM.jpg', alt: 'Roof deck repair preparation' },
    { id: 10, src: 'https://i.ibb.co.com/qMLmptdC/Whats-App-Image-2026-03-23-at-1-27-39-AM.jpg', alt: 'New flashing installation' },
    { id: 11, src: 'https://i.ibb.co.com/1Yt0BmMk/Whats-App-Image-2026-03-23-at-1-28-15-AM.jpg', alt: 'Sealing and waterproofing' },
    { id: 12, src: 'https://i.ibb.co.com/hRGpM5QK/Whats-App-Image-2026-03-23-at-1-28-41-AM.jpg', alt: 'Interior ceiling restoration' },
    { id: 13, src: 'https://i.ibb.co.com/mVY6YZXW/Whats-App-Image-2026-03-21-at-3-56-46-AM-1.jpg', alt: 'Final quality inspection' },
    { id: 14, src: 'https://i.ibb.co.com/yn4b6Jsm/Whats-App-Image-2026-03-21-at-3-56-46-AM.jpg', alt: 'Insulation replacement complete' },
    { id: 15, src: 'https://i.ibb.co.com/pv1m1h6V/Whats-App-Image-2026-03-21-at-3-56-45-AM-1.jpg', alt: 'Project completion - restored home' },
  ],
  
  // Project Details
  details: {
    duration: '2 Days',
    durationEs: '2 Días',
    warranty: '10 Years',
    sqft: '1,800 sq ft',
    type: 'Leak Repair',
    typeEs: 'Reparación de Fuga',
    completionDate: 'March 2026',
    completionDateEs: 'Marzo 2026',
  },
  
  // Description
  description: `Tom and Anna contacted S NEW ROOF after discovering water stains on their ceiling and peeling drywall in their home. Our emergency response team arrived promptly to assess the situation and identify the source of the leak.

The inspection revealed a compromised flashing area around a plumbing vent that had allowed water to penetrate the roof system during recent rains. The water had traveled through the attic space, damaging insulation and eventually causing the visible ceiling damage below.

Our comprehensive repair approach included fixing the roof penetration point with new flashing and sealant, replacing water-damaged insulation in the attic, and restoring the interior ceiling to its original condition. The project was completed in just 2 days with minimal disruption to the homeowners.`,
  
  descriptionEs: `Tom y Anna contactaron a S NEW ROOF después de descubrir manchas de agua en su techo y descascarado de yeso en su hogar. Nuestro equipo de respuesta de emergencia llegó rápidamente para evaluar la situación e identificar la fuente de la fuga.

La inspección reveló un área de flashing comprometida alrededor de una ventilación de plomería que había permitido que el agua penetrara en el sistema del techo durante las lluvias recientes. El agua había viajado a través del espacio del ático, dañando el aislamiento y eventualmente causando el daño visible en el techo.

Nuestro enfoque integral de reparación incluyó arreglar el punto de penetración del techo con nuevo flashing y sellador, reemplazar el aislamiento dañado por agua en el ático y restaurar el techo interior a su condición original.`,
  
  // Process Steps
  processSteps: [
    { step: 1, title: 'Emergency Inspection', titleEs: 'Inspección de Emergencia', desc: 'Thorough interior and attic inspection to locate the water infiltration source.', descEs: 'Inspección exhaustiva del interior y ático para localizar la fuente de infiltración.' },
    { step: 2, title: 'Leak Source Identification', titleEs: 'Identificación de la Fuga', desc: 'Found compromised flashing around plumbing vent allowing water penetration.', descEs: 'Se encontró flashing comprometido alrededor de la ventilación de plomería.' },
    { step: 3, title: 'Roof Repair', titleEs: 'Reparación del Techo', desc: 'New flashing installation with premium sealant and waterproofing membrane.', descEs: 'Instalación de nuevo flashing con sellador premium y membrana impermeabilizante.' },
    { step: 4, title: 'Attic Restoration', titleEs: 'Restauración del Ático', desc: 'Removed wet insulation, treated area for mold prevention, installed new insulation.', descEs: 'Se retiró el aislamiento húmedo, se trató el área para prevención de moho.' },
    { step: 5, title: 'Interior Repair', titleEs: 'Reparación Interior', desc: 'Drywall repair, texture matching, and repaint to restore original appearance.', descEs: 'Reparación de yeso, coincidencia de textura y repintura para restaurar la apariencia.' },
    { step: 6, title: 'Final Testing', titleEs: 'Prueba Final', desc: 'Water testing performed to verify complete seal and no remaining leaks.', descEs: 'Prueba de agua realizada para verificar el sellado completo.' },
  ],
  
  // Features
  features: [
    'Complete Leak Diagnosis',
    'New Flashing Installation',
    'Premium Waterproofing Sealant',
    'Attic Insulation Replacement',
    'Mold Prevention Treatment',
    'Interior Drywall Repair',
    'Texture & Paint Matching',
    '10-Year Warranty on Repair',
    'Water Testing Verification',
    'Same-Day Emergency Response',
  ],
  
  featuresEs: [
    'Diagnóstico Completo de Fuga',
    'Instalación de Nuevo Flashing',
    'Sellador Impermeabilizante Premium',
    'Reemplazo de Aislamiento del Ático',
    'Tratamiento de Prevención de Moho',
    'Reparación de Yeso Interior',
    'Coincidencia de Textura y Pintura',
    'Garantía de 10 Años en Reparación',
    'Verificación con Prueba de Agua',
    'Respuesta de Emergencia el Mismo Día',
  ],
  
  // Testimonial
  testimonial: {
    quote: "We were worried when we saw water stains on our ceiling. S NEW ROOF came out the same day, found the leak quickly, and fixed everything - including the interior damage. They were professional, clean, and the repair is invisible. Highly recommend!",
    quoteEs: "Estábamos preocupados cuando vimos manchas de agua en nuestro techo. S NEW ROOF vino el mismo día, encontró la fuga rápidamente y arregló todo, incluyendo el daño interior. Fueron profesionales, limpios y la reparación es invisible. ¡Muy recomendado!",
    author: 'Tom and Anna',
    authorEs: 'Tom y Anna',
    location: 'Orange County, CA',
    avatar: '/avatars/tom-anna.png',
  },
};

export default function RoofLeakRepairPage() {
  const { isSpanish } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const getText = (en: string, es: string) => isSpanish ? es : en;

  // Animate images one by one on load
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleImages(prev => {
        if (prev.length >= projectData.gallery.length) {
          clearInterval(timer);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 150);

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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-white font-semibold text-sm mb-4">
                <Droplets className="w-4 h-4" />
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
                  <Users className="w-4 h-4" />
                  <span>{getText(projectData.homeowner, projectData.homeownerEs)}</span>
                </div>
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
              <div className="font-heading text-2xl font-bold text-white">15</div>
              <p className="text-gray-400 text-sm">{getText('Project Photos', 'Fotos')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-blue-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              <span className="font-semibold">{getText('Seeing Water Stains? We Fix Leaks Fast!', '¿Ve Manchas de Agua? ¡Arreglamos Fugas Rápido!')}</span>
            </div>
            <a href="tel:+17147704756" className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors">
              <Phone className="w-4 h-4" />
              (714) 770-4756
            </a>
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
                  {getText('Our Leak Repair Process', 'Nuestro Proceso de Reparación')}
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

                {/* Emergency Card */}
                <Card className="mt-6 bg-blue-50 border-2 border-blue-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">
                        {getText('Leak Emergency?', '¿Emergencia de Fuga?')}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {getText(
                        'Water damage gets worse over time. Call us immediately to prevent further damage to your home.',
                        'Los daños por agua empeoran con el tiempo. Llámenos inmediatamente para prevenir más daños.'
                      )}
                    </p>
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
              {getText('See the Complete Repair', 'Vea la Reparación Completa')}
            </h2>
            <p className="text-gray-600 mt-2">
              {getText('15 photos documenting our leak repair and restoration process', '15 fotos documentando nuestro proceso de reparación y restauración')}
            </p>
          </motion.div>

          {/* Animated Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {projectData.gallery.map((image, index) => (
              <AnimatePresence key={image.id}>
                {visibleImages.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
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
            <Droplets className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              {getText('Have a Roof Leak? Don\'t Wait!', '¿Tiene una Fuga en el Techo? ¡No Espere!')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {getText(
                'Water damage gets worse every day. Get a free inspection now and we\'ll find and fix your leak fast.',
                'Los daños por agua empeoran cada día. Obtenga una inspección gratis ahora y encontraremos y arreglaremos su fuga rápidamente.'
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
