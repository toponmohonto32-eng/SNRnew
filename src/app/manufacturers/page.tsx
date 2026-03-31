'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  ChevronUp,
  Shield,
  Award,
  BadgeCheck,
  Clock,
  Globe,
  Star,
  ThumbsUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { certifications } from '@/lib/certifications';
import { useLanguage } from '@/lib/i18n/context';

const pageTranslations = {
  en: {
    // Header
    brandName: 'S NEW ROOF',
    tagline1: 'Proudly Based in Santa Ana',
    tagline2: 'Serving the OC/LA County Since 2010',
    navServices: 'Services',
    navAreas: 'Areas',
    navReviews: 'Reviews',
    navContact: 'Contact',
    ctaInspection: 'Get Free Inspection',
    callUs: 'Call Us',
    switchLang: 'ES',

    // Page Content
    pageTitle: 'Certified by Top Manufacturers',
    pageSubtitle: 'Our certifications mean you get the best warranties and workmanship',
    pageDescription: 'As certified contractors with the top roofing manufacturers in North America, we bring you the highest quality materials, the best warranties, and expert installation that meets strict manufacturer standards.',

    whyCertificationsTitle: 'Why Our Certifications Matter',
    whyCertificationsSubtitle: 'These aren\'t just badges—they\'re your guarantee of quality, protection, and peace of mind.',

    benefit1Title: 'Best Warranties',
    benefit1Desc: 'Access to manufacturer warranties up to 50 years that non-certified contractors cannot offer.',
    benefit2Title: 'Verified Quality',
    benefit2Desc: 'Each certification requires proven track records, proper licensing, and ongoing training.',
    benefit3Title: 'Expert Installation',
    benefit3Desc: 'Our team is trained by manufacturers to install products exactly to specification.',
    benefit4Title: 'Premium Products',
    benefit4Desc: 'Access to the complete line of premium roofing products from all major manufacturers.',

    ourCertifications: 'Our Certifications',
    learnMore: 'Learn More',
    viewDetails: 'View Details',

    warrantyCoverage: 'Warranty Coverage',
    years: 'years',

    ctaTitle: 'Ready for a Quality Roof?',
    ctaSubtitle: 'Get a free inspection from our certified professionals and see the difference manufacturer certification makes.',
    ctaButton: 'Get Your Free Inspection',

    // Footer
    footerDescription: 'Your neighborhood roofer helping & protecting families since 2010.',
    footerContact: 'Contact',
    footerQuickLinks: 'Quick Links',
    footerHome: 'Home',
    footerServiceAreas: 'Service Areas',
    footerRights: 'All rights reserved.',
  },
  es: {
    // Header
    brandName: 'S NEW ROOF',
    tagline1: 'Orgullosamente en Santa Ana',
    tagline2: 'Sirviendo el Condado OC/LA Desde 2010',
    navServices: 'Servicios',
    navAreas: 'Áreas',
    navReviews: 'Reseñas',
    navContact: 'Contacto',
    ctaInspection: 'Inspección Gratis',
    callUs: 'Llámanos',
    switchLang: 'EN',

    // Page Content
    pageTitle: 'Certificados por los Mejores Fabricantes',
    pageSubtitle: 'Nuestras certificaciones significan que obtiene las mejores garantías',
    pageDescription: 'Como contratistas certificados con los mejores fabricantes de techos de Norteamérica, le ofrecemos los materiales de más alta calidad, las mejores garantías e instalación experta que cumple con los estrictos estándares del fabricante.',

    whyCertificationsTitle: 'Por Qué Importan Nuestras Certificaciones',
    whyCertificationsSubtitle: 'No son solo insignias—son su garantía de calidad, protección y tranquilidad.',

    benefit1Title: 'Mejores Garantías',
    benefit1Desc: 'Acceso a garantías del fabricante de hasta 50 años que contratistas no certificados no pueden ofrecer.',
    benefit2Title: 'Calidad Verificada',
    benefit2Desc: 'Cada certificación requiere historial comprobado, licencias apropiadas y capacitación continua.',
    benefit3Title: 'Instalación Experta',
    benefit3Desc: 'Nuestro equipo está capacitado por los fabricantes para instalar productos exactamente según especificación.',
    benefit4Title: 'Productos Premium',
    benefit4Desc: 'Acceso a la línea completa de productos premium de techo de todos los principales fabricantes.',

    ourCertifications: 'Nuestras Certificaciones',
    learnMore: 'Más Información',
    viewDetails: 'Ver Detalles',

    warrantyCoverage: 'Cobertura de Garantía',
    years: 'años',

    ctaTitle: '¿Listo para un Techo de Calidad?',
    ctaSubtitle: 'Obtenga una inspección gratis de nuestros profesionales certificados y vea la diferencia que hace la certificación del fabricante.',
    ctaButton: 'Obtenga Su Inspección Gratis',

    // Footer
    footerDescription: 'Su techador de vecindad ayudando familias desde 2010.',
    footerContact: 'Contacto',
    footerQuickLinks: 'Enlaces Rápidos',
    footerHome: 'Inicio',
    footerServiceAreas: 'Áreas de Servicio',
    footerRights: 'Todos los derechos reservados.',
  },
};

