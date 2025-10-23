import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const mainNavLinks = [
    { title: 'Main', path: '/' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ];

  const curtainTypes = [
    { title: 'KA122 projects', path: '/ka122' },
    { title: 'KA210 projects', path: '/ka210' },
    { title: 'KA220 projects', path: '/ka220' },
    { title: 'KA153 projects', path: '/ka153' },
    { title: 'Other projects', path: '/other' },
  ];

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  // Active link style with burgundy color
  const getNavLinkClass = ({ isActive }) => 
    `text-base font-medium transition-colors pb-1 ${isActive ? 'border-b-2' : 'text-gray-500'}`;
  
  const getNavLinkStyle = (isActive) => ({
    color: isActive ? '#8B1F1F' : undefined,
    borderColor: isActive ? '#8B1F1F' : undefined
  });
  
  const getMobileNavLinkClass = ({ isActive }) =>
    `block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 rounded-lg ${isActive ? 'text-white' : 'text-gray-700'}`;
  
  const getMobileNavLinkStyle = (isActive) => ({
    backgroundColor: isActive ? '#8B1F1F' : undefined
  });

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-24">
        
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center" onClick={closeAllMenus}>
            <img src="https://ik.imagekit.io/46nvsdwq8/Sirinler/warsaw.svg?updatedAt=1761154173237?tr=w-100,h-100,f-auto" alt="Inclusive Innovative Logo" className="h-12 md:h-14 mr-2 md:mr-3"/>
            <span className="text-2xl md:text-3xl font-monotype text-gray-800 transition-colors" 
                  onMouseEnter={(e) => e.target.style.color = '#8B1F1F'}
                  onMouseLeave={(e) => e.target.style.color = '#1F2937'}>
              Inclusive Innovative <span className="text-gray-800">Warsaw</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {mainNavLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={getNavLinkClass}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => !e.currentTarget.classList.contains('border-b-2') && (e.currentTarget.style.color = '#8B1F1F')}
              onMouseLeave={(e) => !e.currentTarget.classList.contains('border-b-2') && (e.currentTarget.style.color = '#6B7280')}
            >
              {link.title}
            </NavLink>
          ))}
          
          <div className="relative group">
            <div className="flex items-center cursor-default text-base font-medium transition-colors pb-1 text-gray-500"
                 onMouseEnter={(e) => e.currentTarget.style.color = '#8B1F1F'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}>
              Erasmus+
              <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
            </div>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 bg-transparent invisible group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2">
                {curtainTypes.map(curtain => (
                  <NavLink
                    key={curtain.path}
                    to={curtain.path}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 transition-colors"
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#FEF7ED'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {curtain.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <a href="tel:+48123456789" 
             className="hidden lg:inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white transition-colors transform hover:scale-105"
             style={{ backgroundColor: '#8B1F1F' }}
             onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'}
             onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}>
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden text-gray-700 ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeAllMenus}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b-4" style={{ backgroundColor: '#8B1F1F', borderColor: '#D4AF37' }}>
          <div className="flex items-center">
            <img src="https://ik.imagekit.io/46nvsdwq8/Sirinler/warsaw.svg?updatedAt=1761154173237?tr=w-100,h-100,f-auto" alt="Logo" className="h-10 w-10 mr-3 bg-white rounded-full p-1"/>
            <span className="text-xl font-bold text-white">Menu</span>
          </div>
          <button 
            onClick={closeAllMenus} 
            className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-full pb-32 bg-white">
          <div className="py-6 px-4">
            {mainNavLinks.map((link, index) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={getMobileNavLinkClass}
                style={({ isActive }) => ({
                  ...getMobileNavLinkStyle(isActive),
                  animationDelay: `${index * 50}ms`
                })}
                onClick={closeAllMenus}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor || e.currentTarget.style.backgroundColor === 'transparent') {
                    e.currentTarget.style.backgroundColor = '#FEF7ED';
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget.style.backgroundColor === 'rgb(254, 247, 237)') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.title}
              </NavLink>
            ))}
            
            {/* Erasmus+ Dropdown */}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <button 
                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)} 
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-700 transition-all duration-300 rounded-lg hover:bg-gray-50"
              >
                <span>Erasmus+</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                  style={{ color: '#8B1F1F' }}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 py-2 rounded-lg mt-2">
                  {curtainTypes.map((curtain, index) => (
                    <NavLink 
                      key={curtain.path} 
                      to={curtain.path} 
                      className="block w-full text-left px-10 py-3 text-base font-medium text-gray-600 transition-all duration-300 hover:text-white rounded-md mx-2"
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#8B1F1F' : undefined,
                        color: isActive ? 'white' : undefined
                      })}
                      onClick={closeAllMenus}
                      onMouseEnter={(e) => {
                        if (e.currentTarget.style.backgroundColor !== 'rgb(139, 31, 31)') {
                          e.currentTarget.style.backgroundColor = '#FEF7ED';
                          e.currentTarget.style.color = '#8B1F1F';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (e.currentTarget.style.backgroundColor === 'rgb(254, 247, 237)') {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#4B5563';
                        }
                      }}
                    >
                      {curtain.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Call Button */}
          <div className="px-6 py-4 border-t-2 border-gray-200 bg-white">
            <a 
              href="tel:+48123456789" 
              className="w-full inline-flex items-center justify-center px-6 py-4 border-2 text-base font-semibold rounded-full text-white transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#8B1F1F', borderColor: '#D4AF37' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#6B1717';
                e.target.style.borderColor = '#BF9A30';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8B1F1F';
                e.target.style.borderColor = '#D4AF37';
              }}
              onClick={closeAllMenus}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-6 py-6 text-center text-xs text-gray-500 border-t border-gray-100 bg-white">
            <p className="font-medium">© 2025 Inclusive & Innovative Warsaw</p>
            <p className="mt-1">Erasmus+ Partner Organization</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;