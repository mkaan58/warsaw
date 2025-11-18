import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const IletisimPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    // const heroImageUrl = "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&auto=format&fit=crop";
    const heroImageUrl = "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070";

    https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl">Have questions about our programs? We're here to help you start your journey.</p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left Side: Contact Information */}
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
                            <p className="mt-3 text-lg text-gray-600">Reach out to us using the information below or fill out the contact form. We're excited to hear from you!</p>
                            
                            <div className="mt-8 space-y-6">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FEF7ED' }}>
                                        <MapPin size={24} style={{ color: '#8B1F1F' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                                        <p className="text-gray-600">Warsaw, Poland<br/>Erasmus+ Partner Organization</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FEF7ED' }}>
                                        <Phone size={24} style={{ color: '#8B1F1F' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                                        <a 
                                            href="tel:+48123456789" 
                                            className="text-gray-600 transition-colors"
                                            onMouseEnter={(e) => e.target.style.color = '#8B1F1F'}
                                            onMouseLeave={(e) => e.target.style.color = '#4B5563'}
                                        >
                                            +48 123 456 789
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FEF7ED' }}>
                                        <Mail size={24} style={{ color: '#8B1F1F' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                        <a 
                                            href="mailto:inclusiveinnovative@gmail.com" 
                                            className="text-gray-600 transition-colors"
                                            onMouseEnter={(e) => e.target.style.color = '#8B1F1F'}
                                            onMouseLeave={(e) => e.target.style.color = '#4B5563'}
                                        >
                                            info@erasmuswarsaw.eu
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FEF7ED' }}>
                                        <Clock size={24} style={{ color: '#D4AF37' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
                                        <p className="text-gray-600">Monday - Friday<br/>9:00 AM - 6:00 PM CET</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: '#FEF7ED' }}>
                                        <Globe size={24} style={{ color: '#D4AF37' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                                        <p className="text-gray-600">English, Polish, Turkish</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Map */}
                            <div className="mt-10 rounded-lg overflow-hidden shadow-lg border-4" style={{ borderColor: '#D4AF37' }}>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.0174524620455!2d21.012228776926023!3d52.22967675627798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str" 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Warsaw Location Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-slate-50 p-8 md:p-10 rounded-lg shadow-xl border-t-4" style={{ borderColor: '#8B1F1F' }}>
                            <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
                            <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                            
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent"
                                        style={{ 
                                            focusRingColor: '#8B1F1F'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#8B1F1F'}
                                        onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent"
                                        onFocus={(e) => e.target.style.borderColor = '#8B1F1F'}
                                        onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent"
                                        onFocus={(e) => e.target.style.borderColor = '#8B1F1F'}
                                        onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                                        placeholder="+48 123 456 789"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows="5" 
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                                        onFocus={(e) => e.target.style.borderColor = '#8B1F1F'}
                                        onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                                        placeholder="Tell us about your interest in Erasmus+ programs..."
                                    ></textarea>
                                </div>
                                
                                <div>
                                    <button 
                                        type="submit" 
                                        className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white transition-all transform hover:scale-105"
                                        style={{ backgroundColor: '#8B1F1F' }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}
                                    >
                                        Send Message
                                        <Send className="ml-2" size={20} />
                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-sm text-gray-500 text-center">
                                We respect your privacy. Your information will only be used to respond to your inquiry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="py-16 md:py-20" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800">Why Choose Erasmus+ Warsaw?</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            With years of experience in European mobility projects, we provide expert guidance and support throughout your entire journey. From application to completion, we're here to help you succeed.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: '#8B1F1F' }}>
                                500+ Participants
                            </div>
                            <div className="px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: '#D4AF37' }}>
                                30+ Countries
                            </div>
                            <div className="px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: '#8B1F1F' }}>
                                95% Satisfaction
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IletisimPage;