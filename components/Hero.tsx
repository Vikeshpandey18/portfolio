
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Web Developer",
    "Startup Founder",
    "Tech Creator",
    "Digital Innovator"
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Entrance Animations
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      gsap.to(".bg-orb", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Simple typing logic
    let currentTitle = titles[textIndex % titles.length];
    let charIndex = 0;
    let isDeleting = false;
    let timer: any;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          timer = setTimeout(handleTyping, 2000);
        } else {
          timer = setTimeout(handleTyping, 100);
        }
      } else {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setTextIndex(prev => prev + 1);
          timer = setTimeout(handleTyping, 500);
        } else {
          timer = setTimeout(handleTyping, 50);
        }
      }
    };

    timer = setTimeout(handleTyping, 1000);
    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="bg-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="hero-element mb-6 inline-block">
          <span className="px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
            Transforming Ideas into Reality
          </span>
        </div>

        <h1 className="hero-element text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none">
          VIKESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">PANDEY</span>
        </h1>

        <div className="hero-element min-h-[40px] mb-10">
          <p className="text-xl md:text-3xl font-light text-gray-400">
            Professional <span className="text-white font-semibold border-r-2 border-blue-500 pr-1">{displayText}</span>
          </p>
        </div>

        <div className="hero-element flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass border border-gray-700 hover:border-blue-500/50 text-white font-bold rounded-full transition-all"
          >
            LET'S CONNECT
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
