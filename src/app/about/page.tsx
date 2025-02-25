import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* About Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent">M</span>echanic <span className="text-mblue">P</span>ro</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Professional automotive specialists with a passion for excellence in 
            specialized repairs and maintenance.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <Image 
                src="https://picsum.photos/1470/980?random=7" 
                alt="Our Workshop"
                width={1470}
                height={980}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Auto Service Pro was founded in 2005 by master mechanic John Gearson with a vision 
                to create a specialized repair shop that could tackle the most challenging automotive 
                issues while providing exceptional customer service.
              </p>
              <p className="text-gray-600 mb-4">
                As vehicles became more complex and specialized, we invested in advanced training and 
                equipment to stay ahead of the curve. We recognized early on that many shops weren't 
                equipped to handle specialized repairs like injector regeneration, DPF filter cleaning, 
                and turbocharger rebuilds.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to be the region's leading specialists in these complex repairs, 
                saving our customers thousands of dollars by repairing components that other shops 
                would simply replace.
              </p>
              <p className="text-gray-600">
                Our commitment to technical excellence, combined with honest and transparent service, 
                has earned us a loyal customer base and numerous industry awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1632/800?random=8" 
                  alt="John Gearson" 
                  width={1632}
                  height={800}
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Gearson</h3>
                <p className="text-accent mb-3">Founder & Master Technician</p>
                <p className="text-gray-600">
                  With over 25 years of experience, John specializes in complex engine diagnostics 
                  and rebuilds. His passion for solving challenging mechanical problems led him to 
                  found Auto Service Pro.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1470/800?random=9" 
                  alt="Sarah Reynolds" 
                  width={1470}
                  height={800}
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Reynolds</h3>
                <p className="text-accent mb-3">Diesel Specialist</p>
                <p className="text-gray-600">
                  Sarah is our diesel expert, specializing in injector regeneration and DPF systems. 
                  Her meticulous attention to detail ensures our diesel services are second to none.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <Image 
                  src="https://picsum.photos/1469/800?random=10" 
                  alt="Mike Torres" 
                  width={1469}
                  height={800}
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mike Torres</h3>
                <p className="text-accent mb-3">Turbo & Performance Specialist</p>
                <p className="text-gray-600">
                  Mike leads our turbocharger and performance department. His background in racing 
                  gives him unique insights into maximizing vehicle performance and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Thorough Diagnostics</h3>
              <p className="text-gray-600 text-center">
                We take the time to properly diagnose every issue, avoiding unnecessary repairs 
                and ensuring we address the root cause, not just the symptoms.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Quality Parts</h3>
              <p className="text-gray-600 text-center">
                We use only high-quality OEM or equivalent parts to ensure lasting repairs 
                and your vehicle's optimal performance.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Continuous Training</h3>
              <p className="text-gray-600 text-center">
                Our technicians regularly undergo advanced training to stay current with the 
                latest automotive technologies and repair techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">ASE</div>
              <p className="text-gray-600">Certified Technicians</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">I-CAR</div>
              <p className="text-gray-600">Gold Class Recognition</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">AAA</div>
              <p className="text-gray-600">Approved Auto Repair</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">BBB</div>
              <p className="text-gray-600">A+ Rated Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-white py-16 m-stripe">
        <div className="container-custom text-center pt-6">
          <h2 className="text-3xl font-bold mb-4">Experience the <span className="text-primary">M</span> Performance Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment today and discover why we're the preferred choice for specialized 
            automotive repairs and maintenance.
          </p>
          <Link href="/contact" className="bg-primary text-white hover:bg-gray-900 px-6 py-3 rounded-md transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}