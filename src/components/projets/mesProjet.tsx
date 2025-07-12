import { ArrowUp, ExternalLink, Github, Code, Calendar, User, Tag, Menu, X, ArrowLeft, Send } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjetPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-Rakotonirina SAFIDY Ny Aina.pdf";
    link.download = "cv-Rakotonirina SAFIDY Ny Aina.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isDiscussion, setIsDiscussion] = useState(false);

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'Tous', count: 6 },
    { id: 'web', name: 'Web Development', count: 3 },
    { id: 'mobile', name: 'Mobile', count: 2 },
    { id: 'design', name: 'Design', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "Template Portfolio",
      description: "Un template de portfolio moderne et responsive avec des animations fluides et un design épuré. Parfait pour présenter vos projets et compétences.",
      image: "/images/extrait portfolio.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "web",
      date: "2024-12-15",
      status: "Terminé",
      link: "https://template-portfolio-dun.vercel.app/",
      github: "#",
      features: [
        "Design responsive",
        "Animations CSS",
        "Formulaire de contact",
        "Optimisation SEO"
      ]
    },
    {
      id: 2,
      title: "MotorShop",
      description: "Plateforme e-commerce dédiée à la vente de pièces automobiles avec système de recherche avancé et panier d'achat interactif.",
      image: "/images/extrait.PNG",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "web",
      date: "2024-11-20",
      status: "En cours",
      link: "#",
      github: "#",
      features: [
        "Catalogue produits",
        "Panier d'achat",
        "Système de recherche",
        "Interface admin"
      ]
    },
    {
      id: 3,
      title: "Application Mobile Food",
      description: "Application mobile pour la commande de nourriture en ligne avec géolocalisation et paiement intégré.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Node.js", "MongoDB"],
      category: "mobile",
      date: "2024-10-05",
      status: "Terminé",
      link: "#",
      github: "#",
      features: [
        "Géolocalisation",
        "Paiement en ligne",
        "Notifications push",
        "Interface intuitive"
      ]
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique pour le suivi des performances avec graphiques interactifs et rapports personnalisés.",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Chart.js", "Node.js"],
      category: "web",
      date: "2024-09-18",
      status: "Terminé",
      link: "#",
      github: "#",
      features: [
        "Graphiques interactifs",
        "Rapports PDF",
        "Filtres avancés",
        "Export données"
      ]
    },
    {
      id: 5,
      title: "App Fitness Tracker",
      description: "Application mobile de suivi fitness avec planification d'entraînements et suivi des objectifs personnels.",
      image: "/api/placeholder/400/300",
      tags: ["Flutter", "Firebase", "Dart"],
      category: "mobile",
      date: "2024-08-30",
      status: "En cours",
      link: "#",
      github: "#",
      features: [
        "Suivi d'activité",
        "Planification entrainements",
        "Statistiques détaillées",
        "Objectifs personnalisés"
      ]
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "Création d'identité visuelle complète pour une startup tech incluant logo, charte graphique et supports marketing.",
      image: "/api/placeholder/400/300",
      tags: ["Figma", "Adobe Illustrator", "Photoshop"],
      category: "design",
      date: "2024-07-12",
      status: "Terminé",
      link: "#",
      github: "#",
      features: [
        "Logo et identité",
        "Charte graphique",
        "Supports marketing",
        "Guide d'utilisation"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-500/20 text-green-400';
      case 'En cours':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Planifié':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="w-full xl:px-25 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
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
                onClick={() => {
                  setActiveSection('home');
                  navigate('/home');
                }}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
              >
                Accueil
              </button>
              <button
                onClick={() => setActiveSection('projet')}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === 'projet' ? 'text-blue-400' : ''}`}
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
                onClick={() => {
                  setActiveSection('home');
                  navigate('/home');
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''}`}
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  setActiveSection('projet');
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === 'projet' ? 'text-blue-400' : ''}`}
              >
                Projets
              </button>
              <button
                onClick={() => { setActiveSection('contact'); closeMobileMenu(); }}
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
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <ArrowLeft size={16} />
              <span className="text-sm text-gray-300 cursor-pointer" onClick={() => {
                  setActiveSection('home');
                  navigate('/home');
                }}>Retour à l'accueil</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Découvrez mes créations et réalisations en développement web, mobile et design.
              Chaque projet reflète ma passion pour l'innovation et la qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                  }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a href={project.link} className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      </a>
                      <a href={project.github} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                        <Github size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-400 ml-2">
                      <Calendar size={12} className="mr-1" />
                      {new Date(project.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-1">
                      <Tag size={14} />
                      Fonctionnalités clés:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">6+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Projets Réalisés</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <User size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">3+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">1+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Années d'Expérience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Tag size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">8+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Technologies Maîtrisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Discutons de vos idées et créons ensemble quelque chose d'exceptionnel.
              Je suis toujours ouvert aux nouveaux défis et collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
                onClick={() => setIsDiscussion(true)}>
                Discuter de mon projet
              </button>
              <button className="border border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base" onClick={handleDownload}>
                Voir mon CV
              </button>
            </div>
          </div>
        </div>
      </section>
      {isDiscussion && (
        <div className=' top-0 left-0 fixed flex items-center justify-center w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 inset-0 bg-black/50 backdrop-blur-sm'>
          <div className='inset-0 bg-white/30 backdrop-blur-sm p-10 rounded-xl'>
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
                <div className="text-center flex justify-between">
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto text-sm sm:text-base"
                    onClick={()=>setIsDiscussion(false)}
                  >
                    Fermer
                  </button>
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
        </div>
      )}

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
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};