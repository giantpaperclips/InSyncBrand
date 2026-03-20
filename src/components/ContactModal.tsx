import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-[var(--border-color)]">
          <div>
            <h2 className="text-2xl font-bold font-poppins text-[var(--text-color)]">Get Started</h2>
            <p className="text-sm text-[var(--text-muted)] mt-1 font-sans">We'll get back to you within 24 hours.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--bg-color)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-color)]"
          >
            <X size={20} />
          </button>
        </div>

        <form 
          action="https://formspree.io/f/xeerdnwv" 
          method="POST" 
          className="p-6 space-y-4 font-sans"
        >
          {/* Formspree configuration to force redirect or show custom success page if needed, but standard action is fine for now */}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-1">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--text-color)]"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-1">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--text-color)]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[var(--text-color)] mb-1">Interested In</label>
              <select 
                id="service" 
                name="service" 
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--text-color)]"
              >
                <option value="AI Automations">AI Automations</option>
                <option value="Bookkeeping">Bookkeeping Services</option>
                <option value="Creative Services">Creative Services</option>
                <option value="Consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)] mb-1">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none text-[var(--text-color)]"
                placeholder="How can we help you scale efficiently?"
              ></textarea>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-[var(--color-cta)] hover:bg-[#E86200] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
            >
              Send Message
            </button>
            <p className="text-xs text-center text-[var(--text-muted)] mt-4">
              Your details will be securely emailed to dave@insyncbookkeeping.co.uk
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
