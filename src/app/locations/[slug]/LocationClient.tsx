'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  ChevronUp,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Location } from '@/lib/locations';
import { useLanguage } from '@/lib/i18n/context';
import { locationTranslations } from '@/lib/translated-content';

interface LocationClientProps {
  location: Location;
  otherLocations: Location[];
}

export default function LocationClient({ location, otherLocations }: LocationClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t, language, setLanguage, isSpanish } = useLanguage();

  // Get translated location content
  const translatedLocation = locationTranslations[location.slug]?.[language];
  
  // Use translated content if available, fallback to original
  const locationDescription = translatedLocation?.description || location.description;
  const locationLongDescription = translatedLocation?.longDescription || location.longDescription;
  const locationServices = translatedLocation?.services || location.services;
  const locationHighlights = translatedLocation?.highlights || location.highlights;

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
              {/* Tagline - visible on tablet and desktop */}
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{t('brandName')}</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-[#F97316] font-medium leading-tight">{t('tagline1')}</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">{t('tagline2')}</span>
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
                <Link href="/#contact">{t('ctaInspection')}</Link>
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

          {/* Mobile Menu */}
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
                    <Link href="/#contact">{t('ctaInspection')}</Link>
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
              <MapPin className="w-5 h-5 text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">{location.county}, California</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('locationRoofingServices').replace('{location}', location.name)}
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
              {locationDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <Link href="/#contact">
                  {t('ctaInspection')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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

      {/* About Section */}
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
                {t('locationTrustedContractor').replace('{location}', location.name)}
              </h2>
              <div className="prose prose-gray max-w-none">
                {locationLongDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border border-gray-100 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
                    {t('locationWhyChoose').replace('{location}', location.name)}
                  </h3>
                  <ul className="space-y-4">
                    {locationHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('locationOurServices').replace('{location}', location.name)}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('locationComprehensiveSolutions').replace('{location}', location.name)}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {locationServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100 bg-white">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-gray-900 text-sm">{service}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Zip Codes */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('locationServiceArea').replace('{location}', location.name)}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('locationWeServeZip').replace('{location}', location.name)}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {location.zipCodes.map((zip, index) => (
              <motion.span
                key={zip}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-mono text-sm"
              >
                {zip}
              </motion.span>
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
              {t('locationNeedRoofer').replace('{location}', location.name)}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('locationGetInspection')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100" asChild>
                <Link href="/#contact">
                  {t('ctaButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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

      {/* Other Areas */}
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
              {t('locationOtherAreas')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('locationProudlyServes')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/locations/${loc.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white hover:border-[#F97316]/30 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-5 h-5 text-[#F97316] mx-auto mb-2" />
                      <p className="font-medium text-gray-900">{loc.name}</p>
                      <p className="text-xs text-gray-500">{loc.county}</p>
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
                {t('locationFooterDesc').replace('{location}', location.name).replace('{county}', location.county)}
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
