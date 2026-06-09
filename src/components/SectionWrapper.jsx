import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const SectionHeading = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-400 mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
    >
      {label}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="section-heading gradient-text"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionWrapper;
