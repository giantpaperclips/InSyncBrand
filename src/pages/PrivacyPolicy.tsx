export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none text-[var(--text-muted)] space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and project details when you interact with our forms. We solely use this data to respond to your inquiries and deliver our services.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">2. How We Use Your Information</h2>
        <p>Your information is used strictly to provide automated systems, bookkeeping, and creative services as requested. We do not sell or share your personal data with third-party marketers.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">3. Data Security</h2>
        <p>We take appropriate technical and organizational measures to ensure your data is secure against unauthorized access or loss.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <strong>dave@insyncbookkeeping.co.uk</strong>.</p>
      </div>
    </div>
  );
}
