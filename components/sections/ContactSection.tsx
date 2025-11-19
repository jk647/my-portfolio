'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Calendar,
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  // ✅ YOUR EMAILJS CREDENTIALS
  const EMAILJS_SERVICE_ID = 'service_7v3rlf7';
  const EMAILJS_TEMPLATE_ID = 'template_dqknllo';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // 🔴 REPLACE THIS WITH YOUR PUBLIC KEY

  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (e) {
      console.error('EmailJS initialization error:', e);
    }
  }, []);

  // Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);


  // Custom X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.9 1H22L14.2 10.3L23.1 23H16.3L10.9 15.5L4.7 23H1.6L9.8 13.1L1.3 1H8.3L13.2 7.8L18.9 1Z" />
  </svg>
);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const templateParams = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
        time: new Date().toLocaleString(),
      };

      console.log('📤 Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ EmailJS Success:', result);
      setFormStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      // More detailed error logging
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
      
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'swe.rabiaaziz@gmail.com',
      description: 'Drop me a line anytime',
      link: 'mailto:swe.rabiaaziz@gmail.com',
      color: 'from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100',
      accent: true
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 327 5676026',
      description: 'Anytime available for a call',
      link: 'tel:+923275676026',
      color: 'from-slate-600 to-slate-800 dark:from-slate-200 dark:to-slate-400',
      accent: true
    },
    {
icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: '+92 327 5676026',
      description: 'Quick chat on WhatsApp',
      link: 'https://wa.me/923275676026',
      color: 'from-slate-800 to-slate-700 dark:from-slate-100 dark:to-slate-300',
      accent: true
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mingora, Swat, Pakistan',
      description: 'Available for remote work',
      link: null,
      color: 'from-slate-700 to-slate-600 dark:from-slate-300 dark:to-slate-200',
      accent: true
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@jk647',
      link: 'https://github.com/jk647',
      color: 'from-slate-800 to-slate-900 dark:from-slate-300 dark:to-slate-100'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: '@rabiaaziz456',
      link: 'https://www.linkedin.com/in/rabiaaziz456/',
      color: 'from-slate-700 to-slate-800 dark:from-slate-200 dark:to-slate-400'
    },
    {
  icon: XIcon,
  name: 'Twitter',
  username: '@rabiaaziz',
  link: 'https://twitter.com/yourusername',
  color: 'from-slate-600 to-slate-700 dark:from-slate-300 dark:to-slate-500'
},
    {
      icon: Calendar,
      name: 'Book a Meeting',
      username: 'Schedule Meet',
      link: 'https://calendly.com/swe-rabiaaziz/30min',
      color: 'from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100',
      accent: true
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black font-display mb-6">
              Get In{' '}
              <span
                className="relative inline-block px-4 py-1 rounded-xl overflow-hidden group cursor-pointer translate-y-4"
                style={{
                  backgroundImage: "url('/messageContainerBG.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 rounded-xl"></span>
                <span className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"></span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow"></span>
                <span className="absolute bottom-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow-delayed"></span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 blur-3xl rounded-full animate-pulse-glow"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300">
                  <span className="absolute top-[3px] left-[3px] text-slate-900/40 font-black select-none" aria-hidden="true">Touch</span>
                  <span className="absolute top-[2px] left-[2px] text-slate-800/50 font-black select-none" aria-hidden="true">Touch</span>
                  <span className="absolute top-[1px] left-[1px] text-slate-700/60 font-black select-none" aria-hidden="true">Touch</span>
                  <span 
                    className="relative text-white font-black select-none"
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                    }}
                  >
                    Touch
                  </span>
                  <span className="absolute top-[-1px] left-0 text-white/40 font-black select-none blur-[0.5px]" aria-hidden="true">Touch</span>
                </span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"></span>
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-full mx-auto mb-6" />

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's bring your vision to life!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6 pb-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Contact Information
                </h3>
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const isClickable = method.link !== null;
                  const showAccent = Boolean(method.accent || isClickable);

                  const CardContent = (
                    <>
                      {showAccent && (
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slate-300/50 dark:border-slate-700/50 rounded-tr-2xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors pointer-events-none" />
                      )}

                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`p-4 bg-gradient-to-br ${method.color} rounded-xl relative overflow-hidden group/icon`}>
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                          <Icon className="w-6 h-6 text-white dark:text-slate-900 relative z-10" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-2">
                            {method.title}
                            {isClickable && <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors" />}
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-0.5 truncate">
                            {method.value}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{method.description}</p>
                        </div>
                        {isClickable && <ArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />}
                      </div>

                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    </>
                  );

                  return isClickable ? (
                    <motion.a
                      key={method.title}
                      href={method.link}
                      className="glass-card p-5 rounded-2xl neon-glow group cursor-pointer relative overflow-hidden block hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                      whileHover={{ scale: 1.02, x: 4 }}
                      variants={itemVariants}
                    >
                      {CardContent}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={method.title}
                      className="glass-card p-5 rounded-2xl neon-glow group relative overflow-hidden"
                      variants={itemVariants}
                    >
                      {CardContent}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl neon-glow group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-slate-300/50 dark:border-slate-700/50 rounded-tr-2xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none" />

                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Connect on Social</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    const isHovered = hoveredSocial === social.name;
                    return (
                      <div 
                        key={social.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <motion.a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className={`group/social relative p-3 rounded-full bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:shadow-lg transition-all overflow-hidden ${isHovered ? 'w-auto px-4' : 'w-11 h-11'}`}
                          whileHover={{ scale: 1.12, rotate: 8 }}
                          whileTap={{ scale: 0.98 }}
                          style={{ minWidth: '44px', minHeight: '44px' }}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-700 rounded-full"></span>
                          
                          <div className="flex items-center gap-2 relative z-10">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            {isHovered && (
                              <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs font-medium whitespace-nowrap overflow-hidden"
                              >
                                {social.username}
                              </motion.span>
                            )}
                          </div>
                          
                          <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none" />
                        </motion.a>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                  Follow me for updates, code, and behind-the-scenes.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex items-center">
              <div className="glass-card p-8 rounded-2xl neon-glow h-auto mx-auto w-full lg:w-[90%] relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slate-300/50 dark:border-slate-700/50 rounded-tr-2xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none" />

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Send Me a Message</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formState.name} 
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400" 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formState.email} 
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400" 
                    />
                  </div>
                  
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formState.subject} 
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400" 
                  />
                  
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formState.message} 
                    onChange={handleChange} 
                    rows={6}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white transition-all resize-none placeholder:text-slate-400" 
                  />

                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                        Something went wrong. Please check console and verify your EmailJS credentials.
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-6 py-4 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 text-white dark:text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                    
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full relative z-10"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    I typically respond within 24 hours. For urgent matters, feel free to call or WhatsApp me directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="glass-card p-8 md:p-10 rounded-2xl neon-glow text-center">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss your ideas and turn them into reality. Whether it's a small task or a large project, I'm here to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://calendly.com/swe-rabiaaziz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 text-white dark:text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                
                <span className="relative z-10">Schedule a 1-1 meeting</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.a>
              
              <motion.a
                href="mailto:swe.rabiaaziz@gmail.com"
                className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Send Quick Email</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 2s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}