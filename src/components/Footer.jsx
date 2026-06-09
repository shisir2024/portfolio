import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 bg-gray-950/80 backdrop-blur-xl">
      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                SD
              </div>
              <div>
                <h3 className="font-bold text-white">Shisir Dhungana</h3>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Passionate CS student building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-gray-500 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-4">
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
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all border border-white/5"
                  title={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-600">{personalInfo.email}</p>
            <p className="text-xs text-gray-600">{personalInfo.phone}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            Designed &amp; Developed with <Heart size={14} className="text-red-500 fill-red-500" /> by{' '}
            <span className="text-primary-400 font-medium">Shisir Dhungana</span> © 2025
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-300 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
