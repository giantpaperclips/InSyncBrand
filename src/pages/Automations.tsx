import { motion } from 'motion/react';
import { 
  Bot, 
  Workflow, 
  Database, 
  MessageSquare, 
  PhoneCall, 
  Calculator, 
  PenTool, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../contexts/ContactModalContext';

export default function Automations() {
  const { openModal } = useContactModal();
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cta"></span>
            Scale Efficiently with AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Financial Clarity, Creative Media & <span className="text-primary">AI Automation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto"
          >
            We build intelligent systems that save you time, streamline your finances, and elevate your brand. Focus on growth while we handle the execution.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={openModal} className="w-full sm:w-auto bg-[var(--color-primary)] hover:brightness-110 text-white px-8 py-3 rounded-md font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              Explore AI Automations <ArrowRight size={18} />
            </button>
            <a href="#ecosystem" className="w-full sm:w-auto bg-[var(--card-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              View All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Focus: Automations */}
      <section id="automations" className="py-20 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">InSync Automations</h2>
              <p className="text-[var(--text-muted)] text-lg">
                Transform your operations with custom AI solutions. We integrate intelligent agents and automated workflows to eliminate manual tasks.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button onClick={openModal} className="text-[var(--color-primary)] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more about AI <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Chatbots & Assistants</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Deploy intelligent conversational agents that handle customer inquiries 24/7, qualify leads, and provide instant support.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Website Support Bots</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Lead Qualification</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Internal Knowledge Base</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center text-cta mb-6">
                <Workflow size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Connect your favorite tools (Zapier, Make) to automate repetitive tasks, sync data across platforms, and trigger actions seamlessly.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> CRM Integrations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Email Sequences</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Document Generation</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Voice Agents</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Implement human-like voice AI to handle inbound calls, schedule appointments, and conduct outbound outreach campaigns.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Inbound Call Routing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Appointment Setting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Outbound Surveys</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Extraction</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Automatically extract, process, and structure data from invoices, receipts, emails, and PDFs using advanced OCR and LLMs.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Invoice Processing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Email Parsing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Web Scraping</li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom LLM Solutions</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Build bespoke AI applications tailored to your specific business logic, utilizing the latest large language models.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> RAG Systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Fine-tuned Models</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> API Development</li>
                </ul>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="premium-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Automations</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Optimize your sales pipeline with automated lead scoring, follow-ups, and data enrichment within your existing CRM.
              </p>
              <div className="reveal-content">
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Lead Scoring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Automated Follow-ups</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cta" /> Pipeline Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Overview */}
      <section id="ecosystem" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Business Ecosystem</h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              Beyond automation, we provide the foundational services your business needs to operate smoothly and look professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bookkeeping */}
            <div className="premium-card p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Calculator size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">InSync Bookkeeping</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">
                  Maintain financial clarity with our meticulous bookkeeping services. We handle reconciliation, reporting, and ensure your books are always tax-ready.
                </p>
                <ul className="space-y-2 text-sm font-medium mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Monthly Reconciliation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Financial Statements</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Accounts Payable/Receivable</li>
                </ul>
                <Link to="/bookkeeping" className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Bookkeeping Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Creations */}
            <div className="premium-card p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <PenTool size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">InSync Creations</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">
                  Elevate your brand identity with professional web design, content creation, and digital media assets that convert visitors into customers.
                </p>
                <ul className="space-y-2 text-sm font-medium mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> Web Design & Development</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> Brand Identity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500" /> Digital Content</li>
                </ul>
                <Link to="/creations" className="text-purple-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Creative Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[var(--card-bg)] border-y border-[var(--border-color)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Forward-Thinking Teams</h2>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="premium-card min-w-[300px] md:min-w-[400px] p-8 snap-center shrink-0">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "InSync Automations completely transformed our lead qualification process. The AI voice agent handles 40% of our initial calls, saving our sales team countless hours."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">John Doe</h4>
                    <p className="text-xs text-[var(--text-muted)]">Operations Director, TechFlow</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA / Footer */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to scale efficiently?</h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's discuss how AI automation, clear financials, and strong branding can accelerate your growth.
          </p>
          <button onClick={openModal} className="inline-flex bg-[var(--color-cta)] hover:brightness-110 text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-orange-500/25 items-center gap-2 mx-auto">
            Book a Free Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
