import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/ajay23407",
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/ajay-yadav-999b691ab/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={24} />,
      href: 'Ay9771476@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Ajay</span>Yadav
            </div>
            <p className="text-purple-200 leading-relaxed">
              Full-Stack MERN Developer passionate about creating scalable 
              web applications and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-purple-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-purple-200">
              <p>Mumbai-67</p>
              <p>Ay9771476@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="flex items-center text-purple-200 text-sm">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart size={16} className="mx-1 text-red-400" />
              <span>and React</span>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;