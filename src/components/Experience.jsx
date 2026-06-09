import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { experience } from '../data/portfolioData';

const colors = [
  { bg: 'from-primary/20 to-accent/20', border: 'border-primary/30', tag: 'bg-primary/20 text-primary-300' },
  { bg: 'from-accent/20 to-cyan-500/20', border: 'border-accent/30', tag: 'bg-accent/20 text-purple-300' },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Work Experience"
        subtitle="Hands-on internship experience building real-world full-stack applications."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-5 top-8 w-6 h-6 rounded-full border-2 border-primary bg-gray-950 hidden md:flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className={`glass p-8 rounded-2xl border ${colors[i]?.border || 'border-white/10'} card-hover hover:border-primary/40`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors[i]?.bg}`}>
                      <Briefcase size={20} className="text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="text-primary-400 text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${colors[i]?.tag || 'bg-white/10 text-gray-300'}`}>
                    {exp.type}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2 size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4 md:pl-20"
        >
          {[
            { value: '2+', label: 'Internships' },
            { value: '10+', label: 'Technologies' },
            { value: '100%', label: 'Dedication' },
          ].map(({ value, label }) => (
            <div key={label} className="glass p-4 rounded-xl text-center border border-white/5">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
