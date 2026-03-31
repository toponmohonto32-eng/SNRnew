'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  ChevronDown,
  Star,
  MapPin,
  Calendar,
  Wrench,
  Home,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/context';
import { RoofingType } from '@/lib/roofing-types';

interface Props {
  roofingType: RoofingType;
  otherTypes: RoofingType[];
}

export default function RoofingTypeClient({ roofingType, otherTypes }: Props) {
  const { isSpanish } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getText = (en: string, es: string) => (isSpanish ? es : en);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={roofingType.image}
            alt={getText(roofingType.name, roofingType.nameEs)}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-1.5 bg-[#F97316] text-white rounded-full text-sm font-semibold">
                  {getText('Roofing Type', 'Tipo de Techo')}
                </span>
                <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  {roofingType.lifespan}
                </span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {getText(roofingType.name, roofingType.nameEs)}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {getText(roofingType.description, roofingType.descriptionEs)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white h-14 px-8 text-lg"
                  asChild
                >
                  <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 w-5 h-5" />
                    {getText('Get Free Estimate', 'Obtener Cotización Gratis')}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 h-14 px-8 text-lg"
                  asChild
                >
                  <a href="tel:+17147704756">
                    <Phone className="mr-2 w-5 h-5" />
                    (714) 770-4756
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={roofingType.image}
                  alt={getText(roofingType.name, roofingType.nameEs)}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-[#F97316]">{roofingType.lifespan.split(' ')[0]}</p>
                      <p className="text-xs text-gray-600">{getText('Year Warranty', 'Años Garantía')}</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-[#F97316]">24/7</p>
                      <p className="text-xs text-gray-600">{getText('Support', 'Soporte')}</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-[#F97316]">100%</p>
                      <p className="text-xs text-gray-600">{getText('Satisfaction', 'Satisfacción')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText('Key Features & Benefits', 'Características y Beneficios')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {getText('Why choose this roofing type for your home', 'Por qué elegir este tipo de techo para su hogar')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <Card className="border border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                  {getText('Features', 'Características')}
                </h3>
                <ul className="space-y-3">
                  {(isSpanish ? roofingType.featuresEs : roofingType.features).map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F97316]" />
                  {getText('Benefits', 'Beneficios')}
                </h3>
                <ul className="space-y-3">
                  {(isSpanish ? roofingType.benefitsEs : roofingType.benefits).map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText('Material Options', 'Opciones de Materiales')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {getText('Choose from a variety of materials to match your style and budget', 'Elija entre una variedad de materiales para adaptarse a su estilo y presupuesto')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingType.materials.map((material, i) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-gray-200 hover:border-[#F97316]/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Home className="w-7 h-7 text-[#F97316]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {getText(material.name, material.nameEs)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {getText(material.description, material.descriptionEs)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText('Our Installation Process', 'Nuestro Proceso de Instalación')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {getText('Professional installation from start to finish', 'Instalación profesional de principio a fin')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-[#F97316] to-orange-200" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {roofingType.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border border-gray-100 hover:shadow-lg transition-all text-center">
                    <CardContent className="p-6">
                      <div className="relative inline-block mb-4">
                        <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto relative z-10">
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                        {getText(step.title, step.titleEs)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {getText(step.description, step.descriptionEs)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6 text-center">
              {getText(`About ${roofingType.name}`, `Sobre ${roofingType.nameEs}`)}
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {getText(roofingType.longDescription, roofingType.longDescriptionEs)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText('Frequently Asked Questions', 'Preguntas Frecuentes')}
            </h2>
            <p className="text-gray-600 text-lg">
              {getText('Common questions about this roofing type', 'Preguntas comunes sobre este tipo de techo')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {roofingType.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className={`border transition-all ${openFaq === i ? 'border-[#F97316]' : 'border-gray-200'}`}>
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {getText(faq.question, faq.questionEs)}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[#F97316] transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">
                            {getText(faq.answer, faq.answerEs)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F97316] to-[#EA580C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              {getText(`Ready for a New ${roofingType.name}?`, `¿Listo para un Nuevo ${roofingType.nameEs}?`)}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {getText('Get a free estimate today and let our experts install your new roof with confidence.', 'Obtenga una cotización gratis hoy y deje que nuestros expertos instalen su nuevo techo con confianza.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#F97316] hover:bg-gray-100 h-14 px-8 text-lg font-bold"
                asChild
              >
                <a href="https://api.leadconnectorhq.com/widget/bookings/free-roof-inspection-snewroof" target="_blank" rel="noopener noreferrer">
                  {getText('Get Free Estimate', 'Cotización Gratis')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <a
                href="tel:+17147704756"
                className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-xl font-bold text-gray-900">(714) 770-4756</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Roofing Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getText('Other Roofing Types', 'Otros Tipos de Techos')}
            </h2>
            <p className="text-gray-600 text-lg">
              {getText('Explore our other roofing solutions', 'Explore nuestras otras soluciones de techado')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTypes.map((type, i) => (
              <motion.div
                key={type.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={`/roofing-types/${type.slug}`}>
                  <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={type.image}
                          alt={getText(type.name, type.nameEs)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-3 left-4 font-heading text-lg font-bold text-white">
                          {getText(type.name, type.nameEs)}
                        </h3>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {getText(type.shortDescription, type.shortDescriptionEs)}
                        </p>
                        <span className="inline-flex items-center text-[#F97316] font-medium text-sm">
                          {getText('Learn More', 'Ver Más')}
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
