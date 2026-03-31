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
  Layers,
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
  id: 'shingle-roof-santa-ana',
  title: 'Shingle Roof Installation',
  titleEs: 'Instalación de Techo de Tejas',
  subtitle: 'Complete Roof Replacement Project',
  subtitleEs: 'Proyecto de Reemplazo Completo de Techo',
  location: 'Santa Ana, CA',
  mainImage: 'https://i.ibb.co.com/mVBX77b3/Untitled-design-4.png',
  
  // Project Gallery Images
  gallery: [
    { id: 1, src: 'https://i.ibb.co.com/ymyrBbPz/1.jpg', alt: 'Before - Old damaged roof' },
    { id: 2, src: 'https://i.ibb.co.com/x82R98Pn/2.jpg', alt: 'Roof tear-off process' },
    { id: 3, src: 'https://i.ibb.co.com/j9pvpBZY/3.jpg', alt: 'Decking inspection' },
    { id: 4, src: 'https://i.ibb.co.com/5Xyknh9j/4.jpg', alt: 'New underlayment installation' },
    { id: 5, src: 'https://i.ibb.co.com/RTCBvYxj/5.jpg', alt: 'Ice and water shield application' },
    { id: 6, src: 'https://i.ibb.co.com/CpZvJjB4/6.jpg', alt: 'Starter shingle installation' },
    { id: 7, src: 'https://i.ibb.co.com/x85yLJ1h/7.jpg', alt: 'Architectural shingle placement' },
    { id: 8, src: 'https://i.ibb.co.com/C3prsMkm/8.jpg', alt: 'Ridge cap installation' },
    { id: 9, src: 'https://i.ibb.co.com/F4PWZ8hN/9.jpg', alt: 'Final inspection' },
    { id: 10, src: 'https://i.ibb.co.com/WWSpmRY2/10.jpg', alt: 'Completed beautiful roof' },
  ],
  
  // Project Details
  details: {
    duration: '3 Days',
    durationEs: '3 Días',
    warranty: '30 Years',
    sqft: '2,450 sq ft',
    type: 'Architectural Shingle',
    typeEs: 'Teja Arquitectónica',
    completionDate: 'March 2024',
    completionDateEs: 'Marzo 2024',
  },
  
  // Description
  description: `This comprehensive roof replacement project in Santa Ana showcases our commitment to quality craftsmanship and attention to detail. The homeowners contacted us after noticing significant wear on their 20-year-old roof, including curling shingles, granule loss, and minor leak spots in the attic.

Our team conducted a thorough inspection and recommended a complete tear-off and replacement with premium architectural shingles. This approach ensures a solid foundation and allows us to address any underlying deck issues before installation.`,
  
  descriptionEs: `Este proyecto integral de reemplazo de techo en Santa Ana demuestra nuestro compromiso con la calidad artesanal y la atención al detalle. Los propietarios nos contactaron después de notar un desgaste significativo en su techo de 20 años, incluyendo tejas rizadas, pérdida de gránulos y pequeñas manchas de filtración en el ático.

Nuestro equipo realizó una inspección exhaustiva y recomendó un retiro completo y reemplazo con tejas arquitectónicas premium. Este enfoque garantiza una base sólida y nos permite abordar cualquier problema subyacente de la cubierta antes de la instalación.`,
  
  // Process Steps
  processSteps: [
    { step: 1, title: 'Initial Inspection & Quote', titleEs: 'Inspección Inicial y Cotización', desc: 'Complete roof assessment with photos and detailed estimate provided same day.', descEs: 'Evaluación completa del techo con fotos y estimación detallada proporcionada el mismo día.' },
    { step: 2, title: 'Tear-Off', titleEs: 'Retiro del Techo Antiguo', desc: 'Complete removal of old shingles, inspection of decking for any damage.', descEs: 'Retiro completo de tejas antiguas, inspección de la cubierta para detectar daños.' },
    { step: 3, title: 'Deck Preparation', titleEs: 'Preparación de la Cubierta', desc: 'Replaced damaged plywood, installed new drip edge and ice/water shield.', descEs: 'Reemplazo de madera dañada, instalación de borde de goteo y barrera de hielo/agua.' },
    { step: 4, title: 'Underlayment', titleEs: 'Subcapa Protectora', desc: 'Premium synthetic underlayment installed across entire roof surface.', descEs: 'Subcapa sintética premium instalada en toda la superficie del techo.' },
    { step: 5, title: 'Shingle Installation', titleEs: 'Instalación de Tejas', desc: 'Architectural shingles installed with proper nailing pattern and alignment.', descEs: 'Tejas arquitectónicas instaladas con patrón de clavado y alineación adecuados.' },
    { step: 6, title: 'Finishing Touches', titleEs: 'Toques Finales', desc: 'Ridge caps, ventilation, flashing, and final quality inspection completed.', descEs: 'Tapas de cresta, ventilación, flashing e inspección final de calidad completados.' },
  ],
  
  // Features
  features: [
    'Premium Architectural Shingles',
    '30-Year Manufacturer Warranty',
    '10-Year Workmanship Guarantee',
    'Complete Tear-Off',
    'New Synthetic Underlayment',
    'Ice & Water Shield in Valleys',
    'New Drip Edge & Flashing',
    'Improved Attic Ventilation',
    'Gutter Cleaning Included',
    'Complete Site Cleanup',
  ],
  
  featuresEs: [
    'Tejas Arquitectónicas Premium',
    'Garantía del Fabricante de 30 Años',
    'Garantía de Trabajo de 10 Años',
    'Retiro Completo del Techo Antiguo',
    'Nueva Subcapa Sintética',
    'Barrera de Hielo y Agua en Valles',
    'Nuevo Borde de Goteo y Flashing',
    'Ventilación de Ático Mejorada',
    'Limpieza de Canaletas Incluida',
    'Limpieza Completa del Sitio',
  ],
  
  // Testimonial
  testimonial: {
    quote: "S NEW ROOF transformed our home! The team was professional, clean, and finished ahead of schedule. Our new roof looks absolutely stunning and we've already noticed a difference in our energy bills. Highly recommend!",
    quoteEs: "¡S NEW ROOF transformó nuestro hogar! El equipo fue profesional, limpio y terminó antes de lo programado. Nuestro nuevo techo se ve absolutamente impresionante y ya hemos notado una diferencia en nuestras facturas de energía. ¡Muy recomendado!",
    author: 'Brett Ohls & Lorraine',
    authorEs: 'Brett Ohls y Lorraine',
    location: 'Santa Ana, CA',
    avatar: '/avatars/brett-lorraine.png',
  },
};

export default function ProjectDetailPage() {
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
    }, 200);

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
                <Layers className="w-4 h-4" />
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
              <div className="font-heading text-2xl font-bold text-white">100%</div>
              <p className="text-gray-400 text-sm">{getText('Satisfaction', 'Satisfacción')}</p>
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
                      {getText('Project Features', 'Características del Proyecto')}
                    </h3>
                    <ul className="space-y-3">
                      {(isSpanish ? projectData.featuresEs : projectData.features).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
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
              {getText('See the Transformation', 'Vea la Transformación')}
            </h2>
          </motion.div>

          {/* Animated Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                'Obtenga una inspección gratis y vea cómo podemos transformar su hogar con un techo nuevo hermoso y duradero.'
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
