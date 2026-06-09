import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        label="Achievements"
        title="Hackathons & Awards"
        subtitle="Recognition for innovation, problem-solving, and technical excellence."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/60 via-primary/40 to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center hidden md:flex z-10"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Trophy size={14} className="text-white" />
              </motion.div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-yellow-500/20 card-hover group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${ach.color} bg-opacity-20`}>
                      {ach.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                        {ach.title}
                      </h3>
                      {ach.project && (
                        <p className="text-xs text-gray-500 mt-0.5">Project: {ach.project}</p>
                      )}
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${ach.color} text-white flex-shrink-0`}>
                    {ach.prize}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4 md:pl-20"
        >
          {[
            { emoji: '🥇', label: '1st Prizes', value: '0' },
            { emoji: '🥈', label: '2nd Prizes', value: '2' },
            { emoji: '🥉', label: '3rd Prizes', value: '1' },
          ].map(({ emoji, label, value }) => (
            <div key={label} className="glass p-4 rounded-xl text-center border border-white/5">
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
