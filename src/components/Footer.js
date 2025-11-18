// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  
  const FooterLink = ({ page, children }) => {
    const path = page === 'home' ? '/' : `/${page}`;
    
    return (
      <Link 
        to={path} 
        className="text-left text-gray-500 transition-colors duration-300 text-base"
        onMouseEnter={(e) => e.target.style.color = '#8B1F1F'}
        onMouseLeave={(e) => e.target.style.color = '#6B7280'}
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className="bg-slate-50 text-gray-800 border-t border-slate-200">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Information */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="https://ik.imagekit.io/46nvsdwq8/Sirinler/warsaw.svg?updatedAt=1761154173237?tr=w-100,h-100,f-auto" alt="Inclusive Innovative Logo" className="h-10 mr-2"/>
              <span className="text-2xl md:text-3xl font-monotype text-gray-800">
                Inclusive Innovative <span className="text-gray-800">Warsaw</span>
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Empowering the next generation through international education, cultural exchange, and transformative Erasmus+ experiences in Warsaw.
            </p>
          </div>

          {/* Column 2: Site Map */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink page="home">Home</FooterLink>
              <FooterLink page="hizmetler">Our Services</FooterLink>
              <FooterLink page="gallery">Gallery</FooterLink>
              <FooterLink page="contact">Contact</FooterLink>
            </div>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Erasmus+ Programs</h3>
            <div className="flex flex-col space-y-3">
                <FooterLink page="ka122">KA122 Projects</FooterLink>
                <FooterLink page="ka210">KA210 Projects</FooterLink>
                <FooterLink page="ka220">KA220 Projects</FooterLink>
                <FooterLink page="ka153">KA153 Projects</FooterLink>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="tel:+48123456789" 
                className="flex items-center text-gray-500 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B1F1F'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+48 123 456 789</span>
              </a>
              <a 
                href="mailto:inclusiveinnovative@gmail.com" 
                className="flex items-center text-gray-500 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B1F1F'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>info@erasmuswarsaw.eu</span>
              </a>
              <div className="flex items-start text-gray-500">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>Warsaw, Poland - Erasmus+ Partner Organization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left text-gray-500 text-sm">
            © {new Date().getFullYear()} Inclusive & Innovative Warsaw. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a 
              href="https://www.instagram.com/inclusiveinnovativewarsaw/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://www.youtube.com/@InclusiveInnovativeWarsaw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
            >
              <Youtube size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;