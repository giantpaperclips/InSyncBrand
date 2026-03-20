import { motion } from 'motion/react';
import { 
  Calculator, 
  FileText, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';

export default function Bookkeeping() {
  const { openModal } = useContactModal();
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Over 20 years of experience
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            InSync <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Bookkeeping</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto"
          >
            We provide a tailored accounting and administration service to fit your needs and requirements. Stay in sync with your business finances.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={openModal} className="w-full sm:w-auto bg-[var(--color-primary)] hover:brightness-110 text-white px-8 py-3 rounded-md font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              Contact Us <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Comprehensive bookkeeping and administration support tailored for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bookkeeping Services */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Bookkeeping Services</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Raising and receipting invoices</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Bank reconciliation</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Self Assessments</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Payroll</li>
              </ul>
            </div>

            {/* Reporting */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Reporting</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Monthly reporting</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Management accounts</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> Cash flow forecasting</li>
              </ul>
            </div>

            {/* Training */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Training</h3>
              <ul className="space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> Xero Training</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> GDPR Training</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> Supervised by HMRC for Anti-Money Laundering</li>
              </ul>
            </div>

            {/* Tax Services */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Tax Services</h3>
              <ul className="space-y-3 text-[var(--text-muted)] mb-6">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> Self Assessment</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> Making Tax Digital</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> VAT returns</li>
              </ul>
              <button onClick={openModal} className="text-[var(--color-primary)] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Get in touch to discuss your requirements <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need help with your books?</h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Get in touch today to discuss how we can support your business.
          </p>
          <button onClick={openModal} className="inline-flex bg-[var(--color-cta)] hover:brightness-110 text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-orange-500/25 items-center gap-2 mx-auto">
            Email Dave <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
