// =================================================================================
// ERASMUS+ WARSAW PARTNER - HOMEPAGE
// Enhanced with clickable Warsaw Discovery Section
// Brand colors: Burgundy (#8B1F1F) and Gold (#D4AF37)
// =================================================================================
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Award, Smile, X, Globe, BookOpen, Heart, Lightbulb, MapPin, Building2, Coffee, ZoomIn } from 'lucide-react';

const HomePage = () => {

    // MODAL STATE
    const [modalImageSrc, setModalImageSrc] = useState(null);

    // --- Warsaw Highlights Data ---
    const warsawHighlights = [
        {
            title: "Historic Old Town",
            description: "Experience the UNESCO World Heritage Site - a beautifully reconstructed marvel showcasing Polish resilience and architectural splendor. Wander cobblestone streets, vibrant market squares, and colorful facades.",
            image: "https://images.unsplash.com/photo-1496046906094-ab55b3670ea4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            icon: <Building2 size={28} />
        },
        {
            title: "Royal Castle",
            description: "Discover centuries of Polish history at this magnificent royal residence. Once home to Polish monarchs, today it houses priceless art collections and offers breathtaking views of the Vistula River.",
            image: "https://images.unsplash.com/photo-1607078486875-a697a8a38e87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            icon: <Star size={28} />
        },
        {
            title: "Modern Business Hub",
            description: "Warsaw's skyline tells the story of a dynamic, forward-thinking city. As Central Europe's leading business center, it offers countless opportunities for professional growth and innovation.",
            image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            icon: <Globe size={28} />
        },
        {
            title: "Cultural Richness",
            description: "From world-class museums to cutting-edge galleries, Warsaw pulses with artistic energy. Attend concerts at the Philharmonic, explore contemporary art spaces, and immerse yourself in Polish culture.",
            image: "https://images.unsplash.com/photo-1607427260284-b7a3bac3c9c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1329",
            icon: <Heart size={28} />
        },
        {
            title: "Green Spaces",
            description: "Warsaw surprises visitors with abundant parks and gardens. Łazienki Park, with its famous Chopin monument and peacocks, offers a peaceful escape in the heart of the city.",
            image: "https://plus.unsplash.com/premium_photo-1690123622520-b117bb57e8d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            icon: <Coffee size={28} />
        },
        {
            title: "Student Life",
            description: "With over 200,000 students from around the world, Warsaw is Poland's educational capital. Vibrant nightlife, affordable living costs, and a welcoming international community await you.",
            image: "https://images.unsplash.com/photo-1635076603029-14409920fb60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            icon: <Users size={28} />
        },
        {
            title: "Innovation & Technology",
            description: "Warsaw is emerging as a tech startup hub in Central Europe. Co-working spaces, innovation centers, and a thriving entrepreneurial ecosystem make it ideal for aspiring innovators.",
            image: "https://images.unsplash.com/photo-1671717361295-c31537eec569?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            icon: <Lightbulb size={28} />
        }
    ];

    // --- Program Categories Data ---
    const programData = [
        { name: 'Youth Exchanges', slug: '/youth-exchanges', imgSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop' },
        { name: 'Volunteering', slug: '/volunteering', imgSrc: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop' },
        { name: 'Training Courses', slug: '/training', imgSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop' },
        { name: 'Study Programs', slug: '/study', imgSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop' },
        { name: 'Cultural Workshops', slug: '/workshops', imgSrc: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop' },
        { name: 'Language Courses', slug: '/language', imgSrc: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop' },
        { name: 'Internships', slug: '/internships', imgSrc: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop' },
        { name: 'Summer Schools', slug: '/summer-schools', imgSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop' },
        { name: 'Job Shadowing', slug: '/job-shadowing', imgSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop' },
        { name: 'Network Events', slug: '/networking', imgSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop' },
        { name: 'Seminars', slug: '/seminars', imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop' },
        { name: 'Project Management', slug: '/project-management', imgSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop' },
        { name: 'Digital Skills', slug: '/digital-skills', imgSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop' },
        { name: 'Entrepreneurship', slug: '/entrepreneurship', imgSrc: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop' },
    ];

    // Contact Information
    const phoneNumber = '48123456789';
    const message = encodeURIComponent("Hello! I'm interested in Erasmus+ opportunities in Warsaw. I'd like to learn more about your programs.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const emailAddress = 'inclusiveinnovative@gmail.com';

    const heroImageUrl = "https://images.unsplash.com/photo-1608817576203-3c27ed168bd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1292";
    const aboutImageUrl = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop";
    const ctaImageUrl = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center px-6">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Learn Without Limits
                           <br/>  
                             <span style={{ color: '#D4AF37' }}>Grow Without Borders</span></h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">Thrive in Warsaw</p>
                        <div className="mt-10">
                            <a href={`mailto:${emailAddress}`} className="text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg" style={{ backgroundColor: '#8B1F1F' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'} onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}>
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img src={aboutImageUrl} alt="Erasmus+ students collaborating in Warsaw" className="w-full h-full object-cover" />
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Where Warsaw Meets the World</h2>
                            <p className="text-gray-600">
                                As a leading <strong style={{ color: '#8B1F1F' }}>Erasmus+ partner organization in Warsaw</strong>, we connect ambitious young people with life-changing opportunities across Europe. Our mission is to empower the next generation through international education, cultural exchange, and professional development.
                            </p>
                            <p className="text-gray-600">
                                Located in the heart of Poland's vibrant capital, we specialize in creating <strong style={{ color: '#8B1F1F' }}>transformative experiences</strong> that combine learning, personal growth, and intercultural understanding. From youth exchanges to professional training courses, we design programs that open doors to your future.
                            </p>
                            <p className="text-gray-600">
                                With <strong style={{ color: '#8B1F1F' }}>extensive experience in European mobility projects</strong>, our dedicated team supports participants every step of the way—from application through to program completion and beyond. We believe that education knows no boundaries, and Warsaw is your gateway to discovering them all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-slate-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#8B1F1F' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>500+</p>
                            <p className="text-gray-600 mt-2">Participants Annually</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#D4AF37' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>30+</p>
                            <p className="text-gray-600 mt-2">Partner Countries</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <Award className="w-12 h-12 mx-auto mb-4" style={{ color: '#8B1F1F' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>95%</p>
                            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: '#D4AF37' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>14</p>
                            <p className="text-gray-600 mt-2">Program Categories</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discover Warsaw Section - WITH CLICKABLE IMAGES */}
            <div className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center mb-4">
                            <MapPin className="w-8 h-8 mr-2" style={{ color: '#8B1F1F' }} />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Discover Warsaw</h2>
                        </div>
                        <p className="mt-4 text-lg text-gray-600">Your home away from home - a city where history meets innovation, tradition embraces modernity, and every corner tells a story</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {warsawHighlights.map((highlight, index) => (
                            <div 
                                key={index} 
                                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                            >
                                {/* Clickable Image with Zoom Icon */}
                                <div 
                                    className="relative h-64 overflow-hidden cursor-pointer"
                                    onClick={() => setModalImageSrc(highlight.image)}
                                >
                                    <img 
                                        src={highlight.image} 
                                        alt={highlight.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    
                                    {/* Zoom Icon on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                            <ZoomIn className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-4 flex items-center pointer-events-none">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3" style={{ backgroundColor: '#8B1F1F' }}>
                                            {highlight.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                                    </div>
                                </div>
                                
                                <div className="p-6" style={{ backgroundColor: '#FEF7ED' }}>
                                    <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 md:py-28" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
                        <p className="mt-4 text-lg text-gray-600">Experience excellence in international education with dedicated support and proven results</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-lg transition-all hover:shadow-lg bg-white">
                            <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#8B1F1F' }} />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1F1F' }}>Expert Guidance</h3>
                            <p className="text-gray-600">Dedicated support from application to completion</p>
                        </div>
                        <div className="text-center p-6 rounded-lg transition-all hover:shadow-lg bg-white">
                            <Star className="w-12 h-12 mx-auto mb-4" style={{ color: '#D4AF37' }} />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1F1F' }}>Proven Track Record</h3>
                            <p className="text-gray-600">Years of experience in European mobility projects</p>
                        </div>
                        <div className="text-center p-6 rounded-lg transition-all hover:shadow-lg bg-white">
                            <Lightbulb className="w-12 h-12 mx-auto mb-4" style={{ color: '#8B1F1F' }} />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1F1F' }}>Prime Location</h3>
                            <p className="text-gray-600">Warsaw - a vibrant hub in the heart of Europe</p>
                        </div>
                        <div className="text-center p-6 rounded-lg transition-all hover:shadow-lg bg-white">
                            <Smile className="w-12 h-12 mx-auto mb-4" style={{ color: '#D4AF37' }} />
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1F1F' }}>Comprehensive Programs</h3>
                            <p className="text-gray-600">14 program categories to match your goals</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Programs Grid */}
            <div className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Programs</h2>
                        <p className="mt-4 text-lg text-gray-600">Discover the perfect opportunity to expand your horizons</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {programData.map((program, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div 
                                    className="relative h-48 overflow-hidden cursor-pointer group"
                                    onClick={() => setModalImageSrc(program.imgSrc)}
                                >
                                    <img 
                                        src={program.imgSrc} 
                                        alt={program.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</p>
                                    </div>
                                </div>

                                <div className="p-4 text-center border-t border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-800">{program.name}</h3>
                                    <Link 
                                        to={program.slug} 
                                        className="mt-3 font-semibold inline-flex items-center group/link"
                                        style={{ color: '#8B1F1F' }}
                                        onMouseEnter={(e) => e.target.style.color = '#6B1717'}
                                        onMouseLeave={(e) => e.target.style.color = '#8B1F1F'}
                                    >
                                        Learn More 
                                        <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 md:py-28" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Participants Say</h2>
                        <p className="mt-4 text-lg text-gray-600">Real stories from students who transformed their futures through Erasmus+ in Warsaw</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="mb-4" style={{ color: '#D4AF37' }}><svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 8.281 15.025 6.5 17.342 6.5C19.66 6.5 20.668 8.281 20.668 10.609L20.668 18L24 18L24 10.1C24 5.3 21.031 2 17.342 2C13.652 2 10.683 5.3 10.683 10.1L10.683 18L14.017 18ZM3.334 18L3.334 10.609C3.334 8.281 4.342 6.5 6.659 6.5C8.976 6.5 9.984 8.281 9.984 10.609L9.984 18L13.318 18L13.318 10.1C13.318 5.3 10.349 2 6.659 2C2.97 2 0 5.3 0 10.1L0 18L3.334 18Z" /></svg></div>
                            <p className="text-gray-600 flex-grow">"My youth exchange in Warsaw was life-changing! I made friends from 10 different countries, improved my English, and discovered a passion for international cooperation. The support team was amazing throughout."</p>
                            <h3 className="text-xl font-bold text-gray-900 mt-6">- Maria K., Spain -</h3>
                        </div>
                        <div className="bg-white p-8 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="mb-4" style={{ color: '#D4AF37' }}><svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 8.281 15.025 6.5 17.342 6.5C19.66 6.5 20.668 8.281 20.668 10.609L20.668 18L24 18L24 10.1C24 5.3 21.031 2 17.342 2C13.652 2 10.683 5.3 10.683 10.1L10.683 18L14.017 18ZM3.334 18L3.334 10.609C3.334 8.281 4.342 6.5 6.659 6.5C8.976 6.5 9.984 8.281 9.984 10.609L9.984 18L13.318 18L13.318 10.1C13.318 5.3 10.349 2 6.659 2C2.97 2 0 5.3 0 10.1L0 18L3.334 18Z" /></svg></div>
                            <p className="text-gray-600 flex-grow">"The training course on digital entrepreneurship gave me the skills and confidence to start my own business. Warsaw is beautiful, affordable, and full of opportunities. Highly recommend this organization!"</p>
                            <h3 className="text-xl font-bold text-gray-900 mt-6">- Thomas B., Germany -</h3>
                        </div>
                        <div className="bg-white p-8 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="mb-4" style={{ color: '#D4AF37' }}><svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 8.281 15.025 6.5 17.342 6.5C19.66 6.5 20.668 8.281 20.668 10.609L20.668 18L24 18L24 10.1C24 5.3 21.031 2 17.342 2C13.652 2 10.683 5.3 10.683 18L14.017 18ZM3.334 18L3.334 10.609C3.334 8.281 4.342 6.5 6.659 6.5C8.976 6.5 9.984 8.281 9.984 10.609L9.984 18L13.318 18L13.318 10.1C13.318 5.3 10.349 2 6.659 2C2.97 2 0 5.3 0 10.1L0 18L3.334 18Z" /></svg></div>
                            <p className="text-gray-600 flex-grow">"From the first day to the last, everything was perfectly organized. The cultural workshops opened my eyes to new perspectives, and I gained practical experience that helped me land my dream job back home."</p>
                            <h3 className="text-xl font-bold text-gray-900 mt-6">- Sofia R., Italy -</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - Enlarged Image Viewer */}
            {modalImageSrc && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={() => setModalImageSrc(null)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 transition-colors"
                        onClick={() => setModalImageSrc(null)}
                    >
                        <X size={40} />
                    </button>
                    <img 
                        src={modalImageSrc} 
                        alt="Enlarged view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Final CTA Section */}
            <div className="relative" style={{ backgroundColor: '#8B1F1F' }}>
                <img src={ctaImageUrl} alt="Students exploring Warsaw" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Your European Journey?</h2>
                    <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Your next adventure is just one step away. Contact us today to learn about upcoming programs and application deadlines.</p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href={`mailto:${emailAddress}`} className="bg-white text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg font-bold" style={{ color: '#8B1F1F' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#F5F5F5'} onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}>
                            Apply Now
                            <ArrowRight className="inline-block ml-2" />
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg" style={{ backgroundColor: '#D4AF37' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#BF9A30'} onMouseLeave={(e) => e.target.style.backgroundColor = '#D4AF37'}>
                            Contact via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;