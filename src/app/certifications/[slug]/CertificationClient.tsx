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
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Certification } from '@/lib/certifications';
import { useLanguage } from '@/lib/i18n/context';

interface CertificationClientProps {
  certification: Certification;
  otherCertifications: Certification[];
}

const certificationTranslations: Record<string, Record<string, { [key: string]: string }>> = {
  gaf: {
    en: {
      title: 'GAF Master Elite Contractor',
      subtitle: 'Top 2% of Roofing Contractors in North America',
      description: 'As a GAF Master Elite Contractor, we represent the top 2% of roofing contractors in North America. This prestigious certification is earned through rigorous training, proven quality, and a commitment to excellence.',
      warrantyTitle: 'Golden Pledge Warranty',
      warrantyDesc: 'The best warranty in the roofing industry - up to 25 years of coverage on both materials and workmanship.',
      eliteTitle: 'Elite Status',
      eliteDesc: 'Less than 2% of contractors qualify for this certification, making us part of an exclusive group of roofing professionals.',
      trainingTitle: 'Professional Training',
      trainingDesc: 'Our team receives ongoing training from GAF technical experts to ensure the highest quality installations.',
    },
    es: {
      title: 'Contratista Master Elite GAF',
      subtitle: 'El 2% Superior de Contratistas de Techos en Norteamérica',
      description: 'Como Contratista Master Elite GAF, representamos el 2% superior de contratistas de techos en Norteamérica. Esta prestigiosa certificación se gana a través de capacitación rigurosa, calidad probada y compromiso con la excelencia.',
      warrantyTitle: 'Garantía Golden Pledge',
      warrantyDesc: 'La mejor garantía en la industria de techos - hasta 25 años de cobertura en materiales y mano de obra.',
      eliteTitle: 'Estatus de Élite',
      eliteDesc: 'Menos del 2% de los contratistas califican para esta certificación, lo que nos hace parte de un grupo exclusivo de profesionales.',
      trainingTitle: 'Capacitación Profesional',
      trainingDesc: 'Nuestro equipo recibe capacitación continua de expertos técnicos de GAF para garantizar instalaciones de la más alta calidad.',
    },
  },
  'owens-corning': {
    en: {
      title: 'Owens Corning Preferred Contractor',
      subtitle: 'Premium Products & Extended Warranties',
      description: 'As an Owens Corning Preferred Contractor, we have demonstrated our expertise in installing their roofing systems and meet their strict qualification standards.',
      warrantyTitle: 'Up to 50 Year Warranty',
      warrantyDesc: 'Extended warranty options that provide comprehensive coverage for your entire roofing system.',
      eliteTitle: 'SureNail Technology',
      eliteDesc: 'Access to Owens Corning\'s patented SureNail Technology for superior wind resistance and durability.',
      trainingTitle: 'Preferred Status',
      trainingDesc: 'Rigorous qualification process ensures only the best contractors earn Preferred status.',
    },
    es: {
      title: 'Contratista Preferido de Owens Corning',
      subtitle: 'Productos Premium y Garantías Extendidas',
      description: 'Como Contratista Preferido de Owens Corning, hemos demostrado nuestra experiencia en la instalación de sus sistemas de techos y cumplimos con sus estrictos estándares de calificación.',
      warrantyTitle: 'Garantía de Hasta 50 Años',
      warrantyDesc: 'Opciones de garantía extendida que proporcionan cobertura integral para todo su sistema de techo.',
      eliteTitle: 'Tecnología SureNail',
      eliteDesc: 'Acceso a la tecnología patentada SureNail de Owens Corning para superior resistencia al viento y durabilidad.',
      trainingTitle: 'Estatus Preferido',
      trainingDesc: 'Un riguroso proceso de calificación asegura que solo los mejores contratistas obtengan el estatus Preferido.',
    },
  },
  certainteed: {
    en: {
      title: 'CertainTeed SELECT ShingleMaster',
      subtitle: 'Highest Level of Certification',
      description: 'SELECT ShingleMaster is CertainTeed\'s highest level of certification, reserved for contractors who have demonstrated exceptional expertise in installing CertainTeed roofing products.',
      warrantyTitle: 'SureStart PLUS Warranty',
      warrantyDesc: 'Comprehensive coverage for both materials and workmanship, with protection up to 50 years.',
      eliteTitle: 'Highest Certification',
      eliteDesc: 'The highest level of recognition in CertainTeed\'s contractor program.',
      trainingTitle: 'ShingleMaster Certified',
      trainingDesc: 'Our team includes certified ShingleMaster installers with specialized training.',
    },
    es: {
      title: 'SELECT ShingleMaster de CertainTeed',
      subtitle: 'El Nivel Más Alto de Certificación',
      description: 'SELECT ShingleMaster es el nivel más alto de certificación de CertainTeed, reservado para contratistas que han demostrado experiencia excepcional en la instalación de productos de techo CertainTeed.',
      warrantyTitle: 'Garantía SureStart PLUS',
      warrantyDesc: 'Cobertura integral para materiales y mano de obra, con protección de hasta 50 años.',
      eliteTitle: 'Certificación Más Alta',
      eliteDesc: 'El nivel más alto de reconocimiento en el programa de contratistas de CertainTeed.',
      trainingTitle: 'ShingleMaster Certificado',
      trainingDesc: 'Nuestro equipo incluye instaladores certificados ShingleMaster con capacitación especializada.',
    },
  },
  tamko: {
    en: {
      title: 'TAMKO Pro Certified Contractor',
      subtitle: 'Quality Products & Professional Installation',
      description: 'As a TAMKO Pro Certified Contractor, we have completed comprehensive training on TAMKO products and installation techniques, ensuring quality installations every time.',
      warrantyTitle: 'Pro Certified Warranty',
      warrantyDesc: 'Enhanced warranty coverage beyond standard manufacturer warranties.',
      eliteTitle: 'Professional Training',
      eliteDesc: 'Comprehensive training on all TAMKO products and installation best practices.',
      trainingTitle: '75+ Years Experience',
      trainingDesc: 'TAMKO brings over 75 years of manufacturing experience to every product.',
    },
    es: {
      title: 'Contratista Pro Certificado TAMKO',
      subtitle: 'Productos de Calidad e Instalación Profesional',
      description: 'Como Contratista Pro Certificado TAMKO, hemos completado capacitación integral sobre productos y técnicas de instalación TAMKO, garantizando instalaciones de calidad cada vez.',
      warrantyTitle: 'Garantía Pro Certificada',
      warrantyDesc: 'Cobertura de garantía mejorada más allá de las garantías estándar del fabricante.',
      eliteTitle: 'Capacitación Profesional',
      eliteDesc: 'Capacitación integral sobre todos los productos TAMKO y mejores prácticas de instalación.',
      trainingTitle: 'Más de 75 Años de Experiencia',
      trainingDesc: 'TAMKO aporta más de 75 años de experiencia en fabricación a cada producto.',
    },
  },
};

