import { ArrowUp, Code, Download, ExternalLink, Github, Instagram, Linkedin, MessageCircle, Send, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚡' },
    { name: 'PHP', level: 82, icon: '🔧' },
    { name: 'VS Code', level: 95, icon: '💻' },
    { name: 'Figma', level: 78, icon: '🎯' }
  ];

  const projects = [
    {
      title: "Template portFolio",
      description: "Html, Css, Js, Php, Vs Code",
      image: "/images/extrait portfolio.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "#"
    },
    {
      title: "MotorShop",
      description: "Figma, Html, Css, Js, Php, Vs Code",
      image: "/images/extrait.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "#"
    },
    {
      title: "Titre projet",
      description: "Figma, Html, Css, Js, Php, Vs Code",
      image: "/api/placeholder/400/300",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "#"
    }
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-Rakotonirina SAFIDY Ny Aina.pdf";
    link.download = "cv-Rakotonirina SAFIDY Ny Aina.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full xl:p-25 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                SR
              </div>
              <span className="text-lg sm:text-xl font-bold">Safidy</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === 'home' ? 'text-blue-400' : ''}`}
              >
                Accueil
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
              >
                Projets
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {setActiveSection('home'); closeMobileMenu();}}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''}`}
              >
                Accueil
              </button>
              <button 
                onClick={() => {setActiveSection('projects'); closeMobileMenu();}}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
              >
                Projets
              </button>
              <button 
                onClick={() => {setActiveSection('contact'); closeMobileMenu();}}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Bonjour, je suis
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  Safidy <span className="text-gray-400">Rakotonirina</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  Je suis un développeur web <span className="text-blue-400 font-semibold">BACK-END</span> passionné par la création de sites modernes, performants et dynamiques.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 justify-center text-sm sm:text-base"
                  onClick={handleDownload}
                >
                  <Download size={18} />
                  Télécharger CV
                </button>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="border border-gray-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Regarder mes projets
                </button>
              </div>

              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle size={18} className="sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Send size={18} className="sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin size={18} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="relative">
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src="/images/pdp.png" 
                      alt="Safidy Rakotonirina"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code size={24} className="sm:w-8 sm:h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left">
                À PROPOS DE MOI
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 text-center lg:text-left">
                <p>
                  Bonjour, je m'appelle Safidy et je suis un <span className="text-blue-400 font-semibold">développeur web back-end</span> passionné. 
                  Je maîtrise plusieurs langages de programmation, dont <span className="text-yellow-400">HTML</span>, <span className="text-blue-400">CSS</span>, 
                  <span className="text-yellow-300"> JavaScript</span> et <span className="text-purple-400">PHP</span>.
                </p>
                <p>
                  Toujours curieux et motivé, j'aime découvrir de nouvelles technologies et m'investir pleinement 
                  dans le plaisir d'apprendre et de les maîtriser.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">FORMATION</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-blue-400">GASY TECH</h4>
                      <p className="text-sm sm:text-base text-gray-400">html/css/js/php</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">Dec 2024 - Mars 2025</span>
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-purple-400">GRAFIKART</h4>
                      <p className="text-sm sm:text-base text-gray-400">Figma</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-blue-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
              Afficher tous
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Send message
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Votre numero de telephone"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Votre message"
                  rows={5}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  onClick={handleFormSubmit}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto text-sm sm:text-base"
                >
                  <Send size={18} />
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Remonter en haut"
        >
          <ArrowUp size={18} className="sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © Safidy Rakotonirina 2025
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
