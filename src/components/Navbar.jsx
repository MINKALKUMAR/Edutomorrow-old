import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ShortLogo.png';

const Navbar = () => {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -5; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Events', path: 'event-highlight' },
    { name: 'Partners', path: 'partners' },
    { name: 'Speakers', path: 'speakers' },
    { name: 'Focus-sectors', path: 'focus-sectors' },
    { name: 'Why Us', path: 'why-partner' },
    { name: 'Venue', path: 'location' },
    { name: 'Contact', path: 'contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(path);
    
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      window.location.href = `/#${path}`;
    } else {
      // Update the URL hash
      window.history.pushState(null, '', `#${path}`);
      // Scroll to the section
      scrollToSection(path);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{
      background: 'linear-gradient(135deg, rgba(230, 247, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(214, 239, 255, 0.6) 100%)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="CIO Horizon Logo" 
                className="h-10 w-auto"
              />
              {/* <span className="hidden sm:inline-block text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                TOMORROW
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.path}`}
                className={`nav-link text-sm font-medium px-3 py-1 rounded-md transition-colors ${activeSection === item.path ? 'bg-white/50 text-blue-700 font-semibold shadow-sm' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-800'}`}
                onClick={(e) => handleNavClick(item.path, e)}
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/award-nomination"
              className="ml-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-md text-xs font-semibold hover:shadow-md transition-all duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Award Nomination
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link
              to="/award-nomination"
              className="mr-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:shadow-md transition-all duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Award
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.path}`}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${activeSection === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={(e) => handleNavClick(item.path, e)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/award-nomination"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2.5 text-sm font-semibold rounded-md mt-2 hover:shadow-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                Award Nomination
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;