import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Globe, Heart } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { personalInfo, stats } from '../data/portfolioData';
import heroPhoto from '../assets/hero-photo.jpeg';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Who I Am"
        subtitle="A passionate developer driven by curiosity and a love for building impactful solutions."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image + Decorative */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-72 md:w-80">
            {/* Background blur */}
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }} />

            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img src={heroPhoto} alt="Shisir Dhungana" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass px-4 py-3 rounded-xl text-center">
                  <p className="text-white font-semibold text-sm">Shisir Dhungana</p>
                  <p className="text-primary-300 text-xs">CS & Engineering Student</p>
                </div>
              </div>
            </div>

            {/* Nepal flag badge */}
            <motion.div
              className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-white/10 text-center"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-2xl">🇳🇵</span>
              <p className="text-xs text-gray-400">Nepal</p>
            </motion.div>

            {/* Heart for passion */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-primary/20 flex items-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400 fill-red-400" />
              <span className="text-xs text-gray-300">Passionate Coder</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Computer Science Student &{' '}
            <span className="gradient-text">Full Stack Developer</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">{personalInfo.bio}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: <MapPin size={15} />, label: 'Current Location', value: 'Coimbatore, Tamil Nadu' },
              { icon: <Globe size={15} />, label: 'Origin', value: 'Nepal 🇳🇵' },
              { icon: <Mail size={15} />, label: 'Email', value: personalInfo.email },
              { icon: <Phone size={15} />, label: 'Phone', value: personalInfo.phone },
            ].map(({ icon, label, value }) => (
              <div key={label} className="glass px-4 py-3 rounded-xl flex items-start gap-3">
                <span className="text-primary-400 mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <a href="/resume.pdf" download className="btn-primary text-white">
              <span className="relative z-10">Download CV</span>
            </a>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass p-6 rounded-2xl text-center card-hover border border-primary/10 hover:border-primary/30"
          >
            <div className="text-4xl font-black gradient-text mb-2">
              {inView && <CountUp end={stat.value} duration={2} />}{stat.suffix}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
