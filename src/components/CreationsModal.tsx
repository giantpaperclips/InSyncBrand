import { X } from 'lucide-react';

interface CreationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreationsModal({ isOpen, onClose }: CreationsModalProps) {
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
            <h2 className="text-2xl font-bold font-poppins text-[var(--text-color)]">Start a Project</h2>
            <p className="text-sm text-[var(--text-muted)] mt-1 font-sans">Tell us about your creative vision.</p>
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
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-1">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--text-color)]"
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
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--text-color)]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-[var(--text-color)] mb-1">Project Type</label>
              <select 
                id="projectType" 
                name="projectType" 
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--text-color)]"
              >
                <option value="Video Production">Video Production</option>
                <option value="Motion Graphics">Motion Graphics & Animation</option>
                <option value="Video Editing">Professional Video Editing</option>
                <option value="Brand Identity">Brand Identity & Digital Assets</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-[var(--text-color)] mb-1">Project Details *</label>
              <textarea 
                id="details" 
                name="details" 
                required 
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-[var(--text-color)]"
                placeholder="Tell us about the scope, goals, and any specific requirements for this project."
              ></textarea>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]">
            <button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
            >
              Send Request
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
