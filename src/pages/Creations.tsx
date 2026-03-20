import { motion } from 'motion/react';
import { 
  Video, 
  Film, 
  MonitorPlay, 
  Palette, 
  ArrowRight, 
  CheckCircle2,
  PlayCircle
} from 'lucide-react';

export default function Creations() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
            Creative Media & Video Production
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            InSync <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">Creations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto"
          >
            Elevate your brand with professional video production, motion graphics, and digital media assets that captivate your audience and drive engagement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://youtu.be/Ra33AaRD5OY" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
              Watch Showreel <PlayCircle size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Creative Services</h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              From concept to final cut, we deliver high-quality media assets tailored to your brand's unique voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Production */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Video Production</h3>
              <p className="text-[var(--text-muted)] mb-4">
                High-quality video production for corporate promos, social media campaigns, and brand storytelling. We handle everything from shooting to final delivery.
              </p>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-purple-500 shrink-0" /> Corporate Videos</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-purple-500 shrink-0" /> Promotional Content</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-purple-500 shrink-0" /> Event Coverage</li>
              </ul>
            </div>

            {/* Motion Graphics */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6">
                <MonitorPlay size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Motion Graphics & Animation</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Bring your ideas to life with dynamic motion graphics and animations. Perfect for explainer videos, logo reveals, and engaging social content.
              </p>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-pink-500 shrink-0" /> Explainer Videos</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-pink-500 shrink-0" /> Animated Logos</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-pink-500 shrink-0" /> UI/UX Animations</li>
              </ul>
            </div>

            {/* Video Editing */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6">
                <Film size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Video Editing</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Expert post-production services to polish your raw footage into compelling narratives, complete with color grading and sound design.
              </p>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Color Grading</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Sound Design & Mixing</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Multi-cam Editing</li>
              </ul>
            </div>

            {/* Brand Identity */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Identity & Digital Assets</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Cohesive visual design across all your digital touchpoints, ensuring your brand looks professional and consistent everywhere.
              </p>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> Social Media Kits</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> Web Design Assets</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> Brand Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showreel Embed */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Watch Our Showreel</h2>
            <p className="text-[var(--text-muted)]">A glimpse into our recent creative projects.</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/Ra33AaRD5OY" 
              title="InSync Creations Showreel" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/5 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's discuss your next creative project and how we can make it stand out.
          </p>
          <a href="mailto:dave@insyncbookkeeping.co.uk" className="inline-flex bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-purple-600/25 items-center gap-2 mx-auto">
            Start a Project <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
