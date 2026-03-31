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
  AlertTriangle,
  Zap,
  FileCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

// Project Data
const projectData = {
  id: 'emergency-storm-damage',
  title: 'Emergency Storm Damage Repair',
  titleEs: 'Reparación de Emergencia por Tormenta',
  subtitle: '24/7 Emergency Response & Complete Roof Restoration',
  subtitleEs: 'Respuesta de Emergencia 24/7 y Restauración Completa',
  location: 'Orange County, CA',
  mainImage: 'https://i.ibb.co.com/HsXNfmH/1.jpg',
  
  // Project Gallery Images (19 photos)
  gallery: [
    { id: 1, src: 'https://i.ibb.co.com/HsXNfmH/1.jpg', alt: 'Storm damage assessment' },
    { id: 2, src: 'https://i.ibb.co.com/TxgtjpQb/2.jpg', alt: 'Emergency tarping installation' },
    { id: 3, src: 'https://i.ibb.co.com/MkyLjggC/3.jpg', alt: 'Damaged shingle removal' },
    { id: 4, src: 'https://i.ibb.co.com/8L2rW1VN/4.jpg', alt: 'Deck inspection and repair' },
    { id: 5, src: 'https://i.ibb.co.com/35rjdwZ3/5.jpg', alt: 'New underlayment installation' },
    { id: 6, src: 'https://i.ibb.co.com/Kcfdcr34/6.jpg', alt: 'Ice and water shield application' },
    { id: 7, src: 'https://i.ibb.co.com/GQVR3Hrb/7.jpg', alt: 'Starter shingle placement' },
    { id: 8, src: 'https://i.ibb.co.com/XfKBcy5K/8.jpg', alt: 'Architectural shingle installation' },
    { id: 9, src: 'https://i.ibb.co.com/gZ99qc8b/9.jpg', alt: 'Ridge cap installation' },
    { id: 10, src: 'https://i.ibb.co.com/7t0TN8B0/10.jpg', alt: 'Flashing repair and sealing' },
    { id: 11, src: 'https://i.ibb.co.com/sp6zV9xb/11.jpg', alt: 'Ventilation system upgrade' },
    { id: 12, src: 'https://i.ibb.co.com/c4C2nQL/12.jpg', alt: 'Gutter inspection and repair' },
    { id: 13, src: 'https://i.ibb.co.com/m5wNypLv/13.jpg', alt: 'Fascia and soffit replacement' },
    { id: 14, src: 'https://i.ibb.co.com/svbp3hPq/14.jpg', alt: 'Final quality inspection' },
    { id: 15, src: 'https://i.ibb.co.com/ZRLPPgWP/15.jpg', alt: 'Completed roof restoration' },
    { id: 16, src: 'https://i.ibb.co.com/by1CJjb/16.jpg', alt: 'Cleaned property site' },
    { id: 17, src: 'https://i.ibb.co.com/QjKhh6t1/17.jpg', alt: 'Customer satisfaction walkthrough' },
    { id: 18, src: 'https://i.ibb.co.com/d4LfHmc2/18.jpg', alt: 'Warranty documentation' },
    { id: 19, src: 'https://i.ibb.co.com/SDcJWfgQ/19.jpg', alt: 'Project completion celebration' },
  ],
  
  // Project Details
  details: {
    duration: '5 Days',
    durationEs: '5 Días',
    warranty: '25 Years',
    sqft: '3,200 sq ft',
    type: 'Emergency Storm Repair',
    typeEs: 'Reparación de Emergencia',
    completionDate: 'Recent Project',
    completionDateEs: 'Proyecto Reciente',
  },
  
  // Description
  description: `When severe storms hit Orange County, this homeowner discovered significant damage to their roof - missing shingles, water infiltration, and compromised structural integrity. They contacted S NEW ROOF immediately, and our emergency response team was on-site within hours.

Our comprehensive storm damage repair process began with emergency tarping to prevent further water damage, followed by a thorough insurance inspection. We documented all damage with detailed photographs and provided the homeowner with everything needed for their insurance claim.

The project involved complete restoration of the damaged sections, replacement of water-damaged decking, and installation of premium impact-resistant shingles designed to withstand future storms. We also upgraded the ventilation system and installed new flashing to ensure long-term protection.`,

  descriptionEs: `Cuando tormentas severas golpearon Orange County, este propietario descubrió daños significativos en su techo - tejas faltantes, infiltración de agua y integridad estructural comprometida. Contactaron a S NEW ROOF inmediatamente, y nuestro equipo de respuesta de emergencia estuvo en el sitio en cuestión de horas.

Nuestro proceso integral de reparación de daños por tormenta comenzó con encarpado de emergencia para prevenir más daños por agua, seguido de una inspección exhaustiva del seguro. Documentamos todos los daños con fotografías detalladas y proporcionamos al propietario todo lo necesario para su reclamo de seguro.

El proyecto involucró la restauración completa de las secciones dañadas, reemplazo de la cubierta dañada por agua e instalación de tejas premium resistentes al impacto diseñadas para soportar tormentas futuras.`,
  
  // Process Steps
  processSteps: [
    { step: 1, title: 'Emergency Response', titleEs: 'Respuesta de Emergencia', desc: '24/7 emergency tarping and temporary protection installed within hours of call.', descEs: 'Encarpado de emergencia 24/7 y protección temporal instalada en cuestión de horas.' },
    { step: 2, title: 'Damage Assessment', titleEs: 'Evaluación de Daños', desc: 'Comprehensive inspection with detailed documentation for insurance claims.', descEs: 'Inspección exhaustiva con documentación detallada para reclamos de seguro.' },
    { step: 3, title: 'Insurance Coordination', titleEs: 'Coordinación con Seguro', desc: 'Direct communication with insurance adjuster to ensure full coverage approval.', descEs: 'Comunicación directa con el ajustador de seguros para asegurar la aprobación completa.' },
    { step: 4, title: 'Debris Removal', titleEs: 'Remoción de Escombros', desc: 'Complete cleanup of storm debris and damaged materials from property.', descEs: 'Limpieza completa de escombros de tormenta y materiales dañados de la propiedad.' },
    { step: 5, title: 'Structural Repairs', titleEs: 'Reparaciones Estructurales', desc: 'Replacement of damaged decking, fascia, and underlying structures.', descEs: 'Reemplazo de cubierta dañada, fascia y estructuras subyacentes.' },
    { step: 6, title: 'Roof Restoration', titleEs: 'Restauración del Techo', desc: 'Installation of impact-resistant shingles with enhanced warranty protection.', descEs: 'Instalación de tejas resistentes al impacto con protección de garantía mejorada.' },
  ],
  
  // Features
  features: [
    '24/7 Emergency Response',
    'Insurance Claim Assistance',
    'Emergency Tarping Service',
    'Impact-Resistant Shingles',
    '25-Year Manufacturer Warranty',
    '10-Year Workmanship Guarantee',
    'Complete Debris Removal',
    'Structural Decking Repair',
    'New Flashing Installation',
    'Improved Ventilation System',
    'Fascia & Soffit Repair',
    'Gutter Inspection Included',
    'Final Quality Inspection',
    'Property Site Cleanup',
  ],
  
  featuresEs: [
    'Respuesta de Emergencia 24/7',
    'Asistencia con Reclamos de Seguro',
    'Servicio de Encarpado de Emergencia',
    'Tejas Resistentes al Impacto',
    'Garantía del Fabricante de 25 Años',
    'Garantía de Trabajo de 10 Años',
    'Remoción Completa de Escombros',
    'Reparación de Cubierta Estructural',
    'Instalación de Nuevo Flashing',
    'Sistema de Ventilación Mejorado',
    'Reparación de Fascia y Soffit',
    'Inspección de Canaletas Incluida',
    'Inspección Final de Calidad',
    'Limpieza del Sitio de la Propiedad',
  ],
  
  // Testimonial
  testimonial: {
    quote: "After the storm, we were devastated seeing our roof damaged. S NEW ROOF was here within hours, tarped everything, and handled our entire insurance claim. They made a stressful situation so much easier. Our new roof is even better than before!",
    quoteEs: "Después de la tormenta, estábamos devastados al ver nuestro techo dañado. S NEW ROOF estuvo aquí en cuestión de horas, encarpó todo y manejó todo nuestro reclamo de seguro. Hicieron que una situación estresante fuera mucho más fácil. ¡Nuestro nuevo techo es aún mejor que antes!",
    author: 'Homeowner',
    authorEs: 'Propietario',
    location: 'Orange County, CA',
    avatar: '/avatars/homeowner-1.png',
  },
};

