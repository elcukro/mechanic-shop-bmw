'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Car make, model, and engine data
const carData = {
  BMW: {
    models: [
      "1 Series", "2 Series", "3 Series", "4 Series", "5 Series", 
      "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", 
      "X5", "X6", "X7", "Z4", "M2", "M3", "M4", "M5", "M8"
    ],
    engines: [
      "1.5L 3-cylinder", "2.0L 4-cylinder", "3.0L 6-cylinder", 
      "4.4L V8", "S55 Twin-Turbo", "S58 Twin-Turbo", "S63 V8 Twin-Turbo", 
      "B47 Diesel", "B57 Diesel"
    ]
  },
  Mercedes: {
    models: [
      "A-Class", "B-Class", "C-Class", "E-Class", "S-Class", 
      "CLA", "CLS", "GLA", "GLB", "GLC", "GLE", "GLS", 
      "SL", "AMG GT", "EQA", "EQB", "EQC", "EQS"
    ],
    engines: [
      "1.3L 4-cylinder", "1.5L 4-cylinder", "2.0L 4-cylinder", 
      "3.0L 6-cylinder", "4.0L V8 Biturbo", "2.0L Diesel", 
      "2.9L Diesel", "3.0L Diesel"
    ]
  },
  VW: {
    models: [
      "Polo", "Golf", "ID.3", "ID.4", "Passat", "Arteon", 
      "Tiguan", "Touareg", "T-Cross", "T-Roc", "Touran", 
      "Golf GTI", "Golf R"
    ],
    engines: [
      "1.0L TSI", "1.5L TSI", "2.0L TSI", "2.0L TDI", "2.0L Biturbo TDI", 
      "1.4L eHybrid", "1.4L GTE", "Electric Motor"
    ]
  },
  Toyota: {
    models: [
      "Corolla", "Camry", "Avalon", "Prius", "RAV4", "Highlander", 
      "4Runner", "Sequoia", "Land Cruiser", "C-HR", "Yaris", 
      "Supra", "GR86", "Tundra", "Tacoma"
    ],
    engines: [
      "1.5L 4-cylinder", "1.8L 4-cylinder", "2.0L 4-cylinder", 
      "2.5L 4-cylinder", "3.5L V6", "5.7L V8", "2.5L Hybrid", 
      "1.8L Hybrid", "2.0L Diesel", "2.8L Diesel"
    ]
  },
  Subaru: {
    models: [
      "Impreza", "Legacy", "Outback", "Forester", "Crosstrek", 
      "Ascent", "BRZ", "WRX", "WRX STI"
    ],
    engines: [
      "1.6L Boxer", "2.0L Boxer", "2.4L Boxer", "2.5L Boxer", 
      "2.0L Turbo Boxer", "2.5L Turbo Boxer"
    ]
  }
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    carMake: '',
    carModel: '',
    carYear: '',
    carEngine: '',
    message: ''
  });

  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableEngines, setAvailableEngines] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isPerformanceModel, setIsPerformanceModel] = useState(false);

  // Update available models when make changes
  useEffect(() => {
    if (formData.carMake && carData[formData.carMake as keyof typeof carData]) {
      setAvailableModels(carData[formData.carMake as keyof typeof carData].models);
      setFormData(prev => ({ ...prev, carModel: '', carEngine: '' }));
      setAvailableEngines([]);
    } else {
      setAvailableModels([]);
      setAvailableEngines([]);
    }
  }, [formData.carMake]);

  // Update available engines when model changes
  useEffect(() => {
    if (formData.carMake && formData.carModel) {
      setAvailableEngines(carData[formData.carMake as keyof typeof carData].engines);
    } else {
      setAvailableEngines([]);
    }
  }, [formData.carModel, formData.carMake]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Check for performance models
    if (name === 'carModel') {
      const performanceModels = [
        'M2', 'M3', 'M4', 'M5', 'M8', // BMW M series
        'AMG GT', // Mercedes AMG 
        'Golf R', 'Golf GTI', // VW performance
        'WRX STI', 'WRX', // Subaru performance
        'Supra', 'GR86' // Toyota performance
      ];
      setIsPerformanceModel(performanceModels.includes(value));
    }
    
    // Reset performance flag when car make changes
    if (name === 'carMake') {
      setIsPerformanceModel(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      carMake: '',
      carModel: '',
      carYear: '',
      carEngine: '',
      message: ''
    });
    // In a real app, you'd handle form submission to your backend here
  };

  return (
    <div>
      {/* Contact Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contactTitle')} <span className="text-accent">M</span>echanic <span className="text-mblue">P</span>ro</h1>
          <p className="text-lg max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Mechanic Street<br />
                      Anytown, USA 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      info@autoservicepro.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden relative">
                <Image 
                  src="https://picsum.photos/2070/1000?random=11" 
                  alt="Location Map" 
                  width={2070}
                  height={1000}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-bold">Thank you for contacting us!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">{t('phoneLabel')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                    style={{color: '#1a202c'}}
                  >
                    <option value="" style={{color: '#1a202c'}}>Select a service</option>
                    <option value="Injector Regeneration" style={{color: '#1a202c'}}>Injector Regeneration</option>
                    <option value="DPF Filter Cleaning" style={{color: '#1a202c'}}>DPF Filter Cleaning</option>
                    <option value="Turbo Repairs" style={{color: '#1a202c'}}>Turbo Repairs</option>
                    <option value="Engine Repairs" style={{color: '#1a202c'}}>Engine Repairs</option>
                    <option value="Oil Change" style={{color: '#1a202c'}}>Oil Change</option>
                    <option value="General Maintenance" style={{color: '#1a202c'}}>General Maintenance</option>
                    <option value="Other" style={{color: '#1a202c'}}>Other</option>
                  </select>
                </div>

                {/* Vehicle Information Section */}
                <div className="mt-8 mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    <span className="relative">
                      Vehicle Information
                      {/* M-stripe accent */}
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent via-mblue to-darkpurple"></span>
                    </span>
                  </h3>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Car Make */}
                      <div>
                        <label htmlFor="carMake" className="block text-gray-700 font-medium mb-2">Car Make</label>
                        <select
                          id="carMake"
                          name="carMake"
                          value={formData.carMake}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                          style={{color: '#1a202c'}}
                        >
                          <option value="" style={{color: '#1a202c'}}>Select Make</option>
                          {Object.keys(carData).map((make) => (
                            <option key={make} value={make} style={{color: '#1a202c'}}>{make}</option>
                          ))}
                        </select>
                      </div>

                      {/* Car Model */}
                      <div>
                        <label htmlFor="carModel" className="block text-gray-700 font-medium mb-2">Car Model</label>
                        <select
                          id="carModel"
                          name="carModel"
                          value={formData.carModel}
                          onChange={handleChange}
                          disabled={!formData.carMake}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary disabled:bg-gray-100 disabled:text-gray-500 text-gray-800"
                          style={{color: '#1a202c'}} /* Ensure text color is explicitly set */
                        >
                          <option value="" style={{color: '#1a202c'}}>Select Model</option>
                          {availableModels.map((model) => (
                            <option key={model} value={model} style={{color: '#1a202c'}}>
                              {model}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Car Year */}
                      <div>
                        <label htmlFor="carYear" className="block text-gray-700 font-medium mb-2">Year</label>
                        <select
                          id="carYear"
                          name="carYear"
                          value={formData.carYear}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                          style={{color: '#1a202c'}}
                        >
                          <option value="" style={{color: '#1a202c'}}>Select Year</option>
                          {Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <option key={year} value={year} style={{color: '#1a202c'}}>{year}</option>
                          ))}
                        </select>
                      </div>

                      {/* Engine Model */}
                      <div>
                        <label htmlFor="carEngine" className="block text-gray-700 font-medium mb-2">Engine</label>
                        <select
                          id="carEngine"
                          name="carEngine"
                          value={formData.carEngine}
                          onChange={handleChange}
                          disabled={!formData.carModel}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary disabled:bg-gray-100 disabled:text-gray-500 text-gray-800"
                          style={{color: '#1a202c'}}
                        >
                          <option value="" style={{color: '#1a202c'}}>Select Engine</option>
                          {availableEngines.map((engine) => (
                            <option key={engine} value={engine} style={{color: '#1a202c'}}>
                              {(engine.includes('Twin-Turbo') || engine.includes('V8')) ? 
                                `${engine} ⚡` : engine}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Performance Model Alert */}
                    {isPerformanceModel && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-primary via-primary to-darkpurple text-white rounded-md shadow-md transition-all duration-300 ease-in-out">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-md font-bold flex items-center">
                              <span className="text-accent mr-1">Performance</span>
                              <span className="text-mblue mr-1">Vehicle</span>
                              <span className="text-white">Detected</span>
                            </h3>
                            <p className="text-sm text-gray-200">
                              We offer specialized performance tuning and maintenance programs for your {formData.carModel}.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Make-specific information */}
                    {!isPerformanceModel && formData.carMake === 'BMW' && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md border-l-4 border-accent">
                        <p className="text-sm text-gray-700">
                          <span className="text-accent font-bold">BMW Specialist:</span> Our shop has certified BMW technicians with specialized M-series training.
                        </p>
                      </div>
                    )}
                    
                    {!isPerformanceModel && formData.carMake === 'Mercedes' && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md border-l-4 border-mblue">
                        <p className="text-sm text-gray-700">
                          <span className="text-mblue font-bold">Mercedes Expert:</span> We provide specialized diagnostic and repair services for all Mercedes models.
                        </p>
                      </div>
                    )}
                    
                    {!isPerformanceModel && formData.carMake === 'VW' && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md border-l-4 border-gray-700">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">VW Certified:</span> Full diagnostic, maintenance, and performance tuning for all Volkswagen vehicles.
                        </p>
                      </div>
                    )}
                    
                    {!isPerformanceModel && formData.carMake === 'Toyota' && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md border-l-4 border-red-600">
                        <p className="text-sm text-gray-700">
                          <span className="text-red-600 font-bold">Toyota Service:</span> Factory-level service and maintenance expertise for all Toyota models.
                        </p>
                      </div>
                    )}
                    
                    {!isPerformanceModel && formData.carMake === 'Subaru' && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md border-l-4 border-blue-700">
                        <p className="text-sm text-gray-700">
                          <span className="text-blue-700 font-bold">Subaru Specialist:</span> Boxer engine experts for maintenance, repairs, and performance upgrades.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-full"
                >
                  {t('submitButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Do I need an appointment?</h3>
              <p className="text-gray-600">
                Yes, we recommend scheduling an appointment to ensure we can accommodate you. 
                However, we do accept walk-ins for minor services when possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How long does a typical service take?</h3>
              <p className="text-gray-600">
                Service times vary depending on the type of repair. Oil changes typically take 
                30-60 minutes, while specialized services like injector regeneration may take 
                1-2 days. We'll provide you with a time estimate when you schedule.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you offer warranties?</h3>
              <p className="text-gray-600">
                Yes, we provide a 12-month/12,000-mile warranty on parts and labor for most repairs. 
                Specific warranty terms may vary by service, and we'll explain the coverage details 
                for your specific repair.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you provide loaner vehicles?</h3>
              <p className="text-gray-600">
                We offer a limited number of loaner vehicles for major repairs that require 
                multiple days to complete. These are available on a first-come, first-served 
                basis and require advance reservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}