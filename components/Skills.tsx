
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skill-card",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">TECHNICAL <span className="text-blue-500">ARMORY</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-xs">A glimpse into the tools and languages I master to create digital magic.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => {
            const IconComponent = (Icons as any)[skill.icon];
            return (
              <div 
                key={skill.name} 
                className="skill-card group p-6 glass border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                  <span className="text-2xl font-bold text-white/20 group-hover:text-blue-500/50 transition-colors">{skill.level}%</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{skill.name}</h3>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 group-hover:bg-blue-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
