
import React from 'react';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
               <Rocket className="w-5 h-5 text-white" />
             </div>
             <span className="font-bold text-xl tracking-tighter uppercase">Vikesh<span className="text-blue-500">.</span></span>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vikesh Pandey. All rights reserved. Built with precision.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@vikeshpandey.com" className="text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
