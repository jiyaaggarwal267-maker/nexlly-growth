import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
              {/* Logo space - Add your logo image here */}
             
 <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full overflow-hidden flex flex items-center justify-center">
              {/* Logo space */}
              <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
            </div>

            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black">NEXLLY GROWTH</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-black transition-colors font-medium">Services</button>
            <button onClick={() => window.location.href = '#pricing'} className="text-gray-700 hover:text-black transition-colors font-medium">Pricing</button>
            <button onClick={() => window.location.href = '#process'} className="text-gray-700 hover:text-black transition-colors font-medium">Process</button>
            <button onClick={() => window.location.href = '#about'} className="text-gray-700 hover:text-black transition-colors font-medium">About</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-4 py-4 px-6 space-y-4 animate-fadeIn">
            <button onClick={() => navigateTo('services')} className="block w-full text-left text-gray-700 hover:text-black">Services</button>
            <button onClick={() => window.location.href = '#pricing'} className="block w-full text-left text-gray-700 hover:text-black">Pricing</button>
            <button onClick={() => window.location.href = '#process'} className="block w-full text-left text-gray-700 hover:text-black">Process</button>
            <button onClick={() => window.location.href = '#about'} className="block w-full text-left text-gray-700 hover:text-black">About</button>
          </div>
        )}
      </nav>

      {currentPage === 'home' ? <HomePage /> : <ServicesPage navigateTo={navigateTo} />}
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-full px-6 py-2 mb-8 animate-fadeInUp hover:bg-white/80 hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-black animate-pulse" />
            <span className="text-sm font-medium text-black">Instagram Growth Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fadeInUp leading-tight text-black" style={{animationDelay: '0.1s'}}>
            POWER YOUR<br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">INSTAGRAM GROWTH</span><br />
            WITH CONTENT AND AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Performance-driven strategies that help creators and modern brands grow up to 200%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK5b-L24OQTLOcXPEzhZolB4PZfcTJhMjrRuFkyYillf-dhw/viewform?usp=header', '_blank')} className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              FREE GROWTH AUDIT
            </button>
            <button onClick={() => window.location.href = '#pricing'} className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300">
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              WE TURN ATTENTION<br />INTO REVENUE
            </h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                letter: 'N',
                title: 'Team-Driven Growth Studio',
                desc: 'At Nexlly Growth, we\'re a team-driven digital growth studio built for creators, founders, and modern brands who want more than vanity metrics. We help transform attention into real business outcomes through performance-focused strategy, high-impact content, and scalable growth systems.'
              },
              {
                letter: 'E',
                title: 'Engineered, Not Accidental',
                desc: 'We believe growth isn\'t accidental — it\'s engineered. That\'s why our approach combines deep audience research, clear brand positioning, and data-backed execution to ensure every piece of content serves a purpose.'
              },
              {
                letter: 'X',
                title: 'Premium Digital Assets',
                desc: 'Our team works closely with you to understand your goals, challenges, and vision. From there, we design digital assets that don\'t just look premium, but are optimized to convert, retain, and scale across platforms.'
              },
              {
                letter: 'L',
                title: 'Sustainable Growth Engines',
                desc: 'Whether you\'re building a personal brand, launching a product, or scaling an online business, we create systems that grow with you — powered by strategy, creativity, and AI-driven automation. We don\'t chase trends. We build sustainable growth engines that deliver consistent results over time.'
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/60 backdrop-blur-md border border-gray-200/50 p-8 rounded-2xl hover:bg-white/80 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <span className="text-white text-xl font-bold">{item.letter}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-900 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Framework */}
      <section id="process" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Our Growth Framework</h2>
            <p className="text-xl text-gray-600">A structured approach that turns insight into impact.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Discover',
                desc: "We start by understanding where you stand today — analyzing performance, audience behavior, and market signals to identify what's working and what's holding you back."
              },
              {
                num: '02',
                title: 'Design',
                desc: 'Using insights and data, we shape a tailored growth plan aligned with your goals, positioning, and brand vision — built for clarity and scale.'
              },
              {
                num: '03',
                title: 'Build',
                desc: 'This is where ideas turn into action. Our team creates and manages high-impact content, campaigns, and systems that drive consistent visibility and engagement.'
              },
              {
                num: '04',
                title: 'Refine',
                desc: "Growth doesn't stop at launch. We monitor performance, test improvements, and fine-tune execution to maximize reach, conversions, and long-term results."
              }
            ].map((step, idx) => (
              <div key={idx} className="group bg-white/70 backdrop-blur-md border border-gray-200/50 p-8 rounded-2xl hover:bg-white/90 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="text-6xl font-bold text-gray-200 mb-4 group-hover:text-gray-300 group-hover:scale-110 transition-all duration-500">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-900 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your growth stage.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Free Trial */}
            <div className="group relative bg-white/70 backdrop-blur-xl border-2 border-gray-200/50 rounded-3xl p-8 hover:border-gray-300/70 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-pulse">
                FREE TRIAL
              </div>
              
              <div className="text-center mt-6 mb-8">
               <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
  <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
</div>

                <p className="text-red-500 font-semibold text-sm group-hover:scale-105 transition-transform duration-300">⏰ Only valid for 2 days</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Content strategy for 2 days',
                  'Basic profile optimization (Bio & Highlights only)',
                  'Account setup'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK5b-L24OQTLOcXPEzhZolB4PZfcTJhMjrRuFkyYillf-dhw/viewform?usp=header', '_blank')} className="w-full bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80 border-2 border-gray-300 text-black py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105 hover:shadow-lg">
                START FREE TRIAL
              </button>
            </div>

            {/* Basic Plan */}
            <div className="group relative bg-white/70 backdrop-blur-xl border-2 border-gray-200/50 rounded-3xl p-8 hover:border-gray-300/70 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
  <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
</div>

                <h3 className="text-2xl font-bold text-black group-hover:scale-105 transition-transform duration-300">BASIC PLAN</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  '10 reels basic',
                  'Content strategy 4 weeks',
                  'Engagement strategy',
                  'Basic Profile Optimization (Bio, Highlights, CTA)',
                  'Monthly Performance Report (Reach, Views, Growth)'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK5b-L24OQTLOcXPEzhZolB4PZfcTJhMjrRuFkyYillf-dhw/viewform?usp=header', '_blank')} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-2xl">
                EXPLORE MORE
              </button>
            </div>

            {/* Advance Plan */}
            <div className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl border-2 border-gray-300/60 rounded-3xl p-8 hover:border-gray-400/80 hover:shadow-2xl hover:from-white/95 hover:to-gray-50/95 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                POPULAR
              </div>

              <div className="text-center mt-6 mb-8">
                <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
  <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
</div>

                <h3 className="text-2xl font-bold text-black group-hover:scale-105 transition-transform duration-300">ADVANCE PLAN</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  '22 high production reels',
                  '24/7 Priority Support',
                  'Influencer Collab Strategy',
                  'AI automation setup',
                  'Landing page design',
                  'Monthly Growth Experiments (A/B testing content)',
                  'Script and content for videos and posts'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK5b-L24OQTLOcXPEzhZolB4PZfcTJhMjrRuFkyYillf-dhw/viewform?usp=header', '_blank')} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-2xl">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Ready to Scale Smarter?</h2>
          <p className="text-xl text-gray-600 mb-10">Book your free growth audit and get a clear, data-backed 3-month action plan designed to accelerate your reach, conversions, and brand presence.</p>
          <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK5b-L24OQTLOcXPEzhZolB4PZfcTJhMjrRuFkyYillf-dhw/viewform?usp=header', '_blank')} className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/50 hover:bg-white/90 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
            <Mail className="w-10 h-10 text-black mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="font-bold text-lg mb-2 text-black">Direct Contact</h3>
            <a href="mailto:nexllygrowth@gmail.com" className="text-gray-600 hover:text-black transition-colors">nexllygrowth@gmail.com</a>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/50 hover:bg-white/90 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
            <Instagram className="w-10 h-10 text-black mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="font-bold text-lg mb-2 text-black">Social Updates</h3>
            <a href="https://instagram.com/nexlly.growth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">@nexlly.growth</a>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/50 hover:bg-white/90 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
            <MessageCircle className="w-10 h-10 text-black mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="font-bold text-lg mb-2 text-black">Instant Support</h3>
            <a href="https://whatsapp.com/channel/0029VbCMe0735fLvUl6O6T2j" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">Chat with us on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full overflow-hidden flex flex items-center justify-center">
              {/* Logo space */}
              <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
            </div>
            <span className="text-xl font-bold">NEXLLY GROWTH</span>
          </div>
          <p className="text-gray-400 mb-6">Building sustainable growth engines that deliver consistent results.</p>
          <p className="text-gray-500 text-sm">© 2026 Nexlly Growth. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

const ServicesPage = ({ navigateTo }) => {
  const services = [
    {
      title: 'Social Media Management',
      desc: 'Strategic content and engagement systems designed to grow reach and drive conversions.',
      icon: '📱'
    },
    {
      title: 'Web Designing',
      desc: 'High-impact, conversion-focused websites built to look premium and perform flawlessly.',
      icon: '💻'
    },
    {
      title: 'Video Editing',
      desc: 'Scroll-stopping edits crafted to capture attention and maximize viewer retention.',
      icon: '🎬'
    },
    {
      title: 'AI Automation',
      desc: 'Smart automation systems that streamline workflows, capture leads, and scale growth.',
      icon: '🤖'
    },
    {
      title: 'Content Strategy',
      desc: 'Data-driven content frameworks designed to attract, engage, and convert the right audience consistently.',
      icon: '📊'
    },
    {
      title: 'Graphic Designing',
      desc: 'Stunning visual designs that capture attention and communicate your brand message with precision and creativity.',
      icon: '🎨'
    }
  ];

  return (
    <>
      <section className="pt-40 pb-32 px-6 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
              SMART GROWTH SOLUTIONS<br />FOR THE NEW-AGE BRAND.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-led strategies and content systems engineered to scale your Instagram impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white/70 backdrop-blur-md border border-gray-200/50 p-8 rounded-2xl hover:bg-white/90 hover:border-gray-300/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-900 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.desc}</p>
                <button 
                  onClick={() => window.open('https://instagram.com/nexlly.growth', '_blank')}
                  className="flex items-center text-black font-semibold hover:text-gray-700 group-hover:translate-x-3 transition-all duration-500"
                >
                  Know More <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-125 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <img
    src="/logo.png"
    alt="Nexlly Growth"
    className="w-full h-full object-contain scale-125"
  />
            </div>
            <span className="text-xl font-bold">NEXLLY GROWTH</span>
          </div>
          <p className="text-gray-400 mb-6">Building sustainable growth engines that deliver consistent results.</p>
          <p className="text-gray-500 text-sm">© 2026 Nexlly Growth. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;