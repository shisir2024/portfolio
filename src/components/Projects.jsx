import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Search, Eye } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { projects } from '../data/portfolioData';

const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))];

const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          className="relative glass border border-white/10 rounded-2xl p-8 max-w-2xl w-full z-10 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 40 }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <X size={16} />
          </button>

          <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${project.color} mb-6`} />
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.longDescription}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
            <ul className="grid grid-cols-2 gap-2">
              {project.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>

          <div className="flex gap-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-white flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2"><ExternalLink size={14} /> Live Demo</span>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              <Github size={14} /> GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = projects.filter(p => {
    const matchTech = filter === 'All' || p.tech.includes(filter);
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchTech && matchSearch;
  });

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        subtitle="A collection of projects showcasing my skills in full-stack development and problem solving."
      />

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 glass rounded-xl text-sm text-gray-300 placeholder:text-gray-600 outline-none border border-white/5 focus:border-primary/40 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                filter === tech
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'glass text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 card-hover group"
            >
              {/* Gradient Header */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  {!project.live && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400 flex-shrink-0 ml-2">No Demo</span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-300 transition-colors"
                  >
                    <Eye size={14} /> View Details
                  </button>
                  <div className="flex-1" />
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs bg-primary/20 text-primary-300 px-3 py-1.5 rounded-lg hover:bg-primary/30 transition-colors border border-primary/20">
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs glass text-gray-400 px-3 py-1.5 rounded-lg hover:text-white transition-colors border border-white/5">
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No projects match your search.</p>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  );
};

export default Projects;
