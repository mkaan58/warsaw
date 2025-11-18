// =================================================================================
// Course Detail Page Template
// =================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, Award, BookOpen, CheckCircle, Phone } from 'lucide-react';

const CourseDetailPage = ({ courseData }) => {
    const emailAddress = 'inclusiveinnovative@gmail.com';
    const phoneNumber = '48123456789';
    const whatsappMessage = encodeURIComponent(`Hello! I'm interested in the course "${courseData.title}". Can you provide more information?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${courseData.image})` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-4xl">
                        <div className="flex gap-3 mb-4">
                            <span className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#D4AF37' }}>
                                {courseData.category}
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-bold bg-white" style={{ color: '#8B1F1F' }}>
                                {courseData.level}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{courseData.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8">{courseData.subtitle}</p>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <div className="flex items-center">
                                <Clock className="w-6 h-6 mr-2" />
                                <span>{courseData.duration}</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-6 h-6 mr-2" />
                                <span>{courseData.participants} participants</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-6 h-6 mr-2" />
                                <span>Certificate Included</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Info Bar */}
            <div className="py-6" style={{ backgroundColor: '#8B1F1F' }}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-4 text-white">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">{courseData.schedule}</span>
                        </div>
                        <div className="text-2xl font-bold">{courseData.price}</div>
                        <a
                            href={`mailto:${emailAddress}?subject=Enrollment: ${courseData.title}`}
                            className="bg-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                            style={{ color: '#8B1F1F' }}
                        >
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2">
                            {/* Overview */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#8B1F1F' }}>Course Overview</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {courseData.overview}
                                </p>
                            </section>

                            {/* What You'll Learn */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#8B1F1F' }}>What You'll Learn</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {courseData.learningOutcomes.map((outcome, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#FEF7ED' }}>
                                            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#8B1F1F' }} />
                                            <span className="text-gray-700">{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Course Content */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#8B1F1F' }}>Course Content</h2>
                                <div className="space-y-4">
                                    {courseData.modules.map((module, index) => (
                                        <div key={index} className="border-2 rounded-lg p-6" style={{ borderColor: '#FEF7ED' }}>
                                            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1F1F' }}>
                                                Module {index + 1}: {module.title}
                                            </h3>
                                            <p className="text-gray-700">{module.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Target Audience */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#8B1F1F' }}>Who Should Attend</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {courseData.targetAudience}
                                </p>
                            </section>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Course Info Card */}
                            <div className="sticky top-24 bg-white rounded-xl shadow-xl p-6 border-2" style={{ borderColor: '#FEF7ED' }}>
                                <h3 className="text-2xl font-bold mb-6" style={{ color: '#8B1F1F' }}>Course Details</h3>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">Duration</span>
                                        <span className="font-bold text-gray-900">{courseData.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">Schedule</span>
                                        <span className="font-bold text-gray-900">{courseData.schedule}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">Level</span>
                                        <span className="font-bold text-gray-900">{courseData.level}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">Participants</span>
                                        <span className="font-bold text-gray-900">{courseData.participants}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">Language</span>
                                        <span className="font-bold text-gray-900">English</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600 font-bold">Price</span>
                                        <span className="text-2xl font-bold" style={{ color: '#8B1F1F' }}>{courseData.price}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <a
                                        href={`mailto:${emailAddress}?subject=Enrollment: ${courseData.title}`}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-white transition-all transform hover:scale-105 shadow-lg"
                                        style={{ backgroundColor: '#8B1F1F' }}
                                    >
                                        Enroll Now
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-white transition-all transform hover:scale-105 shadow-lg"
                                        style={{ backgroundColor: '#D4AF37' }}
                                    >
                                        <Phone className="mr-2 w-5 h-5" />
                                        WhatsApp
                                    </a>
                                </div>

                                {/* Includes */}
                                <div className="mt-8 pt-6 border-t">
                                    <h4 className="font-bold mb-4" style={{ color: '#8B1F1F' }}>This course includes:</h4>
                                    <ul className="space-y-2">
                                        {courseData.includes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8B1F1F' }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Courses */}
            <div className="py-12" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6 text-center">
                    <Link 
                        to="/course"
                        className="inline-flex items-center gap-2 text-lg font-bold transition-colors"
                        style={{ color: '#8B1F1F' }}
                        onMouseEnter={(e) => e.target.style.color = '#6B1717'}
                        onMouseLeave={(e) => e.target.style.color = '#8B1F1F'}
                    >
                        ← Back to All Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;