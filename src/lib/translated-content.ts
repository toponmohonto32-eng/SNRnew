import { Language } from './i18n/translations';

// Service translations
export const serviceTranslations: Record<string, Record<Language, {
  name: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}>> = {
  'roof-repair': {
    en: {
      name: 'Roof Repair',
      shortDescription: 'Fast, reliable roof repairs for leaks, damaged shingles, and flashing issues.',
      description: 'Professional roof repair services in Orange County. We fix leaks, damaged shingles, flashing issues, and more. Same-day service available.',
      longDescription: `When your roof needs repair, you need a contractor you can trust to get the job done right. S NEW ROOF provides comprehensive roof repair services throughout Orange County, addressing everything from minor leaks to significant storm damage.

Our experienced team has seen every type of roof problem imaginable. We start with a thorough inspection to identify not just the obvious damage, but any underlying issues that could cause problems down the road. This comprehensive approach ensures your repair lasts.

We understand that roof problems don't wait for convenient timing. That's why we offer same-day service for urgent repairs. Whether it's a sudden leak during a rainstorm or damage discovered during a home inspection, we're ready to respond quickly.

Our repair services cover all roofing materials including asphalt shingles, tile, metal, and flat roof systems. We use quality materials that match or exceed your existing roof's specifications, ensuring seamless repairs that protect your home for years to come.`,
      features: [
        'Leak detection and repair',
        'Shingle replacement',
        'Flashing repair and replacement',
        'Vent pipe boot replacement',
        'Skylight repair',
        'Chimney flashing repair',
        'Gutter repair',
        'Fascia and soffit repair',
      ],
      benefits: [
        'Prevent further damage to your home',
        'Extend the life of your roof',
        'Protect your family and belongings',
        'Avoid costly emergency repairs',
        "Maintain your home's value",
        'Quick turnaround on most repairs',
      ],
      process: [
        { step: 1, title: 'Inspection', description: 'Thorough roof inspection to identify all damage and underlying issues.' },
        { step: 2, title: 'Assessment', description: 'Detailed explanation of problems found and recommended solutions.' },
        { step: 3, title: 'Repair', description: 'Expert repair using quality materials and proven techniques.' },
        { step: 4, title: 'Verification', description: 'Final inspection to ensure the repair is complete and effective.' },
      ],
      faqs: [
        { question: 'How do I know if my roof needs repair?', answer: 'Signs include water stains on ceilings, missing or damaged shingles, granules in gutters, and visible damage after storms. If you notice any of these, call us for a free inspection.' },
        { question: 'How long does a roof repair take?', answer: "Most repairs are completed in one day. More extensive damage may require additional time, which we'll discuss during the inspection." },
        { question: 'Can you repair my roof in the rain?', answer: 'For emergency situations, we can perform temporary repairs to stop water intrusion. Permanent repairs are best done in dry conditions.' },
        { question: 'Is roof repair covered by insurance?', answer: 'If damage is caused by a covered event like a storm, insurance typically covers repairs. We work with insurance companies and can help with the claims process.' },
      ],
    },
    es: {
      name: 'Reparación de Techos',
      shortDescription: 'Reparaciones rápidas y confiables para fugas, tejas dañadas y problemas de flashing.',
      description: 'Servicios profesionales de reparación de techos en Orange County. Reparamos fugas, tejas dañadas, problemas de flashing y más. Servicio el mismo día disponible.',
      longDescription: `Cuando su techo necesita reparación, necesita un contratista en quien confiar para hacer el trabajo correctamente. S NEW ROOF proporciona servicios integrales de reparación de techos en todo Orange County, abordando todo desde fugas menores hasta daños significativos por tormentas.

Nuestro equipo experimentado ha visto todos los tipos de problemas de techos imaginables. Comenzamos con una inspección completa para identificar no solo el daño obvio, sino cualquier problema subyacente que podría causar problemas en el futuro. Este enfoque integral asegura que su reparación dure.

Entendemos que los problemas del techo no esperan un momento conveniente. Es por eso que ofrecemos servicio el mismo día para reparaciones urgentes. Ya sea una fuga repentina durante una tormenta o daño descubierto durante una inspección de la casa, estamos listos para responder rápidamente.

Nuestros servicios de reparación cubren todos los materiales de techos incluyendo tejas de asfalto, tejas, metal y sistemas de techos planos. Usamos materiales de calidad que igualan o superan las especificaciones de su techo existente, asegurando reparaciones sin problemas que protegen su hogar por años.`,
      features: [
        'Detección y reparación de fugas',
        'Reemplazo de tejas',
        'Reparación y reemplazo de flashing',
        'Reemplazo de botas de tubo de ventilación',
        'Reparación de tragaluces',
        'Reparación de flashing de chimenea',
        'Reparación de canaletas',
        'Reparación de fascia y sofia',
      ],
      benefits: [
        'Prevenir más daños a su hogar',
        'Extender la vida de su techo',
        'Proteger a su familia y pertenencias',
        'Evitar reparaciones de emergencia costosas',
        'Mantener el valor de su hogar',
        'Rápida respuesta en la mayoría de reparaciones',
      ],
      process: [
        { step: 1, title: 'Inspección', description: 'Inspección completa del techo para identificar todo el daño y problemas subyacentes.' },
        { step: 2, title: 'Evaluación', description: 'Explicación detallada de los problemas encontrados y soluciones recomendadas.' },
        { step: 3, title: 'Reparación', description: 'Reparación experta usando materiales de calidad y técnicas probadas.' },
        { step: 4, title: 'Verificación', description: 'Inspección final para asegurar que la reparación esté completa y efectiva.' },
      ],
      faqs: [
        { question: '¿Cómo sé si mi techo necesita reparación?', answer: 'Las señales incluyen manchas de agua en techos, tejas faltantes o dañadas, gránulos en canaletas y daño visible después de tormentas. Si nota alguna de estas, llámenos para una inspección gratis.' },
        { question: '¿Cuánto tiempo toma una reparación de techo?', answer: 'La mayoría de las reparaciones se completan en un día. Daños más extensos pueden requerir tiempo adicional, que discutiremos durante la inspección.' },
        { question: '¿Pueden reparar mi techo bajo la lluvia?', answer: 'Para situaciones de emergencia, podemos realizar reparaciones temporales para detener la intrusión de agua. Las reparaciones permanentes se hacen mejor en condiciones secas.' },
        { question: '¿La reparación del techo está cubierta por el seguro?', answer: 'Si el daño es causado por un evento cubierto como una tormenta, el seguro típicamente cubre las reparaciones. Trabajamos con compañías de seguros y podemos ayudar con el proceso de reclamos.' },
      ],
    },
  },
  'roof-replacement': {
    en: {
      name: 'Roof Replacement',
      shortDescription: 'Complete roof replacement with premium materials and expert installation.',
      description: 'Full roof replacement services using premium materials. Expert installation with warranties. Free estimates for homeowners in Orange County.',
      longDescription: `When repairs are no longer cost-effective, a complete roof replacement from S NEW ROOF is the smart choice for protecting your home. We specialize in full roof replacements that add value, beauty, and long-lasting protection to your property.

Our replacement process begins with a thorough assessment of your current roof and a discussion of your goals, budget, and preferences. We help you choose the right materials for your home's style, climate considerations, and long-term performance expectations.

We work with top manufacturers to offer a wide selection of roofing materials, from traditional asphalt shingles to premium tile and metal systems. Every installation is performed by our experienced crew following manufacturer specifications and local building codes.

A new roof is a significant investment, and we treat it that way. Our installations include proper underlayment, ventilation, and flashing details that ensure your new roof performs optimally for decades. We stand behind our work with comprehensive warranties on both materials and labor.`,
      features: [
        'Asphalt shingle replacement',
        'Tile roof installation',
        'Metal roofing systems',
        'Flat roof replacement',
        'Cool roof options',
        'Solar-ready installation',
        'Energy-efficient materials',
        'Premium underlayment systems',
      ],
      benefits: [
        "Increase your home's value",
        'Improve energy efficiency',
        'Enhance curb appeal',
        'Eliminate recurring repair costs',
        'Get manufacturer warranties',
        'Peace of mind for 20-50 years',
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Free in-home consultation to assess your needs and discuss options.' },
        { step: 2, title: 'Proposal', description: 'Detailed written proposal with material options and transparent pricing.' },
        { step: 3, title: 'Preparation', description: 'Permits obtained, materials ordered, and project scheduled.' },
        { step: 4, title: 'Installation', description: 'Expert installation with daily cleanup and progress updates.' },
        { step: 5, title: 'Completion', description: 'Final inspection, warranty registration, and customer satisfaction sign-off.' },
      ],
      faqs: [
        { question: 'How do I know if I need a roof replacement?', answer: "Signs include age over 20 years, multiple leaks, extensive granule loss, curling or missing shingles, and sagging. We'll provide an honest assessment during your free inspection." },
        { question: 'How long does a roof replacement take?', answer: "Most residential roof replacements are completed in 1-3 days, depending on size and complexity. We'll provide a specific timeline during your consultation." },
        { question: 'What materials do you recommend?', answer: "We recommend materials based on your home's style, budget, and performance needs. Options include asphalt shingles, tile, and metal—all available in various styles and price points." },
        { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options to make your new roof affordable. Ask about our current financing promotions during your consultation.' },
      ],
    },
    es: {
      name: 'Reemplazo de Techos',
      shortDescription: 'Reemplazo completo de techo con materiales premium e instalación experta.',
      description: 'Servicios completos de reemplazo de techo usando materiales premium. Instalación experta con garantías. Estimaciones gratis para propietarios en Orange County.',
      longDescription: `Cuando las reparaciones ya no son rentables, un reemplazo completo de techo de S NEW ROOF es la elección inteligente para proteger su hogar. Nos especializamos en reemplazos completos de techos que agregan valor, belleza y protección duradera a su propiedad.

Nuestro proceso de reemplazo comienza con una evaluación completa de su techo actual y una discusión de sus objetivos, presupuesto y preferencias. Le ayudamos a elegir los materiales correctos para el estilo de su hogar, consideraciones climáticas y expectativas de rendimiento a largo plazo.

Trabajamos con los mejores fabricantes para ofrecer una amplia selección de materiales de techos, desde tejas de asfalto tradicionales hasta sistemas premium de tejas y metal. Cada instalación es realizada por nuestro equipo experimentado siguiendo las especificaciones del fabricante y los códigos de construcción locales.

Un nuevo techo es una inversión significativa, y lo tratamos así. Nuestras instalaciones incluyen subcapa adecuada, ventilación y detalles de flashing que aseguran que su nuevo techo funcione óptimamente por décadas. Respaldamos nuestro trabajo con garantías completas tanto en materiales como en mano de obra.`,
      features: [
        'Reemplazo de tejas de asfalto',
        'Instalación de techos de tejas',
        'Sistemas de techos metálicos',
        'Reemplazo de techos planos',
        'Opciones de techos frescos',
        'Instalación lista para solar',
        'Materiales eficientes en energía',
        'Sistemas de subcapa premium',
      ],
      benefits: [
        'Aumentar el valor de su hogar',
        'Mejorar la eficiencia energética',
        'Mejorar el atractivo visual',
        'Eliminar costos de reparación recurrentes',
        'Obtener garantías del fabricante',
        'Tranquilidad por 20-50 años',
      ],
      process: [
        { step: 1, title: 'Consulta', description: 'Consulta gratuita en su hogar para evaluar sus necesidades y discutir opciones.' },
        { step: 2, title: 'Propuesta', description: 'Propuesta escrita detallada con opciones de materiales y precios transparentes.' },
        { step: 3, title: 'Preparación', description: 'Permisos obtenidos, materiales pedidos y proyecto programado.' },
        { step: 4, title: 'Instalación', description: 'Instalación experta con limpieza diaria y actualizaciones de progreso.' },
        { step: 5, title: 'Finalización', description: 'Inspección final, registro de garantía y firma de satisfacción del cliente.' },
      ],
      faqs: [
        { question: '¿Cómo sé si necesito un reemplazo de techo?', answer: 'Las señales incluyen edad mayor a 20 años, múltiples fugas, pérdida extensa de gránulos, tejas rizadas o faltantes y hundimiento. Proporcionaremos una evaluación honesta durante su inspección gratis.' },
        { question: '¿Cuánto tiempo toma un reemplazo de techo?', answer: 'La mayoría de los reemplazos de techos residenciales se completan en 1-3 días, dependiendo del tamaño y complejidad. Proporcionaremos un cronograma específico durante su consulta.' },
        { question: '¿Qué materiales recomiendan?', answer: 'Recomendamos materiales basados en el estilo de su hogar, presupuesto y necesidades de rendimiento. Las opciones incluyen tejas de asfalto, tejas y metal, todos disponibles en varios estilos y puntos de precio.' },
        { question: '¿Ofrecen financiamiento?', answer: 'Sí, ofrecemos opciones de financiamiento flexibles para hacer su nuevo techo asequible. Pregunte sobre nuestras promociones de financiamiento actuales durante su consulta.' },
      ],
    },
  },
  'emergency-leak-repair': {
    en: {
      name: 'Emergency Leak Repair',
      shortDescription: '24/7 emergency roof leak repair services. Fast response when you need it most.',
      description: 'Emergency roof leak repair available 24/7 in Orange County. Fast response times, temporary and permanent solutions. Call now for immediate help.',
      longDescription: `Roof emergencies don't wait for business hours, and neither do we. S NEW ROOF offers 24/7 emergency leak repair services to protect your home when disaster strikes. Our emergency response team is ready to deploy quickly to minimize damage to your property.

Water intrusion can cause significant damage in a short time. That's why we prioritize emergency calls and aim to have a technician at your property within hours, not days. We arrive prepared to handle most emergency situations immediately.

Our emergency services begin with stopping the water intrusion. This may involve temporary measures like tarping or temporary patches until permanent repairs can be made. We'll document the damage and provide a clear plan for permanent repairs.

Whether it's a sudden storm, fallen tree limb, or unexpected roof failure, you can count on S NEW ROOF to respond quickly and professionally. We'll protect your home and guide you through the repair process.`,
      features: [
        '24/7 emergency response',
        'Temporary tarping services',
        'Emergency leak sealing',
        'Storm damage mitigation',
        'Water extraction guidance',
        'Insurance documentation',
        'Fast permanent repairs',
        'Same-day service available',
      ],
      benefits: [
        'Minimize water damage',
        'Protect your belongings',
        'Prevent mold growth',
        'Fast professional response',
        'Peace of mind during crisis',
        'Insurance claim support',
      ],
      process: [
        { step: 1, title: 'Call Us', description: 'Call our 24/7 emergency line for immediate assistance.' },
        { step: 2, title: 'Response', description: 'Our emergency team is dispatched to your location.' },
        { step: 3, title: 'Assessment', description: 'We identify the source of the leak and assess damage.' },
        { step: 4, title: 'Mitigation', description: 'Immediate steps taken to stop water intrusion.' },
        { step: 5, title: 'Documentation', description: 'Detailed documentation for insurance purposes.' },
        { step: 6, title: 'Repair', description: 'Permanent repair scheduled at your convenience.' },
      ],
      faqs: [
        { question: 'What qualifies as a roof emergency?', answer: 'Active water intrusion, significant storm damage, fallen trees, or any situation where your home is at risk of further damage qualifies as an emergency.' },
        { question: 'How quickly can you respond?', answer: 'We aim to have a technician at your property within 2-4 hours for emergencies, often sooner depending on your location and time of day.' },
        { question: 'What should I do while waiting?', answer: 'Move valuables away from the water, place buckets to catch drips, and avoid electrical fixtures near water intrusion. Document the damage with photos if safe to do so.' },
        { question: 'Is emergency service more expensive?', answer: 'Emergency service rates may apply for after-hours calls, but we always provide transparent pricing before any work begins. Stopping damage quickly often saves money overall.' },
      ],
    },
    es: {
      name: 'Reparación de Fugas de Emergencia',
      shortDescription: 'Servicios de reparación de fugas de emergencia 24/7. Respuesta rápida cuando más lo necesita.',
      description: 'Reparación de fugas de techo de emergencia disponible 24/7 en Orange County. Tiempos de respuesta rápidos, soluciones temporales y permanentes. Llame ahora para ayuda inmediata.',
      longDescription: `Las emergencias de techos no esperan horarios de oficina, y nosotros tampoco. S NEW ROOF ofrece servicios de reparación de fugas de emergencia 24/7 para proteger su hogar cuando ocurre un desastre. Nuestro equipo de respuesta de emergencia está listo para desplegarse rápidamente para minimizar daños a su propiedad.

La intrusión de agua puede causar daños significativos en poco tiempo. Es por eso que priorizamos las llamadas de emergencia y apuntamos a tener un técnico en su propiedad dentro de horas, no días. Llegamos preparados para manejar la mayoría de las situaciones de emergencia inmediatamente.

Nuestros servicios de emergencia comienzan deteniendo la intrusión de agua. Esto puede implicar medidas temporales como colocar lonas o parches temporales hasta que se puedan hacer reparaciones permanentes. Documentaremos el daño y proporcionaremos un plan claro para reparaciones permanentes.

Ya sea una tormenta repentina, una rama de árbol caída o una falla inesperada del techo, puede contar con S NEW ROOF para responder rápida y profesionalmente. Protegeremos su hogar y lo guiaremos a través del proceso de reparación.`,
      features: [
        'Respuesta de emergencia 24/7',
        'Servicios de colocación de lonas',
        'Sellado de fugas de emergencia',
        'Mitigación de daños por tormenta',
        'Guía de extracción de agua',
        'Documentación para seguros',
        'Reparaciones permanentes rápidas',
        'Servicio el mismo día disponible',
      ],
      benefits: [
        'Minimizar daños por agua',
        'Proteger sus pertenencias',
        'Prevenir crecimiento de moho',
        'Respuesta profesional rápida',
        'Tranquilidad durante la crisis',
        'Soporte de reclamos de seguro',
      ],
      process: [
        { step: 1, title: 'Llámenos', description: 'Llame a nuestra línea de emergencia 24/7 para asistencia inmediata.' },
        { step: 2, title: 'Respuesta', description: 'Nuestro equipo de emergencia es enviado a su ubicación.' },
        { step: 3, title: 'Evaluación', description: 'Identificamos la fuente de la fuga y evaluamos los daños.' },
        { step: 4, title: 'Mitigación', description: 'Pasos inmediatos tomados para detener la intrusión de agua.' },
        { step: 5, title: 'Documentación', description: 'Documentación detallada para propósitos de seguro.' },
        { step: 6, title: 'Reparación', description: 'Reparación permanente programada a su conveniencia.' },
      ],
      faqs: [
        { question: '¿Qué califica como emergencia de techo?', answer: 'La intrusión activa de agua, daños significativos por tormenta, árboles caídos o cualquier situación donde su hogar esté en riesgo de más daños califica como emergencia.' },
        { question: '¿Qué tan rápido pueden responder?', answer: 'Apuntamos a tener un técnico en su propiedad dentro de 2-4 horas para emergencias, a menudo más rápido dependiendo de su ubicación y hora del día.' },
        { question: '¿Qué debo hacer mientras espero?', answer: 'Mueva objetos de valor lejos del agua, coloque cubos para atrapar goteras y evite accesorios eléctricos cerca de la intrusión de agua. Documente el daño con fotos si es seguro hacerlo.' },
        { question: '¿El servicio de emergencia es más caro?', answer: 'Pueden aplicar tarifas de servicio de emergencia para llamadas fuera de horario, pero siempre proporcionamos precios transparentes antes de comenzar cualquier trabajo. Detener el daño rápidamente a menudo ahorra dinero en general.' },
      ],
    },
  },
  'roof-inspection': {
    en: {
      name: 'Roof Inspection',
      shortDescription: 'Comprehensive roof inspections to identify issues before they become costly problems.',
      description: 'Professional roof inspection services in Orange County. Free estimates, detailed reports, and honest assessments. Protect your investment.',
      longDescription: `Regular roof inspections are essential for maintaining your home's value and preventing costly repairs. S NEW ROOF provides comprehensive roof inspection services that identify problems early and help you plan for your roof's future.

Our thorough inspection process examines every aspect of your roofing system, from the shingles or tiles on top to the ventilation underneath. We check for current damage, potential problem areas, and signs of aging that could indicate future issues.

Every inspection includes a detailed written report with photos documenting our findings. We explain what we see in plain language, recommend any needed repairs or maintenance, and provide an honest assessment of your roof's remaining lifespan.

Whether you're buying or selling a home, filing an insurance claim, or just want peace of mind about your roof's condition, our professional inspections give you the information you need to make informed decisions.`,
      features: [
        'Complete roof system evaluation',
        'Attic ventilation inspection',
        'Flashing and penetration check',
        'Gutter and drainage assessment',
        'Structural integrity review',
        'Photo documentation',
        'Written inspection report',
        'Repair recommendations',
      ],
      benefits: [
        'Identify problems early',
        'Plan for future expenses',
        'Validate roof condition for real estate',
        'Support insurance claims',
        'Maintain warranty compliance',
        'Extend roof lifespan through maintenance',
      ],
      process: [
        { step: 1, title: 'Schedule', description: 'Schedule your inspection online or by phone.' },
        { step: 2, title: 'Exterior Inspection', description: 'Thorough examination of roof surface, flashing, and drainage.' },
        { step: 3, title: 'Interior Inspection', description: 'Attic and interior inspection for proper ventilation and signs of leaks.' },
        { step: 4, title: 'Documentation', description: 'Photos taken and detailed notes compiled.' },
        { step: 5, title: 'Report', description: 'Comprehensive report delivered with findings and recommendations.' },
      ],
      faqs: [
        { question: 'How often should I have my roof inspected?', answer: "We recommend inspections every 1-2 years, plus after any major storm. Regular inspections catch problems early when they're easier and less expensive to fix." },
        { question: 'Is the inspection really free?', answer: "Yes, we offer free roof inspections for homeowners in our service area. There's no obligation and no pressure—just honest information about your roof's condition." },
        { question: 'What if you find problems?', answer: "We'll explain exactly what we found and provide a written estimate for any recommended repairs. You decide what work to have done, if any." },
        { question: 'Do you inspect all types of roofs?', answer: 'Yes, our inspectors are experienced with all roofing materials including shingle, tile, metal, and flat roof systems.' },
      ],
    },
    es: {
      name: 'Inspección de Techos',
      shortDescription: 'Inspecciones completas de techos para identificar problemas antes de que se conviertan en problemas costosos.',
      description: 'Servicios profesionales de inspección de techos en Orange County. Estimaciones gratis, informes detallados y evaluaciones honestas. Proteja su inversión.',
      longDescription: `Las inspecciones regulares de techos son esenciales para mantener el valor de su hogar y prevenir reparaciones costosas. S NEW ROOF proporciona servicios completos de inspección de techos que identifican problemas temprano y le ayudan a planificar el futuro de su techo.

Nuestro proceso de inspección completo examina cada aspecto de su sistema de techos, desde las tejas o losetas arriba hasta la ventilación debajo. Verificamos daños actuales, áreas problemáticas potenciales y señales de envejecimiento que podrían indicar problemas futuros.

Cada inspección incluye un informe escrito detallado con fotos documentando nuestros hallazgos. Explicamos lo que vemos en lenguaje simple, recomendamos cualquier reparación o mantenimiento necesario y proporcionamos una evaluación honesta de la vida útil restante de su techo.

Ya sea que esté comprando o vendiendo una casa, presentando un reclamo de seguro o simplemente quiere tranquilidad sobre la condición de su techo, nuestras inspecciones profesionales le dan la información que necesita para tomar decisiones informadas.`,
      features: [
        'Evaluación completa del sistema de techo',
        'Inspección de ventilación del ático',
        'Verificación de flashing y penetraciones',
        'Evaluación de canaletas y drenaje',
        'Revisión de integridad estructural',
        'Documentación fotográfica',
        'Informe de inspección escrito',
        'Recomendaciones de reparación',
      ],
      benefits: [
        'Identificar problemas temprano',
        'Planificar gastos futuros',
        'Validar condición del techo para bienes raíces',
        'Apoyar reclamos de seguro',
        'Mantener cumplimiento de garantía',
        'Extender vida útil del techo mediante mantenimiento',
      ],
      process: [
        { step: 1, title: 'Programar', description: 'Programe su inspección en línea o por teléfono.' },
        { step: 2, title: 'Inspección Exterior', description: 'Examen completo de la superficie del techo, flashing y drenaje.' },
        { step: 3, title: 'Inspección Interior', description: 'Inspección del ático e interior para ventilación adecuada y señales de fugas.' },
        { step: 4, title: 'Documentación', description: 'Fotos tomadas y notas detalladas recopiladas.' },
        { step: 5, title: 'Informe', description: 'Informe completo entregado con hallazgos y recomendaciones.' },
      ],
      faqs: [
        { question: '¿Con qué frecuencia debo inspeccionar mi techo?', answer: 'Recomendamos inspecciones cada 1-2 años, más después de cualquier tormenta importante. Las inspecciones regulares detectan problemas temprano cuando son más fáciles y menos costosos de reparar.' },
        { question: '¿La inspección es realmente gratis?', answer: 'Sí, ofrecemos inspecciones de techos gratis para propietarios en nuestra área de servicio. No hay obligación ni presión, solo información honesta sobre la condición de su techo.' },
        { question: '¿Qué pasa si encuentran problemas?', answer: 'Explicaremos exactamente lo que encontramos y proporcionaremos un estimado escrito para cualquier reparación recomendada. Usted decide qué trabajo realizar, si alguno.' },
        { question: '¿Inspeccionan todos los tipos de techos?', answer: 'Sí, nuestros inspectores tienen experiencia con todos los materiales de techos incluyendo tejas, losetas, metal y sistemas de techos planos.' },
      ],
    },
  },
  'storm-damage-repair': {
    en: {
      name: 'Storm Damage Repair',
      shortDescription: 'Expert storm damage assessment and repair. We work with your insurance company.',
      description: 'Storm damage roof repair services in Orange County. Insurance claim assistance, fast repairs, and quality workmanship. Available 24/7.',
      longDescription: `Southern California may have great weather most of the year, but when storms hit, they can cause serious damage to your roof. S NEW ROOF specializes in storm damage repair, helping homeowners restore their roofs quickly and navigate the insurance claims process with confidence.

Storm damage can take many forms: wind-lifted or missing shingles, hail damage, fallen branches, and water intrusion from driving rain. Our team is trained to identify all types of storm damage, including damage that might not be visible from the ground.

We work directly with insurance companies on your behalf. Our experience with the claims process helps ensure you receive fair compensation for the damage. We document everything thoroughly and provide the detailed estimates and reports that insurance adjusters need.

Timing is important with storm damage. Many insurance policies have deadlines for filing claims, and damage left unaddressed can lead to further problems. Contact us quickly after a storm, and we'll help you assess the situation and take appropriate action.`,
      features: [
        'Wind damage repair',
        'Hail damage assessment',
        'Fallen debris removal',
        'Water damage restoration',
        'Emergency tarping',
        'Insurance claim assistance',
        'Adjuster meeting support',
        'Complete documentation',
      ],
      benefits: [
        'Fast response after storms',
        'Maximize insurance claim',
        'Prevent further damage',
        'Professional documentation',
        'Quality permanent repairs',
        'Reduce stress during claims process',
      ],
      process: [
        { step: 1, title: 'Contact', description: 'Call us immediately after discovering storm damage.' },
        { step: 2, title: 'Emergency Service', description: 'If needed, we provide emergency tarping to prevent further damage.' },
        { step: 3, title: 'Inspection', description: 'Comprehensive damage inspection and documentation.' },
        { step: 4, title: 'Insurance', description: 'We help file your claim and meet with the adjuster.' },
        { step: 5, title: 'Repair', description: 'Quality repairs completed to restore your roof.' },
        { step: 6, title: 'Finalization', description: 'Final documentation and warranty on repairs.' },
      ],
      faqs: [
        { question: 'Should I call my insurance company or you first?', answer: "Call us first for an inspection. We'll document the damage and help you determine if filing a claim makes sense. We can then support you through the claims process." },
        { question: 'Will my insurance rates go up if I file a claim?', answer: "Storm damage claims are typically considered \"acts of God\" and shouldn't raise your rates. However, we recommend checking with your insurance provider about your specific policy." },
        { question: 'How long do I have to file a claim?', answer: 'Time limits vary by policy and insurance company. Most policies require claims to be filed within 60-180 days. Contact us quickly to ensure you meet all deadlines.' },
        { question: 'Can you work with my insurance adjuster?', answer: 'Yes, we regularly meet with insurance adjusters to ensure all damage is properly documented and included in the claim. We advocate for you throughout the process.' },
      ],
    },
    es: {
      name: 'Reparación de Daños por Tormenta',
      shortDescription: 'Evaluación y reparación experta de daños por tormenta. Trabajamos con su compañía de seguros.',
      description: 'Servicios de reparación de techos por daños de tormenta en Orange County. Asistencia con reclamos de seguro, reparaciones rápidas y calidad de trabajo. Disponible 24/7.',
      longDescription: `El sur de California puede tener buen clima la mayor parte del año, pero cuando llegan las tormentas, pueden causar daños graves a su techo. S NEW ROOF se especializa en reparación de daños por tormenta, ayudando a los propietarios a restaurar sus techos rápidamente y navegar el proceso de reclamos de seguro con confianza.

Los daños por tormenta pueden tomar muchas formas: tejas levantadas por el viento o faltantes, daños por granizo, ramas caídas e intrusión de agua por lluvia fuerte. Nuestro equipo está entrenado para identificar todos los tipos de daños por tormenta, incluyendo daños que podrían no ser visibles desde el suelo.

Trabajamos directamente con compañías de seguros en su nombre. Nuestra experiencia con el proceso de reclamos ayuda a asegurar que reciba compensación justa por los daños. Documentamos todo completamente y proporcionamos los estimados e informes detallados que los ajustadores de seguros necesitan.

El tiempo es importante con los daños por tormenta. Muchas pólizas de seguro tienen fechas límite para presentar reclamos, y los daños no atendidos pueden llevar a más problemas. Contáctenos rápidamente después de una tormenta, y le ayudaremos a evaluar la situación y tomar las medidas apropiadas.`,
      features: [
        'Reparación de daños por viento',
        'Evaluación de daños por granizo',
        'Remoción de escombros caídos',
        'Restauración de daños por agua',
        'Colocación de lonas de emergencia',
        'Asistencia con reclamos de seguro',
        'Soporte en reuniones con ajustadores',
        'Documentación completa',
      ],
      benefits: [
        'Respuesta rápida después de tormentas',
        'Maximizar reclamo de seguro',
        'Prevenir más daños',
        'Documentación profesional',
        'Reparaciones permanentes de calidad',
        'Reducir estrés durante el proceso de reclamos',
      ],
      process: [
        { step: 1, title: 'Contacto', description: 'Llámenos inmediatamente después de descubrir daños por tormenta.' },
        { step: 2, title: 'Servicio de Emergencia', description: 'Si es necesario, proporcionamos colocación de lonas de emergencia para prevenir más daños.' },
        { step: 3, title: 'Inspección', description: 'Inspección y documentación completa de daños.' },
        { step: 4, title: 'Seguro', description: 'Ayudamos a presentar su reclamo y nos reunimos con el ajustador.' },
        { step: 5, title: 'Reparación', description: 'Reparaciones de calidad completadas para restaurar su techo.' },
        { step: 6, title: 'Finalización', description: 'Documentación final y garantía en reparaciones.' },
      ],
      faqs: [
        { question: '¿Debo llamar a mi compañía de seguros o a ustedes primero?', answer: 'Llámenos primero para una inspección. Documentaremos los daños y le ayudaremos a determinar si tiene sentido presentar un reclamo. Luego podemos apoyarlo a través del proceso de reclamos.' },
        { question: '¿Mis tasas de seguro subirán si presento un reclamo?', answer: 'Los reclamos por daños de tormenta típicamente se consideran "actos de Dios" y no deberían aumentar sus tasas. Sin embargo, recomendamos verificar con su proveedor de seguros sobre su póliza específica.' },
        { question: '¿Cuánto tiempo tengo para presentar un reclamo?', answer: 'Los límites de tiempo varían por póliza y compañía de seguros. La mayoría de las pólizas requieren que los reclamos se presenten dentro de 60-180 días. Contáctenos rápidamente para asegurar que cumpla con todas las fechas límite.' },
        { question: '¿Pueden trabajar con mi ajustador de seguros?', answer: 'Sí, regularmente nos reunimos con ajustadores de seguros para asegurar que todos los daños estén documentados correctamente e incluidos en el reclamo. Abogamos por usted durante todo el proceso.' },
      ],
    },
  },
  'tile-roofing': {
    en: {
      name: 'Tile Roofing',
      shortDescription: 'Beautiful, durable tile roof installation and repair for California homes.',
      description: 'Expert tile roofing services in Orange County. Installation, repair, and maintenance for clay and concrete tile roofs. Built for California climate.',
      longDescription: `Tile roofing is a popular choice for Orange County homes, and for good reason. Tile roofs offer exceptional durability, timeless beauty, and excellent performance in California's climate. S NEW ROOF has extensive experience with both clay and concrete tile roofing systems.

Clay tiles have been used for centuries and offer a classic Mediterranean look that complements many Southern California homes. Concrete tiles provide similar aesthetics with additional color and style options. Both materials offer excellent fire resistance and can last 50 years or more with proper installation and maintenance.

Tile roof installation requires specialized knowledge and skills. Tiles must be properly spaced, fastened, and overlapped to create a watertight system. Our installers are trained in proper tile installation techniques and follow manufacturer specifications to ensure optimal performance.

Whether you need a complete tile roof installation, repairs to an existing tile roof, or maintenance to extend its life, S NEW ROOF delivers expert tile roofing services backed by quality materials and craftsmanship.`,
      features: [
        'Clay tile installation',
        'Concrete tile installation',
        'Tile roof repair',
        'Broken tile replacement',
        'Underlayment replacement',
        'Tile roof maintenance',
        'Valley and flashing work',
        'Ridge and hip installation',
      ],
      benefits: [
        '50+ year lifespan',
        'Excellent fire resistance',
        'Superior wind resistance',
        'Energy efficiency',
        'Low maintenance',
        'Increases home value',
      ],
      process: [
        { step: 1, title: 'Consultation', description: "Review your home's style and discuss tile options." },
        { step: 2, title: 'Selection', description: 'Choose from clay or concrete tiles in various styles and colors.' },
        { step: 3, title: 'Preparation', description: 'Proper underlayment installation and deck preparation.' },
        { step: 4, title: 'Installation', description: 'Expert tile installation following manufacturer guidelines.' },
        { step: 5, title: 'Completion', description: 'Final inspection and cleanup.' },
      ],
      faqs: [
        { question: 'Is a tile roof right for my home?', answer: "Tile roofs work well on homes with adequate structural support due to their weight. During your consultation, we'll assess your home's suitability and discuss all options." },
        { question: 'How long does a tile roof last?', answer: "Properly installed tile roofs can last 50-100 years. The tiles themselves are extremely durable, though the underlayment may need replacement after 20-30 years." },
        { question: 'Can you repair my existing tile roof?', answer: "Yes, we repair all types of tile roofs. We can match existing tiles and address underlying issues to extend your roof's life." },
        { question: 'Are tile roofs expensive?', answer: 'Tile roofs have a higher upfront cost than asphalt shingles but offer superior longevity. Over the life of the roof, tile can be more cost-effective due to its long lifespan and low maintenance needs.' },
      ],
    },
    es: {
      name: 'Techos de Tejas',
      shortDescription: 'Instalación y reparación de techos de tejas hermosos y duraderos para hogares de California.',
      description: 'Servicios expertos de techos de tejas en Orange County. Instalación, reparación y mantenimiento para techos de tejas de arcilla y concreto. Construidos para el clima de California.',
      longDescription: `Los techos de tejas son una elección popular para hogares en Orange County, y por buena razón. Los techos de tejas ofrecen durabilidad excepcional, belleza atemporal y excelente rendimiento en el clima de California. S NEW ROOF tiene amplia experiencia tanto con sistemas de techos de tejas de arcilla como de concreto.

Las tejas de arcilla se han usado por siglos y ofrecen un look mediterráneo clásico que complementa muchos hogares del sur de California. Las tejas de concreto proporcionan estética similar con opciones adicionales de color y estilo. Ambos materiales ofrecen excelente resistencia al fuego y pueden durar 50 años o más con instalación y mantenimiento adecuados.

La instalación de techos de tejas requiere conocimiento y habilidades especializadas. Las tejas deben estar correctamente espaciadas, fijadas y superpuestas para crear un sistema impermeable. Nuestros instaladores están capacitados en técnicas de instalación de tejas y siguen las especificaciones del fabricante para asegurar rendimiento óptimo.

Ya sea que necesite una instalación completa de techo de tejas, reparaciones a un techo de tejas existente o mantenimiento para extender su vida, S NEW ROOF entrega servicios expertos de techos de tejas respaldados por materiales de calidad y artesanía.`,
      features: [
        'Instalación de tejas de arcilla',
        'Instalación de tejas de concreto',
        'Reparación de techos de tejas',
        'Reemplazo de tejas rotas',
        'Reemplazo de subcapa',
        'Mantenimiento de techos de tejas',
        'Trabajo de valles y flashing',
        'Instalación de cumbreras y limahoyas',
      ],
      benefits: [
        'Vida útil de 50+ años',
        'Excelente resistencia al fuego',
        'Superior resistencia al viento',
        'Eficiencia energética',
        'Bajo mantenimiento',
        'Aumenta el valor del hogar',
      ],
      process: [
        { step: 1, title: 'Consulta', description: 'Revise el estilo de su hogar y discuta opciones de tejas.' },
        { step: 2, title: 'Selección', description: 'Elija entre tejas de arcilla o concreto en varios estilos y colores.' },
        { step: 3, title: 'Preparación', description: 'Instalación adecuada de subcapa y preparación del deck.' },
        { step: 4, title: 'Instalación', description: 'Instalación experta de tejas siguiendo las guías del fabricante.' },
        { step: 5, title: 'Finalización', description: 'Inspección final y limpieza.' },
      ],
      faqs: [
        { question: '¿Es un techo de tejas adecuado para mi hogar?', answer: 'Los techos de tejas funcionan bien en hogares con soporte estructural adecuado debido a su peso. Durante su consulta, evaluaremos la idoneidad de su hogar y discutiremos todas las opciones.' },
        { question: '¿Cuánto tiempo dura un techo de tejas?', answer: 'Los techos de tejas instalados correctamente pueden durar 50-100 años. Las tejas mismas son extremadamente durables, aunque la subcapa puede necesitar reemplazo después de 20-30 años.' },
        { question: '¿Pueden reparar mi techo de tejas existente?', answer: 'Sí, reparamos todos los tipos de techos de tejas. Podemos igualar tejas existentes y abordar problemas subyacentes para extender la vida de su techo.' },
        { question: '¿Son caros los techos de tejas?', answer: 'Los techos de tejas tienen un costo inicial más alto que las tejas de asfalto pero ofrecen longevidad superior. Durante la vida del techo, las tejas pueden ser más rentables debido a su larga vida útil y bajas necesidades de mantenimiento.' },
      ],
    },
  },
  'shingle-roofing': {
    en: {
      name: 'Shingle Roofing',
      shortDescription: 'Quality asphalt shingle roofs in various styles and colors. Affordable and reliable.',
      description: 'Professional asphalt shingle roofing in Orange County. Wide selection of styles and colors, affordable pricing, and expert installation.',
      longDescription: `Asphalt shingles remain the most popular roofing material in America, and for good reason. They offer excellent value, versatility, and reliable performance at an affordable price point. S NEW ROOF provides expert shingle roofing services using quality products from leading manufacturers.

Modern asphalt shingles come in a wide variety of styles and colors. From traditional 3-tab shingles to architectural and designer shingles that mimic the look of wood shake or slate, there's an option for every home style and budget.

We install shingle roofs from trusted manufacturers like GAF, Owens Corning, and CertainTeed. These products come with strong manufacturer warranties, and as certified installers, we can offer extended warranty coverage that protects your investment.

Quality installation is critical for shingle roof performance. Our crews follow manufacturer specifications and industry best practices for nail placement, underlayment, flashing, and ventilation. This attention to detail ensures your shingle roof performs well for its expected lifespan.`,
      features: [
        '3-tab shingle installation',
        'Architectural shingles',
        'Designer shingle options',
        'Impact-resistant shingles',
        'Cool roof shingles',
        'Proper ventilation systems',
        'Quality underlayment',
        'Flashing installation',
      ],
      benefits: [
        'Affordable option',
        'Wide variety of styles',
        '20-30 year lifespan',
        'Easy repairs',
        'Good fire resistance',
        'Manufacturer warranties',
      ],
      process: [
        { step: 1, title: 'Selection', description: 'Choose from a variety of shingle styles and colors.' },
        { step: 2, title: 'Preparation', description: 'Old roofing removed and deck inspected.' },
        { step: 3, title: 'Underlayment', description: 'Quality underlayment and ice/water shield installed.' },
        { step: 4, title: 'Shingles', description: 'Shingles installed per manufacturer specifications.' },
        { step: 5, title: 'Details', description: 'Flashing, ridge caps, and ventilation completed.' },
      ],
      faqs: [
        { question: 'How long do asphalt shingles last?', answer: 'Quality asphalt shingles typically last 20-30 years, with some premium products lasting even longer. Proper installation and ventilation are key to maximizing lifespan.' },
        { question: "What's the difference between 3-tab and architectural shingles?", answer: '3-tab shingles are flat with a uniform appearance. Architectural shingles are thicker with a dimensional look that adds depth and character. Architectural shingles generally offer better durability and longer warranties.' },
        { question: 'Can shingles be installed over my existing roof?', answer: 'While sometimes possible, we generally recommend removing old roofing to inspect the deck and ensure proper installation. This approach also avoids voiding manufacturer warranties.' },
        { question: 'Do you offer cool roof shingles?', answer: 'Yes, we offer cool roof shingles that reflect more solar energy, helping reduce cooling costs and improving comfort in warm climates like Orange County.' },
      ],
    },
    es: {
      name: 'Techos de Tejas Asfálticas',
      shortDescription: 'Techos de tejas asfálticas de calidad en varios estilos y colores. Asequibles y confiables.',
      description: 'Techos de tejas asfálticas profesionales en Orange County. Amplia selección de estilos y colores, precios asequibles e instalación experta.',
      longDescription: `Las tejas asfálticas siguen siendo el material de techos más popular en América, y por buena razón. Ofrecen excelente valor, versatilidad y rendimiento confiable a un precio asequible. S NEW ROOF proporciona servicios expertos de techos de tejas usando productos de calidad de fabricantes líderes.

Las tejas asfálticas modernas vienen en una amplia variedad de estilos y colores. Desde tejas tradicionales de 3 pestañas hasta tejas arquitectónicas y de diseñador que imitan el look de madera o pizarra, hay una opción para cada estilo de hogar y presupuesto.

Instalamos techos de tejas de fabricantes de confianza como GAF, Owens Corning y CertainTeed. Estos productos vienen con fuertes garantías del fabricante, y como instaladores certificados, podemos ofrecer cobertura de garantía extendida que protege su inversión.

La instalación de calidad es crítica para el rendimiento del techo de tejas. Nuestros equipos siguen las especificaciones del fabricante y las mejores prácticas de la industria para colocación de clavos, subcapa, flashing y ventilación. Esta atención al detalle asegura que su techo de tejas funcione bien durante su vida útil esperada.`,
      features: [
        'Instalación de tejas 3-tab',
        'Tejas arquitectónicas',
        'Opciones de tejas de diseñador',
        'Tejas resistentes al impacto',
        'Tejas de techo fresco',
        'Sistemas de ventilación adecuados',
        'Subcapa de calidad',
        'Instalación de flashing',
      ],
      benefits: [
        'Opción asequible',
        'Amplia variedad de estilos',
        'Vida útil de 20-30 años',
        'Reparaciones fáciles',
        'Buena resistencia al fuego',
        'Garantías del fabricante',
      ],
      process: [
        { step: 1, title: 'Selección', description: 'Elija entre una variedad de estilos y colores de tejas.' },
        { step: 2, title: 'Preparación', description: 'Techo viejo removido y deck inspeccionado.' },
        { step: 3, title: 'Subcapa', description: 'Subcapa de calidad y escudo de hielo/agua instalado.' },
        { step: 4, title: 'Tejas', description: 'Tejas instaladas según especificaciones del fabricante.' },
        { step: 5, title: 'Detalles', description: 'Flashing, tapacumbreras y ventilación completados.' },
      ],
      faqs: [
        { question: '¿Cuánto tiempo duran las tejas asfálticas?', answer: 'Las tejas asfálticas de calidad típicamente duran 20-30 años, con algunos productos premium durando aún más. La instalación y ventilación adecuadas son clave para maximizar la vida útil.' },
        { question: '¿Cuál es la diferencia entre tejas 3-tab y arquitectónicas?', answer: 'Las tejas 3-tab son planas con apariencia uniforme. Las tejas arquitectónicas son más gruesas con un look dimensional que agrega profundidad y carácter. Las tejas arquitectónicas generalmente ofrecen mejor durabilidad y garantías más largas.' },
        { question: '¿Se pueden instalar tejas sobre mi techo existente?', answer: 'Aunque a veces es posible, generalmente recomendamos remover el techo viejo para inspeccionar el deck y asegurar instalación adecuada. Este enfoque también evita anular las garantías del fabricante.' },
        { question: '¿Ofrecen tejas de techo fresco?', answer: 'Sí, ofrecemos tejas de techo fresco que reflejan más energía solar, ayudando a reducir costos de enfriamiento y mejorando la comodidad en climas cálidos como Orange County.' },
      ],
    },
  },
  'gutter-services': {
    en: {
      name: 'Gutter Services',
      shortDescription: 'Gutter installation, repair, and cleaning to protect your home from water damage.',
      description: 'Professional gutter services in Orange County. Installation, repair, cleaning, and gutter guards. Protect your home\'s foundation.',
      longDescription: `Your gutter system is a critical part of your home's water management. Gutters direct rainwater away from your roof, walls, and foundation, preventing water damage and protecting your home's structure. S NEW ROOF offers complete gutter services to keep your drainage system working properly.

We install seamless gutters custom-fitted to your home. Seamless gutters minimize leaks and provide a clean, professional appearance. Available in various materials and colors, our gutters complement your home's exterior while providing reliable performance.

Beyond installation, we provide gutter repair and cleaning services. Damaged or clogged gutters can cause serious problems, from roof leaks to foundation damage. Regular maintenance keeps your gutters functioning properly and extends their lifespan.

Gutter guards can reduce maintenance needs by preventing debris from entering your gutters. We offer several gutter guard options and can recommend the best solution for your home's specific needs.`,
      features: [
        'Seamless gutter installation',
        'Gutter repair',
        'Gutter cleaning',
        'Downspout installation',
        'Gutter guards',
        'Leaf protection systems',
        'Fascia repair',
        'Soffit repair',
      ],
      benefits: [
        'Protect your foundation',
        'Prevent basement flooding',
        'Avoid landscape erosion',
        'Protect fascia and soffit',
        'Reduce maintenance',
        'Prevent ice dams',
      ],
      process: [
        { step: 1, title: 'Assessment', description: 'Evaluate your current drainage and recommend solutions.' },
        { step: 2, title: 'Measurement', description: 'Precise measurements for custom-fit seamless gutters.' },
        { step: 3, title: 'Installation', description: 'Professional installation with proper pitch and drainage.' },
        { step: 4, title: 'Protection', description: 'Optional gutter guard installation for reduced maintenance.' },
      ],
      faqs: [
        { question: 'How often should gutters be cleaned?', answer: 'Most homes benefit from gutter cleaning twice a year, typically in spring and fall. Homes with many trees may need more frequent cleaning.' },
        { question: 'Do gutter guards really work?', answer: 'Quality gutter guards significantly reduce debris accumulation and maintenance needs. We offer several options and can recommend the best solution for your specific situation.' },
        { question: 'What size gutters do I need?', answer: "Standard 5\" gutters work well for most homes. Larger homes or steep roofs may benefit from 6\" gutters. We'll recommend the appropriate size during your consultation." },
        { question: 'Can you match my existing gutters?', answer: "Yes, we offer gutters in various colors and materials to match or complement your home's exterior." },
      ],
    },
    es: {
      name: 'Servicios de Canaletas',
      shortDescription: 'Instalación, reparación y limpieza de canaletas para proteger su hogar de daños por agua.',
      description: 'Servicios profesionales de canaletas en Orange County. Instalación, reparación, limpieza y protectores de canaletas. Proteja los cimientos de su hogar.',
      longDescription: `Su sistema de canaletas es una parte crítica del manejo de agua de su hogar. Las canaletas dirigen el agua de lluvia lejos de su techo, paredes y cimientos, previniendo daños por agua y protegiendo la estructura de su hogar. S NEW ROOF ofrece servicios completos de canaletas para mantener su sistema de drenaje funcionando correctamente.

Instalamos canaletas sin costuras ajustadas a medida para su hogar. Las canaletas sin costuras minimizan fugas y proporcionan una apariencia limpia y profesional. Disponibles en varios materiales y colores, nuestras canaletas complementan el exterior de su hogar mientras proporcionan rendimiento confiable.

Más allá de la instalación, proporcionamos servicios de reparación y limpieza de canaletas. Las canaletas dañadas u obstruidas pueden causar problemas serios, desde fugas en el techo hasta daños en los cimientos. El mantenimiento regular mantiene sus canaletas funcionando correctamente y extiende su vida útil.

Los protectores de canaletas pueden reducir las necesidades de mantenimiento previniendo que los escombros entren en sus canaletas. Ofrecemos varias opciones de protectores de canaletas y podemos recomendar la mejor solución para las necesidades específicas de su hogar.`,
      features: [
        'Instalación de canaletas sin costuras',
        'Reparación de canaletas',
        'Limpieza de canaletas',
        'Instalación de bajantes',
        'Protectores de canaletas',
        'Sistemas de protección contra hojas',
        'Reparación de fascia',
        'Reparación de sofia',
      ],
      benefits: [
        'Proteger sus cimientos',
        'Prevenir inundaciones del sótano',
        'Evitar erosión del paisaje',
        'Proteger fascia y sofia',
        'Reducir mantenimiento',
        'Prevenir presas de hielo',
      ],
      process: [
        { step: 1, title: 'Evaluación', description: 'Evaluar su drenaje actual y recomendar soluciones.' },
        { step: 2, title: 'Medición', description: 'Medidas precisas para canaletas sin costuras ajustadas.' },
        { step: 3, title: 'Instalación', description: 'Instalación profesional con pendiente y drenaje adecuados.' },
        { step: 4, title: 'Protección', description: 'Instalación opcional de protectores de canaletas para reducir mantenimiento.' },
      ],
      faqs: [
        { question: '¿Con qué frecuencia se deben limpiar las canaletas?', answer: 'La mayoría de los hogares se benefician de limpieza de canaletas dos veces al año, típicamente en primavera y otoño. Los hogares con muchos árboles pueden necesitar limpieza más frecuente.' },
        { question: '¿Los protectores de canaletas realmente funcionan?', answer: 'Los protectores de canaletas de calidad reducen significativamente la acumulación de escombros y las necesidades de mantenimiento. Ofrecemos varias opciones y podemos recomendar la mejor solución para su situación específica.' },
        { question: '¿Qué tamaño de canaletas necesito?', answer: 'Las canaletas estándar de 5" funcionan bien para la mayoría de los hogares. Los hogares más grandes o techos empinados pueden beneficiarse de canaletas de 6". Recomendaremos el tamaño apropiado durante su consulta.' },
        { question: '¿Pueden igualar mis canaletas existentes?', answer: 'Sí, ofrecemos canaletas en varios colores y materiales para igualar o complementar el exterior de su hogar.' },
      ],
    },
  },
  'skylight-services': {
    en: {
      name: 'Skylight Services',
      shortDescription: 'Professional skylight installation, repair, and replacement for natural light and ventilation.',
      description: 'Expert skylight services in Orange County. Installation, repair, leak prevention, and replacement. Bring natural light into your home.',
      longDescription: `Skylights are a beautiful way to bring natural light into your home, reduce energy costs, and create a more open, airy atmosphere. S NEW ROOF provides comprehensive skylight services including installation, repair, replacement, and leak prevention for homeowners throughout Orange County.

Our skylight installation services cover all types of skylights including fixed skylights for natural light, ventilating skylights for fresh air circulation, and tubular skylights for smaller spaces. We work with leading manufacturers like Velux to provide high-quality, energy-efficient skylight solutions.

Proper installation is critical for skylight performance and leak prevention. Our experienced technicians understand the complexities of roof penetrations and use proper flashing techniques to ensure your skylight remains watertight for years to come. We handle all aspects of the installation, from structural considerations to interior finishing.

If your existing skylight is leaking, fogging up, or showing signs of age, we offer expert repair and replacement services. We can upgrade old skylights to modern, energy-efficient models that reduce heat transfer and UV damage while maximizing natural light.`,
      features: [
        'New skylight installation',
        'Velux skylight dealer',
        'Fixed and ventilating skylights',
        'Tubular sun tunnels',
        'Skylight leak repair',
        'Skylight replacement',
        'Flashing repair',
        'Motorized skylights',
      ],
      benefits: [
        'Natural light reduces energy costs',
        'Improved ventilation and air quality',
        'Enhanced home aesthetics',
        'Increased property value',
        'UV protection options available',
        'Professional leak-free installation',
      ],
      process: [
        { step: 1, title: 'Consultation', description: "Assess your home's structure and discuss skylight options." },
        { step: 2, title: 'Selection', description: 'Choose from fixed, ventilating, or tubular skylights.' },
        { step: 3, title: 'Preparation', description: 'Structural assessment and proper flashing preparation.' },
        { step: 4, title: 'Installation', description: 'Professional installation with proper sealing and flashing.' },
        { step: 5, title: 'Finishing', description: 'Interior trim work and final inspection.' },
      ],
      faqs: [
        { question: 'Will a skylight leak?', answer: 'Properly installed skylights with quality flashing should not leak. Our professional installation includes proper flashing techniques that integrate with your roofing system to prevent water intrusion.' },
        { question: 'Can a skylight be installed on any roof?', answer: 'Most roofs can accommodate skylights. Factors like roof pitch, framing structure, and roofing material affect installation. We assess your roof during consultation to determine the best approach.' },
        { question: 'How much does skylight installation cost?', answer: 'Cost varies based on skylight type, size, and installation complexity. Fixed skylights are typically less expensive than ventilating models. We provide free estimates for all skylight projects.' },
        { question: 'Can you fix my leaking skylight?', answer: 'Yes, we repair leaking skylights. The solution may involve resealing, flashing repair, or in some cases, replacement. We diagnose the issue and recommend the most cost-effective solution.' },
      ],
    },
    es: {
      name: 'Servicios de Tragaluz',
      shortDescription: 'Instalación, reparación y reemplazo profesional de tragaluces para luz natural y ventilación.',
      description: 'Servicios expertos de tragaluces en Orange County. Instalación, reparación, prevención de fugas y reemplazo. Traiga luz natural a su hogar.',
      longDescription: `Los tragaluces son una forma hermosa de traer luz natural a su hogar, reducir costos de energía y crear una atmósfera más abierta y aireada. S NEW ROOF proporciona servicios completos de tragaluces incluyendo instalación, reparación, reemplazo y prevención de fugas para propietarios en todo Orange County.

Nuestros servicios de instalación de tragaluces cubren todos los tipos de tragaluces incluyendo tragaluces fijos para luz natural, tragaluces ventilados para circulación de aire fresco y tragaluces tubulares para espacios más pequeños. Trabajamos con fabricantes líderes como Velux para proporcionar soluciones de tragaluces de alta calidad y eficiencia energética.

La instalación adecuada es crítica para el rendimiento del tragaluz y la prevención de fugas. Nuestros técnicos experimentados entienden las complejidades de las penetraciones del techo y usan técnicas de flashing apropiadas para asegurar que su tragaluz permanezca hermético por años. Manejamos todos los aspectos de la instalación, desde consideraciones estructurales hasta acabados interiores.

Si su tragaluz existente tiene fugas, se está empañando o muestra signos de edad, ofrecemos servicios expertos de reparación y reemplazo. Podemos actualizar tragaluces viejos a modelos modernos de alta eficiencia energética que reducen la transferencia de calor y el daño UV mientras maximizan la luz natural.`,
      features: [
        'Instalación de nuevos tragaluces',
        'Distribuidor de tragaluces Velux',
        'Tragaluces fijos y ventilados',
        'Túneles solares tubulares',
        'Reparación de fugas de tragaluces',
        'Reemplazo de tragaluces',
        'Reparación de flashing',
        'Tragaluces motorizados',
      ],
      benefits: [
        'La luz natural reduce costos de energía',
        'Mejor ventilación y calidad del aire',
        'Estética mejorada del hogar',
        'Aumento del valor de la propiedad',
        'Opciones de protección UV disponibles',
        'Instalación profesional sin fugas',
      ],
      process: [
        { step: 1, title: 'Consulta', description: 'Evaluar la estructura de su hogar y discutir opciones de tragaluces.' },
        { step: 2, title: 'Selección', description: 'Elegir entre tragaluces fijos, ventilados o tubulares.' },
        { step: 3, title: 'Preparación', description: 'Evaluación estructural y preparación adecuada del flashing.' },
        { step: 4, title: 'Instalación', description: 'Instalación profesional con sellado y flashing apropiados.' },
        { step: 5, title: 'Acabado', description: 'Trabajo de moldura interior e inspección final.' },
      ],
      faqs: [
        { question: '¿Un tragaluz tendrá fugas?', answer: 'Los tragaluces instalados correctamente con flashing de calidad no deberían tener fugas. Nuestra instalación profesional incluye técnicas de flashing apropiadas que se integran con su sistema de techos para prevenir la intrusión de agua.' },
        { question: '¿Se puede instalar un tragaluz en cualquier techo?', answer: 'La mayoría de los techos pueden acomodar tragaluces. Factores como la inclinación del techo, estructura de enmarcado y material del techo afectan la instalación. Evaluamos su techo durante la consulta para determinar el mejor enfoque.' },
        { question: '¿Cuánto cuesta la instalación de un tragaluz?', answer: 'El costo varía según el tipo de tragaluz, tamaño y complejidad de instalación. Los tragaluces fijos son típicamente menos costosos que los modelos ventilados. Proporcionamos estimaciones gratis para todos los proyectos de tragaluces.' },
        { question: '¿Pueden reparar mi tragaluz con fugas?', answer: 'Sí, reparamos tragaluces con fugas. La solución puede implicar resellar, reparar el flashing o en algunos casos, reemplazo. Diagnosticamos el problema y recomendamos la solución más rentable.' },
      ],
    },
  },
};

// Location translations
export const locationTranslations: Record<string, Record<Language, {
  description: string;
  longDescription: string;
  services: string[];
  highlights: string[];
}>> = {
  'santa-ana': {
    en: {
      description: 'Professional roofing services in Santa Ana, CA. Expert roof repair, replacement, and installation from your trusted local roofing contractor.',
      longDescription: `S NEW ROOF is proud to serve Santa Ana and the surrounding Orange County community with top-quality roofing services. As Santa Ana's trusted local roofing contractor, we understand the unique challenges that California homes face, from intense sun exposure to seasonal rains.

Our team of certified roofing professionals has extensive experience working with all types of roofing systems common in Santa Ana, including tile roofs, shingle roofs, and flat roofs. Whether you need a simple repair or a complete roof replacement, we deliver exceptional results backed by our satisfaction guarantee.

We're committed to protecting Santa Ana homes and families with durable, long-lasting roofing solutions. Our emergency services are available 24/7 because we know roofing problems don't always happen during business hours.`,
      services: ['Roof Repair', 'Roof Replacement', 'Emergency Leak Repair', 'Roof Inspection', 'Tile Roofing', 'Shingle Roofing'],
      highlights: [
        'Fast response times throughout Santa Ana',
        'Licensed and insured roofing contractor',
        'Free roof inspections and estimates',
        '24/7 emergency roofing services',
        'Experienced with Santa Ana building codes',
        'Local family-owned business',
      ],
    },
    es: {
      description: 'Servicios profesionales de techos en Santa Ana, CA. Reparación, reemplazo e instalación experta de techos de su contratista local de confianza.',
      longDescription: `S NEW ROOF está orgulloso de servir a Santa Ana y la comunidad circundante de Orange County con servicios de techos de primera calidad. Como el contratista de techos local de confianza de Santa Ana, entendemos los desafíos únicos que enfrentan los hogares de California, desde la exposición intensa al sol hasta las lluvias estacionales.

Nuestro equipo de profesionales certificados en techos tiene amplia experiencia trabajando con todos los tipos de sistemas de techos comunes en Santa Ana, incluyendo techos de tejas, techos de tejas asfálticas y techos planos. Ya sea que necesite una reparación simple o un reemplazo completo de techo, entregamos resultados excepcionales respaldados por nuestra garantía de satisfacción.

Estamos comprometidos a proteger los hogares y familias de Santa Ana con soluciones de techos duraderas y de larga duración. Nuestros servicios de emergencia están disponibles 24/7 porque sabemos que los problemas de techos no siempre suceden durante el horario comercial.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Reparación de Fugas de Emergencia', 'Inspección de Techos', 'Techos de Tejas', 'Techos de Tejas Asfálticas'],
      highlights: [
        'Tiempos de respuesta rápidos en todo Santa Ana',
        'Contratista de techos licenciado y asegurado',
        'Inspecciones y estimaciones de techos gratis',
        'Servicios de techos de emergencia 24/7',
        'Experimentados con códigos de construcción de Santa Ana',
        'Negocio familiar local',
      ],
    },
  },
  'orange-county': {
    en: {
      description: 'Comprehensive roofing services across Orange County, CA. From coastal homes to inland properties, we protect your home with quality roofing.',
      longDescription: `S NEW ROOF provides complete roofing solutions throughout Orange County, California. Our service area spans from coastal communities to inland neighborhoods, giving us extensive experience with the diverse roofing needs of OC residents.

Orange County's Mediterranean climate demands roofing systems that can withstand hot, dry summers and occasional heavy winter rains. We specialize in roofing materials ideally suited for Southern California weather, including clay and concrete tile, asphalt shingles, and energy-efficient cool roofs.

From Huntington Beach to Yorba Linda, our mobile crews are ready to respond quickly to your roofing needs. We've built our reputation on quality workmanship, honest pricing, and exceptional customer service throughout Orange County.`,
      services: ['Roof Repair', 'Roof Replacement', 'Storm Damage Repair', 'Roof Inspection', 'Gutter Services', 'Tile Roofing'],
      highlights: [
        'Serving all Orange County communities',
        'Coastal and inland roofing expertise',
        'Storm damage specialists',
        'Insurance claim assistance',
        'Energy-efficient roofing options',
        'Competitive financing available',
      ],
    },
    es: {
      description: 'Servicios integrales de techos en todo Orange County, CA. Desde hogares costeros hasta propiedades interiores, protegemos su hogar con techos de calidad.',
      longDescription: `S NEW ROOF proporciona soluciones completas de techos en todo Orange County, California. Nuestra área de servicio se extiende desde comunidades costeras hasta vecindarios interiores, dándonos amplia experiencia con las diversas necesidades de techos de los residentes de OC.

El clima mediterráneo de Orange County exige sistemas de techos que puedan soportar veranos calurosos y secos y ocasionales lluvias intensas de invierno. Nos especializamos en materiales de techos idealmente adaptados para el clima del sur de California, incluyendo tejas de arcilla y concreto, tejas asfálticas y techos frescos eficientes en energía.

Desde Huntington Beach hasta Yorba Linda, nuestros equipos móviles están listos para responder rápidamente a sus necesidades de techos. Hemos construido nuestra reputación sobre calidad de trabajo, precios honestos y servicio al cliente excepcional en todo Orange County.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Reparación de Daños por Tormenta', 'Inspección de Techos', 'Servicios de Canaletas', 'Techos de Tejas'],
      highlights: [
        'Sirviendo todas las comunidades de Orange County',
        'Experiencia en techos costeros e interiores',
        'Especialistas en daños por tormenta',
        'Asistencia con reclamos de seguro',
        'Opciones de techos eficientes en energía',
        'Financiamiento competitivo disponible',
      ],
    },
  },
  'anaheim': {
    en: {
      description: 'Expert roofing services in Anaheim, CA. Professional roof repair, installation, and replacement for Anaheim homes and businesses.',
      longDescription: `Anaheim homeowners trust S NEW ROOF for all their roofing needs. As one of Orange County's largest cities, Anaheim presents diverse roofing challenges from older historic homes to newer developments. Our experienced team has worked on properties throughout the city.

We understand Anaheim's specific building requirements and work closely with local authorities to ensure all roofing projects meet code requirements. Whether you're near Disneyland, in the Anaheim Hills, or anywhere in between, our crews are ready to serve you.

From residential roof repairs to complete commercial roof installations, S NEW ROOF brings expertise and professionalism to every Anaheim roofing project. We use only premium materials from trusted manufacturers.`,
      services: ['Roof Repair', 'Roof Replacement', 'Emergency Leak Repair', 'Roof Inspection', 'Shingle Roofing', 'Flat Roof Systems'],
      highlights: [
        'Experienced with Anaheim building codes',
        'Services for historic and new homes',
        'Commercial roofing available',
        'Free estimates for Anaheim residents',
        'Emergency services 24/7',
        'Senior citizen discounts',
      ],
    },
    es: {
      description: 'Servicios expertos de techos en Anaheim, CA. Reparación, instalación y reemplazo profesional de techos para hogares y negocios de Anaheim.',
      longDescription: `Los propietarios de Anaheim confían en S NEW ROOF para todas sus necesidades de techos. Como una de las ciudades más grandes de Orange County, Anaheim presenta diversos desafíos de techos desde hogares históricos antiguos hasta desarrollos más nuevos. Nuestro equipo experimentado ha trabajado en propiedades en toda la ciudad.

Entendemos los requisitos específicos de construcción de Anaheim y trabajamos estrechamente con las autoridades locales para asegurar que todos los proyectos de techos cumplan con los códigos. Ya sea que esté cerca de Disneyland, en Anaheim Hills, o en cualquier punto intermedio, nuestros equipos están listos para servirle.

Desde reparaciones residenciales de techos hasta instalaciones comerciales completas, S NEW ROOF aporta experiencia y profesionalismo a cada proyecto de techos en Anaheim. Usamos solo materiales premium de fabricantes de confianza.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Reparación de Fugas de Emergencia', 'Inspección de Techos', 'Techos de Tejas Asfálticas', 'Sistemas de Techos Planos'],
      highlights: [
        'Experimentados con códigos de construcción de Anaheim',
        'Servicios para hogares históricos y nuevos',
        'Techos comerciales disponibles',
        'Estimaciones gratis para residentes de Anaheim',
        'Servicios de emergencia 24/7',
        'Descuentos para personas mayores',
      ],
    },
  },
  'irvine': {
    en: {
      description: 'Premium roofing services in Irvine, CA. Quality roof repair and replacement for Irvine homes with energy-efficient solutions.',
      longDescription: `Irvine homeowners deserve the best, and S NEW ROOF delivers excellence in roofing services. Known for its master-planned communities and quality homes, Irvine requires roofing contractors who understand the specific needs of these well-designed neighborhoods.

We specialize in roofing systems that complement Irvine's modern architecture while providing superior protection. From the Woodbridge area to Portola Springs, our team has extensive experience working throughout Irvine's diverse communities.

Energy efficiency is a priority for many Irvine homeowners, and we offer cool roof systems and solar-ready roofing solutions that help reduce energy costs while protecting your home. All our Irvine roofing projects meet the city's strict building standards.`,
      services: ['Roof Repair', 'Roof Replacement', 'Energy-Efficient Roofs', 'Roof Inspection', 'Tile Roofing', 'Solar-Ready Roofing'],
      highlights: [
        'Energy-efficient roofing specialists',
        'HOA-approved roofing solutions',
        'Solar-ready roof installations',
        'Master-planned community expertise',
        'Premium material options',
        'Transferable warranties',
      ],
    },
    es: {
      description: 'Servicios premium de techos en Irvine, CA. Reparación y reemplazo de techos de calidad para hogares de Irvine con soluciones eficientes en energía.',
      longDescription: `Los propietarios de Irvine merecen lo mejor, y S NEW ROOF entrega excelencia en servicios de techos. Conocida por sus comunidades planificadas y hogares de calidad, Irvine requiere contratistas de techos que entiendan las necesidades específicas de estos vecindarios bien diseñados.

Nos especializamos en sistemas de techos que complementan la arquitectura moderna de Irvine mientras proporcionan protección superior. Desde el área de Woodbridge hasta Portola Springs, nuestro equipo tiene amplia experiencia trabajando en las diversas comunidades de Irvine.

La eficiencia energética es una prioridad para muchos propietarios de Irvine, y ofrecemos sistemas de techos frescos y soluciones de techos listas para solar que ayudan a reducir costos de energía mientras protegen su hogar. Todos nuestros proyectos de techos en Irvine cumplen con los estrictos estándares de construcción de la ciudad.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Techos Eficientes en Energía', 'Inspección de Techos', 'Techos de Tejas', 'Techos Listos para Solar'],
      highlights: [
        'Especialistas en techos eficientes en energía',
        'Soluciones de techos aprobadas por HOA',
        'Instalaciones de techos listos para solar',
        'Experiencia en comunidades planificadas',
        'Opciones de materiales premium',
        'Garantías transferibles',
      ],
    },
  },
  'garden-grove': {
    en: {
      description: 'Reliable roofing services in Garden Grove, CA. Expert roof repairs and installations for Garden Grove homes at competitive prices.',
      longDescription: `S NEW ROOF is your trusted roofing partner in Garden Grove, California. This vibrant Orange County city features a mix of charming older homes and newer developments, each with unique roofing needs. Our experienced team understands how to work with all roofing types found in Garden Grove.

From the historic downtown area to the residential neighborhoods throughout the city, we've helped countless Garden Grove homeowners protect their properties with quality roofing services. We handle everything from minor repairs to complete roof replacements.

Our Garden Grove customers appreciate our honest approach, fair pricing, and commitment to quality. We treat every home as if it were our own, ensuring lasting results that protect your family for years to come.`,
      services: ['Roof Repair', 'Roof Replacement', 'Leak Detection', 'Roof Inspection', 'Shingle Roofing', 'Tile Roofing'],
      highlights: [
        'Affordable pricing for Garden Grove',
        'Experienced with older homes',
        'Leak detection specialists',
        'Same-day service available',
        'Family-friendly scheduling',
        'Military discounts available',
      ],
    },
    es: {
      description: 'Servicios confiables de techos en Garden Grove, CA. Reparaciones e instalaciones expertas de techos para hogares de Garden Grove a precios competitivos.',
      longDescription: `S NEW ROOF es su socio de confianza en techos en Garden Grove, California. Esta vibrante ciudad de Orange County cuenta con una mezcla de hogares antiguos encantadores y desarrollos más nuevos, cada uno con necesidades únicas de techos. Nuestro equipo experimentado entiende cómo trabajar con todos los tipos de techos encontrados en Garden Grove.

Desde el área del centro histórico hasta los vecindarios residenciales en toda la ciudad, hemos ayudado a innumerables propietarios de Garden Grove a proteger sus propiedades con servicios de techos de calidad. Manejamos todo desde reparaciones menores hasta reemplazos completos de techos.

Nuestros clientes de Garden Grove aprecian nuestro enfoque honesto, precios justos y compromiso con la calidad. Tratamos cada hogar como si fuera el nuestro, asegurando resultados duraderos que protegen a su familia por años.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Detección de Fugas', 'Inspección de Techos', 'Techos de Tejas Asfálticas', 'Techos de Tejas'],
      highlights: [
        'Precios asequibles para Garden Grove',
        'Experimentados con hogares antiguos',
        'Especialistas en detección de fugas',
        'Servicio el mismo día disponible',
        'Programación familiar',
        'Descuentos militares disponibles',
      ],
    },
  },
  'fullerton': {
    en: {
      description: 'Professional roofing services in Fullerton, CA. Quality roof repair and replacement for Fullerton homes and historic properties.',
      longDescription: `Fullerton's diverse architecture, from historic downtown buildings to hillside homes, requires a roofing contractor with varied expertise. S NEW ROOF brings that expertise to every Fullerton roofing project, big or small.

We've worked on numerous Fullerton homes, understanding the specific challenges posed by the city's varied terrain and architectural styles. From California bungalows to modern constructions, our team has the skills and experience to handle any roofing challenge.

Fullerton homeowners can count on us for honest assessments, quality workmanship, and reliable service. We're committed to preserving the character of your home while providing modern protection against the elements.`,
      services: ['Roof Repair', 'Roof Replacement', 'Historic Roof Restoration', 'Roof Inspection', 'Emergency Services', 'Skylight Installation'],
      highlights: [
        'Historic home roofing expertise',
        'Hillside property experience',
        'Skylight installation available',
        'Downtown Fullerton service',
        'University area specialists',
        'Weekend appointments available',
      ],
    },
    es: {
      description: 'Servicios profesionales de techos en Fullerton, CA. Reparación y reemplazo de techos de calidad para hogares y propiedades históricas de Fullerton.',
      longDescription: `La arquitectura diversa de Fullerton, desde edificios históricos del centro hasta hogares en laderas, requiere un contratista de techos con experiencia variada. S NEW ROOF aporta esa experiencia a cada proyecto de techos en Fullerton, grande o pequeño.

Hemos trabajado en numerosos hogares de Fullerton, entendiendo los desafíos específicos planteados por el terreno variado de la ciudad y los estilos arquitectónicos. Desde bungalows de California hasta construcciones modernas, nuestro equipo tiene las habilidades y experiencia para manejar cualquier desafío de techos.

Los propietarios de Fullerton pueden contar con nosotros para evaluaciones honestas, calidad de trabajo y servicio confiable. Estamos comprometidos a preservar el carácter de su hogar mientras proporcionamos protección moderna contra los elementos.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Restauración de Techos Históricos', 'Inspección de Techos', 'Servicios de Emergencia', 'Instalación de Tragaluces'],
      highlights: [
        'Experiencia en techos de hogares históricos',
        'Experiencia en propiedades en laderas',
        'Instalación de tragaluces disponible',
        'Servicio en el centro de Fullerton',
        'Especialistas en área universitaria',
        'Citas de fin de semana disponibles',
      ],
    },
  },
  'costa-mesa': {
    en: {
      description: 'Expert roofing services in Costa Mesa, CA. Coastal roofing solutions for Costa Mesa homes with weather-resistant materials.',
      longDescription: `Costa Mesa's proximity to the coast means homes face unique challenges from salt air and marine layer moisture. S NEW ROOF understands these coastal conditions and provides roofing solutions specifically designed to withstand them.

Our Costa Mesa roofing services include using corrosion-resistant materials and proper ventilation systems that protect your home from coastal moisture damage. Whether you're near South Coast Plaza or in the Eastside neighborhood, we're your local roofing experts.

We've helped many Costa Mesa homeowners extend the life of their roofs through proper maintenance and timely repairs. Trust S NEW ROOF to protect your coastal home with roofing solutions built to last.`,
      services: ['Roof Repair', 'Roof Replacement', 'Coastal Roofing', 'Roof Inspection', 'Gutter Installation', 'Ventilation Systems'],
      highlights: [
        'Coastal roofing specialists',
        'Corrosion-resistant materials',
        'Moisture damage prevention',
        'South Coast Metro area service',
        'Commercial roofing available',
        'Multi-family roofing experts',
      ],
    },
    es: {
      description: 'Servicios expertos de techos en Costa Mesa, CA. Soluciones de techos costeros para hogares de Costa Mesa con materiales resistentes al clima.',
      longDescription: `La proximidad de Costa Mesa a la costa significa que los hogares enfrentan desafíos únicos del aire salado y la humedad de la capa marina. S NEW ROOF entiende estas condiciones costeras y proporciona soluciones de techos específicamente diseñadas para soportarlas.

Nuestros servicios de techos en Costa Mesa incluyen el uso de materiales resistentes a la corrosión y sistemas de ventilación adecuados que protegen su hogar del daño por humedad costera. Ya sea que esté cerca de South Coast Plaza o en el vecindario Eastside, somos sus expertos locales en techos.

Hemos ayudado a muchos propietarios de Costa Mesa a extender la vida de sus techos a través de mantenimiento adecuado y reparaciones oportunas. Confíe en S NEW ROOF para proteger su hogar costero con soluciones de techos construidas para durar.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Techos Costeros', 'Inspección de Techos', 'Instalación de Canaletas', 'Sistemas de Ventilación'],
      highlights: [
        'Especialistas en techos costeros',
        'Materiales resistentes a la corrosión',
        'Prevención de daños por humedad',
        'Servicio en área South Coast Metro',
        'Techos comerciales disponibles',
        'Expertos en techos multifamiliares',
      ],
    },
  },
  'newport-beach': {
    en: {
      description: 'Luxury roofing services in Newport Beach, CA. Premium roof solutions for Newport Beach coastal homes and waterfront properties.',
      longDescription: `Newport Beach homes deserve premium roofing services, and S NEW ROOF delivers excellence for this prestigious coastal community. From bayfront properties to hillside estates, we understand the high standards Newport Beach homeowners expect.

Our team specializes in luxury roofing materials and custom installations that complement the architectural beauty of Newport Beach homes. We work with premium tiles, high-end shingles, and specialized coatings designed for coastal environments.

Waterfront properties require special attention to waterproofing and drainage. Our expertise in these areas ensures your Newport Beach home remains protected from both rain and the unique challenges of coastal living.`,
      services: ['Roof Repair', 'Roof Replacement', 'Luxury Roofing', 'Roof Inspection', 'Waterproofing', 'Coastal Systems'],
      highlights: [
        'Luxury roofing specialists',
        'Waterfront property expertise',
        'Premium material options',
        'Custom design solutions',
        'Discrete service available',
        'Concierge-level support',
      ],
    },
    es: {
      description: 'Servicios de lujo de techos en Newport Beach, CA. Soluciones premium de techos para hogares costeros y propiedades frente al mar en Newport Beach.',
      longDescription: `Los hogares de Newport Beach merecen servicios premium de techos, y S NEW ROOF entrega excelencia para esta prestigiosa comunidad costera. Desde propiedades frente a la bahía hasta propiedades en laderas, entendemos los altos estándares que los propietarios de Newport Beach esperan.

Nuestro equipo se especializa en materiales de techos de lujo e instalaciones personalizadas que complementan la belleza arquitectónica de los hogares de Newport Beach. Trabajamos con tejas premium, tejas de alta gama y recubrimientos especializados diseñados para ambientes costeros.

Las propiedades frente al mar requieren atención especial a la impermeabilización y el drenaje. Nuestra experiencia en estas áreas asegura que su hogar en Newport Beach permanezca protegido tanto de la lluvia como de los desafíos únicos de la vida costera.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Techos de Lujo', 'Inspección de Techos', 'Impermeabilización', 'Sistemas Costeros'],
      highlights: [
        'Especialistas en techos de lujo',
        'Experiencia en propiedades frente al mar',
        'Opciones de materiales premium',
        'Soluciones de diseño personalizado',
        'Servicio discreto disponible',
        'Soporte a nivel conserje',
      ],
    },
  },
  'huntington-beach': {
    en: {
      description: 'Coastal roofing services in Huntington Beach, CA. Weather-resistant roofing for Surf City homes with oceanfront expertise.',
      longDescription: `Huntington Beach, known as Surf City USA, presents unique roofing challenges with its coastal location. S NEW ROOF provides specialized roofing services designed to withstand the salt air, ocean breezes, and sunny climate that define this iconic beach community.

Our Huntington Beach roofing services focus on using materials and techniques proven to perform in coastal environments. From beachside bungalows to inland estates, we've protected hundreds of Huntington Beach homes with quality roofing solutions.

Whether you need repairs from wind damage or a complete roof replacement, trust S NEW ROOF to deliver results that stand up to Huntington Beach's coastal conditions while maintaining your home's curb appeal.`,
      services: ['Roof Repair', 'Roof Replacement', 'Wind Damage Repair', 'Roof Inspection', 'Coastal Roofing', 'Deck Coatings'],
      highlights: [
        'Oceanfront property experts',
        'Wind damage specialists',
        'Salt air resistant materials',
        'Beach community experience',
        'Quick emergency response',
        'Deck and balcony coatings',
      ],
    },
    es: {
      description: 'Servicios de techos costeros en Huntington Beach, CA. Techos resistentes al clima para hogares de Surf City con experiencia en primera línea de mar.',
      longDescription: `Huntington Beach, conocida como Surf City USA, presenta desafíos únicos de techos con su ubicación costera. S NEW ROOF proporciona servicios especializados de techos diseñados para soportar el aire salado, brisas del océano y clima soleado que definen esta icónica comunidad playera.

Nuestros servicios de techos en Huntington Beach se enfocan en usar materiales y técnicas probados para funcionar en ambientes costeros. Desde bungalows junto a la playa hasta propiedades interiores, hemos protegido cientos de hogares de Huntington Beach con soluciones de techos de calidad.

Ya sea que necesite reparaciones por daños del viento o un reemplazo completo de techo, confíe en S NEW ROOF para entregar resultados que soporten las condiciones costeras de Huntington Beach mientras mantienen el atractivo visual de su hogar.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Reparación de Daños por Viento', 'Inspección de Techos', 'Techos Costeros', 'Recubrimientos de Deck'],
      highlights: [
        'Expertos en propiedades frente al mar',
        'Especialistas en daños por viento',
        'Materiales resistentes al aire salado',
        'Experiencia en comunidades playeras',
        'Respuesta rápida de emergencia',
        'Recubrimientos de deck y balcón',
      ],
    },
  },
  'tustin': {
    en: {
      description: 'Professional roofing services in Tustin, CA. Quality roof repair and installation for Tustin homes at fair prices.',
      longDescription: `Tustin homeowners have trusted S NEW ROOF for reliable roofing services for years. This charming Orange County city features a mix of established neighborhoods and newer developments, and we have experience working with the diverse roofing styles found throughout Tustin.

From Old Town Tustin to Tustin Ranch, our team understands the specific needs of local homeowners. We provide comprehensive roofing services that protect your investment and enhance your home's value.

Our commitment to quality craftsmanship and honest service has made us a preferred roofing contractor in Tustin. We treat every project with the attention to detail your home deserves.`,
      services: ['Roof Repair', 'Roof Replacement', 'Roof Inspection', 'Gutter Services', 'Tile Roofing', 'Shingle Roofing'],
      highlights: [
        'Old Town Tustin specialists',
        'Tustin Ranch experience',
        'Competitive pricing',
        'Fast project completion',
        'Clean job site guarantee',
        'Flexible financing options',
      ],
    },
    es: {
      description: 'Servicios profesionales de techos en Tustin, CA. Reparación e instalación de techos de calidad para hogares de Tustin a precios justos.',
      longDescription: `Los propietarios de Tustin han confiado en S NEW ROOF por servicios confiables de techos por años. Esta encantadora ciudad de Orange County cuenta con una mezcla de vecindarios establecidos y desarrollos más nuevos, y tenemos experiencia trabajando con los diversos estilos de techos encontrados en Tustin.

Desde Old Town Tustin hasta Tustin Ranch, nuestro equipo entiende las necesidades específicas de los propietarios locales. Proporcionamos servicios integrales de techos que protegen su inversión y mejoran el valor de su hogar.

Nuestro compromiso con la artesanía de calidad y servicio honesto nos ha convertido en un contratista de techos preferido en Tustin. Tratamos cada proyecto con la atención al detalle que su hogar merece.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Inspección de Techos', 'Servicios de Canaletas', 'Techos de Tejas', 'Techos de Tejas Asfálticas'],
      highlights: [
        'Especialistas en Old Town Tustin',
        'Experiencia en Tustin Ranch',
        'Precios competitivos',
        'Finalización rápida de proyectos',
        'Garantía de sitio de trabajo limpio',
        'Opciones de financiamiento flexible',
      ],
    },
  },
  'orange': {
    en: {
      description: 'Expert roofing services in Orange, CA. Professional roof solutions for Orange homes including historic Old Towne properties.',
      longDescription: `The City of Orange combines historic charm with modern living, and S NEW ROOF provides roofing services that respect both. From the historic homes in Old Towne Orange to the newer developments in Orange Park Acres, we deliver roofing solutions tailored to your property.

Old Towne Orange's historic district requires special care and attention to maintain architectural integrity. Our team has experience working with historic homes, ensuring that repairs and replacements complement your home's character while providing modern protection.

For all Orange homeowners, we offer comprehensive roofing services backed by quality materials and expert installation. Trust S NEW ROOF to protect your Orange home with results you can count on.`,
      services: ['Roof Repair', 'Roof Replacement', 'Historic Restoration', 'Roof Inspection', 'Tile Roofing', 'Chimney Flashing'],
      highlights: [
        'Old Towne Orange specialists',
        'Historic preservation expertise',
        'Architectural review compliant',
        'Chimney and flashing work',
        'Orange Park Acres service',
        'Detailed project documentation',
      ],
    },
    es: {
      description: 'Servicios expertos de techos en Orange, CA. Soluciones profesionales de techos para hogares de Orange incluyendo propiedades históricas de Old Towne.',
      longDescription: `La ciudad de Orange combina encanto histórico con vida moderna, y S NEW ROOF proporciona servicios de techos que respetan ambos. Desde los hogares históricos en Old Towne Orange hasta los desarrollos más nuevos en Orange Park Acres, entregamos soluciones de techos adaptadas a su propiedad.

El distrito histórico de Old Towne Orange requiere cuidado y atención especial para mantener la integridad arquitectónica. Nuestro equipo tiene experiencia trabajando con hogares históricos, asegurando que las reparaciones y reemplazos complementen el carácter de su hogar mientras proporcionan protección moderna.

Para todos los propietarios de Orange, ofrecemos servicios integrales de techos respaldados por materiales de calidad e instalación experta. Confíe en S NEW ROOF para proteger su hogar en Orange con resultados en los que puede confiar.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Restauración Histórica', 'Inspección de Techos', 'Techos de Tejas', 'Flashing de Chimenea'],
      highlights: [
        'Especialistas en Old Towne Orange',
        'Experiencia en preservación histórica',
        'Cumplimiento de revisión arquitectónica',
        'Trabajo de chimenea y flashing',
        'Servicio en Orange Park Acres',
        'Documentación detallada del proyecto',
      ],
    },
  },
  'westminster': {
    en: {
      description: 'Reliable roofing services in Westminster, CA. Affordable roof repair and replacement for Westminster homes and businesses.',
      longDescription: `S NEW ROOF is proud to serve Westminster homeowners with quality roofing services at competitive prices. This diverse Orange County community includes a range of home styles, from mid-century houses to newer constructions, and we have experience with all of them.

Our Westminster roofing team provides thorough inspections, honest assessments, and quality workmanship. We understand that your home is a significant investment, and we're committed to helping you protect it with reliable roofing solutions.

Whether you need emergency repairs after a storm or are planning a roof replacement, S NEW ROOF delivers results Westminster homeowners can trust. Our local reputation is built on satisfied customers throughout the city.`,
      services: ['Roof Repair', 'Roof Replacement', 'Emergency Services', 'Roof Inspection', 'Flat Roof Systems', 'Gutter Installation'],
      highlights: [
        'Affordable Westminster pricing',
        'Vietnamese-speaking staff available',
        'Multi-unit discounts',
        'Senior citizen discounts',
        'Same-week appointments',
        'Extended warranty options',
      ],
    },
    es: {
      description: 'Servicios confiables de techos en Westminster, CA. Reparación y reemplazo de techos asequibles para hogares y negocios de Westminster.',
      longDescription: `S NEW ROOF está orgulloso de servir a los propietarios de Westminster con servicios de techos de calidad a precios competitivos. Esta diversa comunidad de Orange County incluye una variedad de estilos de hogares, desde casas de mediados de siglo hasta construcciones más nuevas, y tenemos experiencia con todas ellas.

Nuestro equipo de techos en Westminster proporciona inspecciones completas, evaluaciones honestas y calidad de trabajo. Entendemos que su hogar es una inversión significativa, y estamos comprometidos a ayudarle a protegerlo con soluciones de techos confiables.

Ya sea que necesite reparaciones de emergencia después de una tormenta o esté planeando un reemplazo de techo, S NEW ROOF entrega resultados en los que los propietarios de Westminster pueden confiar. Nuestra reputación local está construida sobre clientes satisfechos en toda la ciudad.`,
      services: ['Reparación de Techos', 'Reemplazo de Techos', 'Servicios de Emergencia', 'Inspección de Techos', 'Sistemas de Techos Planos', 'Instalación de Canaletas'],
      highlights: [
        'Precios asequibles en Westminster',
        'Personal que habla vietnamita disponible',
        'Descuentos en múltiples unidades',
        'Descuentos para personas mayores',
        'Citas en la misma semana',
        'Opciones de garantía extendida',
      ],
    },
  },
};

// Helper functions
export function getTranslatedService(slug: string, language: Language) {
  return serviceTranslations[slug]?.[language] || serviceTranslations[slug]?.en;
}

export function getTranslatedLocation(slug: string, language: Language) {
  return locationTranslations[slug]?.[language] || locationTranslations[slug]?.en;
}
