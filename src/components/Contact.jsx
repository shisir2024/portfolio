import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';
import { personalInfo } from '../data/portfolioData';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: null },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'shisir-dhungana', href: personalInfo.linkedin },
  { icon: <Github size={18} />, label: 'GitHub', value: 'shisir2024', href: personalInfo.github },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message },
        EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch {
      toast.error('Failed to send message. Please try emailing directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm currently open to internship opportunities, full-time roles, and freelance projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0"
                  style={{ background: 'rgba(99,102,241,0.1)' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-300 group-hover:text-primary-300 transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300 font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl border border-white/5 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Your Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-primary/50 transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Email Address *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-primary/50 transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Subject *</label>
              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder="Project Inquiry / Internship / Collaboration"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-primary/50 transition-colors"
              />
              {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Message *</label>
              <textarea
                {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                rows={5}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-primary/50 transition-colors resize-none"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-white w-full justify-center disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
