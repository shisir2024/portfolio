import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FileText, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <SectionWrapper id="resume">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          My <span className="gradient-text">Resume</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 text-primary/10">
            <FileText size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <FileText size={40} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Professional Resume</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Get a comprehensive overview of my skills, experience, and educational background by viewing or downloading my resume.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Eye size={18} />
                <span>View Resume</span>
              </a>
              <a href="/resume.pdf" download="Shisir_Dhungana_Resume.pdf" className="btn-outline">
                <Download size={18} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