const pageTranslations = {
  en: {
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
    backToCertifications: 'Back to Certifications',
    ourCertifications: 'Our Certification',
    benefits: 'Benefits',
    features: 'Features',
    warranty: 'Warranty Protection',
    years: 'years',
    otherCertifications: 'Other Certifications',
    learnMore: 'Learn More',
    visitWebsite: 'Visit Official Website',
    getFreeInspection: 'Get Your Free Inspection',
    contactUs: 'Contact Us Today',
    readyToStart: 'Ready to Start Your Project?',
    readyDesc: 'Contact us today for a free roof inspection and quote.',
    footerDescription: 'Your neighborhood roofer helping & protecting families since 2010.',
    footerContact: 'Contact',
    footerQuickLinks: 'Quick Links',
    footerHome: 'Home',
    footerServiceAreas: 'Service Areas',
    footerRights: 'All rights reserved.',
    professionalCertification: 'Professional Certification',
  },
  es: {
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
    backToCertifications: 'Volver a Certificaciones',
    ourCertifications: 'Nuestra Certificación',
    benefits: 'Beneficios',
    features: 'Características',
    warranty: 'Protección de Garantía',
    years: 'años',
    otherCertifications: 'Otras Certificaciones',
    learnMore: 'Más Información',
    visitWebsite: 'Visitar Sitio Oficial',
    getFreeInspection: 'Obtenga Su Inspección Gratis',
    contactUs: 'Contáctenos Hoy',
    readyToStart: '¿Listo para Comenzar Su Proyecto?',
    readyDesc: 'Contáctenos hoy para una inspección de techo gratis y presupuesto.',
    footerDescription: 'Su techador de vecindad ayudando familias desde 2010.',
    footerContact: 'Contacto',
    footerQuickLinks: 'Enlaces Rápidos',
    footerHome: 'Inicio',
    footerServiceAreas: 'Áreas de Servicio',
    footerRights: 'Todos los derechos reservados.',
    professionalCertification: 'Certificación Profesional',
  },
};

export default function CertificationClient({ certification, otherCertifications }: CertificationClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { language, setLanguage, isSpanish } = useLanguage();

  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations.en[key] || key;
  const ct = (key: string) => {
    const certKey = certification.slug === 'owens-corning' ? 'owens-corning' : certification.slug;
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
      <section className="relative pt-[88px] sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#F97316] font-semibold">{t('professionalCertification')}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {ct('title')}
            </h1>
            <p className="text-[#F97316] font-semibold text-lg mb-6">
              {ct('subtitle')}
            </p>
            <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
              {ct('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {t('getFreeInspection')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300" asChild>
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  (714) 770-4756
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Highlight */}
      <section className="py-12 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold mb-2">{ct('warrantyTitle')}</h3>
              <p className="text-white/90">{ct('warrantyDesc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <BadgeCheck className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold mb-2">{ct('eliteTitle')}</h3>
              <p className="text-white/90">{ct('eliteDesc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold mb-2">{ct('trainingTitle')}</h3>
              <p className="text-white/90">{ct('trainingDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t('benefits')}
              </h2>
              <ul className="space-y-4">
                {certification.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border border-gray-100 shadow-lg bg-gradient-to-br from-gray-50 to-orange-50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#F97316]" />
                    {t('warranty')}
                  </h3>
                  <div className="text-center py-4">
                    <span className="font-heading text-5xl font-bold text-[#F97316]">{certification.warrantyYears}</span>
                    <span className="block text-xl text-gray-600 mt-2">{t('years')}</span>
                  </div>
                  <p className="text-gray-600 text-center">
                    {t('features')}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certification.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-[#F97316] text-[#F97316] hover:bg-orange-50"
                      asChild
                    >
                      <a href={certification.website} target="_blank" rel="noopener noreferrer">
                        {t('visitWebsite')}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              {t('features')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certification.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border border-gray-100 bg-white">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-gray-900">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('readyToStart')}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('readyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100" asChild>
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

      {/* Other Certifications */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('otherCertifications')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={cert.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/certifications/${cert.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white hover:border-[#F97316]/30 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Award className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                      <h3 className="font-heading font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{cert.fullName.split(' ').slice(1).join(' ')}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
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
