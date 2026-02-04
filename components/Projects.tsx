
import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">FEATURED <span className="text-blue-500">WORKS</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">A selection of high-impact projects that define my technical expertise and design philosophy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-[#0d0d0d] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-blue-600/20 text-blue-400 border border-blue-400/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.liveUrl} 
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-xs hover:bg-blue-500 hover:text-white transition-all"
                    >
                      LIVE DEMO <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Static View Overlay */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                   <p className="text-gray-500 text-xs uppercase tracking-widest">{project.tags[0]}</p>
                   <ArrowUpRight className="text-gray-600 w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/vikeshpandey" 
            target="_blank" 
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="font-bold tracking-widest text-sm">VIEW MORE ON GITHUB</span>
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
