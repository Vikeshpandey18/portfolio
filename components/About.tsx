
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Stats animation
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="about-image relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 -z-10 blur-2xl opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-3 opacity-20"></div>
              <img 
                src="https://picsum.photos/seed/vikesh/600/600" 
                alt="Vikesh Pandey" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="about-content w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
              Crafting Digital Excellence with <span className="text-blue-500 italic">Purpose.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Hello! I'm Vikesh, a multidisciplinary developer and tech entrepreneur based on the cutting edge of digital innovation. With a passion for building scalable systems and intuitive user experiences, I help startups and businesses bridge the gap between their vision and reality.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="stat-card">
                <p className="text-4xl font-bold text-white mb-1"><span className="stat-number" data-target="50">0</span>+</p>
                <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">Projects</p>
              </div>
              <div className="stat-card">
                <p className="text-4xl font-bold text-white mb-1"><span className="stat-number" data-target="6">0</span>+</p>
                <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">Years Exp.</p>
              </div>
              <div className="stat-card">
                <p className="text-4xl font-bold text-white mb-1"><span className="stat-number" data-target="30">0</span>+</p>
                <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
