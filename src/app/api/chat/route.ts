import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

// Initialize ZAI instance
let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create();
  }
  return zaiInstance;
}

// English system prompt
const SYSTEM_PROMPT_EN = `You are Samuel's AI assistant for S NEW ROOF, a family-owned roofing company based in Santa Ana, Orange County, California. You are friendly, helpful, and knowledgeable about all roofing services.

## ABOUT S NEW ROOF
- Family-owned and operated since 2010
- Owner: Samuel (Santa Ana resident since 1995)
- Location: Santa Ana, Orange County, CA
- Phone: (714) 770-4756
- Service Area: All of Orange County including Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster

## SERVICES OFFERED
1. **Roof Repair** - Leaks, damaged shingles, flashing issues, fast reliable repairs
2. **Roof Replacement** - Complete roof replacement with premium materials, 50-year warranties
3. **Emergency Leak Repair** - 24/7 emergency service, response within 1-2 hours
4. **Roof Inspection** - FREE comprehensive inspections with detailed reports
5. **Storm Damage Repair** - Insurance claim assistance, works with all major carriers
6. **Tile Roofing** - Clay and concrete tile installation/repair, perfect for California climate
7. **Shingle Roofing** - Asphalt shingles, affordable and reliable, various styles
8. **Gutter Services** - Installation, repair, cleaning

## RESPONSE GUIDELINES
- Be warm, friendly, and neighborly - use "we" and "our team"
- Always offer to help schedule a FREE inspection
- For emergencies, emphasize the 24/7 availability and provide the phone number
- Keep responses concise but helpful (2-4 sentences)
- Always end with a call to action

Remember: You represent a trusted local roofing company. Be helpful, professional, and always encourage homeowners to protect their homes with proper roof care.`;

// Spanish system prompt
const SYSTEM_PROMPT_ES = `Eres el asistente de IA de Samuel para S NEW ROOF, una empresa de techos familiar ubicada en Santa Ana, Orange County, California. Eres amigable, servicial y conocedor de todos los servicios de techos.

## SOBRE S NEW ROOF
- Propiedad familiar y operado desde 2010
- Propietario: Samuel (residente de Santa Ana desde 1995)
- Ubicación: Santa Ana, Orange County, CA
- Teléfono: (714) 770-4756
- Área de Servicio: Todo Orange County incluyendo Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster

## SERVICIOS OFRECIDOS
1. **Reparación de Techos** - Fugas, tejas dañadas, problemas de flashing, reparaciones rápidas y confiables
2. **Reemplazo de Techos** - Reemplazo completo con materiales premium, garantías de 50 años
3. **Reparación de Fugas de Emergencia** - Servicio de emergencia 24/7, respuesta en 1-2 horas
4. **Inspección de Techos** - Inspecciones completas GRATIS con informes detallados
5. **Reparación de Daños por Tormenta** - Asistencia con reclamos de seguro, trabaja con todas las aseguradoras principales
6. **Techos de Tejas** - Instalación y reparación de tejas de arcilla y concreto, perfecto para el clima de California
7. **Techos de Asfalto** - Tejas de asfalto, asequibles y confiables, varios estilos
8. **Servicios de Canaletas** - Instalación, reparación, limpieza

## DIRECTRICES DE RESPUESTA
- Sé cálido, amigable y vecinal - usa "nosotros" y "nuestro equipo"
- Siempre ofrece ayudar a programar una inspección GRATIS
- Para emergencias, enfatiza la disponibilidad 24/7 y proporciona el número de teléfono
- Mantén las respuestas concisas pero útiles (2-4 oraciones)
- Siempre termina con una llamada a la acción

Recuerda: Representas una empresa de techos local y confiable. Sé servicial, profesional y siempre anima a los propietarios a proteger sus hogares con el cuidado adecuado del techo.`;

