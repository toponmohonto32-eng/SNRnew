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
  Wrench,
  Home as HomeIcon,
  AlertTriangle,
  Search,
  CloudRain,
  Layers,
  Sun,
  Droplets,
  Shield,
  ChevronDown,
  ChevronUp as ChevronUpIcon,
  Globe,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Service } from '@/lib/services';
import { useLanguage } from '@/lib/i18n/context';
import { serviceTranslations } from '@/lib/translated-content';

interface ServiceClientProps {
  service: Service;
  otherServices: Service[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Home: HomeIcon,
  AlertTriangle,
  Search,
  CloudRain,
  Layers,
  Sun,
  Droplets,
  Lightbulb,
};

export default function ServiceClient({ service, otherServices }: ServiceClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language, setLanguage, isSpanish } = useLanguage();

  // Get translated service content
  const translatedService = serviceTranslations[service.slug]?.[language];
  
  // Use translated content if available, fallback to original
  const serviceName = translatedService?.name || service.name;
  const serviceDescription = translatedService?.description || service.description;
  const serviceLongDescription = translatedService?.longDescription || service.longDescription;
  const serviceFeatures = translatedService?.features || service.features;
  const serviceBenefits = translatedService?.benefits || service.benefits;
  const serviceProcess = translatedService?.process || service.process;
  const serviceFaqs = translatedService?.faqs || service.faqs;

  const IconComponent = iconMap[service.icon] || Wrench;

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
              <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#F97316] font-semibold">{t('serviceProfessional')}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {serviceName}
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
              {serviceDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <Link href="/#contact">
                  {t('heroCta1')}
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
                {t('serviceProfessionalServices').replace('{service}', serviceName)}
              </h2>
              <div className="prose prose-gray max-w-none">
                {serviceLongDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border border-gray-100 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
                      {t('serviceWhatWeOffer')}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border border-gray-100 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#F97316]" />
                      {t('serviceBenefits')}
                    </h3>
                    <ul className="space-y-3">
                      {serviceBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-[#F97316] mt-1 shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              {t('serviceOurProcess').replace('{service}', serviceName)}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('processSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border border-gray-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('faqBadge')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('serviceFaqQuestions').replace('{service}', serviceName.toLowerCase())}
            </p>
          </motion.div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openFaq === index ? (
                        <ChevronUpIcon className="w-5 h-5 text-[#F97316] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </div>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </button>
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
              {t('serviceNeedService').replace('{service}', serviceName)}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('serviceGetEstimate')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100" asChild>
                <Link href="/#contact">
                  {t('heroCta1')}
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

      {/* Other Services */}
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
              {t('serviceOtherServices')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('serviceCompleteSolutions')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s, index) => {
              const OtherIcon = iconMap[s.icon] || Wrench;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/services/${s.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white hover:border-[#F97316]/30 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-5 text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <OtherIcon className="w-6 h-6 text-[#F97316]" />
                        </div>
                        <h3 className="font-heading font-bold text-gray-900">{serviceTranslations[s.slug]?.[language]?.name || s.name}</h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{serviceTranslations[s.slug]?.[language]?.shortDescription || s.shortDescription}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
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
