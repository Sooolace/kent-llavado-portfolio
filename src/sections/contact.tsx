'use client';

import { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    // simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.message.trim()) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (validation) {
      setError(validation);
      return;
    }
    setError(null);
    setStatus('sending');

    // Simulate a send — replace with real API call if you have one
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-20 px-6 bg-[#0a192f] relative transition-all duration-700 will-change-transform ease-out ${inView ? 'opacity-100 translate-y-0 scale-100 animate-float' : 'opacity-0 translate-y-8 scale-95'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-100">Work with me</h2>
          <p className="text-gray-400">Have a project or just want to say hi? Send a message and I’ll get back to you.</p>
        </div>

        <div className="bg-[#0f2547] border border-blue-900/30 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] p-6 md:p-8 grid gap-6 md:grid-cols-2 items-start">
          {/* Left: contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Contact Info</h3>
              <p className="text-gray-300">Feel free to reach out via email or connect on LinkedIn.</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-100">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:kentgllavado@gmail.com" className="text-gray-200 hover:text-blue-300">kentgllavado@gmail.com</a>
              </div>

              <div className="flex items-center gap-3 text-gray-100">
                <FaPhone className="text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-200 hover:text-blue-300">+63 963 736 9219</a>
              </div>

              <div className="flex items-center gap-3 text-gray-100">
                <FaLinkedin className="text-blue-400" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-300">https://www.linkedin.com/in/kent-llavado-7503933a5/</a>
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-xs text-gray-500">You can also view my résumé from the sidebar.</p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex flex-col text-gray-100">
                <span className="text-sm mb-1">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent border border-blue-800/40 px-4 py-2 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your awesome name"
                />
              </label>

              <label className="flex flex-col text-gray-100">
                <span className="text-sm mb-1">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent border border-blue-800/40 px-4 py-2 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="I promise not to spam you"
                />
              </label>
            </div>

            <label className="flex flex-col text-gray-100">
              <span className="text-sm mb-1">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="bg-transparent border border-blue-800/40 px-4 py-3 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="I’m all ears..."
              />
            </label>

            {error && <div className="text-sm text-red-400">{error}</div>}

<div className="flex flex-col md:flex-row items-center gap-4">
  {/* Submit Button */}
  <button
    type="submit"
    disabled={status === 'sending'}
    className="
      inline-flex items-center gap-2
      bg-gradient-to-r from-blue-500 to-blue-600
      text-white px-6 py-3 rounded-xl font-semibold
      shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700
      transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
    "
  >
    {status === 'sending' ? 'Sending...' : 'Send Message'}
  </button>

  {/* Status Messages */}
  <div className="flex flex-col md:flex-row items-center gap-2">
    {status === 'success' && (
      <div className="flex items-center gap-2 text-green-400 animate-fadeIn">
        <FaCheckCircle className="w-5 h-5" />
        <span className="text-sm md:text-base">Message sent — I will reply soon!</span>
      </div>
    )}

    {status === 'error' && (
      <div className="flex items-center gap-2 text-red-400 animate-fadeIn">
        <FaTimesCircle className="w-5 h-5" />
        <span className="text-sm md:text-base">Something went wrong. Try again.</span>
      </div>
    )}
  </div>
</div>

          </form>
        </div>
      </div>
    </section>
  );
}

