// =================================================================================
// ProjectPageLayout.js - Erasmus+ Project Pages Layout Component
// =================================================================================
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectPageLayout = ({ title, subtitle, heroImage, content, features, galleryImages, cta }) => {
    const phoneNumber = '48123456789';
    const message = encodeURIComponent(`Hello, I'm interested in learning more about ${title}. Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const emailAddress = 'inclusiveinnovative@gmail.com';

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl">{subtitle}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-gray-800">{content.title}</h2>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{content.description}</p>
                        </div>
                        <div className="order-1 lg:order-2">
                           <img src={content.image} alt={title} className="rounded-lg shadow-xl w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 md:py-28" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Key Features & Benefits</h2>
                        <p className="mt-3 text-lg text-gray-600">What makes this program unique</p>
                    </div>
                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-full text-white" style={{ backgroundColor: '#8B1F1F' }}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Gallery Section */}
            <div className="py-20 md:py-28 bg-white">
                 <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold text-gray-800">Program Gallery</h2>
                         <p className="mt-3 text-lg text-gray-600">Moments and experiences from our programs</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((img, index) => (
                           <div key={index} className="overflow-hidden rounded-lg shadow-lg group border-4" style={{ borderColor: '#D4AF37' }}>
                             <img src={img} alt={`${title} Gallery ${index + 1}`} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                           </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* CTA Section */}
            <div style={{ backgroundColor: '#8B1F1F' }}>
                <div className="container mx-auto py-16 px-6 text-center">
                    <h2 className="text-3xl font-bold text-white">{cta.title}</h2>
                    <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                        {cta.description}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href={`mailto:${emailAddress}`}
                            className="bg-white font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg"
                            style={{ color: '#8B1F1F' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#F5F5F5'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
                        >
                            Apply Now
                            <ArrowRight className="inline-block ml-2" />
                        </a>
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg"
                            style={{ backgroundColor: '#D4AF37' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#BF9A30'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#D4AF37'}
                        >
                            Contact via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPageLayout;