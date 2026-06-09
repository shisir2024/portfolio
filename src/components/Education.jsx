import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="Education"
        title="Academic Background"
        subtitle="My educational journey that shapes my technical foundation and problem-solving mindset."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent hidden md:block" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-5 top-8 w-6 h-6 rounded-full border-2 border-primary bg-gray-950 hidden md:flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <div className="glass p-8 rounded-2xl border border-primary/20 card-hover hover:border-primary/40">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))' }}>
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                    <p className="text-primary-400 text-sm font-medium">{edu.location}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Ongoing
                </span>
              </div>

              {/* Degree */}
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white font-semibold">{edu.degree}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: <Calendar size={14} />, label: 'Duration', value: edu.year },
                  { icon: <BookOpen size={14} />, label: 'Status', value: edu.status },
                  { icon: <MapPin size={14} />, label: 'Location', value: 'Coimbatore, India' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="bg-white/5 px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-primary-400 mb-1">
                      {icon}
                      <span className="text-xs text-gray-500">{label}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Future card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative md:pl-20 mt-8"
        >
          <div className="absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-dashed border-gray-600 hidden md:flex items-center justify-center z-10 bg-gray-950">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>
          <div className="glass p-6 rounded-2xl border border-dashed border-white/10 text-center">
            <p className="text-gray-500 text-sm">🚀 Future — Open to advanced degrees & specializations</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
