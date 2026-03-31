'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Shield,
  Star,
  Wrench,
  Home as HomeIcon,
  AlertTriangle,
  Search,
  CloudRain,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Send,
  Loader2,
  Calendar,
  ClipboardCheck,
  Hammer,
  Heart,
  Clock,
  ChevronUp,
  MapPin,
  Droplets,
  Sun,
  Layers,
  FileCheck,
  Zap,
  Award,
  BadgeCheck,
  CreditCard,
  Calculator,
  Users,
  Building,
  PhoneCall,
  FileText,
  ThumbsUp,
  DollarSign,
  Percent,
  Clock3,
  ChevronDown,
  HelpCircle,
  Umbrella,
  Sparkles,
  Gift,
  Play,
  Quote,
  BadgeDollarSign,
  Handshake,
  ClipboardList,
  Home,
  TrendingUp,
  Camera,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/lib/i18n/context';

// Types
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, isSpanish } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20 md:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1.5 sm:p-2">
              <img 
                src="https://i.ibb.co/FbssB2VW/Untitled-design.png" 
                alt="S NEW ROOF Logo" 
                className="h-10 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            {/* Tagline - visible on all devices */}
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight truncate">{t('brandName')}</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#F97316] font-semibold leading-tight">{t('tagline1')}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#services" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium text-sm xl:text-base">
              {t('navServices')}
            </a>
            <a href="#areas" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium text-sm xl:text-base">
              {t('navAreas')}
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium text-sm xl:text-base">
              {t('navReviews')}
            </a>
            <a href="#process" className="text-gray-600 hover:text-[#F97316] transition-colors font-medium text-sm xl:text-base">
              {t('navProcess')}
            </a>
            <a href="tel:+17147704756" className="flex items-center gap-2 text-gray-600 hover:text-[#F97316] transition-colors font-medium text-sm xl:text-base">
              <Phone className="w-4 h-4" />
              (714) 770-4756
            </a>
          </nav>

          {/* CTA Buttons & Language Switcher - Tablet & Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              {t('switchLang')}
            </button>
            <Button
              asChild
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">{t('ctaInspection')}</a>
            </Button>
          </div>

          {/* Mobile Call Button */}
          <a
            href="tel:+17147704756"
            className="md:hidden flex items-center justify-center w-10 h-10 bg-[#F97316] rounded-full text-white mr-2"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <nav className="py-4 space-y-1">
                <a
                  href="#services"
                  className="block px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navServices')}
                </a>
                <a
                  href="#areas"
                  className="block px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navAreas')}
                </a>
                <a
                  href="#reviews"
                  className="block px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navReviews')}
                </a>
                <a
                  href="#process"
                  className="block px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navProcess')}
                </a>
                <a
                  href="tel:+17147704756"
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  (714) 770-4756
                </a>
                {/* Mobile Language Switcher */}
                <button
                  onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] w-full"
                >
                  <Globe className="w-4 h-4" />
                  {isSpanish ? 'English' : 'Español'}
                </button>
                <div className="px-4 pt-3">
                  <Button
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-12"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">{t('ctaInspection')}</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[100svh] sm:min-h-screen flex items-center pt-[72px] sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Professional roofing team at work in OC/LA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/98 to-white/80 sm:via-white/95 sm:to-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
          >
            <span className="block">{t('heroTitle1')}</span>
            <span className="block">{t('heroTitle2')}</span>
          </motion.h1>

          {/* Subheadline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gray-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <span>{t('heroBadgeLong')}</span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6 sm:mb-8"
          >
            <Button
              size="lg"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 h-12 sm:h-14 md:h-16"
              asChild
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                {t('heroCta1')}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base md:text-lg px-6 sm:px-8 h-12 sm:h-14 md:h-16"
              asChild
            >
              <a href="tel:+17147704756">
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                {t('heroCta2')}
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs sm:text-sm md:text-base font-medium">{t('trustLocal')}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-xs sm:text-sm md:text-base font-medium">{t('trustReviews')}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F97316]" />
              <span className="text-xs sm:text-sm md:text-base font-medium">{t('trustEmergency')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Trust Signals Section
function TrustSignalsSection() {
  const { t } = useLanguage();
  
  const trustItems = [
    {
      icon: Shield,
      title: t('trustLicensed'),
      description: t('trustLicensedDesc'),
    },
    {
      icon: Award,
      title: t('trustBBB'),
      description: t('trustBBBDesc'),
    },
    {
      icon: BadgeCheck,
      title: t('trustGAF'),
      description: t('trustGAFDesc'),
    },
    {
      icon: Users,
      title: t('trustCustomers'),
      description: t('trustCustomersDesc'),
    },
    {
      icon: Star,
      title: t('trustStars'),
      description: t('trustStarsDesc'),
    },
    {
      icon: Clock,
      title: t('trustFast'),
      description: t('trustFastDesc'),
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center"
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#F97316] mx-auto mb-1 sm:mb-2" />
              <h4 className="text-white font-bold text-[10px] sm:text-xs md:text-sm leading-tight">{item.title}</h4>
              <p className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs hidden sm:block">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const { t } = useLanguage();
  
  const stats = [
    { value: t('statsYearsNum'), label: t('statsYears') },
    { value: t('statsRoofsNum'), label: t('statsRoofs') },
    { value: t('statsCitiesNum'), label: t('statsCities') },
    { value: t('statsSatisfactionNum'), label: t('statsSatisfaction') },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm uppercase tracking-wide">{t('statsTeam')}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold text-[#F97316] mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Recommendations Section
function RecommendationsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">{t('recommendationsBadge')}</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            {t('recommendationsTitle')}
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <img 
              src="https://i.ibb.co/Ngq7Kc66/Untitled-design-1.png" 
              alt="S NEW ROOF Recommendations - Trusted Roofing Company"
              className="h-32 sm:h-40 w-auto mx-auto drop-shadow-lg"
            />
          </motion.div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">{t('recommendationsVerified')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">{t('recommendationsTrusted')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">{t('recommendationsRated')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Emergency Banner Section
function EmergencyBanner() {
  const { t } = useLanguage();
  
  return (
    <section className="py-4 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white">
            <Zap className="w-5 h-5" />
            <span className="font-bold">{t('emergencyTitle')}</span>
            <span className="hidden sm:inline">-</span>
            <span className="hidden sm:inline text-white/90">{t('emergencyDesc')}</span>
          </div>
          <a
            href="tel:+17147704756"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (714) 770-4756
          </a>
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function CertificationsSection() {
  const { t } = useLanguage();

  const certifications = [
    { name: 'GAF', slug: 'gaf', description: 'Master Elite Contractor' },
    { name: 'Owens Corning', slug: 'owens-corning', description: 'Preferred Contractor' },
    { name: 'CertainTeed', slug: 'certainteed', description: 'SELECT ShingleMaster' },
    { name: 'TAMKO', slug: 'tamko', description: 'Pro Certified' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <a href="/manufacturers" className="group">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#F97316] transition-colors">
              {t('certBadge')}
            </h2>
          </a>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('certSubtitle')}
          </p>
        </motion.div>

        <a href="/manufacturers" className="block">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 bg-white hover:shadow-lg hover:border-[#F97316]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BadgeCheck className="w-8 h-8 text-[#F97316]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </a>

        {/* View All Certifications Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-[#F97316] text-[#F97316] hover:bg-orange-50" asChild>
            <a href="/manufacturers">
              {t('learnMore')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Financing Section
function FinancingSection() {
  const { t } = useLanguage();
  
  const options = [
    {
      icon: Percent,
      title: t('financing0'),
      description: t('financing0Desc'),
    },
    {
      icon: DollarSign,
      title: t('financingLow'),
      description: t('financingLowDesc'),
    },
    {
      icon: Clock3,
      title: t('financingQuick'),
      description: t('financingQuickDesc'),
    },
    {
      icon: FileText,
      title: t('financingNoPrepay'),
      description: t('financingNoPrepayDesc'),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-500/20 text-[#F97316] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {t('financingBadge')}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('financingTitle').split('Over')[0]}<br className="hidden sm:block" />{t('financingTitle').includes('Over') ? 'Over ' + t('financingTitle').split('Over')[1] : ''}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t('financingSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white h-12 sm:h-11" asChild>
                <a href="#contact">
                  <CreditCard className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  {t('financingApply')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 h-12 sm:h-11" asChild>
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  {t('financingLearn')}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {options.map((option) => (
              <Card key={option.title} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-3 sm:p-5 text-center">
                  <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#F97316] mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-1">{option.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section (Before/After)
function GallerySection() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('project1Title'),
      location: t('project1Location'),
      description: t('project1Desc'),
    },
    {
      title: t('project2Title'),
      location: t('project2Location'),
      description: t('project2Desc'),
    },
    {
      title: t('project3Title'),
      location: t('project3Location'),
      description: t('project3Desc'),
    },
    {
      title: t('project4Title'),
      location: t('project4Location'),
      description: t('project4Desc'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('galleryBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('galleryTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
                  <img
                    src="/hero-bg.png"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <MapPin className="w-4 h-4 text-white/80 inline mr-1" />
                    <span className="text-white/80 text-sm">{project.location}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-2 border-gray-300" asChild>
            <a href="/#contact">
              {t('galleryViewMore')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: ThumbsUp,
      title: t('whyFamily'),
      description: t('whyFamilyDesc'),
    },
    {
      icon: Shield,
      title: t('whyLicensed'),
      description: t('whyLicensedDesc'),
    },
    {
      icon: Clock,
      title: t('whyOnTime'),
      description: t('whyOnTimeDesc'),
    },
    {
      icon: FileCheck,
      title: t('whyWarranty'),
      description: t('whyWarrantyDesc'),
    },
    {
      icon: DollarSign,
      title: t('whyTransparent'),
      description: t('whyTransparentDesc'),
    },
    {
      icon: PhoneCall,
      title: t('whyDirect'),
      description: t('whyDirectDesc'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('whyBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('whyTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('whySubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border border-gray-100 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Local Trust Section
function LocalTrustSection() {
  const { t } = useLanguage();
  
  const localHighlights = [
    {
      icon: Home,
      title: t('localBorn'),
      description: t('localBornDesc'),
    },
    {
      icon: Handshake,
      title: t('localCommunity'),
      description: t('localCommunityDesc'),
    },
    {
      icon: Users,
      title: t('localFamilies'),
      description: t('localFamiliesDesc'),
    },
    {
      icon: Building,
      title: t('localNetwork'),
      description: t('localNetworkDesc'),
    },
  ];

  const localLandmarks = [
    { name: 'Downtown Santa Ana', distance: '5 min' },
    { name: 'South Coast Plaza', distance: '10 min' },
    { name: 'Anaheim Stadium', distance: '15 min' },
    { name: 'Irvine Spectrum', distance: '20 min' },
    { name: 'Huntington Beach', distance: '25 min' },
    { name: 'Newport Coast', distance: '25 min' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F97316] text-white rounded-full text-sm font-semibold mb-4">
            🏠 {t('localBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('localTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('localSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {localHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-orange-100 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F97316] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Distance Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    {t('localAround')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('localAroundDesc')}
                  </p>
                  <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                    <a href="tel:+17147704756">
                      <Phone className="mr-2 w-4 h-4" />
                      {t('callUs')}: (714) 770-4756
                    </a>
                  </Button>
                </div>
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {localLandmarks.map((landmark, index) => (
                      <div
                        key={landmark.name}
                        className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                      >
                        <span className="text-sm text-gray-700">{landmark.name}</span>
                        <span className="text-xs text-[#F97316] font-medium">{landmark.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Owner Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-3xl font-heading font-bold text-white">S</span>
                </div>
                <div className="text-left">
                  <p className="text-white/90 italic text-lg mb-3">
                    &ldquo;{t('localOwner')}&rdquo;
                  </p>
                  <p className="text-[#F97316] font-semibold">— {t('localOwnerName')}</p>
                  <p className="text-white/60 text-sm">{t('localOwnerSince')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Wrench,
      title: t('serviceRepair'),
      slug: 'roof-repair',
      description: t('serviceRepairDesc'),
    },
    {
      icon: HomeIcon,
      title: t('serviceReplacement'),
      slug: 'roof-replacement',
      description: t('serviceReplacementDesc'),
    },
    {
      icon: AlertTriangle,
      title: t('serviceEmergency'),
      slug: 'emergency-leak-repair',
      description: t('serviceEmergencyDesc'),
    },
    {
      icon: Search,
      title: t('serviceInspection'),
      slug: 'roof-inspection',
      description: t('serviceInspectionDesc'),
    },
    {
      icon: CloudRain,
      title: t('serviceStorm'),
      slug: 'storm-damage-repair',
      description: t('serviceStormDesc'),
    },
    {
      icon: Layers,
      title: t('serviceTile'),
      slug: 'tile-roofing',
      description: t('serviceTileDesc'),
    },
    {
      icon: Sun,
      title: t('serviceShingle'),
      slug: 'shingle-roofing',
      description: t('serviceShingleDesc'),
    },
    {
      icon: Droplets,
      title: t('serviceGutters'),
      slug: 'gutter-services',
      description: t('serviceGuttersDesc'),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('servicesBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <a href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white hover:border-[#F97316]/30 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-[#F97316]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-[#F97316] font-medium text-sm group-hover:underline">
                      {t('learnMore')}
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Areas We Serve Section
function AreasSection() {
  const { t } = useLanguage();
  
  const areas = [
    { name: 'Santa Ana', slug: 'santa-ana', featured: true },
    { name: 'Orange County', slug: 'orange-county', featured: true },
    { name: 'Anaheim', slug: 'anaheim', featured: false },
    { name: 'Irvine', slug: 'irvine', featured: false },
    { name: 'Garden Grove', slug: 'garden-grove', featured: false },
    { name: 'Fullerton', slug: 'fullerton', featured: false },
    { name: 'Costa Mesa', slug: 'costa-mesa', featured: false },
    { name: 'Newport Beach', slug: 'newport-beach', featured: false },
    { name: 'Huntington Beach', slug: 'huntington-beach', featured: false },
    { name: 'Tustin', slug: 'tustin', featured: false },
    { name: 'Orange', slug: 'orange', featured: false },
    { name: 'Westminster', slug: 'westminster', featured: false },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
              {t('areasBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('areasTitle')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('areasSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white"
                asChild
              >
                <a href="#contact">
                  <MapPin className="mr-2 w-5 h-5" />
                  {t('areasCheck')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300"
                asChild
              >
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  (714) 770-4756
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{t('areasFreeEstimates')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{t('areasSameDay')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{t('areasLicensed')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F97316]" />
                {t('areasLocations')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <a
                      href={`/locations/${area.slug}`}
                      className={`
                        block px-4 py-3 rounded-xl text-center font-medium text-sm
                        transition-all duration-200 cursor-pointer
                        ${area.featured 
                          ? 'bg-[#F97316] text-white shadow-md hover:shadow-lg hover:bg-[#EA580C]' 
                          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-[#F97316]'
                        }
                      `}
                    >
                      {area.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mt-6">
                {t('areasNotFound')}
                <a href="tel:+17147704756" className="text-[#F97316] font-medium ml-1 hover:underline">
                  {t('areasCallUs')}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: 'Northland Center',
      location: 'Commercial Client',
      rating: 5,
      text: 'I had an emergency leak, late at night during a big storm. S New Roof was there in less than an hour and took care of everything. Since that night I\'ve had them come back to address other roofing issues. They have done some extensive repairs and maintenance. Always with professional workmanship and timely response. I have worked with dozens of roofing companies over the years on commercial projects. S New Roof is by far the best. 5 Stars all day! Highly Recommend!',
      services: 'Roof repair for storm and wind damage, Roof installation',
    },
    {
      name: 'Amir Ghobrial',
      location: 'Residential Customer',
      rating: 5,
      text: 'Wonderful job with professional staff with good pricing. Helped us replace and repair over 55 broken tiles on our roof. Were able to work same day of quote and stayed until job was done. Would highly recommend.',
      services: 'Roof repair, Roof installation',
    },
    {
      name: 'Alonso Damian',
      location: 'Homeowner',
      rating: 5,
      text: 'Amazing work from Samuel owner at S New Roof!!! Listen to all my needs from the 1st appointment to when he completed my home. Very professional and clean. Will recommend to my friends and family!!',
      services: 'Roof Installation',
    },
    {
      name: 'Mush Bek',
      location: 'Homeowner',
      rating: 5,
      text: 'I couldn\'t be happier with the work S New Roof did on my home. From start to finish, the entire process was smooth and stress-free. The team was professional, punctual, and detail-oriented. They kept me informed every step of the way, worked efficiently, and the finished roof looks fantastic. They also made sure the job site was cleaned up thoroughly once the project was done. It\'s rare to find a company that combines great craftsmanship, clear communication, and professionalism all in one — but S New Roof delivered on all fronts.',
      services: 'Full Roof Replacement',
    },
    {
      name: 'Brian Nguyen',
      location: 'Homeowner',
      rating: 5,
      text: 'Samuel and his team did an amazing job with my roof repair! Fantastic work replacing the damaged wood - everything looks brand new now. Great price and top-quality workmanship. Highly recommend!',
      services: 'Roof Repair',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">{t('reviewsRating')}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('reviewsTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('reviewsSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}
            >
              <Card className="h-full border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>

                  {/* Services Used */}
                  {review.services && (
                    <div className="mb-4 flex flex-wrap gap-1">
                      {review.services.split(', ').map((service, i) => (
                        <span key={i} className="text-xs bg-orange-100 text-[#F97316] px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-[#F97316] font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Review Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-[#F97316]" asChild>
            <a href="#contact">
              <Star className="mr-2 w-5 h-5 text-yellow-500" />
              {t('reviewsLeaveReview')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: t('processStep1'),
      description: t('processStep1Desc'),
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: t('processStep2'),
      description: t('processStep2Desc'),
    },
    {
      number: '03',
      icon: Hammer,
      title: t('processStep3'),
      description: t('processStep3Desc'),
    },
    {
      number: '04',
      icon: Heart,
      title: t('processStep4'),
      description: t('processStep4Desc'),
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('processTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('processSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F97316] to-orange-200" />
              )}

              <div className="text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-[#F97316]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faqQ1'),
      answer: t('faqA1'),
    },
    {
      question: t('faqQ2'),
      answer: t('faqA2'),
    },
    {
      question: t('faqQ3'),
      answer: t('faqA3'),
    },
    {
      question: t('faqQ4'),
      answer: t('faqA4'),
    },
    {
      question: t('faqQ5'),
      answer: t('faqA5'),
    },
    {
      question: t('faqQ6'),
      answer: t('faqA6'),
    },
    {
      question: t('faqQ7'),
      answer: t('faqA7'),
    },
    {
      question: t('faqQ8'),
      answer: t('faqA8'),
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('faqBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('faqTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className={`border transition-all duration-300 ${openIndex === index ? 'border-[#F97316] shadow-lg' : 'border-gray-200 hover:border-orange-200'}`}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#F97316] transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 mb-4">{t('faqStill')}</p>
          <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
            <a href="#contact-form">
              <HelpCircle className="mr-2 w-4 h-4" />
              {t('faqAskExperts')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Warranty Section
function WarrantySection() {
  const { t } = useLanguage();
  
  const warranties = [
    {
      icon: Shield,
      title: t('warrantyWorkmanship'),
      description: t('warrantyWorkmanshipDesc'),
      highlight: t('warrantyWorkmanshipHighlight'),
    },
    {
      icon: BadgeCheck,
      title: t('warrantyManufacturer'),
      description: t('warrantyManufacturerDesc'),
      highlight: t('warrantyManufacturerHighlight'),
    },
    {
      icon: Award,
      title: t('warrantySatisfaction'),
      description: t('warrantySatisfactionDesc'),
      highlight: t('warrantySatisfactionHighlight'),
    },
    {
      icon: ThumbsUp,
      title: t('warrantyLeak'),
      description: t('warrantyLeakDesc'),
      highlight: t('warrantyLeakHighlight'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('warrantyBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('warrantyTitle')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('warrantySubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {warranties.map((warranty, index) => (
            <motion.div
              key={warranty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F97316] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <warranty.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold mb-3">
                    {warranty.highlight}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {warranty.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {warranty.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-[#F97316] to-[#EA580C] border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-white">
                <BadgeDollarSign className="w-10 h-10" />
                <div className="text-left">
                  <p className="font-heading text-xl font-bold">{t('warrantyDetails')}</p>
                  <p className="text-white/80 text-sm">{t('warrantyDetailsDesc')}</p>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#F97316] shrink-0" asChild>
                  <a href="#contact-form">{t('warrantyRequest')}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Insurance Claims Section
function InsuranceSection() {
  const { t } = useLanguage();
  
  const steps = [
    {
      step: '1',
      title: t('insuranceStep1'),
      description: t('insuranceStep1Desc'),
    },
    {
      step: '2',
      title: t('insuranceStep2'),
      description: t('insuranceStep2Desc'),
    },
    {
      step: '3',
      title: t('insuranceStep3'),
      description: t('insuranceStep3Desc'),
    },
    {
      step: '4',
      title: t('insuranceStep4'),
      description: t('insuranceStep4Desc'),
    },
  ];

  return (
    <section id="insurance" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
              {t('insuranceBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('insuranceTitle')}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {t('insuranceSubtitle')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{t('insuranceCarriers')}</p>
                  <p className="text-gray-600 text-sm">{t('insuranceCarriersDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{t('insuranceNoCost')}</p>
                  <p className="text-gray-600 text-sm">{t('insuranceNoCostDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{t('insurancePaperwork')}</p>
                  <p className="text-gray-600 text-sm">{t('insurancePaperworkDesc')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white" asChild>
                <a href="#contact-form">
                  <Umbrella className="mr-2 w-5 h-5" />
                  {t('insuranceStart')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300" asChild>
                <a href="tel:+17147704756">
                  <Phone className="mr-2 w-5 h-5" />
                  {t('insuranceCallNow')}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-[#F97316]" />
                  {t('insuranceProcess')}
                </h3>
                <div className="space-y-6">
                  {steps.map((item, index) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-orange-200" />
                        )}
                      </div>
                      <div className="pt-2">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Special Offers Section
function SpecialOffersSection() {
  const { t } = useLanguage();
  
  const offers = [
    {
      icon: Gift,
      title: t('offerFreeInspection'),
      value: t('offerFreeInspectionValue'),
      description: t('offerFreeInspectionDesc'),
      code: 'INSPECT2024',
    },
    {
      icon: Percent,
      title: t('offer10Off'),
      value: t('offer10OffValue'),
      description: t('offer10OffDesc'),
      code: 'NEWROOF10',
    },
    {
      icon: Sparkles,
      title: t('offerGutter'),
      value: t('offerGutterValue'),
      description: t('offerGutterDesc'),
      code: 'GUTTER24',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#F97316] to-[#EA580C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
            {t('offersBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('offersTitle')}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {t('offersSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <offer.icon className="w-7 h-7 text-[#F97316]" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-3">
                    {offer.value}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {offer.description}
                  </p>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">{t('offerCode')}</p>
                    <p className="font-mono font-bold text-[#F97316]">{offer.code}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-white/80 text-sm mb-4">
            {t('offersDisclaimer')}
          </p>
          <Button size="lg" className="bg-white text-[#F97316] hover:bg-gray-100" asChild>
            <a href="#contact-form">
              {t('offersClaim')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Video Testimonials Section
function VideoTestimonialsSection() {
  const { t } = useLanguage();
  
  const videos = [
    { name: 'Sarah M.', location: 'Santa Ana', quote: t('videoQuote1') },
    { name: 'Robert J.', location: 'Anaheim', quote: t('videoQuote2') },
    { name: 'Maria L.', location: 'Irvine', quote: t('videoQuote3') },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('videoBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('videoTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('videoSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Video Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <button className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                  <div className="p-5">
                    <Quote className="w-8 h-8 text-orange-200 mb-2" />
                    <p className="text-gray-700 italic mb-4">&ldquo;{video.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-[#F97316] font-bold text-sm">
                          {video.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{video.name}</p>
                        <p className="text-sm text-gray-500">{video.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Roofing Types Section
function RoofingTypesSection() {
  const { t } = useLanguage();
  
  const types = [
    {
      title: t('roofingAsphalt'),
      description: t('roofingAsphaltDesc'),
      features: [t('roofingAsphaltF1'), t('roofingAsphaltF2'), t('roofingAsphaltF3')],
      image: '/hero-bg.png',
    },
    {
      title: t('roofingClay'),
      description: t('roofingClayDesc'),
      features: [t('roofingClayF1'), t('roofingClayF2'), t('roofingClayF3')],
      image: '/hero-bg.png',
    },
    {
      title: t('roofingMetal'),
      description: t('roofingMetalDesc'),
      features: [t('roofingMetalF1'), t('roofingMetalF2'), t('roofingMetalF3')],
      image: '/hero-bg.png',
    },
    {
      title: t('roofingFlat'),
      description: t('roofingFlatDesc'),
      features: [t('roofingFlatF1'), t('roofingFlatF2'), t('roofingFlatF3')],
      image: '/hero-bg.png',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#F97316] rounded-full text-sm font-semibold mb-4">
            {t('roofingBadge')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('roofingTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('roofingSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 font-heading text-lg font-bold text-white">
                      {type.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F97316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-[#F97316] hover:bg-gray-100 text-lg px-8 py-6"
              asChild
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                {t('ctaButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <a
            href="tel:+17147704756"
            className="inline-flex items-center gap-3 text-white hover:text-white/90 transition-colors"
          >
            <Phone className="w-8 h-8" />
            <span className="font-heading text-3xl sm:text-4xl font-bold">(714) 770-4756</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Lead Capture Form
function LeadCaptureForm() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Redirect to Go High Level booking page
    window.open('https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof', '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact-form" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('formTitle')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              {t('formSubtitle')}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('formFullName')}</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
                required
                className="h-12 text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('formPhone')}</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  required
                  className="h-12 text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('formEmail')}</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="h-12 text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('formHowCanWeHelp')}</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('formPlaceholder')}
                rows={4}
                className="resize-none text-base"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-12 sm:h-14 text-base sm:text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  {t('formSubmitting')}
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="mr-2 w-5 h-5" />
                  {t('formSubmitted')}
                </>
              ) : (
                <>
                  {t('formGetFreeInspection')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-[#1877F2]',
      followers: '2.3K'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]',
      followers: '1.8K'
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/@snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:bg-[#FF0000]',
      followers: '850'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-[#0A66C2]',
      followers: '500+'
    },
    { 
      name: 'Yelp', 
      href: 'https://www.yelp.com/biz/s-new-roof-santa-ana',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.2 1.2 0 011.6-.31l.04.025a4.8 4.8 0 011.626 4.79zm-5.96 4.166l4.95 1.59a1.2 1.2 0 01.62 1.726 4.8 4.8 0 01-4.194 2.418l-.048-.004a1.2 1.2 0 01-.97-1.62l1.642-4.11zm-2.092-6.166a1.2 1.2 0 01-1.2 1.2H6.6a1.2 1.2 0 01-1.2-1.2V6.6a1.2 1.2 0 011.2-1.2h4.308a1.2 1.2 0 011.2 1.2v3.994zm-1.2 7.596a1.2 1.2 0 011.2 1.2v4.308a1.2 1.2 0 01-1.2 1.2H6.6a1.2 1.2 0 01-1.2-1.2v-4.308a1.2 1.2 0 011.2-1.2h4.308zm-5.666-2.196a1.2 1.2 0 01-.48 1.628l-3.738 2.158a1.2 1.2 0 01-1.628-.48l-.024-.04a4.8 4.8 0 011.848-4.794 1.2 1.2 0 011.628.48l2.394 2.048zm5.666-3.804H7.8v-2.4h2.784v2.4z"/>
        </svg>
      ),
      color: 'hover:bg-[#D32323]',
      followers: '120'
    },
    { 
      name: 'Google', 
      href: 'https://www.google.com/maps/place/S+NEW+ROOF',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      color: 'hover:bg-[#4285F4]',
      followers: '285'
    },
    { 
      name: 'TikTok', 
      href: 'https://www.tiktok.com/@snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      color: 'hover:bg-black',
      followers: '1.2K'
    },
    { 
      name: 'Nextdoor', 
      href: 'https://nextdoor.com/pages/s-new-roof-santa-ana-ca/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-4h2v4zm0-6h-6v-2h6v2z"/>
        </svg>
      ),
      color: 'hover:bg-[#8ED500]',
      followers: 'Neighbors'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg shadow-sm p-2">
                <img 
                  src="https://i.ibb.co/FbssB2VW/Untitled-design.png" 
                  alt="S NEW ROOF Logo" 
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footerDescription')}
            </p>
            
            {/* Social Media Links - Improved Visual */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{t('footerFollowUs')}</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-9 h-9 sm:w-11 sm:h-11 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <span className="w-4 h-4 sm:w-5 sm:h-5">{social.icon}</span>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {social.followers}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* License & Certifications */}
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F97316]" />
                CA CSLB #999999 | Licensed & Insured
              </p>
              <p className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F97316]" />
                BBB A+ Accredited Business
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#F97316]" />
                GAF Master Elite Contractor
              </p>
            </div>
          </div>

          {/* Contact Info */}
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
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Santa Ana, Orange County, CA
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">{t('footerServices')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/roof-repair" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceRepair')}
                </a>
              </li>
              <li>
                <a href="/services/roof-replacement" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceReplacement')}
                </a>
              </li>
              <li>
                <a href="/services/emergency-leak-repair" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceEmergency')}
                </a>
              </li>
              <li>
                <a href="/services/storm-damage-repair" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceStorm')}
                </a>
              </li>
              <li>
                <a href="/services/tile-roofing" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceTile')}
                </a>
              </li>
              <li>
                <a href="/services/shingle-roofing" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  {t('serviceShingle')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <h4 className="font-heading text-lg font-bold mb-4 text-center">{t('footerServiceAreas')}</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <a href="/locations/santa-ana" className="hover:text-[#F97316] transition-colors">Santa Ana</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/anaheim" className="hover:text-[#F97316] transition-colors">Anaheim</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/irvine" className="hover:text-[#F97316] transition-colors">Irvine</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/garden-grove" className="hover:text-[#F97316] transition-colors">Garden Grove</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/fullerton" className="hover:text-[#F97316] transition-colors">Fullerton</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/costa-mesa" className="hover:text-[#F97316] transition-colors">Costa Mesa</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/newport-beach" className="hover:text-[#F97316] transition-colors">Newport Beach</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/huntington-beach" className="hover:text-[#F97316] transition-colors">Huntington Beach</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/tustin" className="hover:text-[#F97316] transition-colors">Tustin</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/orange" className="hover:text-[#F97316] transition-colors">Orange</a>
            <span className="text-gray-600">•</span>
            <a href="/locations/westminster" className="hover:text-[#F97316] transition-colors">Westminster</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} S NEW ROOF Inc. {t('footerRights')}</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-[#F97316] transition-colors">{t('footerPrivacy')}</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-[#F97316] transition-colors">{t('footerTerms')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Chatbot Component
function Chatbot() {
  const { t, language, isSpanish } = useLanguage();
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or update greeting when language changes
  useEffect(() => {
    if (messages.length === 0 || (messages.length === 1 && messages[0].role === 'assistant')) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: t('chatGreeting'),
          timestamp: new Date(),
        },
      ]);
    }
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string) => {
    const actionMessagesEn: Record<string, string> = {
      [t('chatQuickInspection')]: 'Hi! I would like to schedule a FREE roof inspection at my home.',
      [t('chatQuickEmergency')]: 'HELP! I have an emergency roof leak and need immediate assistance!',
      [t('chatQuickQuote')]: 'Hello! I would like to get a free quote for a roofing project.',
    };
    const actionMessagesEs: Record<string, string> = {
      [t('chatQuickInspection')]: '¡Hola! Me gustaría programar una inspección GRATIS de mi techo.',
      [t('chatQuickEmergency')]: '¡AYUDA! Tengo una fuga de emergencia en el techo y necesito asistencia inmediata.',
      [t('chatQuickQuote')]: '¡Hola! Me gustaría obtener una cotización gratis para un proyecto de techado.',
    };
    const actionMessages = isSpanish ? actionMessagesEs : actionMessagesEn;
    handleSendMessage(actionMessages[action] || action);
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for context (last 10 messages)
      const conversationHistory = messages.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: text,
          history: conversationHistory,
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || data.message || (isSpanish ? '¡Gracias por su mensaje! Un experto en techos se comunicará con usted pronto.' : 'Thank you for your message! A roofing expert will contact you shortly.'),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: t('chatError'),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick action buttons
  const quickActions = [t('chatQuickInspection'), t('chatQuickEmergency')];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#F97316] hover:bg-[#EA580C] rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-28 sm:right-4 sm:left-auto sm:top-auto z-[60] sm:z-50 sm:w-96 sm:max-w-md bg-white sm:rounded-2xl shadow-2xl overflow-hidden border-0 sm:border sm:border-gray-200 flex flex-col h-full sm:h-auto max-h-full sm:max-h-[calc(100vh-120px)]"
          >
            {/* Header */}
            <div className="bg-[#F97316] p-3 sm:p-4 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <HomeIcon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm sm:text-base">{t('chatAssistantTitle')}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{t('chatAssistantStatus')}</p>
                  </div>
                </div>
                {/* Mobile close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden w-9 h-9 flex items-center justify-center text-white/80 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 min-h-0 sm:min-h-[280px] sm:h-72 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                      message.role === 'user'
                        ? 'bg-[#F97316] text-white rounded-br-md'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-3 sm:px-4 pb-2 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-1.5 sm:py-2 bg-orange-50 hover:bg-orange-100 text-[#F97316] rounded-full text-xs sm:text-sm font-medium transition-colors min-h-[36px] sm:min-h-[40px]"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-100 bg-white shrink-0">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatPlaceholder')}
                  className="flex-1 text-base h-11 sm:h-10"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white shrink-0 w-11 h-11 sm:w-10 sm:h-10"
                  size="icon"
                >
                  <Send className="w-5 h-5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Exit Intent Popup
function ExitPopup() {
  const { t } = useLanguage();
  
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-center">
            {t('exitTitle')}
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {t('exitDesc')}
          </DialogDescription>
        </DialogHeader>
        <div className="text-center py-4">
          <p className="text-gray-600 mb-4">
            {t('exitDetail')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-[#F97316] hover:bg-[#EA580C] text-white"
              onClick={() => {
                setShowPopup(false);
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('exitButton')}
            </Button>
            <Button variant="outline" onClick={() => setShowPopup(false)}>
              {t('exitNoThanks')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Back Navigation Menu
function BackNavigationMenu() {
  const { t } = useLanguage();
  
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { label: t('navTop'), href: '#', icon: ChevronUp },
    { label: t('navServices'), href: '#services', icon: Wrench },
    { label: t('navAreas'), href: '#areas', icon: MapPin },
    { label: t('navReviews'), href: '#reviews', icon: Star },
    { label: t('navContact'), href: '#contact-form', icon: Phone },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 hidden sm:block"
        >
          {/* Quick Links Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-14 left-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden mb-2"
              >
                <div className="p-2">
                  <p className="text-xs text-gray-500 px-3 py-1 font-medium">{t('navQuickNavigation')}</p>
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        if (link.label === t('navTop')) {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-orange-50 rounded-lg transition-colors group min-h-[44px]"
                    >
                      <link.icon className="w-4 h-4 text-gray-400 group-hover:text-[#F97316] transition-colors" />
                      <span className="text-sm text-gray-700 group-hover:text-[#F97316] font-medium transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
            className="w-12 h-12 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Navigation menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>

          {/* Back to Top Button (separate) */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="absolute -top-14 left-0 w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Floating Social Sidebar
function FloatingSocialBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bg: 'bg-[#1877F2]',
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/@snewroof',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      bg: 'bg-[#FF0000]',
    },
    { 
      name: 'Call Us', 
      href: 'tel:+17147704756',
      icon: <Phone className="w-5 h-5" />,
      bg: 'bg-[#F97316]',
    },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('tel:') ? undefined : '_blank'}
              rel={social.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative w-12 h-12 ${social.bg} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
              aria-label={social.name}
            >
              {social.icon}
              <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <EmergencyBanner />
      <TrustSignalsSection />
      <StatsSection />
      <RecommendationsSection />
      <SpecialOffersSection />
      <ServicesSection />
      <RoofingTypesSection />
      <WhyChooseUsSection />
      <LocalTrustSection />
      <AreasSection />
      <InsuranceSection />
      <GallerySection />
      <VideoTestimonialsSection />
      <SocialProofSection />
      <WarrantySection />
      <CertificationsSection />
      <ProcessSection />
      <FinancingSection />
      <FAQSection />
      <CTASection />
      <LeadCaptureForm />
      <Footer />
      <Chatbot />
      <ExitPopup />
      <BackNavigationMenu />
      <FloatingSocialBar />
    </main>
  );
}