export default function EmergencyStormDamagePage() {
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full text-white font-semibold text-sm mb-4">
                <AlertTriangle className="w-4 h-4" />
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
              <p className="text-gray-400 text-sm">{getText('Roof Size', 'Tamaño del Techo')}</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-white">19</div>
              <p className="text-gray-400 text-sm">{getText('Project Photos', 'Fotos del Proyecto')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Banner */}
      <section className="bg-red-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">{getText('24/7 Emergency Service Available!', '¡Servicio de Emergencia 24/7 Disponible!')}</span>
            </div>
            <a href="tel:+17147704756" className="flex items-center gap-2 bg-white text-red-500 px-4 py-2 rounded-full font-bold hover:bg-red-100 transition-colors">
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
                  {getText('Our Storm Damage Process', 'Nuestro Proceso de Daños por Tormenta')}
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
                      {getText('Project Features', 'Características del Proyecto')}
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
                          {getText('Get Free Inspection', 'Obtener Inspección Gratis')}
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

                {/* Insurance Help Card */}
                <Card className="mt-6 bg-blue-50 border-2 border-blue-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">
                        {getText('Insurance Claim Help', 'Ayuda con Reclamos')}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {getText(
                        'We work directly with your insurance company to ensure you get the coverage you deserve.',
                        'Trabajamos directamente con su compañía de seguros para asegurar que obtenga la cobertura que merece.'
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
              {getText('See the Complete Restoration', 'Vea la Restauración Completa')}
            </h2>
            <p className="text-gray-600 mt-2">
              {getText('19 photos documenting our comprehensive storm damage repair process', '19 fotos documentando nuestro proceso integral de reparación de daños por tormenta')}
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
            <AlertTriangle className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              {getText('Storm Damage? We\'re Here 24/7!', '¿Daños por Tormenta? ¡Estamos Aquí 24/7!')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {getText(
                'Don\'t wait for more damage. Get a free emergency inspection now. We handle insurance claims and restore your roof to better-than-new condition.',
                'No espere más daños. Obtenga una inspección de emergencia gratis ahora. Manejamos reclamos de seguro y restauramos su techo a mejor condición que nuevo.'
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
