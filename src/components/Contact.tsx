// Contact.tsx
import { Mail, MapPin, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (pubKey) {
      // @ts-ignore
      emailjs.init({ publicKey: pubKey });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_s15z8z6';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gjcvtas';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'F_UqS-Rs19wYYC2rN';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert('Message sent — check your inbox!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Check console & EmailJS dashboard.');
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email', detail: 'Ay9771476@gmail.com', link: 'mailto:Ay9771476@gmail.com' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', detail: 'Mumbai-67', link: null }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h2>
          <div className="w-28 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-purple-300 text-lg mb-8">I typically respond within 24 hours. Reach out for any collaboration or inquiry!</p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-md rounded-xl group hover:scale-105 transform transition-all duration-300 shadow-lg">
                  <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-3 rounded-full text-white group-hover:shadow-lg">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-purple-200 hover:text-pink-400 transition-colors duration-200">{item.detail}</a>
                    ) : (
                      <p className="text-purple-200">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl border border-purple-600 shadow-xl">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-purple-500/40 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-purple-500/40 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-purple-500/40 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-900/60 border border-purple-500/40 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-400 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