// Smart fallback responses based on keywords - English
function getSmartFallbackEn(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Emergency keywords
  if (lowerMessage.includes('emergency') || lowerMessage.includes('leak') || lowerMessage.includes('water') || lowerMessage.includes('flooding') || lowerMessage.includes('urgent')) {
    return `🚨 Emergency? Call us NOW at (714) 770-4756! Our 24/7 emergency team can be at your door within 1-2 hours. We handle emergency leaks, storm damage, and urgent roof repairs throughout Orange County. Don't wait - let us protect your home!`;
  }
  
  // Service area questions
  if (lowerMessage.includes('area') || lowerMessage.includes('serve') || lowerMessage.includes('location') || lowerMessage.includes('anaheim') || lowerMessage.includes('irvine') || lowerMessage.includes('santa ana') || lowerMessage.includes('garden grove') || lowerMessage.includes('orange county')) {
    return `We proudly serve ALL of Orange County! 📍 Our service area includes Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster, and surrounding communities. Call (714) 770-4756 to schedule your FREE inspection!`;
  }
  
  // Pricing questions
  if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('how much') || lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
    return `Great question! Roof costs vary based on size and materials. Asphalt shingles typically run $5-$10/sq ft, while tile roofs are $12-$20/sq ft. The best way to get an accurate price? Our FREE inspection! Call (714) 770-4756 to schedule yours today!`;
  }
  
  // Insurance questions
  if (lowerMessage.includes('insurance') || lowerMessage.includes('claim') || lowerMessage.includes('storm damage') || lowerMessage.includes('hail') || lowerMessage.includes('wind damage')) {
    return `Yes, we work with ALL major insurance carriers! 🏠 We handle the entire claims process - from documentation to meeting adjusters. No out-of-pocket expense until your claim is approved. Call (714) 770-4756 for a FREE storm damage inspection!`;
  }
  
  // Financing questions
  if (lowerMessage.includes('financing') || lowerMessage.includes('payment') || lowerMessage.includes('monthly') || lowerMessage.includes('afford')) {
    return `Yes, we offer flexible financing! 💳 0% interest for 18 months on approved credit, with payments starting at just $99/month. Quick approval in minutes! Call (714) 770-4756 to learn more and get started!`;
  }
  
  // Inspection/schedule
  if (lowerMessage.includes('inspection') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
    return `Let's get your FREE roof inspection scheduled! 📅 Our comprehensive inspections include detailed reports and photos. Call us at (714) 770-4756 or fill out our contact form. We'll find a time that works for you!`;
  }
  
  // Services
  if (lowerMessage.includes('service') || lowerMessage.includes('repair') || lowerMessage.includes('replace') || lowerMessage.includes('install') || lowerMessage.includes('roof')) {
    return `We offer complete roofing services! 🔧 From repairs and replacements to inspections and emergency services - we do it all. Call (714) 770-4756 for your FREE inspection and let our family protect yours!`;
  }
  
  // Tile roof
  if (lowerMessage.includes('tile') || lowerMessage.includes('clay') || lowerMessage.includes('concrete tile')) {
    return `Tile roofs are our specialty! 🏛️ We install and repair clay and concrete tile roofs - perfect for California's climate. With 50+ year lifespan and fire resistance, it's a smart investment. Call (714) 770-4756 for your FREE inspection!`;
  }
  
  // Warranty
  if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
    return `We stand behind our work! ✅ 10-Year Workmanship Guarantee (100% covered), 50-Year Manufacturer Warranty (transferable), and our Satisfaction Guarantee. Call (714) 770-4756 to learn more!`;
  }
  
  // Phone number request
  if (lowerMessage.includes('phone') || lowerMessage.includes('number') || lowerMessage.includes('call') || lowerMessage.includes('contact')) {
    return `Here's our contact info! 📞 Phone: (714) 770-4756 | Email: info@snewroof.com | Location: Santa Ana, Orange County, CA. We're available 24/7 for emergencies. Call us anytime!`;
  }
  
  // Default friendly response
  return `Thanks for reaching out! 👋 I'm here to help with your roofing questions. For immediate assistance or to schedule your FREE inspection, please call us at (714) 770-4756. We serve all of Orange County and are ready to help protect your home!`;
}

