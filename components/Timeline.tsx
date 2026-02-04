
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TIMELINE } from '../constants';
import { Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: (index) => index % 2 === 0 ? -50 : 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: "top"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">My <span className="text-blue-500">Journey</span></h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">The evolution of a professional builder</p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {TIMELINE.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item relative flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] z-10 hidden md:block"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 p-6 md:px-12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="inline-block p-2 bg-blue-600/10 rounded-lg text-blue-500 mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="block text-blue-500 font-bold text-sm tracking-widest mb-1">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-lg text-gray-300 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
