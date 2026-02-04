
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Excellence as a <span className="text-blue-500">Service</span></h2>
            <p className="text-gray-400">Transforming complex business requirements into elegant software solutions that scale.</p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-8 bg-white/10"></div>
          <span className="text-blue-500 font-bold tracking-widest text-xs bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">WHAT I DO</span>
        </div>

        <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div 
                key={index} 
                className="service-card group relative p-10 rounded-3xl overflow-hidden glass border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700">
                  {IconComponent && <IconComponent className="w-24 h-24" />}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-blue-500 font-bold text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    LEARN MORE <Icons.ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
