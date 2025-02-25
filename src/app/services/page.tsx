import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div>
      {/* Services Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-accent">M</span> Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive automotive solutions with specialization in injector regeneration, 
            DPF filter cleaning, turbo repairs, and engine work.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Specialized Services</h2>
          
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
                <h3 className="text-2xl font-bold mb-3">Injector Regeneration</h3>
                <p className="text-gray-600 mb-4">
                  Our injector regeneration service restores your fuel injectors to optimal performance, 
                  improving fuel efficiency and reducing emissions. We use state-of-the-art equipment to 
                  clean and calibrate injectors with precision.
                </p>
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Improved fuel economy</li>
                  <li>Reduced emissions</li>
                  <li>Smoother engine performance</li>
                  <li>Extended injector lifespan</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  Schedule Service
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
                <h3 className="text-2xl font-bold mb-3">DPF Filter Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Our specialized DPF (Diesel Particulate Filter) cleaning service removes accumulated 
                  soot and ash, restoring proper exhaust flow and engine performance. We use 
                  environmentally friendly methods that protect your filter.
                </p>
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Restored engine performance</li>
                  <li>Improved fuel efficiency</li>
                  <li>Extended DPF lifespan</li>
                  <li>Reduced risk of expensive replacements</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  Schedule Service
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
                <h3 className="text-2xl font-bold mb-3">Turbo Repairs & Rebuilds</h3>
                <p className="text-gray-600 mb-4">
                  Our turbocharger specialists diagnose and repair all types of turbo issues, 
                  from wastegate problems to shaft play and boost leaks. We offer both repair 
                  and complete rebuilding services to restore your turbo to peak performance.
                </p>
                <h4 className="font-semibold mb-2">Services Include:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Turbo diagnostics and testing</li>
                  <li>Wastegate adjustment and repair</li>
                  <li>Bearing replacement</li>
                  <li>Complete turbo rebuilds</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  Schedule Service
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
                <h3 className="text-2xl font-bold mb-3">Engine Repairs</h3>
                <p className="text-gray-600 mb-4">
                  From minor repairs to complete rebuilds, our master technicians handle all 
                  aspects of engine repair. We diagnose and fix problems with precision, 
                  using quality parts and proven techniques.
                </p>
                <h4 className="font-semibold mb-2">Services Include:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Comprehensive diagnostics</li>
                  <li>Timing belt/chain replacement</li>
                  <li>Head gasket repair</li>
                  <li>Complete engine rebuilds</li>
                </ul>
                <Link href="/contact" className="btn inline-block">
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <h2 className="text-3xl font-bold text-center text-primary mb-12">General Maintenance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Oil Changes */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Oil Changes</h3>
              <p className="text-gray-600">
                Regular oil changes with premium synthetic or conventional oils, including filter replacement.
              </p>
            </div>

            {/* Brake Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Brake Service</h3>
              <p className="text-gray-600">
                Comprehensive brake inspection, pad replacement, rotor resurfacing, and caliper service.
              </p>
            </div>

            {/* Wheel Alignment */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Wheel Alignment</h3>
              <p className="text-gray-600">
                Precision wheel alignment to improve handling, reduce tire wear, and enhance safety.
              </p>
            </div>

            {/* Suspension Repairs */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Suspension Repairs</h3>
              <p className="text-gray-600">
                Repair and replacement of shocks, struts, springs, and other suspension components.
              </p>
            </div>

            {/* Air Conditioning */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AC Service</h3>
              <p className="text-gray-600">
                Diagnostics, refrigerant recharge, leak detection, and AC component repair.
              </p>
            </div>

            {/* Diagnostics */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Computer Diagnostics</h3>
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
          <h2 className="text-3xl font-bold mb-4">Need a Service Not Listed?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We offer many more services than listed here. Contact us for any automotive repair or 
            maintenance need you might have.
          </p>
          <Link href="/contact" className="bg-primary text-white hover:bg-gray-900 px-6 py-3 rounded-md transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}