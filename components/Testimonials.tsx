
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-blue-600 mx-auto mb-10 opacity-20" />
          
          <div className="relative h-[300px] md:h-[250px]">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === active 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                }`}
              >
                <p className="text-xl md:text-3xl font-light italic leading-relaxed text-gray-200 mb-10">
                  "{t.text}"
                </p>
                <div className="flex flex-col items-center">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-2 border-blue-600 p-1" />
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-blue-500 text-sm font-medium tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? 'bg-blue-600 w-10' : 'bg-gray-800 hover:bg-gray-600'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