const certificationTranslations: Record<string, Record<string, { [key: string]: string }>> = {
  gaf: {
    en: {
      title: 'GAF Master Elite Contractor',
      subtitle: 'Top 2% of Roofing Contractors in North America',
      description: 'As a GAF Master Elite Contractor, we represent the top 2% of roofing contractors in North America. This prestigious certification is earned through rigorous training, proven quality, and a commitment to excellence.',
    },
    es: {
      title: 'Contratista Master Elite GAF',
      subtitle: 'El 2% Superior de Contratistas de Techos en Norteamérica',
      description: 'Como Contratista Master Elite GAF, representamos el 2% superior de contratistas de techos en Norteamérica. Esta prestigiosa certificación se gana a través de capacitación rigurosa, calidad probada y compromiso con la excelencia.',
    },
  },
  'owens-corning': {
    en: {
      title: 'Owens Corning Preferred Contractor',
      subtitle: 'Premium Products & Extended Warranties',
      description: 'As an Owens Corning Preferred Contractor, we have demonstrated our expertise in installing their roofing systems and meet their strict qualification standards.',
    },
    es: {
      title: 'Contratista Preferido de Owens Corning',
      subtitle: 'Productos Premium y Garantías Extendidas',
      description: 'Como Contratista Preferido de Owens Corning, hemos demostrado nuestra experiencia en la instalación de sus sistemas de techos y cumplimos con sus estrictos estándares de calificación.',
    },
  },
  certainteed: {
    en: {
      title: 'CertainTeed SELECT ShingleMaster',
      subtitle: 'Highest Level of Certification',
      description: 'SELECT ShingleMaster is CertainTeed\'s highest level of certification, reserved for contractors who have demonstrated exceptional expertise in installing CertainTeed roofing products.',
    },
    es: {
      title: 'SELECT ShingleMaster de CertainTeed',
      subtitle: 'El Nivel Más Alto de Certificación',
      description: 'SELECT ShingleMaster es el nivel más alto de certificación de CertainTeed, reservado para contratistas que han demostrado experiencia excepcional en la instalación de productos de techo CertainTeed.',
    },
  },
  tamko: {
    en: {
      title: 'TAMKO Pro Certified Contractor',
      subtitle: 'Quality Products & Professional Installation',
      description: 'As a TAMKO Pro Certified Contractor, we have completed comprehensive training on TAMKO products and installation techniques, ensuring quality installations every time.',
    },
    es: {
      title: 'Contratista Pro Certificado TAMKO',
      subtitle: 'Productos de Calidad e Instalación Profesional',
      description: 'Como Contratista Pro Certificado TAMKO, hemos completado capacitación integral sobre productos y técnicas de instalación TAMKO, garantizando instalaciones de calidad cada vez.',
    },
  },
};

