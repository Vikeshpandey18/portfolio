
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              LET'S <span className="text-blue-500">TALK</span><br />PROJECTS.
            </h2>
            <p className="text-gray-400 mb-10">
              Have a vision that needs building? Or just want to say hi? Reach out and let's create something extraordinary together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Me</p>
                  <a href="mailto:hello@vikeshpandey.com" className="text-lg font-bold hover:text-blue-500 transition-colors">hello@vikeshpandey.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">WhatsApp</p>
                  <a href="tel:+1234567890" className="text-lg font-bold hover:text-blue-500 transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                  <p className="text-lg font-bold">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="p-8 md:p-12 rounded-3xl glass border border-white/5 relative">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Your Name</p>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</p>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Subject</p>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none">
                    <option className="bg-[#111]">General Inquiry</option>
                    <option className="bg-[#111]">Web Development</option>
                    <option className="bg-[#111]">UI/UX Design</option>
                    <option className="bg-[#111]">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Message</p>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  ></textarea>
                </div>

                <button className="group w-full py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  SEND MESSAGE
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
