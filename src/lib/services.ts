export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'roof-repair',
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
      'Maintain your home\'s value',
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
      { question: 'How long does a roof repair take?', answer: 'Most repairs are completed in one day. More extensive damage may require additional time, which we\'ll discuss during the inspection.' },
      { question: 'Can you repair my roof in the rain?', answer: 'For emergency situations, we can perform temporary repairs to stop water intrusion. Permanent repairs are best done in dry conditions.' },
      { question: 'Is roof repair covered by insurance?', answer: 'If damage is caused by a covered event like a storm, insurance typically covers repairs. We work with insurance companies and can help with the claims process.' },
    ],
    image: '/hero-bg.png',
    icon: 'Wrench',
  },
  {
    slug: 'roof-replacement',
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
      'Increase your home\'s value',
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
      { question: 'How do I know if I need a roof replacement?', answer: 'Signs include age over 20 years, multiple leaks, extensive granule loss, curling or missing shingles, and sagging. We\'ll provide an honest assessment during your free inspection.' },
      { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements are completed in 1-3 days, depending on size and complexity. We\'ll provide a specific timeline during your consultation.' },
      { question: 'What materials do you recommend?', answer: 'We recommend materials based on your home\'s style, budget, and performance needs. Options include asphalt shingles, tile, and metal—all available in various styles and price points.' },
      { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options to make your new roof affordable. Ask about our current financing promotions during your consultation.' },
    ],
    image: '/hero-bg.png',
    icon: 'Home',
  },
  {
    slug: 'emergency-leak-repair',
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
    image: '/hero-bg.png',
    icon: 'AlertTriangle',
  },
  {
    slug: 'roof-inspection',
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
      { question: 'How often should I have my roof inspected?', answer: 'We recommend inspections every 1-2 years, plus after any major storm. Regular inspections catch problems early when they\'re easier and less expensive to fix.' },
      { question: 'Is the inspection really free?', answer: 'Yes, we offer free roof inspections for homeowners in our service area. There\'s no obligation and no pressure—just honest information about your roof\'s condition.' },
      { question: 'What if you find problems?', answer: 'We\'ll explain exactly what we found and provide a written estimate for any recommended repairs. You decide what work to have done, if any.' },
      { question: 'Do you inspect all types of roofs?', answer: 'Yes, our inspectors are experienced with all roofing materials including shingle, tile, metal, and flat roof systems.' },
    ],
    image: '/hero-bg.png',
    icon: 'Search',
  },
  {
    slug: 'storm-damage-repair',
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
      { question: 'Should I call my insurance company or you first?', answer: 'Call us first for an inspection. We\'ll document the damage and help you determine if filing a claim makes sense. We can then support you through the claims process.' },
      { question: 'Will my insurance rates go up if I file a claim?', answer: 'Storm damage claims are typically considered "acts of God" and shouldn\'t raise your rates. However, we recommend checking with your insurance provider about your specific policy.' },
      { question: 'How long do I have to file a claim?', answer: 'Time limits vary by policy and insurance company. Most policies require claims to be filed within 60-180 days. Contact us quickly to ensure you meet all deadlines.' },
      { question: 'Can you work with my insurance adjuster?', answer: 'Yes, we regularly meet with insurance adjusters to ensure all damage is properly documented and included in the claim. We advocate for you throughout the process.' },
    ],
    image: '/hero-bg.png',
    icon: 'CloudRain',
  },
  {
    slug: 'tile-roofing',
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
      { step: 1, title: 'Consultation', description: 'Review your home\'s style and discuss tile options.' },
      { step: 2, title: 'Selection', description: 'Choose from clay or concrete tiles in various styles and colors.' },
      { step: 3, title: 'Preparation', description: 'Proper underlayment installation and deck preparation.' },
      { step: 4, title: 'Installation', description: 'Expert tile installation following manufacturer guidelines.' },
      { step: 5, title: 'Completion', description: 'Final inspection and cleanup.' },
    ],
    faqs: [
      { question: 'Is a tile roof right for my home?', answer: 'Tile roofs work well on homes with adequate structural support due to their weight. During your consultation, we\'ll assess your home\'s suitability and discuss all options.' },
      { question: 'How long does a tile roof last?', answer: 'Properly installed tile roofs can last 50-100 years. The tiles themselves are extremely durable, though the underlayment may need replacement after 20-30 years.' },
      { question: 'Can you repair my existing tile roof?', answer: 'Yes, we repair all types of tile roofs. We can match existing tiles and address underlying issues to extend your roof\'s life.' },
      { question: 'Are tile roofs expensive?', answer: 'Tile roofs have a higher upfront cost than asphalt shingles but offer superior longevity. Over the life of the roof, tile can be more cost-effective due to its long lifespan and low maintenance needs.' },
    ],
    image: '/hero-bg.png',
    icon: 'Layers',
  },
  {
    slug: 'shingle-roofing',
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
      { question: 'What\'s the difference between 3-tab and architectural shingles?', answer: '3-tab shingles are flat with a uniform appearance. Architectural shingles are thicker with a dimensional look that adds depth and character. Architectural shingles generally offer better durability and longer warranties.' },
      { question: 'Can shingles be installed over my existing roof?', answer: 'While sometimes possible, we generally recommend removing old roofing to inspect the deck and ensure proper installation. This approach also avoids voiding manufacturer warranties.' },
      { question: 'Do you offer cool roof shingles?', answer: 'Yes, we offer cool roof shingles that reflect more solar energy, helping reduce cooling costs and improving comfort in warm climates like Orange County.' },
    ],
    image: '/hero-bg.png',
    icon: 'Sun',
  },
  {
    slug: 'gutter-services',
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
      { question: 'What size gutters do I need?', answer: 'Standard 5" gutters work well for most homes. Larger homes or steep roofs may benefit from 6" gutters. We\'ll recommend the appropriate size during your consultation.' },
      { question: 'Can you match my existing gutters?', answer: 'Yes, we offer gutters in various colors and materials to match or complement your home\'s exterior.' },
    ],
    image: '/hero-bg.png',
    icon: 'Droplets',
  },
  {
    slug: 'skylight-services',
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
      { step: 1, title: 'Consultation', description: 'Assess your home\'s structure and discuss skylight options.' },
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
    image: '/hero-bg.png',
    icon: 'Lightbulb',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