export default function ManufacturersPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { language, setLanguage, isSpanish } = useLanguage();

  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations.en[key] || key;
  const ct = (slug: string, key: string) => {
    const certKey = slug === 'owens-corning' ? 'owens-corning' : slug;
    return certificationTranslations[certKey]?.[language]?.[key] ||
           certificationTranslations[certKey]?.en?.[key] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    { icon: Shield, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: ThumbsUp, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: BadgeCheck, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: Star, title: t('benefit4Title'), desc: t('benefit4Desc') },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] sm:h-20 md:h-24">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1.5 sm:p-2">
                <img
                  src="https://i.ibb.co/FbssB2VW/Untitled-design.png"
                  alt="S NEW ROOF Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">{t('brandName')}</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#F97316] font-medium leading-tight">{t('tagline1')}</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-600 font-medium leading-tight hidden sm:block">{t('tagline2')}</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium">
                {t('navServices')}
              </Link>
              <Link href="/#areas" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium">
                {t('navAreas')}
              </Link>
              <Link href="/#reviews" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium">
                {t('navReviews')}
              </Link>
              <a href="tel:+17147704756" className="flex items-center gap-2 text-gray-600 hover:text-[#F97316] transition-colors font-medium">
                <Phone className="w-4 h-4" />
                (714) 770-4756
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                {t('switchLang')}
              </button>
              <Button asChild className="bg-[#F97316] hover:bg-[#EA580C] text-white">
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">{t('ctaInspection')}</a>
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 pb-4"
            >
              <nav className="py-4 space-y-3">
                <Link href="/#services" className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg">
                  {t('navServices')}
                </Link>
                <Link href="/#areas" className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg">
                  {t('navAreas')}
                </Link>
                <Link href="/#reviews" className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg">
                  {t('navReviews')}
                </Link>
                <a href="tel:+17147704756" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg">
                  <Phone className="w-4 h-4" />
                  (714) 770-4756
                </a>
                <div className="px-4 pt-2 flex gap-2">
                  <button
                    onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-colors border border-gray-200"
                  >
                    <Globe className="w-4 h-4" />
                    {t('switchLang')}
                  </button>
                  <Button asChild className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white">
                    <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">{t('ctaInspection')}</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-[88px] sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-14 h-14 bg-[#F97316] rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('pageTitle')}
            </h1>
            <p className="text-[#F97316] font-semibold text-lg sm:text-xl mb-6">
              {t('pageSubtitle')}
            </p>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('pageDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {t('ctaInspection')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  (714) 770-4756
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('whyCertificationsTitle')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('whyCertificationsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-100 bg-white hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-[#F97316]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('ourCertifications')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/certifications/${cert.slug}`}>
                  <Card className="h-full border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:border-[#F97316]/30 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                          <BadgeCheck className="w-8 h-8 text-[#F97316]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                            {ct(cert.slug, 'title')}
                          </h3>
                          <p className="text-[#F97316] font-medium text-sm mb-3">
                            {ct(cert.slug, 'subtitle')}
                          </p>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {ct(cert.slug, 'description')}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Shield className="w-4 h-4" />
                              <span className="text-sm font-medium">{cert.warrantyYears} {t('years')}</span>
                            </div>
                            <span className="text-[#F97316] font-medium text-sm flex items-center gap-1">
                              {t('viewDetails')}
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Stats */}
      <section className="py-12 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-2">4</div>
              <p className="text-white/90 text-sm sm:text-base">Top Certifications</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <p className="text-white/90 text-sm sm:text-base">Years Warranty</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-2">2%</div>
              <p className="text-white/90 text-sm sm:text-base">Elite Status (GAF)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <p className="text-white/90 text-sm sm:text-base">Quality Assured</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {t('ctaButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
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
      <footer className="bg-gray-900 text-white py-12 sm:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white rounded-lg shadow-sm p-2">
                  <img
                    src="https://i.ibb.co/0RZwPVxK/Untitled-design-5.png"
                    alt="S NEW ROOF Logo"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footerDescription')}
              </p>
            </div>

            <div>
              <h4 className="font-heading text-lg font-bold mb-4">{t('footerContact')}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+17147704756" className="text-gray-400 hover:text-[#F97316] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (714) 770-4756
                  </a>
                </li>
                <li>
                  <a href="mailto:info@snewroof.com" className="text-gray-400 hover:text-[#F97316] transition-colors">
                    info@snewroof.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-bold mb-4">{t('footerQuickLinks')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#F97316] transition-colors">
                    {t('footerHome')}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-[#F97316] transition-colors">
                    {t('navServices')}
                  </Link>
                </li>
                <li>
                  <Link href="/#areas" className="text-gray-400 hover:text-[#F97316] transition-colors">
                    {t('footerServiceAreas')}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-[#F97316] transition-colors">
                    {t('navContact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} {t('brandName')}. {t('footerRights')}</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 z-40 w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Chat Button */}
      <Link href="/#contact">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#F97316] hover:bg-[#EA580C] rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Get a quote"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      </Link>
    </main>
  );
}
