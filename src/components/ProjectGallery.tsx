import React, { useState, useEffect } from 'react';
import { MapPin, Tag, ZoomIn, X, Info } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/businessConfig';
import { ProjectItem } from '../types';

export const ProjectGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeModalProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalProject(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModalProject]);

  const categories = [
    'All',
    'Kitchens',
    'Bathrooms',
    'Living Areas',
    'Additions',
    'Flooring',
    'Interiors',
    'Exteriors',
    'Before & After'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Portfolio & Inspiration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Recent Residential Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore sample transformations and design concepts across North Carolina homes. Real completed project photography will continue to be added to this gallery.
          </p>

          {/* Easy Photo Replacement Notice for Site Owner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#eef5fa] border border-[#d4e4f2] text-[#132537] text-xs">
            <Info className="w-4 h-4 text-[#307ab4] flex-shrink-0" />
            <span>Photos are placeholders and can easily be replaced with verified A&J client project photos in <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#d4e4f2] text-[#0d3356]">src/data/businessConfig.ts</code>.</span>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#0d3356] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-[#0d3356] border border-[#d4e4f2] hover:border-[#307ab4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-[#e2ecf4] hover:border-[#307ab4]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom Trigger */}
              <div 
                className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#307ab4]"
                onClick={() => setActiveModalProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View photo and details for ${project.title}`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[#081d33]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#0d3356] flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-[#307ab4]" />
                    <span>View Project</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#0d3356] border border-[#e2ecf4] shadow-xs">
                  {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 gap-2">
                    <span className="flex items-center gap-1 font-semibold truncate text-slate-700">
                      <Tag className="w-3.5 h-3.5 text-[#307ab4]" />
                      {project.projectType}
                    </span>
                    <span className="flex items-center gap-1 font-semibold flex-shrink-0 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#307ab4]" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#132537] tracking-tight mb-2 group-hover:text-[#307ab4] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#eef4fa] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-[#307ab4] hover:text-[#0d3356] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Residential
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-[#081d33]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#d4e4f2]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                decoding="async"
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#081d33]/80 hover:bg-[#081d33] text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#eef5fa] text-[#0d3356] border border-[#d4e4f2] font-bold">
                  {activeModalProject.category}
                </span>
                <span>•</span>
                <span className="font-semibold text-slate-700">{activeModalProject.projectType}</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#307ab4]" />
                  {activeModalProject.location}
                </span>
              </div>

              <h3 id="gallery-modal-title" className="text-2xl font-bold text-[#132537] mb-3">
                {activeModalProject.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {activeModalProject.description}
              </p>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-lg bg-[#eef5fa] hover:bg-[#d4e4f2] text-[#0d3356] font-bold text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
