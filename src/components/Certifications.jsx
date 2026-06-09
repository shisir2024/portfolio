import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        label="Certifications"
        title="Credentials & Achievements"
        subtitle="Professional certifications that validate my technical knowledge and skills."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-default group"
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${cert.color} bg-opacity-20 border border-white/10`}>
              {cert.icon}
            </div>

            {/* Gradient top bar */}
            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${cert.color} mb-4`} />

            <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs text-primary-400 font-medium mb-3">{cert.issuer}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>

            {/* Badge */}
            <div className="mt-4 flex items-center gap-2">
              <Award size={12} className="text-primary-400" />
              <span className="text-xs text-gray-500">Verified</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 glass rounded-2xl p-8 border border-primary/10 text-center"
      >
        <h3 className="text-lg font-semibold text-white mb-2">Continuously Learning</h3>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
          I regularly pursue new certifications and courses to stay current with the latest technologies and industry best practices.
        </p>
        <a
          href="https://www.linkedin.com/in/shisir-dhungana-b8b658324"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-white inline-flex items-center gap-2"
        >
          <span className="relative z-10 flex items-center gap-2">
            <ExternalLink size={14} /> View on LinkedIn
          </span>
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications;
