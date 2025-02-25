'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
const getCategories = (t: any) => [
  { id: 'gasoline-injectors', name: t('gasolineInjectors') },
  { id: 'diesel-injectors', name: t('dieselInjectors') },
  { id: 'dpf-filters', name: t('dpfFilters') },
  { id: 'engine-codes', name: t('engineCodes') },
  { id: 'turbocharger', name: t('turbochargerIssues') },
];

// FAQ data grouped by category
const getFaqData = (language: string) => {
  if (language === 'pl') {
    return {
      'gasoline-injectors': [
        {
          question: 'Jakie są oznaki uszkodzonych wtryskiwaczy benzynowych?',
          answer: 'Typowe oznaki to nierówna praca silnika na biegu jałowym, zwiększone zużycie paliwa, wypadanie zapłonu, dławienie się silnika, problemy z rozruchem oraz niezdany test emisji spalin. Możesz również zauważyć zmniejszoną moc podczas przyspieszania, stukanie silnika lub silny zapach paliwa. Jeśli doświadczasz któregokolwiek z tych objawów, zaleca się szybką kontrolę wtryskiwaczy, aby zapobiec dalszym uszkodzeniom silnika.'
        },
        {
          question: 'Jak często należy czyścić wtryskiwacze benzynowe?',
          answer: 'Dla większości pojazdów, czyszczenie wtryskiwaczy benzynowych zaleca się co 30 000 - 45 000 kilometrów. Jednakże, jeśli regularnie używasz paliwa wysokiej jakości z dobrymi detergentami, możesz wydłużyć ten okres. Pojazdy, które często wykonują krótkie trasy, jeżdżą w ruchu miejskim lub używają paliwa niższej jakości, mogą wymagać częstszego czyszczenia - około co 15 000 kilometrów. Zawsze sprawdzaj harmonogram konserwacji swojego pojazdu lub skonsultuj się z naszymi technikami w celu uzyskania zaleceń specyficznych dla danego modelu.'
        }
      ],
      'diesel-injectors': [
        {
          question: 'Dlaczego wtryskiwacze diesla są droższe w wymianie niż wtryskiwacze benzynowe?',
          answer: 'Wtryskiwacze diesla są bardziej złożone i muszą wytrzymywać wyższe ciśnienia i temperatury niż wtryskiwacze benzynowe. Nowoczesne wtryskiwacze common rail pracują pod ciśnieniem przekraczającym 2000 barów i wymagają precyzyjnych tolerancji produkcyjnych mierzonych w mikronach. Zawierają również zaawansowane komponenty elektroniczne i wiele precyzyjnie obrobionych części. Ponadto, wtryskiwacze diesla są często wykonane z materiałów wyższej jakości, aby poradzić sobie z właściwościami smarnymi paliwa diesla i wytrzymać wyższe ciśnienia spalania w silnikach diesla.'
        },
        {
          question: 'Jaka jest różnica między czyszczeniem a regeneracją wtryskiwaczy diesla?',
          answer: 'Czyszczenie obejmuje usuwanie osadów węglowych, nalotu i innych zanieczyszczeń z zewnętrznych elementów wtryskiwacza i dysz rozpylających, zazwyczaj przy użyciu kąpieli ultradźwiękowych lub roztworów chemicznych. Regeneracja to bardziej kompleksowy proces, który obejmuje czyszczenie plus pomiar i przywracanie precyzyjnego przepływu wtryskiwacza, wzoru rozpylania i czasu reakcji. Podczas regeneracji wymieniamy zużyte komponenty wewnętrzne, rekalibrujemy elektroniczne elektrozawory i przeprowadzamy testy przepływu, aby upewnić się, że wtryskiwacz spełnia fabryczne specyfikacje. Regeneracja zasadniczo przywraca wtryskiwacz do stanu niemal nowego, a nie tylko usuwa powierzchowne zanieczyszczenia.'
        }
      ],
      'dpf-filters': [
        {
          question: 'Skąd mam wiedzieć, kiedy mój filtr DPF wymaga czyszczenia?',
          answer: 'Twój pojazd zazwyczaj powiadomi Cię, gdy filtr DPF wymaga uwagi, poprzez kontrolkę ostrzegawczą na desce rozdzielczej (zwykle w kolorze bursztynowym). Możesz również zauważyć zmniejszoną ekonomię paliwa, obniżoną wydajność silnika lub trudności z przyspieszaniem. Niektóre pojazdy wchodzą w "tryb awaryjny" z ograniczoną mocą, gdy filtr DPF staje się krytycznie zatkany. Jeśli słyszysz, że silnik pracuje na wyższych obrotach podczas pracy na biegu jałowym, może to wskazywać na próbę aktywnej regeneracji. Większość nowoczesnych pojazdów z silnikiem diesla posiada czujniki DPF, które monitorują ciśnienie zwrotne i wywołują te ostrzeżenia, gdy filtr osiąga około 80% swojej pojemności.'
        },
        {
          question: 'Co powoduje przedwczesne zapchanie filtra DPF?',
          answer: 'Kilka czynników może powodować przedwczesne zapchanie filtra DPF: 1) Częste krótkie podróże, które nie pozwalają układowi wydechowemu osiągnąć temperatur potrzebnych do pasywnej regeneracji; 2) Problemy z silnikiem, takie jak wadliwe zawory EGR, problemy z turbosprężarką lub nieprawidłowe ustawienie wtrysku paliwa; 3) Stosowanie niewłaściwego oleju, który zawiera wysokie poziomy dodatków popiołowych; 4) Niskiej jakości paliwo diesel lub zanieczyszczone paliwo; 5) Styl jazdy – ciągła jazda w ruchu miejskim uniemożliwia efektywną regenerację; oraz 6) Uszkodzone czujniki, które nie wywołują aktywnej regeneracji, gdy jest to potrzebne. Regularna jazda na autostradzie przez co najmniej 30 minut pomaga ułatwić naturalny proces regeneracji.'
        }
      ],
      'engine-codes': [
        {
          question: 'Jaka jest różnica między kodem silnika P0 a P1?',
          answer: 'Kody P0 są kodami generycznymi lub standardowymi zdefiniowanymi przez SAE (Society of Automotive Engineers) i są wspólne dla wszystkich producentów pojazdów. Te kody wskazują na problemy ze standardowymi systemami, takimi jak czujniki tlenu, mieszanka powietrza/paliwa lub kontrola emisji. Kody P1 są specyficzne dla producenta i różnią się między różnymi markami pojazdów. Odnoszą się one zazwyczaj do funkcji lub komponentów unikalnych dla systemów zarządzania silnikiem danego producenta. Na przykład, kod P0301 (wypadanie zapłonu w cylindrze 1) oznacza to samo we wszystkich pojazdach, podczas gdy kod P1XXX może odnosić się do zupełnie różnych systemów w zależności od tego, czy prowadzisz Forda, Toyotę czy BMW.'
        },
        {
          question: 'Dlaczego kontrolka check engine zapala się ponownie krótko po zresetowaniu?',
          answer: 'Gdy kontrolka check engine pojawia się ponownie po zresetowaniu, zwykle wskazuje to, że podstawowy problem nie został naprawiony. Moduł sterujący silnikiem (ECM) ciągle monitoruje systemy pojazdu, a gdy wykryje tę samą usterkę ponownie, reaktywuje kontrolkę. Częste przyczyny to: 1) Początkowa diagnoza nie wykryła głównej przyczyny; 2) Naprawa była niekompletna lub części były niewystarczającej jakości; 3) Istnieje wiele powiązanych problemów, a tylko jeden został rozwiązany; 4) Okresowy problem elektryczny, który występuje w określonych warunkach; lub 5) Pojazd musi wykonać kilka cykli jazdy, aby w pełni zresetować wszystkie monitory. Zamiast wielokrotnego kasowania kodu, zaleca się dokładną diagnostykę przy użyciu profesjonalnego sprzętu, aby zidentyfikować i naprawić podstawowy problem.'
        }
      ],
      'turbocharger': [
        {
          question: 'Co powoduje turbo lag i jak można go zmniejszyć?',
          answer: 'Turbo lag to opóźnienie między naciśnięciem pedału przyspieszenia a odczuciem doładowania z turbosprężarki. Występuje, ponieważ turbosprężarka potrzebuje ciśnienia spalin, aby się rozkręcić i wytworzyć doładowanie. Kilka czynników może pogorszyć turbo lag: zbyt duże turbosprężarki, wycieki spalin, zatkane filtry powietrza, nagromadzenie węgla lub zużyte łożyska. Aby zmniejszyć turbo lag: 1) Zapewnij regularną konserwację systemów dostarczania powietrza i paliwa; 2) Rozważ mniejszą lub turbosprężarkę o zmiennej geometrii, jeśli wymieniasz; 3) Zmodernizuj do konstrukcji turbo twin-scroll, jeśli jest kompatybilna; 4) Sprawdź i napraw wszelkie wycieki spalin; 5) Używaj odpowiednio specyfikowanego oleju silnikowego, aby zapewnić płynną pracę łożysk turbosprężarki; oraz 6) Usuń nagromadzenie węgla na zaworach dolotowych, szczególnie w silnikach z bezpośrednim wtryskiem. Nowoczesne pojazdy z turbosprężarkami twin-scroll, elektrycznymi doładowaniami lub układami sekwencyjnych turbosprężarek mają znacznie mniejsze opóźnienie niż starsze konstrukcje.'
        },
        {
          question: 'Czy piszczący lub gwiżdżący dźwięk z turbosprężarki jest normalny?',
          answer: 'Lekki gwiżdżący dźwięk podczas przyspieszania jest normalny dla wielu pojazdów z doładowaniem - to dźwięk sprężanego powietrza. Jednak nietypowe dźwięki mogą wskazywać na problemy: 1) Wysoki pisk może wskazywać na zużyte łożyska wału turbosprężarki; 2) Grzechotanie lub zgrzytanie może oznaczać, że koło turbiny dotyka obudowy z powodu luzu wału; 3) Nadmierne gwizdanie połączone z utratą mocy może wskazywać na wyciek doładowania; oraz 4) Głośny "szum" przy zwalnianiu pedału gazu może być normalny dla niektórych pojazdów z zaworami blow-off, ale może wskazywać na problemy z zaworem wastegate w innych. Jeśli hałas jest nagły, zmienił swój charakter lub towarzyszy mu problemy z wydajnością, zmniejszona moc lub kontrolki ostrzegawcze, należy natychmiast sprawdzić turbosprężarkę, aby zapobiec katastrofalnej awarii.'
        }
      ]
    };
  } else {
    return {
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
  }
};

export default function FAQPage() {
  const { t, language } = useLanguage();
  const categories = getCategories(t);
  const [activeCategory, setActiveCategory] = useState('gasoline-injectors');
  const faqData = getFaqData(language);

  return (
    <div>
      {/* FAQ Header */}
      <section className="bg-primary text-white py-20 m-stripe">
        <div className="container-custom text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-accent">M</span> {t('knowledgeCenter')} </h1>
          <p className="text-lg max-w-2xl mx-auto">
            {t('faqDescription')}
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
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('moreQuestions')}</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  {t('moreQuestionsDescription')}
                </p>
                <Link href="/contact" className="btn inline-flex items-center px-8 py-4 rounded-md text-lg font-medium group">
                  <span>{t('contactExperts')}</span>
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
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">{t('diagnosticService')}</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                {t('diagnosticDescription')}
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>{t('learnMore')}</span>
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
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">{t('preventiveMaintenance')}</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                {t('maintenanceDescription')}
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>{t('learnMore')}</span>
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
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">{t('dpfRegeneration')}</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                {t('dpfRegenerationDescription')}
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline flex items-center justify-center group">
                <span>{t('learnMore')}</span>
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