// Smart fallback responses based on keywords - Spanish
function getSmartFallbackEs(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Emergency keywords
  if (lowerMessage.includes('emergencia') || lowerMessage.includes('fuga') || lowerMessage.includes('agua') || lowerMessage.includes('inundación') || lowerMessage.includes('urgente')) {
    return `🚨 ¿Emergencia? ¡Llámenos AHORA al (714) 770-4756! Nuestro equipo de emergencia 24/7 puede estar en su puerta en 1-2 horas. Manejamos fugas de emergencia, daños por tormenta y reparaciones urgentes en todo Orange County. ¡No espere - déjenos proteger su hogar!`;
  }
  
  // Service area questions
  if (lowerMessage.includes('área') || lowerMessage.includes('sirven') || lowerMessage.includes('ubicación') || lowerMessage.includes('anaheim') || lowerMessage.includes('irvine') || lowerMessage.includes('santa ana') || lowerMessage.includes('garden grove') || lowerMessage.includes('orange county')) {
    return `¡Orgullosamente servimos TODO Orange County! 📍 Nuestra área de servicio incluye Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster y comunidades cercanas. ¡Llame al (714) 770-4756 para programar su inspección GRATIS!`;
  }
  
  // Pricing questions
  if (lowerMessage.includes('costo') || lowerMessage.includes('precio') || lowerMessage.includes('cuánto') || lowerMessage.includes('cotización') || lowerMessage.includes('estimado')) {
    return `¡Excelente pregunta! Los costos de techos varían según el tamaño y los materiales. Las tejas de asfalto típicamente cuestan $5-$10/pie cuadrado, mientras que los techos de tejas cuestan $12-$20/pie cuadrado. ¿La mejor manera de obtener un precio exacto? ¡Nuestra inspección GRATIS! ¡Llame al (714) 770-4756 para programar la suya hoy!`;
  }
  
  // Insurance questions
  if (lowerMessage.includes('seguro') || lowerMessage.includes('reclamo') || lowerMessage.includes('daños por tormenta') || lowerMessage.includes('granizo') || lowerMessage.includes('daños por viento')) {
    return `¡Sí, trabajamos con TODAS las aseguradoras principales! 🏠 Manejamos todo el proceso de reclamos - desde la documentación hasta reunirse con los ajustadores. Sin gastos de bolsillo hasta que su reclamo sea aprobado. ¡Llame al (714) 770-4756 para una inspección GRATIS de daños por tormenta!`;
  }
  
  // Financing questions
  if (lowerMessage.includes('financiamiento') || lowerMessage.includes('pago') || lowerMessage.includes('mensual') || lowerMessage.includes('asequible')) {
    return `¡Sí, ofrecemos financiamiento flexible! 💳 0% de interés por 18 meses con crédito aprobado, con pagos desde solo $99/mes. ¡Aprobación rápida en minutos! ¡Llame al (714) 770-4756 para aprender más y comenzar!`;
  }
  
  // Inspection/schedule
  if (lowerMessage.includes('inspección') || lowerMessage.includes('programar') || lowerMessage.includes('cita') || lowerMessage.includes('reservar')) {
    return `¡Programemos su inspección de techo GRATIS! 📅 Nuestras inspecciones completas incluyen informes detallados y fotos. Llámenos al (714) 770-4756 o complete nuestro formulario de contacto. ¡Encontraremos un horario que funcione para usted!`;
  }
  
  // Services
  if (lowerMessage.includes('servicio') || lowerMessage.includes('reparación') || lowerMessage.includes('reemplazo') || lowerMessage.includes('instalar') || lowerMessage.includes('techo')) {
    return `¡Ofrecemos servicios completos de techos! 🔧 Desde reparaciones y reemplazos hasta inspecciones y servicios de emergencia - lo hacemos todo. ¡Llame al (714) 770-4756 para su inspección GRATIS y deje que nuestra familia proteja la suya!`;
  }
  
  // Tile roof
  if (lowerMessage.includes('teja') || lowerMessage.includes('arcilla') || lowerMessage.includes('concreto')) {
    return `¡Los techos de tejas son nuestra especialidad! 🏛️ Instalamos y reparamos techos de tejas de arcilla y concreto - perfectos para el clima de California. Con una vida útil de más de 50 años y resistencia al fuego, es una inversión inteligente. ¡Llame al (714) 770-4756 para su inspección GRATIS!`;
  }
  
  // Warranty
  if (lowerMessage.includes('garantía') || lowerMessage.includes('garantizar')) {
    return `¡Respaldamos nuestro trabajo! ✅ Garantía de Trabajo de 10 Años (100% cubierto), Garantía del Fabricante de 50 Años (transferible) y nuestra Garantía de Satisfacción. ¡Llame al (714) 770-4756 para aprender más!`;
  }
  
  // Phone number request
  if (lowerMessage.includes('teléfono') || lowerMessage.includes('número') || lowerMessage.includes('llamar') || lowerMessage.includes('contacto')) {
    return `¡Aquí está nuestra información de contacto! 📞 Teléfono: (714) 770-4756 | Email: info@snewroof.com | Ubicación: Santa Ana, Orange County, CA. Estamos disponibles 24/7 para emergencias. ¡Llámenos en cualquier momento!`;
  }
  
  // Default friendly response
  return `¡Gracias por contactarnos! 👋 Estoy aquí para ayudar con sus preguntas sobre techos. Para asistencia inmediata o programar su inspección GRATIS, por favor llámenos al (714) 770-4756. Servimos todo Orange County y estamos listos para ayudar a proteger su hogar!`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history, language } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const isSpanish = language === 'es';
    console.log('[Chat API] Received message:', message, '| Language:', language);
    
    try {
      const zai = await getZAI();
      console.log('[Chat API] ZAI instance created successfully');

      // Select system prompt based on language
      const systemPrompt = isSpanish ? SYSTEM_PROMPT_ES : SYSTEM_PROMPT_EN;

      // Build messages array with conversation history
      const messages: Array<{ role: 'assistant' | 'user'; content: string }> = [
        {
          role: 'assistant',
          content: systemPrompt
        }
      ];

      // Add conversation history if provided
      if (history && Array.isArray(history)) {
        for (const msg of history.slice(-10)) {
          if (msg.role === 'user' || msg.role === 'assistant') {
            messages.push({
              role: msg.role as 'user' | 'assistant',
              content: msg.content
            });
          }
        }
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: message
      });

      console.log('[Chat API] Sending request to AI...');

      // Get completion from AI
      const completion = await zai.chat.completions.create({
        messages: messages,
        thinking: { type: 'disabled' }
      });

      const aiResponse = completion.choices[0]?.message?.content;

      if (aiResponse) {
        console.log('[Chat API] AI response received successfully');
        return NextResponse.json({ response: aiResponse });
      }
    } catch (apiError) {
      console.log('[Chat API] API error, using smart fallback:', (apiError as Error).message);
    }

    // Use smart fallback based on message content and language
    const fallbackResponse = isSpanish ? getSmartFallbackEs(message) : getSmartFallbackEn(message);
    return NextResponse.json({ response: fallbackResponse });

  } catch (error) {
    console.error('[Chat API] Error:', error);
    
    // Return a helpful response based on the message
    const body = await request.clone().json().catch(() => ({ message: '', language: 'en' }));
    const isSpanish = body.language === 'es';
    const fallbackResponse = isSpanish ? getSmartFallbackEs(body.message || '') : getSmartFallbackEn(body.message || '');
    return NextResponse.json({ response: fallbackResponse });
  }
}
