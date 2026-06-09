import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { personalInfo, typingTitles } from '../data/portfolioData';
import heroPhoto from '../assets/hero-photo.jpeg';

const floatingIcons = [
  { icon: '⚛️', label: 'React', x: '10%', y: '20%', delay: 0 },
  { icon: '🟩', label: 'Node.js', x: '85%', y: '15%', delay: 0.5 },
  { icon: '🍃', label: 'MongoDB', x: '90%', y: '70%', delay: 1 },
  { icon: '🐍', label: 'Python', x: '8%', y: '75%', delay: 1.5 },
  { icon: '☕', label: 'Java', x: '50%', y: '88%', delay: 0.8 },
  { icon: '🎨', label: 'CSS', x: '75%', y: '40%', delay: 1.2 },
];

const typingSequence = typingTitles.flatMap(t => [t, 2000]);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
    >
      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', animationDelay: '2s' }} />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex flex-col items-center gap-1 text-2xl"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
          <span className="text-xs text-gray-500">{item.label}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text glow-text block">
                Shisir Dhungana
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-primary-400">{'< '}</span>
              <TypeAnimation sequence={typingSequence} repeat={Infinity} cursor speed={50} />
              <span className="text-primary-400">{' />'}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {personalInfo.bio.slice(0, 180)}...
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <MapPin size={14} className="text-primary-400" />
              <span>Coimbatore, Tamil Nadu, India &nbsp;·&nbsp; Originally from Nepal 🇳🇵</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </span>
              </button>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                <Mail size={16} /> Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
                  title={label}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-950" />
              </motion.div>

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-950 z-10 m-1.5">
                <img
                  src={heroPhoto}
                  alt="Shisir Dhungana"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating badge — Experience */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl border border-primary/30 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-xl font-black text-white">2+</div>
                <div className="text-xs text-gray-400">Internships</div>
              </motion.div>

              {/* Floating badge — Projects */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl border border-accent/30 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xl font-black text-white">4+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-16 gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
