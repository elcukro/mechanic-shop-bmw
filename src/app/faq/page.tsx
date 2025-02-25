'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// FAQ item component with toggle functionality
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md">
      <button
        className="w-full flex justify-between items-center p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-left text-gray-800">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`bg-white px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'py-6 block' : 'py-0 hidden'
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Define FAQ categories
const categories = [
  { id: 'gasoline-injectors', name: 'Gasoline Injectors' },
  { id: 'diesel-injectors', name: 'Diesel Injectors' },
  { id: 'dpf-filters', name: 'DPF Filters' },
  { id: 'engine-codes', name: 'Engine Codes' },
  { id: 'turbocharger', name: 'Turbocharger Issues' },
];

// FAQ data grouped by category
const faqData = {
  'gasoline-injectors': [
    {
      question: 'What are the signs of failing gasoline injectors?',
      answer: 'Common signs include rough idling, poor fuel economy, engine misfires, stalling, difficulty starting, and failing emissions tests. You might also notice reduced power during acceleration, engine knocking, or a strong fuel odor. If you experience any of these symptoms, it is advisable to have your injectors inspected promptly to prevent further engine damage.'
    },
    {
      question: 'How often should gasoline injectors be cleaned?',
      answer: 'For most vehicles, gasoline injector cleaning is recommended every 30,000 to 45,000 miles. However, if you regularly use high-quality fuel with good detergents, you might extend this interval. Vehicles that experience frequent short trips, stop-and-go driving, or use lower-quality fuels may benefit from more frequent cleaning—approximately every 15,000 miles. Always consult your vehicle\'s maintenance schedule or speak with our technicians for model-specific recommendations.'
    }
  ],
  'diesel-injectors': [
    {
      question: 'Why are diesel injectors more expensive to replace than gasoline injectors?',
      answer: 'Diesel injectors are more complex and must withstand higher pressures and temperatures than gasoline injectors. Modern common rail diesel injectors operate at pressures exceeding 30,000 PSI and require precise manufacturing tolerances measured in microns. They also contain sophisticated electronic components and multiple precision-machined parts. Additionally, diesel injectors are often made from higher-grade materials to handle the lubricating properties of diesel fuel and resist the higher combustion pressures in diesel engines.'
    },
    {
      question: 'What\'s the difference between diesel injector cleaning and regeneration?',
      answer: 'Cleaning involves removing carbon deposits, varnish, and other contaminants from the injector\'s external components and spray nozzles, typically using ultrasonic baths or chemical solutions. Regeneration is a more comprehensive process that includes cleaning plus measuring and restoring the injector\'s precise flow rate, spray pattern, and response time. During regeneration, we replace worn internal components, recalibrate the electronic solenoids, and perform flow rate testing to ensure the injector meets factory specifications. Regeneration essentially restores the injector to like-new performance rather than just removing surface contaminants.'
    }
  ],
  'dpf-filters': [
    {
      question: 'How do I know when my DPF filter needs cleaning?',
      answer: 'Your vehicle will typically alert you when the DPF requires attention through a dashboard warning light (usually amber). You might also notice decreased fuel economy, reduced engine performance, or difficulty accelerating. Some vehicles enter a "limp mode" with limited power when the DPF becomes critically clogged. If you hear the engine running at higher RPM while idling, this could indicate an active regeneration attempt. Most modern diesel vehicles have DPF sensors that monitor back pressure and will trigger these warnings when the filter reaches approximately 80% of its capacity.'
    },
    {
      question: 'What causes a DPF filter to clog prematurely?',
      answer: 'Several factors can cause premature DPF clogging: 1) Frequent short journeys that don\'t allow the exhaust to reach temperatures needed for passive regeneration; 2) Engine problems like faulty EGR valves, turbocharger issues, or incorrect fuel injection timing; 3) Using incorrect oil that contains high levels of ash additives; 4) Poor quality diesel fuel or contaminated fuel; 5) Driving style – constant stop-start driving prevents effective regeneration; and 6) Failed sensors that don\'t trigger active regeneration when needed. Regular highway driving for at least 30 minutes helps facilitate the natural regeneration process.'
    }
  ],
  'engine-codes': [
    {
      question: 'What\'s the difference between a P0 and P1 engine code?',
      answer: 'P0 codes are generic or standard codes defined by the SAE (Society of Automotive Engineers) and are common across all vehicle manufacturers. These codes indicate issues with standard systems like oxygen sensors, air/fuel mixture, or emission controls. P1 codes are manufacturer-specific and vary between different vehicle brands. They typically refer to functions or components unique to that manufacturer\'s engine management systems. For example, a P0301 code (cylinder 1 misfire) means the same thing across all vehicles, while a P1XXX code might refer to entirely different systems depending on whether you drive a Ford, Toyota, or BMW.'
    },
    {
      question: 'Why does my check engine light come back on shortly after being reset?',
      answer: 'When a check engine light returns after being reset, it usually indicates that the underlying problem hasn\'t been fixed. The engine control module (ECM) continuously monitors vehicle systems, and when it detects the same fault again, it will reactivate the light. Common reasons include: 1) The initial diagnosis missed the root cause; 2) A repair was incomplete or parts were of insufficient quality; 3) Multiple related issues exist, and only one was addressed; 4) An intermittent electrical problem that occurs under specific conditions; or 5) The vehicle needs to complete several drive cycles to fully reset all monitors. Rather than repeatedly clearing the code, a thorough diagnostic with professional equipment is recommended to identify and fix the underlying issue.'
    }
  ],
  'turbocharger': [
    {
      question: 'What causes turbo lag and how can it be reduced?',
      answer: 'Turbo lag is the delay between pressing the accelerator and feeling the boost from your turbocharger. It occurs because the turbo needs exhaust gas pressure to spin up and generate boost. Several factors can worsen turbo lag: oversized turbos, exhaust leaks, clogged air filters, carbon buildup, or worn bearings. To reduce turbo lag: 1) Ensure regular maintenance of air and fuel delivery systems; 2) Consider a smaller or variable geometry turbo if replacing; 3) Upgrade to a twin-scroll turbo design if compatible; 4) Check for and repair any exhaust leaks; 5) Use properly specified engine oil to ensure smooth turbo bearing operation; and 6) Address carbon buildup on intake valves, particularly in direct injection engines. Modern vehicles with twin-scroll turbos, electric superchargers, or sequential turbo setups experience significantly less lag than older designs.'
    },
    {
      question: 'Is a whining or whistling noise from my turbo normal?',
      answer: 'A slight whistling noise when accelerating is normal for many turbocharged vehicles—this is the sound of air being compressed. However, abnormal sounds can indicate problems: 1) A high-pitched squealing might indicate worn turbo shaft bearings; 2) A rattling or grinding noise could mean the turbine wheel is contacting the housing due to shaft play; 3) Excessive whistling combined with power loss could indicate a boost leak; and 4) A loud "whooshing" when letting off the throttle might be normal for some vehicles with blow-off valves but could indicate wastegate issues in others. If the noise is sudden, has changed in character, or is accompanied by performance issues, reduced power, or warning lights, have your turbo inspected immediately to prevent catastrophic failure.'
    }
  ]
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('gasoline-injectors');

  return (
    <div>
      {/* FAQ Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-accent">M</span> Knowledge <span className="text-mblue">Center</span></h1>
          <p className="text-lg max-w-2xl mx-auto">
            Get answers to common questions about automotive repairs and maintenance, 
            with special focus on injectors, DPF filters, engine diagnostics, and turbochargers.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full m-2 transition-colors border text-lg font-medium ${
                  activeCategory === category.id
                    ? 'bg-accent text-white font-semibold shadow-md border-accent'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-mblue border-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            {faqData[activeCategory as keyof typeof faqData].map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-10 bg-white border-2 border-accent rounded-lg max-w-3xl mx-auto shadow-lg">
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-accent rounded-full items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Have More Questions?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Our technicians are ready to answer any specific questions about your vehicle's symptoms 
                  or maintenance needs. Don't hesitate to contact us for personalized advice.
                </p>
                <Link href="/contact" className="btn inline-flex items-center px-8 py-4 rounded-md text-lg font-medium group">
                  <span>Contact Our Experts</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Diagnostic Service</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Experiencing warning lights or unusual symptoms? Our comprehensive diagnostic service uses 
                advanced equipment to quickly identify issues.
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Preventive Maintenance</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Regular maintenance prevents costly repairs and extends your vehicle's life. Discover our 
                maintenance packages tailored to your vehicle's needs.
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">DPF Regeneration</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Don't replace your expensive DPF prematurely. Our specialized cleaning and regeneration 
                service restores function at a fraction of replacement cost.
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}