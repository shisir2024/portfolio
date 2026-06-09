import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { skills } from '../data/portfolioData';

const categories = [
  { key: 'languages', label: '⚙️ Languages', color: 'from-blue-500 to-indigo-500' },
  { key: 'web', label: '🌐 Web Development', color: 'from-purple-500 to-pink-500' },
  { key: 'databases', label: '🗄️ Databases', color: 'from-green-500 to-teal-500' },
  { key: 'tools', label: '🛠️ Tools', color: 'from-orange-500 to-red-500' },
];

const SkillBar = ({ name, level, color, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-primary-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Technical Expertise"
        subtitle="A diverse skill set spanning frontend, backend, databases, and development tools."
      />

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass p-6 rounded-2xl card-hover border border-white/5 hover:border-primary/20"
          >
            <div className={`inline-block text-sm font-semibold px-3 py-1 rounded-lg bg-gradient-to-r ${cat.color} text-white mb-5`}>
              {cat.label}
            </div>
            {skills[cat.key].map((skill, i) => (
              <SkillBar key={skill.name} {...skill} color={cat.color} index={i} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-gray-300 mb-6">🤝 Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.soft.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="glass px-6 py-3 rounded-xl font-medium text-gray-200 border border-primary/20 hover:border-primary/50 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Icons Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 glass p-6 rounded-2xl border border-white/5"
      >
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">Tech Stack</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'MySQL', 'Java', 'C++', 'Figma', 'VS Code'].map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
