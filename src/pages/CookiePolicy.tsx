export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose dark:prose-invert max-w-none text-[var(--text-muted)] space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">1. What Are Cookies</h2>
        <p>Cookies are small text files placed on your device to help websites run properly, analyze traffic, and remember your site preferences.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">2. How We Use Cookies</h2>
        <p>We use essential cookies to keep our website functioning, maintain your session states (e.g., light vs dark mode preferences), and analyze interaction across our pages to improve user experience.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">3. Managing Cookies</h2>
        <p>You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect certain functionalities of the site.</p>
        
        <h2 className="text-2xl font-bold text-[var(--text-color)] mt-8">4. Contact Us</h2>
        <p>For more details on how we use cookies, reach out at <strong>dave@insyncbookkeeping.co.uk</strong>.</p>
      </div>
    </div>
  );
}
