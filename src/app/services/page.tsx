'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Services Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('servicesHeader')}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('specializedServices')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Injector Regeneration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1470/800?random=3" 
                  alt="Fuel Injector System" 
                  width={1470}
                  height={800}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t('injectorService')}</h3>
                <p className="text-gray-600 mb-4">
                  Our injector regeneration service restores your fuel injectors to optimal performance, 
                  improving fuel efficiency and reducing emissions. We use state-of-the-art equipment to 
                  clean and calibrate injectors with precision.
                </p>
                <h4 className="font-semibold mb-2">{t('benefitsTitle')}</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>{t('improvedFuelEconomy')}</li>
                  <li>{t('reducedEmissions')}</li>
                  <li>{t('smootherPerformance')}</li>
                  <li>{t('extendedLifespan')}</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  {t('scheduleService')}
                </Link>
              </div>
            </div>

            {/* DPF Filter Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1452/800?random=4" 
                  alt="DPF Filter System" 
                  width={1452}
                  height={800}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t('dpfService')}</h3>
                <p className="text-gray-600 mb-4">
                  Our specialized DPF (Diesel Particulate Filter) cleaning service removes accumulated 
                  soot and ash, restoring proper exhaust flow and engine performance. We use 
                  environmentally friendly methods that protect your filter.
                </p>
                <h4 className="font-semibold mb-2">{t('benefitsTitle')}</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>{t('restoredPerformance')}</li>
                  <li>{t('improvedEfficiency')}</li>
                  <li>{t('extendedDPFLife')}</li>
                  <li>{t('reducedReplacementRisk')}</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  {t('scheduleService')}
                </Link>
              </div>
            </div>

            {/* Turbo Repairs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1472/800?random=5" 
                  alt="Turbocharger" 
                  width={1472}
                  height={800}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t('turboService')}</h3>
                <p className="text-gray-600 mb-4">
                  Our turbocharger specialists diagnose and repair all types of turbo issues, 
                  from wastegate problems to shaft play and boost leaks. We offer both repair 
                  and complete rebuilding services to restore your turbo to peak performance.
                </p>
                <h4 className="font-semibold mb-2">{t('servicesInclude')}</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>{t('turboDiagnostics')}</li>
                  <li>{t('wastegateRepair')}</li>
                  <li>{t('bearingReplacement')}</li>
                  <li>{t('turboRebuilds')}</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  {t('scheduleService')}
                </Link>
              </div>
            </div>

            {/* Engine Repairs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1632/800?random=6" 
                  alt="Engine Repair" 
                  width={1632}
                  height={800}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t('engineService')}</h3>
                <p className="text-gray-600 mb-4">
                  From minor repairs to complete rebuilds, our master technicians handle all 
                  aspects of engine repair. We diagnose and fix problems with precision, 
                  using quality parts and proven techniques.
                </p>
                <h4 className="font-semibold mb-2">{t('servicesInclude')}</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>{t('comprehensiveDiagnostics')}</li>
                  <li>{t('timingBeltReplacement')}</li>
                  <li>{t('headGasketRepair')}</li>
                  <li>{t('engineRebuilds')}</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  {t('scheduleService')}
                </Link>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('generalMaintenance')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Oil Changes */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('oilChanges')}</h3>
              <p className="text-gray-600">
                Regular oil changes with premium synthetic or conventional oils, including filter replacement.
              </p>
            </div>

            {/* Brake Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('brakeService')}</h3>
              <p className="text-gray-600">
                Comprehensive brake inspection, pad replacement, rotor resurfacing, and caliper service.
              </p>
            </div>

            {/* Wheel Alignment */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('wheelAlignment')}</h3>
              <p className="text-gray-600">
                Precision wheel alignment to improve handling, reduce tire wear, and enhance safety.
              </p>
            </div>

            {/* Suspension Repairs */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('suspensionRepairs')}</h3>
              <p className="text-gray-600">
                Repair and replacement of shocks, struts, springs, and other suspension components.
              </p>
            </div>

            {/* Air Conditioning */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('acService')}</h3>
              <p className="text-gray-600">
                Diagnostics, refrigerant recharge, leak detection, and AC component repair.
              </p>
            </div>

            {/* Diagnostics */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('computerDiagnostics')}</h3>
              <p className="text-gray-600">
                Advanced computer diagnostics to identify electronic and mechanical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-white py-16 m-stripe">
        <div className="container-custom text-center pt-6">
          <h2 className="text-3xl font-bold mb-4">{t('moreServices')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('moreServicesDescription')}
          </p>
          <Link href="/contact" className="bg-primary text-white hover:bg-gray-900 px-6 py-3 rounded-md transition-colors font-medium">
            {t('contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
}