export interface RoofingType {
  slug: string;
  name: string;
  nameEs: string;
  shortDescription: string;
  shortDescriptionEs: string;
  description: string;
  descriptionEs: string;
  longDescription: string;
  longDescriptionEs: string;
  features: string[];
  featuresEs: string[];
  benefits: string[];
  benefitsEs: string[];
  materials: { name: string; nameEs: string; description: string; descriptionEs: string }[];
  process: { step: number; title: string; titleEs: string; description: string; descriptionEs: string }[];
  faqs: { question: string; questionEs: string; answer: string; answerEs: string }[];
  image: string;
  lifespan: string;
  priceRange: string;
}

export const roofingTypes: RoofingType[] = [
  {
    slug: 'asphalt-shingle-roofing',
    name: 'Asphalt Shingle Roofing',
    nameEs: 'Techos de Tejas Asfálticas',
    shortDescription: 'Affordable, versatile roofing with wide style options for every home.',
    shortDescriptionEs: 'Techos asequibles y versátiles con muchas opciones de estilo.',
    description: 'Professional asphalt shingle roofing services in Orange County. Wide selection of styles and colors, affordable pricing, and expert installation.',
    descriptionEs: 'Servicios profesionales de techos de tejas asfálticas en el Condado de Orange. Amplia selección de estilos y colores, precios asequibles e instalación experta.',
    longDescription: `Asphalt shingles remain the most popular roofing material in America, and for good reason. They offer excellent value, versatility, and reliable performance at an affordable price point. S NEW ROOF provides expert asphalt shingle roofing services using quality products from leading manufacturers like GAF, Owens Corning, and CertainTeed.

Modern asphalt shingles come in a wide variety of styles and colors. From traditional 3-tab shingles to architectural and designer shingles that mimic the look of wood shake or slate, there's an option for every home style and budget. Architectural shingles provide enhanced durability and a dimensional look that adds curb appeal.

Quality installation is critical for shingle roof performance. Our certified crews follow manufacturer specifications and industry best practices for nail placement, underlayment, flashing, and ventilation. This attention to detail ensures your shingle roof performs well for its expected lifespan of 20-30 years.

As a GAF Master Elite Contractor, we can offer extended warranty coverage that protects your investment. Combined with our workmanship warranty, you'll have complete peace of mind knowing your roof is built to last.`,
    longDescriptionEs: `Las tejas asfálticas siguen siendo el material de techado más popular en América, y por buena razón. Ofrecen excelente valor, versatilidad y rendimiento confiable a un precio asequible. S NEW ROOF proporciona servicios expertos de techos de tejas asfálticas utilizando productos de calidad de fabricantes líderes como GAF, Owens Corning y CertainTeed.

Las tejas asfálticas modernas vienen en una amplia variedad de estilos y colores. Desde las tejas tradicionales de 3 pestañas hasta las tejas arquitectónicas y de diseñador que imitan el aspecto de la madera o la pizarra, hay una opción para cada estilo de hogar y presupuesto.

Como Contratista Master Elite de GAF, podemos ofrecer cobertura de garantía extendida que protege su inversión. Combinado con nuestra garantía de mano de obra, tendrá total tranquilidad sabiendo que su techo está construido para durar.`,
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
    featuresEs: [
      'Instalación de tejas de 3 pestañas',
      'Tejas arquitectónicas',
      'Opciones de tejas de diseñador',
      'Tejas resistentes al impacto',
      'Tejas de techo fresco',
      'Sistemas de ventilación adecuados',
      'Subcapa de calidad',
      'Instalación de flashing',
    ],
    benefits: [
      'Most affordable roofing option',
      'Wide variety of styles and colors',
      '20-30 year lifespan',
      'Easy and affordable repairs',
      'Good fire resistance (Class A)',
      'Manufacturer warranties up to 50 years',
    ],
    benefitsEs: [
      'Opción de techo más asequible',
      'Amplia variedad de estilos y colores',
      'Vida útil de 20-30 años',
      'Reparaciones fáciles y económicas',
      'Buena resistencia al fuego (Clase A)',
      'Garantías del fabricante hasta 50 años',
    ],
    materials: [
      { name: '3-Tab Shingles', nameEs: 'Tejas de 3 Pestañas', description: 'Classic, economical option with flat, uniform appearance.', descriptionEs: 'Opción clásica y económica con apariencia plana y uniforme.' },
      { name: 'Architectural Shingles', nameEs: 'Tejas Arquitectónicas', description: 'Dimensional look with enhanced durability and wind resistance.', descriptionEs: 'Aspecto dimensional con mayor durabilidad y resistencia al viento.' },
      { name: 'Designer Shingles', nameEs: 'Tejas de Diseñador', description: 'Premium options mimicking slate, wood shake, or tile.', descriptionEs: 'Opciones premium que imitan pizarra, madera o tejas.' },
    ],
    process: [
      { step: 1, title: 'Consultation', titleEs: 'Consultoría', description: 'Choose from a variety of shingle styles and colors.', descriptionEs: 'Elija entre una variedad de estilos y colores de tejas.' },
      { step: 2, title: 'Preparation', titleEs: 'Preparación', description: 'Old roofing removed and deck inspected for damage.', descriptionEs: 'Se retira el techo viejo y se inspecciona la cubierta.' },
      { step: 3, title: 'Underlayment', titleEs: 'Subcapa', description: 'Quality underlayment and ice/water shield installed.', descriptionEs: 'Se instala subcapa de calidad y escudo de hielo/agua.' },
      { step: 4, title: 'Installation', titleEs: 'Instalación', description: 'Shingles installed per manufacturer specifications.', descriptionEs: 'Tejas instaladas según especificaciones del fabricante.' },
      { step: 5, title: 'Completion', titleEs: 'Finalización', description: 'Flashing, ridge caps, and ventilation completed.', descriptionEs: 'Se completa flashing, cumbreras y ventilación.' },
    ],
    faqs: [
      { question: 'How long do asphalt shingles last?', questionEs: '¿Cuánto duran las tejas asfálticas?', answer: 'Quality asphalt shingles typically last 20-30 years, with premium architectural shingles lasting up to 50 years. Proper installation and ventilation are key to maximizing lifespan.', answerEs: 'Las tejas asfálticas de calidad típicamente duran 20-30 años, con tejas arquitectónicas premium durando hasta 50 años. La instalación y ventilación adecuadas son clave para maximizar la vida útil.' },
      { question: 'What is the difference between 3-tab and architectural shingles?', questionEs: '¿Cuál es la diferencia entre tejas de 3 pestañas y arquitectónicas?', answer: '3-tab shingles are flat with a uniform appearance and lower cost. Architectural shingles are thicker with a dimensional look, better durability, and longer warranties.', answerEs: 'Las tejas de 3 pestañas son planas con apariencia uniforme y menor costo. Las tejas arquitectónicas son más gruesas con aspecto dimensional, mejor durabilidad y garantías más largas.' },
      { question: 'Are asphalt shingles good for California climate?', questionEs: '¿Son buenas las tejas asfálticas para el clima de California?', answer: 'Yes, asphalt shingles perform well in California. Cool roof options are available that reflect solar heat, reducing cooling costs. Impact-resistant options handle occasional storms.', answerEs: 'Sí, las tejas asfálticas funcionan bien en California. Hay opciones de techo fresco que reflejan el calor solar, reduciendo costos de enfriamiento. Opciones resistentes al impacto manejan tormentas ocasionales.' },
    ],
    image: '/shingle-roof.png',
    lifespan: '20-30 years',
    priceRange: '$$',
  },
  {
    slug: 'clay-tile-roofing',
    name: 'Clay Tile Roofing',
    nameEs: 'Techos de Tejas de Arcilla',
    shortDescription: 'Beautiful, timeless roofing with exceptional durability and Mediterranean charm.',
    shortDescriptionEs: 'Techos hermosos y atemporales con durabilidad excepcional y encanto mediterráneo.',
    description: 'Expert clay tile roofing services in Orange County. Installation, repair, and maintenance for clay tile roofs. Built for California climate with 50+ year lifespan.',
    descriptionEs: 'Servicios expertos de techos de tejas de arcilla en el Condado de Orange. Instalación, reparación y mantenimiento. Construidos para el clima de California con vida útil de más de 50 años.',
    longDescription: `Clay tile roofing has been used for centuries and remains one of the most beautiful and durable roofing options available. The distinctive Mediterranean look of clay tiles complements many Southern California homes, from Spanish Colonial to Italianate and modern designs.

Clay tiles offer exceptional longevity, with many roofs lasting 50-100 years or more. The tiles themselves are extremely durable, resistant to fire, insects, and rot. While the underlayment may need replacement after 20-30 years, the tiles can be reused, making clay tile an environmentally sustainable choice.

The natural thermal properties of clay help regulate indoor temperatures, reducing cooling costs in warm climates like Orange County. Clay tiles are also recyclable at the end of their long life, further reducing environmental impact.

Installation of clay tile roofing requires specialized expertise. Proper fastening, spacing, and overlap are critical for performance. Our experienced installers follow manufacturer specifications and industry best practices to ensure your clay tile roof provides decades of protection and beauty.`,
    longDescriptionEs: `Los techos de tejas de arcilla se han utilizado durante siglos y siguen siendo una de las opciones de techado más hermosas y duraderas disponibles. El distintivo aspecto mediterráneo de las tejas de arcilla complementa muchos hogares del sur de California.

Las tejas de arcilla ofrecen una longevidad excepcional, con muchos techos durando 50-100 años o más. Las tejas en sí son extremadamente duraderas, resistentes al fuego, insectos y podredumbre. Las propiedades térmicas naturales de la arcilla ayudan a regular las temperaturas interiores, reduciendo los costos de enfriamiento.`,
    features: [
      'Spanish S-tile installation',
      'Mission barrel tile',
      'Flat clay tile options',
      'Tile roof repair',
      'Broken tile replacement',
      'Underlayment replacement',
      'Valley and flashing work',
      'Ridge and hip installation',
    ],
    featuresEs: [
      'Instalación de tejas S españolas',
      'Tejas barril misión',
      'Opciones de tejas planas de arcilla',
      'Reparación de techo de tejas',
      'Reemplazo de tejas rotas',
      'Reemplazo de subcapa',
      'Trabajo de valles y flashing',
      'Instalación de crestas y caderas',
    ],
    benefits: [
      '50-100+ year lifespan',
      'Class A fire resistance',
      'Superior wind resistance',
      'Excellent energy efficiency',
      'Low maintenance',
      'Increases home value significantly',
      'Environmentally sustainable',
    ],
    benefitsEs: [
      'Vida útil de 50-100+ años',
      'Resistencia al fuego Clase A',
      'Superior resistencia al viento',
      'Excelente eficiencia energética',
      'Bajo mantenimiento',
      'Aumenta significativamente el valor del hogar',
      'Ambientalmente sostenible',
    ],
    materials: [
      { name: 'Spanish S-Tile', nameEs: 'Teja S Española', description: 'Classic wavy profile for authentic Mediterranean look.', descriptionEs: 'Perfil ondulado clásico para un look mediterráneo auténtico.' },
      { name: 'Mission Barrel Tile', nameEs: 'Teja Barril Misión', description: 'Semi-cylindrical shape creating distinctive shadow lines.', descriptionEs: 'Forma semicilíndrica que crea líneas de sombra distintivas.' },
      { name: 'Flat Clay Tile', nameEs: 'Teja Plana de Arcilla', description: 'Sleek, modern appearance with clean lines.', descriptionEs: 'Apariencia elegante y moderna con líneas limpias.' },
    ],
    process: [
      { step: 1, title: 'Consultation', titleEs: 'Consultoría', description: 'Review your home\'s style and discuss tile options.', descriptionEs: 'Revisamos el estilo de su hogar y discutimos opciones de tejas.' },
      { step: 2, title: 'Structural Assessment', titleEs: 'Evaluación Estructural', description: 'Verify roof structure can support tile weight.', descriptionEs: 'Verificamos que la estructura del techo soporte el peso de las tejas.' },
      { step: 3, title: 'Preparation', titleEs: 'Preparación', description: 'Proper underlayment installation and deck preparation.', descriptionEs: 'Instalación adecuada de subcapa y preparación de la cubierta.' },
      { step: 4, title: 'Installation', titleEs: 'Instalación', description: 'Expert tile installation following manufacturer guidelines.', descriptionEs: 'Instalación experta de tejas siguiendo las directrices del fabricante.' },
      { step: 5, title: 'Completion', titleEs: 'Finalización', description: 'Final inspection and cleanup.', descriptionEs: 'Inspección final y limpieza.' },
    ],
    faqs: [
      { question: 'Is my home suitable for clay tile roofing?', questionEs: '¿Es mi hogar adecuado para techo de tejas de arcilla?', answer: 'Clay tiles are heavier than other roofing materials. We assess your home\'s structural capacity during consultation. Most homes built for tile roofs can accommodate them without modification.', answerEs: 'Las tejas de arcilla son más pesadas que otros materiales de techado. Evaluamos la capacidad estructural de su hogar durante la consulta. La mayoría de los hogares construidos para techos de tejas pueden acomodarlos sin modificación.' },
      { question: 'How long does a clay tile roof last?', questionEs: '¿Cuánto dura un techo de tejas de arcilla?', answer: 'Clay tiles can last 50-100+ years. The underlayment may need replacement after 20-30 years, but the tiles themselves are extremely durable and can be reused.', answerEs: 'Las tejas de arcilla pueden durar 50-100+ años. La subcapa puede necesitar reemplazo después de 20-30 años, pero las tejas en sí son extremadamente duraderas y pueden reutilizarse.' },
      { question: 'Are clay tiles expensive?', questionEs: '¿Son caras las tejas de arcilla?', answer: 'Clay tile roofing has a higher upfront cost than asphalt shingles but offers superior longevity. Over the life of the roof, clay can be more cost-effective due to its exceptional lifespan and low maintenance.', answerEs: 'El techo de tejas de arcilla tiene un costo inicial más alto que las tejas asfálticas pero ofrece longevidad superior. Durante la vida útil del techo, la arcilla puede ser más rentable debido a su vida útil excepcional y bajo mantenimiento.' },
    ],
    image: '/tile-roof.png',
    lifespan: '50-100+ years',
    priceRange: '$$$',
  },
  {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    nameEs: 'Techos de Metal',
    shortDescription: 'Premium, energy-efficient roofing with exceptional durability and modern aesthetics.',
    shortDescriptionEs: 'Techos premium y energéticamente eficientes con durabilidad excepcional y estética moderna.',
    description: 'Professional metal roofing services in Orange County. Steel, aluminum, and copper options. Energy-efficient, fire-resistant, and built to last 50+ years.',
    descriptionEs: 'Servicios profesionales de techos de metal en el Condado de Orange. Opciones de acero, aluminio y cobre. Eficientes energéticamente, resistentes al fuego y construidos para durar más de 50 años.',
    longDescription: `Metal roofing has become increasingly popular for Orange County homeowners seeking exceptional durability, energy efficiency, and modern aesthetics. Today's metal roofs offer sleek, contemporary looks or classic styles that complement any architectural design.

Metal roofs are incredibly durable, withstanding high winds, heavy rain, and even hail. They're non-combustible, providing excellent fire protection for your home. Many insurance companies offer discounts for homes with metal roofs due to their superior resistance to damage.

One of the biggest advantages of metal roofing is energy efficiency. Metal roofs reflect solar radiant heat, which can reduce cooling costs by 10-25%. Cool roof coatings and lighter colors further enhance this benefit, making metal an excellent choice for California's warm climate.

With proper installation, a metal roof can last 40-70 years or more with minimal maintenance. Available in various materials including steel, aluminum, copper, and zinc, metal roofs offer options for every budget and aesthetic preference.`,
    longDescriptionEs: `Los techos de metal se han vuelto cada vez más populares para los propietarios del Condado de Orange que buscan durabilidad excepcional, eficiencia energética y estética moderna. Los techos de metal de hoy ofrecen looks contemporáneos elegantes o estilos clásicos que complementan cualquier diseño arquitectónico.

Los techos de metal son increíblemente duraderos, soportando vientos fuertes, lluvias intensas e incluso granizo. Son no combustibles, proporcionando excelente protección contra incendios para su hogar.`,
    features: [
      'Standing seam metal roofing',
      'Metal shingles and tiles',
      'Steel roofing systems',
      'Aluminum roofing',
      'Copper roofing',
      'Cool roof coatings',
      'Proper ventilation integration',
      'Custom color options',
    ],
    featuresEs: [
      'Techos de metal con costura elevada',
      'Tejas y baldosas de metal',
      'Sistemas de techado de acero',
      'Techos de aluminio',
      'Techos de cobre',
      'Recubrimientos de techo fresco',
      'Integración de ventilación adecuada',
      'Opciones de color personalizadas',
    ],
    benefits: [
      '40-70+ year lifespan',
      'Class A fire resistance',
      '140+ mph wind resistance',
      '10-25% energy savings',
      'Low maintenance',
      'Lightweight yet strong',
      'Environmentally friendly',
    ],
    benefitsEs: [
      'Vida útil de 40-70+ años',
      'Resistencia al fuego Clase A',
      'Resistencia al viento de más de 140 mph',
      'Ahorro de energía del 10-25%',
      'Bajo mantenimiento',
      'Ligero pero fuerte',
      'Amigable con el medio ambiente',
    ],
    materials: [
      { name: 'Steel', nameEs: 'Acero', description: 'Most common metal roofing. Durable with protective coatings.', descriptionEs: 'Techado de metal más común. Duradero con recubrimientos protectores.' },
      { name: 'Aluminum', nameEs: 'Aluminio', description: 'Lightweight, naturally corrosion-resistant, ideal for coastal areas.', descriptionEs: 'Ligero, naturalmente resistente a la corrosión, ideal para áreas costeras.' },
      { name: 'Copper', nameEs: 'Cobre', description: 'Premium option that develops beautiful patina over time.', descriptionEs: 'Opción premium que desarrolla una hermosa pátina con el tiempo.' },
    ],
    process: [
      { step: 1, title: 'Consultation', titleEs: 'Consultoría', description: 'Choose metal type, profile, and color for your home.', descriptionEs: 'Elija el tipo de metal, perfil y color para su hogar.' },
      { step: 2, title: 'Measurement', titleEs: 'Medición', description: 'Precise measurements for custom fabrication.', descriptionEs: 'Mediciones precisas para fabricación personalizada.' },
      { step: 3, title: 'Preparation', titleEs: 'Preparación', description: 'Deck inspection and underlayment installation.', descriptionEs: 'Inspección de cubierta e instalación de subcapa.' },
      { step: 4, title: 'Installation', titleEs: 'Instalación', description: 'Professional metal panel or shingle installation.', descriptionEs: 'Instalación profesional de paneles o tejas de metal.' },
      { step: 5, title: 'Completion', titleEs: 'Finalización', description: 'Trim, flashing, and final inspection.', descriptionEs: 'Guarnición, flashing e inspección final.' },
    ],
    faqs: [
      { question: 'Are metal roofs noisy when it rains?', questionEs: '¿Son ruidosos los techos de metal cuando llueve?', answer: 'Modern metal roofs with proper insulation and solid sheathing are no noisier than other roofing types. In fact, many homeowners enjoy the gentle sound of rain on a metal roof.', answerEs: 'Los techos de metal modernos con aislamiento adecuado y entablado sólido no son más ruidosos que otros tipos de techado. De hecho, muchos propietarios disfrutan del suave sonido de la lluvia en un techo de metal.' },
      { question: 'Do metal roofs attract lightning?', questionEs: '¿Los techos de metal atraen rayos?', answer: 'Metal roofs do not attract lightning. In fact, they\'re safer because metal is non-combustible and can dissipate a lightning strike safely if one does occur.', answerEs: 'Los techos de metal no atraen rayos. De hecho, son más seguros porque el metal es no combustible y puede disipar un rayo de manera segura si ocurre uno.' },
      { question: 'Is metal roofing energy efficient?', questionEs: '¿Es eficiente energéticamente el techado de metal?', answer: 'Yes! Metal roofs reflect solar heat, reducing cooling costs by 10-25%. Cool roof coatings and lighter colors enhance this benefit, making metal ideal for California\'s climate.', answerEs: '¡Sí! Los techos de metal reflejan el calor solar, reduciendo los costos de enfriamiento en un 10-25%. Los recubrimientos de techo fresco y colores claros mejoran este beneficio.' },
    ],
    image: '/roofing-team.png',
    lifespan: '40-70+ years',
    priceRange: '$$$',
  },
  {
    slug: 'flat-roofing',
    name: 'Flat Roofing',
    nameEs: 'Techos Planos',
    shortDescription: 'Specialized flat roof solutions for modern homes and commercial properties.',
    shortDescriptionEs: 'Soluciones especializadas de techos planos para hogares modernos y propiedades comerciales.',
    description: 'Expert flat roofing services in Orange County. TPO, modified bitumen, and built-up roofing systems. Proper drainage and long-lasting protection.',
    descriptionEs: 'Servicios expertos de techos planos en el Condado de Orange. Sistemas TPO, modificado bituminoso y construido en el lugar. Drenaje adecuado y protección duradera.',
    longDescription: `Flat roofing requires specialized knowledge and materials to ensure proper water drainage and long-term performance. S NEW ROOF provides expert flat roofing services for residential and commercial properties throughout Orange County.

Modern flat roofing systems have evolved significantly, offering excellent durability and weather resistance. We work with multiple flat roofing technologies including TPO (thermoplastic polyolefin), modified bitumen, and built-up roofing systems, recommending the best solution for your specific needs.

Proper drainage is critical for flat roofs. We design and install systems that ensure water flows properly to drains, preventing ponding that can lead to premature deterioration. This includes tapered insulation systems and strategically placed drains.

Flat roofs offer advantages including easier maintenance access, space for HVAC equipment, and potential for rooftop decks or solar installations. Our flat roofing solutions are designed to maximize these benefits while providing reliable, long-lasting protection.`,
    longDescriptionEs: `El techado plano requiere conocimiento especializado y materiales para garantizar el drenaje adecuado de agua y rendimiento a largo plazo. S NEW ROOF proporciona servicios expertos de techos planos para propiedades residenciales y comerciales en todo el Condado de Orange.

Los sistemas modernos de techado plano han evolucionado significativamente, ofreciendo excelente durabilidad y resistencia al clima. Trabajamos con múltiples tecnologías incluyendo TPO, modificado bituminoso y sistemas construidos en el lugar.`,
    features: [
      'TPO roofing systems',
      'Modified bitumen',
      'Built-up roofing (BUR)',
      'EPDM rubber roofing',
      'Coating systems',
      'Tapered insulation',
      'Drainage solutions',
      'Skylight integration',
    ],
    featuresEs: [
      'Sistemas de techado TPO',
      'Modificado bituminoso',
      'Techado construido (BUR)',
      'Techado de goma EPDM',
      'Sistemas de recubrimiento',
      'Aislamiento cónico',
      'Soluciones de drenaje',
      'Integración de tragaluces',
    ],
    benefits: [
      '15-30 year lifespan',
      'Excellent waterproofing',
      'Cost-effective for large areas',
      'Space for HVAC equipment',
      'Potential for rooftop deck',
      'Solar-ready installation',
      'Easy maintenance access',
    ],
    benefitsEs: [
      'Vida útil de 15-30 años',
      'Excelente impermeabilización',
      'Rentable para áreas grandes',
      'Espacio para equipos HVAC',
      'Potencial para terraza en el techo',
      'Instalación lista para solar',
      'Fácil acceso para mantenimiento',
    ],
    materials: [
      { name: 'TPO', nameEs: 'TPO', description: 'Single-ply membrane, energy-efficient, white reflective surface.', descriptionEs: 'Membrana de una sola capa, eficiente energéticamente, superficie reflectiva blanca.' },
      { name: 'Modified Bitumen', nameEs: 'Modificado Bituminoso', description: 'Multi-layer system with excellent durability and flexibility.', descriptionEs: 'Sistema de múltiples capas con excelente durabilidad y flexibilidad.' },
      { name: 'Built-Up Roofing', nameEs: 'Techado Construido', description: 'Traditional multi-ply system with proven reliability.', descriptionEs: 'Sistema tradicional de múltiples capas con confiabilidad comprobada.' },
    ],
    process: [
      { step: 1, title: 'Inspection', titleEs: 'Inspección', description: 'Comprehensive assessment of existing roof condition.', descriptionEs: 'Evaluación integral de la condición del techo existente.' },
      { step: 2, title: 'Design', titleEs: 'Diseño', description: 'Proper drainage design and material selection.', descriptionEs: 'Diseño de drenaje adecuado y selección de materiales.' },
      { step: 3, title: 'Preparation', titleEs: 'Preparación', description: 'Surface preparation and insulation installation.', descriptionEs: 'Preparación de superficie e instalación de aislamiento.' },
      { step: 4, title: 'Installation', titleEs: 'Instalación', description: 'Professional membrane or system installation.', descriptionEs: 'Instalación profesional de membrana o sistema.' },
      { step: 5, title: 'Completion', titleEs: 'Finalización', description: 'Flashing, drains, and final inspection.', descriptionEs: 'Flashing, drenajes e inspección final.' },
    ],
    faqs: [
      { question: 'How long do flat roofs last?', questionEs: '¿Cuánto duran los techos planos?', answer: 'Modern flat roofing systems last 15-30 years depending on the material. TPO and modified bitumen systems typically offer the best longevity when properly installed.', answerEs: 'Los sistemas modernos de techado plano duran 15-30 años dependiendo del material. Los sistemas TPO y modificado bituminoso típicamente ofrecen la mejor longevidad cuando se instalan correctamente.' },
      { question: 'Do flat roofs leak more than pitched roofs?', questionEs: '¿Los techos planos gotean más que los techos inclinados?', answer: 'Not when properly installed. Modern flat roofing materials and proper drainage design prevent ponding and leaks. Regular maintenance ensures long-term performance.', answerEs: 'No cuando se instalan correctamente. Los materiales modernos de techado plano y el diseño de drenaje adecuado previenen estancamiento y fugas. El mantenimiento regular garantiza rendimiento a largo plazo.' },
      { question: 'Can I use my flat roof as a deck?', questionEs: '¿Puedo usar mi techo plano como terraza?', answer: 'Yes, with proper planning. We can install systems designed for foot traffic and create a rooftop deck. This requires additional structural considerations and specialized materials.', answerEs: 'Sí, con la planificación adecuada. Podemos instalar sistemas diseñados para tráfico peatonal y crear una terraza en el techo. Esto requiere consideraciones estructurales adicionales y materiales especializados.' },
    ],
    image: '/flat-roof.png',
    lifespan: '15-30 years',
    priceRange: '$$',
  },
];

export function getRoofingTypeBySlug(slug: string): RoofingType | undefined {
  return roofingTypes.find((type) => type.slug === slug);
}

export function getAllRoofingTypeSlugs(): string[] {
  return roofingTypes.map((type) => type.slug);
}
