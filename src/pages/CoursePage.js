// // =================================================================================
// // ERASMUS+ WARSAW PARTNER - COURSES PAGE
// // Updated with real course catalog
// // Brand colors: Burgundy (#8B1F1F) and Gold (#D4AF37)
// // =================================================================================
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, Users, Award, BookOpen, Briefcase, Globe2, Target, Filter, ArrowRight } from 'lucide-react';

// const CoursePage = () => {
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [selectedLevel, setSelectedLevel] = useState('All');

//     // Course Categories
//     const categories = ['All', 'Technology', 'Education', 'Professional', 'Environment', 'Social'];
//     const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

//     // Courses Data
//     const courses = [
//         {
//             id: 1,
//             title: "3D Printing",
//             slug: "3d-printing",
//             category: "Technology",
//             level: "Intermediate",
//             duration: "6 weeks",
//             schedule: "Mon-Wed, 18:00-20:00",
//             participants: "10-15",
//             price: "€520",
//             image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
//             description: "Learn 3D modeling, printing technologies, and practical applications in education and industry.",
//             highlights: ["CAD Design", "3D Printers", "Practical Projects", "Certificate"]
//         },
//         {
//             id: 2,
//             title: "BOAL's Methodology in Education",
//             slug: "boal-methodology",
//             category: "Education",
//             level: "Intermediate",
//             duration: "4 weeks",
//             schedule: "Thursdays, 17:00-20:00",
//             participants: "12-18",
//             price: "€380",
//             image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
//             description: "Explore Augusto Boal's Theatre of the Oppressed methodology for transformative education.",
//             highlights: ["Forum Theatre", "Interactive Methods", "Social Change", "Practical Training"]
//         },
//         {
//             id: 3,
//             title: "CLIL & DBL",
//             slug: "clil-dbl",
//             category: "Education",
//             level: "Advanced",
//             duration: "5 weeks",
//             schedule: "Tue-Thu, 18:30-20:30",
//             participants: "15-20",
//             price: "€450",
//             image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop",
//             description: "Content and Language Integrated Learning combined with Design-Based Learning approaches.",
//             highlights: ["CLIL Framework", "DBL Strategies", "Curriculum Design", "Assessment"]
//         },
//         {
//             id: 4,
//             title: "Climate Change Adaptation and Sustainability",
//             slug: "climate-change",
//             category: "Environment",
//             level: "Beginner",
//             duration: "4 weeks",
//             schedule: "Wednesdays, 18:00-20:00",
//             participants: "15-25",
//             price: "€320",
//             image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&auto=format&fit=crop",
//             description: "Understanding climate change impacts and developing sustainable adaptation strategies.",
//             highlights: ["Climate Science", "Adaptation Plans", "Green Solutions", "SDGs Integration"]
//         },
//         {
//             id: 5,
//             title: "Creative Drama",
//             slug: "creative-drama",
//             category: "Education",
//             level: "Intermediate",
//             duration: "5 weeks",
//             schedule: "Fridays, 17:00-20:00",
//             participants: "12-16",
//             price: "€390",
//             image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop",
//             description: "Use drama techniques as powerful educational tools for engagement and learning.",
//             highlights: ["Drama Methods", "Improvisation", "Educational Games", "Workshop Design"]
//         },
//         {
//             id: 6,
//             title: "Cultural Heritage",
//             slug: "cultural-heritage",
//             category: "Social",
//             level: "Beginner",
//             duration: "4 weeks",
//             schedule: "Saturdays, 10:00-13:00",
//             participants: "15-20",
//             price: "€350",
//             image: "https://images.unsplash.com/photo-1513415277979-3ba81c0ea46e?w=800&auto=format&fit=crop",
//             description: "Explore, preserve, and promote cultural heritage through educational projects.",
//             highlights: ["Heritage Studies", "Documentation", "Community Projects", "EU Programs"]
//         },
//         {
//             id: 7,
//             title: "Cyber Bullying",
//             slug: "cyber-bullying",
//             category: "Social",
//             level: "Intermediate",
//             duration: "3 weeks",
//             schedule: "Mondays, 18:00-20:30",
//             participants: "15-25",
//             price: "€280",
//             image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
//             description: "Prevention, identification, and intervention strategies for cyber bullying.",
//             highlights: ["Digital Safety", "Intervention Methods", "Legal Framework", "Support Systems"]
//         },
//         {
//             id: 8,
//             title: "Digital Games and Storytelling",
//             slug: "digital-games-storytelling",
//             category: "Technology",
//             level: "Intermediate",
//             duration: "6 weeks",
//             schedule: "Mon-Wed, 19:00-21:00",
//             participants: "10-15",
//             price: "€480",
//             image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop",
//             description: "Create engaging educational games and interactive narratives for learning.",
//             highlights: ["Game Design", "Storytelling Tools", "Educational Apps", "Prototyping"]
//         },
//         {
//             id: 9,
//             title: "Eco-Schools",
//             slug: "eco-schools",
//             category: "Environment",
//             level: "Intermediate",
//             duration: "5 weeks",
//             schedule: "Thursdays, 17:00-20:00",
//             participants: "15-20",
//             price: "€400",
//             image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
//             description: "Implement the international Eco-Schools program for environmental education.",
//             highlights: ["Green Flag", "Sustainability Projects", "Student Leadership", "Certification"]
//         },
//         {
//             id: 10,
//             title: "Entrepreneurship in Education",
//             slug: "entrepreneurship-education",
//             category: "Professional",
//             level: "Advanced",
//             duration: "6 weeks",
//             schedule: "Tue-Thu, 18:00-20:00",
//             participants: "12-18",
//             price: "€520",
//             image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
//             description: "Foster entrepreneurial mindset and skills in educational settings.",
//             highlights: ["EntreComp Framework", "Business Planning", "Student Startups", "Innovation"]
//         },
//         {
//             id: 11,
//             title: "Erasmus+ Project Writing Training",
//             slug: "erasmus-project-writing",
//             category: "Professional",
//             level: "Advanced",
//             duration: "4 weeks",
//             schedule: "Wednesdays, 18:00-21:00",
//             participants: "10-15",
//             price: "€580",
//             image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
//             description: "Master Erasmus+ application writing for successful project funding.",
//             highlights: ["KA Templates", "Budget Planning", "Quality Standards", "Evaluation"]
//         },
//         {
//             id: 12,
//             title: "Flipped Classroom",
//             slug: "flipped-classroom",
//             category: "Education",
//             level: "Intermediate",
//             duration: "4 weeks",
//             schedule: "Tuesdays, 18:00-20:00",
//             participants: "15-20",
//             price: "€360",
//             image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
//             description: "Transform traditional teaching with flipped classroom methodology.",
//             highlights: ["Video Creation", "Active Learning", "Assessment Tools", "Implementation"]
//         },
//         {
//             id: 13,
//             title: "Future Classroom Lab (FCL)",
//             slug: "future-classroom-lab",
//             category: "Technology",
//             level: "Advanced",
//             duration: "5 weeks",
//             schedule: "Saturdays, 10:00-14:00",
//             participants: "12-16",
//             price: "€490",
//             image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
//             description: "Design innovative learning spaces following European Schoolnet's FCL model.",
//             highlights: ["Space Design", "EdTech Integration", "Learning Zones", "Scenarios"]
//         },
//         {
//             id: 14,
//             title: "Gamification",
//             slug: "gamification",
//             category: "Technology",
//             level: "Intermediate",
//             duration: "5 weeks",
//             schedule: "Mon-Wed, 18:30-20:30",
//             participants: "15-20",
//             price: "€420",
//             image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
//             description: "Apply game design elements to enhance engagement and motivation in learning.",
//             highlights: ["Game Mechanics", "Points & Badges", "Platform Tools", "Case Studies"]
//         },
//         {
//             id: 15,
//             title: "Gender Equality",
//             slug: "gender-equality",
//             category: "Social",
//             level: "Intermediate",
//             duration: "4 weeks",
//             schedule: "Thursdays, 18:00-20:30",
//             participants: "15-25",
//             price: "€340",
//             image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
//             description: "Promote gender equality and address gender-based issues in education and society.",
//             highlights: ["Gender Awareness", "Inclusive Practices", "Policy Framework", "Advocacy"]
//         },
//         {
//             id: 16,
//             title: "ICT Tools",
//             slug: "ict-tools",
//             category: "Technology",
//             level: "Beginner",
//             duration: "6 weeks",
//             schedule: "Tue-Thu, 19:00-21:00",
//             participants: "12-18",
//             price: "€450",
//             image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
//             description: "Essential digital tools and platforms for modern education and remote collaboration.",
//             highlights: ["Google Workspace", "Microsoft 365", "Collaboration Tools", "Digital Literacy"]
//         },
//         {
//             id: 17,
//             title: "Inclusive Education",
//             slug: "inclusive-education",
//             category: "Education",
//             level: "Intermediate",
//             duration: "5 weeks",
//             schedule: "Wednesdays, 17:00-20:00",
//             participants: "15-20",
//             price: "€410",
//             image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
//             description: "Create accessible and inclusive learning environments for all students.",
//             highlights: ["Universal Design", "Differentiation", "Support Strategies", "Legal Framework"]
//         },
//         {
//             id: 18,
//             title: "Mobile Apps",
//             slug: "mobile-apps",
//             category: "Technology",
//             level: "Advanced",
//             duration: "8 weeks",
//             schedule: "Mon-Wed-Fri, 19:00-21:00",
//             participants: "10-12",
//             price: "€650",
//             image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
//             description: "Develop mobile applications for educational purposes using modern frameworks.",
//             highlights: ["React Native", "App Design", "User Experience", "Publishing"]
//         },
//         {
//             id: 19,
//             title: "Montessori, Reggio Emilia",
//             slug: "montessori-reggio-emilia",
//             category: "Education",
//             level: "Intermediate",
//             duration: "6 weeks",
//             schedule: "Saturdays, 10:00-14:00",
//             participants: "12-18",
//             price: "€480",
//             image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop",
//             description: "Explore and implement Montessori and Reggio Emilia educational approaches.",
//             highlights: ["Child-Centered Learning", "Environment Design", "Documentation", "Materials"]
//         },
//         {
//             id: 20,
//             title: "Peer Bullying",
//             slug: "peer-bullying",
//             category: "Social",
//             level: "Intermediate",
//             duration: "3 weeks",
//             schedule: "Fridays, 17:00-20:00",
//             participants: "15-25",
//             price: "€290",
//             image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop",
//             description: "Prevention and intervention strategies for peer bullying in schools.",
//             highlights: ["Prevention Programs", "Mediation Skills", "School Climate", "Support Networks"]
//         },
//         {
//             id: 21,
//             title: "Robotics and Coding",
//             slug: "robotics-coding",
//             category: "Technology",
//             level: "Intermediate",
//             duration: "8 weeks",
//             schedule: "Tue-Thu, 18:00-20:00",
//             participants: "10-15",
//             price: "€580",
//             image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
//             description: "Introduction to robotics and programming for educational applications.",
//             highlights: ["Arduino & Raspberry Pi", "Python", "Educational Robots", "STEM Projects"]
//         },
//         {
//             id: 22,
//             title: "STEM and STEAM",
//             slug: "stem-steam",
//             category: "Education",
//             level: "Intermediate",
//             duration: "6 weeks",
//             schedule: "Mon-Wed, 18:00-20:00",
//             participants: "15-20",
//             price: "€460",
//             image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
//             description: "Integrate Science, Technology, Engineering, Arts, and Mathematics in education.",
//             highlights: ["Project-Based Learning", "Maker Education", "Interdisciplinary", "Innovation"]
//         },
//         {
//             id: 23,
//             title: "Stress Management and Burnout Prevention",
//             slug: "stress-management",
//             category: "Professional",
//             level: "Beginner",
//             duration: "4 weeks",
//             schedule: "Thursdays, 18:00-20:00",
//             participants: "15-25",
//             price: "€340",
//             image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
//             description: "Strategies for managing stress and preventing burnout in educational settings.",
//             highlights: ["Mindfulness", "Work-Life Balance", "Resilience", "Self-Care"]
//         },
//         {
//             id: 24,
//             title: "Storytelling in English Teaching/Learning",
//             slug: "storytelling-english",
//             category: "Education",
//             level: "Intermediate",
//             duration: "5 weeks",
//             schedule: "Tuesdays, 18:30-20:30",
//             participants: "12-18",
//             price: "€390",
//             image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
//             description: "Use storytelling as an effective method for English language teaching.",
//             highlights: ["Narrative Techniques", "Digital Storytelling", "Student Engagement", "Materials"]
//         }
//     ];

//     // Filter courses
//     const filteredCourses = courses.filter(course => {
//         const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
//         const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
//         return categoryMatch && levelMatch;
//     });

//     const emailAddress = 'info@erasmuswarsaw.eu';
//     const phoneNumber = '48123456789';
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your courses. Can you provide more information?")}`;

//     return (
//         <div className="animate-fade-in">
//             {/* Hero Section */}
//             <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop')" }}>
//                 <div className="absolute inset-0 bg-black opacity-60"></div>
//                 <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
//                     <BookOpen className="w-16 h-16 mb-4" style={{ color: '#D4AF37' }} />
//                     <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Training Courses</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl">Professional development courses for educators and youth workers across Europe</p>
//                 </div>
//             </div>

//             {/* Stats Section */}
//             <div className="py-16 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//                         <div className="p-6">
//                             <Award className="w-12 h-12 mx-auto mb-3" style={{ color: '#8B1F1F' }} />
//                             <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>24</p>
//                             <p className="text-gray-600 mt-2">Training Courses</p>
//                         </div>
//                         <div className="p-6">
//                             <Users className="w-12 h-12 mx-auto mb-3" style={{ color: '#D4AF37' }} />
//                             <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>1000+</p>
//                             <p className="text-gray-600 mt-2">Trained Professionals</p>
//                         </div>
//                         <div className="p-6">
//                             <Globe2 className="w-12 h-12 mx-auto mb-3" style={{ color: '#8B1F1F' }} />
//                             <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>30+</p>
//                             <p className="text-gray-600 mt-2">Countries</p>
//                         </div>
//                         <div className="p-6">
//                             <Target className="w-12 h-12 mx-auto mb-3" style={{ color: '#D4AF37' }} />
//                             <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>98%</p>
//                             <p className="text-gray-600 mt-2">Satisfaction Rate</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="py-12" style={{ backgroundColor: '#F8F5F0' }}>
//                 <div className="container mx-auto px-6">
//                     <div className="flex items-center justify-center mb-6">
//                         <Filter className="w-6 h-6 mr-2" style={{ color: '#8B1F1F' }} />
//                         <h2 className="text-2xl font-bold text-gray-900">Filter Courses</h2>
//                     </div>
                    
//                     <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//                         {/* Category Filter */}
//                         <div className="flex flex-wrap gap-2 justify-center">
//                             {categories.map(category => (
//                                 <button
//                                     key={category}
//                                     onClick={() => setSelectedCategory(category)}
//                                     className="px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-sm"
//                                     style={{
//                                         backgroundColor: selectedCategory === category ? '#8B1F1F' : 'white',
//                                         color: selectedCategory === category ? 'white' : '#8B1F1F',
//                                         border: `2px solid ${selectedCategory === category ? '#8B1F1F' : '#D4AF37'}`
//                                     }}
//                                 >
//                                     {category}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Level Filter */}
//                         <div className="flex flex-wrap gap-2 justify-center">
//                             {levels.map(level => (
//                                 <button
//                                     key={level}
//                                     onClick={() => setSelectedLevel(level)}
//                                     className="px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-sm"
//                                     style={{
//                                         backgroundColor: selectedLevel === level ? '#D4AF37' : 'white',
//                                         color: selectedLevel === level ? 'white' : '#8B1F1F',
//                                         border: `2px solid ${selectedLevel === level ? '#D4AF37' : '#8B1F1F'}`
//                                     }}
//                                 >
//                                     {level}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {(selectedCategory !== 'All' || selectedLevel !== 'All') && (
//                         <div className="mt-6 text-center">
//                             <p className="text-gray-600">
//                                 Showing <strong style={{ color: '#8B1F1F' }}>{filteredCourses.length}</strong> course{filteredCourses.length !== 1 ? 's' : ''}
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Courses Grid */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {filteredCourses.map(course => (
//                             <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2" style={{ borderColor: '#FEF7ED' }}>
//                                 <div className="relative h-48 overflow-hidden">
//                                     <img 
//                                         src={course.image} 
//                                         alt={course.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: '#8B1F1F' }}>
//                                         {course.price}
//                                     </div>
//                                     <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
//                                         {course.category}
//                                     </div>
//                                 </div>

//                                 <div className="p-6">
//                                     <div className="flex items-center gap-2 mb-3">
//                                         <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#FEF7ED', color: '#8B1F1F' }}>
//                                             {course.level}
//                                         </span>
//                                     </div>
                                    
//                                     <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
//                                     <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>

//                                     <div className="space-y-2 mb-4">
//                                         <div className="flex items-center text-sm text-gray-600">
//                                             <Clock className="w-4 h-4 mr-2" style={{ color: '#8B1F1F' }} />
//                                             <span>{course.duration} • {course.schedule}</span>
//                                         </div>
//                                         <div className="flex items-center text-sm text-gray-600">
//                                             <Users className="w-4 h-4 mr-2" style={{ color: '#8B1F1F' }} />
//                                             <span>{course.participants} participants</span>
//                                         </div>
//                                     </div>

//                                     <div className="flex gap-2">
//                                         <Link
//                                             to={`/courses/${course.slug}`}
//                                             className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-full font-bold text-white transition-all transform hover:scale-105 shadow-md"
//                                             style={{ backgroundColor: '#8B1F1F' }}
//                                         >
//                                             Learn More
//                                             <ArrowRight className="ml-2 w-4 h-4" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* CTA Section */}
//             <div className="relative" style={{ backgroundColor: '#8B1F1F' }}>
//                 <div className="relative container mx-auto px-6 py-20 text-center">
//                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
//                     <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
//                         Join hundreds of educators who have already transformed their teaching with our courses.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                         <a 
//                             href={`mailto:${emailAddress}`}
//                             className="bg-white text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg font-bold"
//                             style={{ color: '#8B1F1F' }}
//                         >
//                             Contact Us
//                             <ArrowRight className="inline-block ml-2" />
//                         </a>
//                         <a 
//                             href={whatsappUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg"
//                             style={{ backgroundColor: '#D4AF37' }}
//                         >
//                             WhatsApp Us
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CoursePage;
// =================================================================================
// ERASMUS+ WARSAW PARTNER - COURSES PAGE
// Updated with real course catalog
// Brand colors: Burgundy (#8B1F1F) and Gold (#D4AF37)
// =================================================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, BookOpen, Briefcase, Globe2, Target, Filter, ArrowRight } from 'lucide-react';

const CoursePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');

    // Course Categories
    const categories = ['All', 'Technology', 'Education', 'Professional', 'Environment', 'Social'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    // Courses Data
    const courses = [
        {
            id: 1,
            title: "3D Printing",
            slug: "3d-printing",
            category: "Technology",
            level: "Intermediate",
            duration: "6 weeks",
            schedule: "Mon-Wed, 18:00-20:00",
            participants: "10-15",
            price: "€520",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
            description: "Learn 3D modeling, printing technologies, and practical applications in education and industry.",
            highlights: ["CAD Design", "3D Printers", "Practical Projects", "Certificate"]
        },
        {
            id: 2,
            title: "BOAL's Methodology in Education",
            slug: "boal-methodology",
            category: "Education",
            level: "Intermediate",
            duration: "4 weeks",
            schedule: "Thursdays, 17:00-20:00",
            participants: "12-18",
            price: "€380",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
            description: "Explore Augusto Boal's Theatre of the Oppressed methodology for transformative education.",
            highlights: ["Forum Theatre", "Interactive Methods", "Social Change", "Practical Training"]
        },
        {
            id: 3,
            title: "CLIL & DBL",
            slug: "clil-dbl",
            category: "Education",
            level: "Advanced",
            duration: "5 weeks",
            schedule: "Tue-Thu, 18:30-20:30",
            participants: "15-20",
            price: "€450",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop",
            description: "Content and Language Integrated Learning combined with Design-Based Learning approaches.",
            highlights: ["CLIL Framework", "DBL Strategies", "Curriculum Design", "Assessment"]
        },
        {
            id: 4,
            title: "Climate Change Adaptation and Sustainability",
            slug: "climate-change",
            category: "Environment",
            level: "Beginner",
            duration: "4 weeks",
            schedule: "Wednesdays, 18:00-20:00",
            participants: "15-25",
            price: "€320",
            image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&auto=format&fit=crop",
            description: "Understanding climate change impacts and developing sustainable adaptation strategies.",
            highlights: ["Climate Science", "Adaptation Plans", "Green Solutions", "SDGs Integration"]
        },
        {
            id: 5,
            title: "Creative Drama",
            slug: "creative-drama",
            category: "Education",
            level: "Intermediate",
            duration: "5 weeks",
            schedule: "Fridays, 17:00-20:00",
            participants: "12-16",
            price: "€390",
            image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop",
            description: "Use drama techniques as powerful educational tools for engagement and learning.",
            highlights: ["Drama Methods", "Improvisation", "Educational Games", "Workshop Design"]
        },
        {
            id: 6,
            title: "Cultural Heritage",
            slug: "cultural-heritage",
            category: "Social",
            level: "Beginner",
            duration: "4 weeks",
            schedule: "Saturdays, 10:00-13:00",
            participants: "15-20",
            price: "€350",
            image: "https://images.unsplash.com/photo-1513415277979-3ba81c0ea46e?w=800&auto=format&fit=crop",
            description: "Explore, preserve, and promote cultural heritage through educational projects.",
            highlights: ["Heritage Studies", "Documentation", "Community Projects", "EU Programs"]
        },
        {
            id: 7,
            title: "Cyber Bullying",
            slug: "cyber-bullying",
            category: "Social",
            level: "Intermediate",
            duration: "3 weeks",
            schedule: "Mondays, 18:00-20:30",
            participants: "15-25",
            price: "€280",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
            description: "Prevention, identification, and intervention strategies for cyber bullying.",
            highlights: ["Digital Safety", "Intervention Methods", "Legal Framework", "Support Systems"]
        },
        {
            id: 8,
            title: "Digital Games and Storytelling",
            slug: "digital-games-storytelling",
            category: "Technology",
            level: "Intermediate",
            duration: "6 weeks",
            schedule: "Mon-Wed, 19:00-21:00",
            participants: "10-15",
            price: "€480",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop",
            description: "Create engaging educational games and interactive narratives for learning.",
            highlights: ["Game Design", "Storytelling Tools", "Educational Apps", "Prototyping"]
        },
        {
            id: 9,
            title: "Eco-Schools",
            slug: "eco-schools",
            category: "Environment",
            level: "Intermediate",
            duration: "5 weeks",
            schedule: "Thursdays, 17:00-20:00",
            participants: "15-20",
            price: "€400",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
            description: "Implement the international Eco-Schools program for environmental education.",
            highlights: ["Green Flag", "Sustainability Projects", "Student Leadership", "Certification"]
        },
        {
            id: 10,
            title: "Entrepreneurship in Education",
            slug: "entrepreneurship-education",
            category: "Professional",
            level: "Advanced",
            duration: "6 weeks",
            schedule: "Tue-Thu, 18:00-20:00",
            participants: "12-18",
            price: "€520",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
            description: "Foster entrepreneurial mindset and skills in educational settings.",
            highlights: ["EntreComp Framework", "Business Planning", "Student Startups", "Innovation"]
        },
        {
            id: 11,
            title: "Erasmus+ Project Writing Training",
            slug: "erasmus-project-writing",
            category: "Professional",
            level: "Advanced",
            duration: "4 weeks",
            schedule: "Wednesdays, 18:00-21:00",
            participants: "10-15",
            price: "€580",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
            description: "Master Erasmus+ application writing for successful project funding.",
            highlights: ["KA Templates", "Budget Planning", "Quality Standards", "Evaluation"]
        },
        {
            id: 12,
            title: "Flipped Classroom",
            slug: "flipped-classroom",
            category: "Education",
            level: "Intermediate",
            duration: "4 weeks",
            schedule: "Tuesdays, 18:00-20:00",
            participants: "15-20",
            price: "€360",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
            description: "Transform traditional teaching with flipped classroom methodology.",
            highlights: ["Video Creation", "Active Learning", "Assessment Tools", "Implementation"]
        },
        {
            id: 13,
            title: "Future Classroom Lab (FCL)",
            slug: "future-classroom-lab",
            category: "Technology",
            level: "Advanced",
            duration: "5 weeks",
            schedule: "Saturdays, 10:00-14:00",
            participants: "12-16",
            price: "€490",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
            description: "Design innovative learning spaces following European Schoolnet's FCL model.",
            highlights: ["Space Design", "EdTech Integration", "Learning Zones", "Scenarios"]
        },
        {
            id: 14,
            title: "Gamification",
            slug: "gamification",
            category: "Technology",
            level: "Intermediate",
            duration: "5 weeks",
            schedule: "Mon-Wed, 18:30-20:30",
            participants: "15-20",
            price: "€420",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
            description: "Apply game design elements to enhance engagement and motivation in learning.",
            highlights: ["Game Mechanics", "Points & Badges", "Platform Tools", "Case Studies"]
        },
        {
            id: 15,
            title: "Gender Equality",
            slug: "gender-equality",
            category: "Social",
            level: "Intermediate",
            duration: "4 weeks",
            schedule: "Thursdays, 18:00-20:30",
            participants: "15-25",
            price: "€340",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
            description: "Promote gender equality and address gender-based issues in education and society.",
            highlights: ["Gender Awareness", "Inclusive Practices", "Policy Framework", "Advocacy"]
        },
        {
            id: 16,
            title: "ICT Tools",
            slug: "ict-tools",
            category: "Technology",
            level: "Beginner",
            duration: "6 weeks",
            schedule: "Tue-Thu, 19:00-21:00",
            participants: "12-18",
            price: "€450",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
            description: "Essential digital tools and platforms for modern education and remote collaboration.",
            highlights: ["Google Workspace", "Microsoft 365", "Collaboration Tools", "Digital Literacy"]
        },
        {
            id: 17,
            title: "Inclusive Education",
            slug: "inclusive-education",
            category: "Education",
            level: "Intermediate",
            duration: "5 weeks",
            schedule: "Wednesdays, 17:00-20:00",
            participants: "15-20",
            price: "€410",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
            description: "Create accessible and inclusive learning environments for all students.",
            highlights: ["Universal Design", "Differentiation", "Support Strategies", "Legal Framework"]
        },
        {
            id: 18,
            title: "Mobile Apps",
            slug: "mobile-apps",
            category: "Technology",
            level: "Advanced",
            duration: "8 weeks",
            schedule: "Mon-Wed-Fri, 19:00-21:00",
            participants: "10-12",
            price: "€650",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
            description: "Develop mobile applications for educational purposes using modern frameworks.",
            highlights: ["React Native", "App Design", "User Experience", "Publishing"]
        },
        {
            id: 19,
            title: "Montessori, Reggio Emilia",
            slug: "montessori-reggio-emilia",
            category: "Education",
            level: "Intermediate",
            duration: "6 weeks",
            schedule: "Saturdays, 10:00-14:00",
            participants: "12-18",
            price: "€480",
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop",
            description: "Explore and implement Montessori and Reggio Emilia educational approaches.",
            highlights: ["Child-Centered Learning", "Environment Design", "Documentation", "Materials"]
        },
        {
            id: 20,
            title: "Peer Bullying",
            slug: "peer-bullying",
            category: "Social",
            level: "Intermediate",
            duration: "3 weeks",
            schedule: "Fridays, 17:00-20:00",
            participants: "15-25",
            price: "€290",
            image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop",
            description: "Prevention and intervention strategies for peer bullying in schools.",
            highlights: ["Prevention Programs", "Mediation Skills", "School Climate", "Support Networks"]
        },
        {
            id: 21,
            title: "Robotics and Coding",
            slug: "robotics-coding",
            category: "Technology",
            level: "Intermediate",
            duration: "8 weeks",
            schedule: "Tue-Thu, 18:00-20:00",
            participants: "10-15",
            price: "€580",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
            description: "Introduction to robotics and programming for educational applications.",
            highlights: ["Arduino & Raspberry Pi", "Python", "Educational Robots", "STEM Projects"]
        },
        {
            id: 22,
            title: "STEM and STEAM",
            slug: "stem-steam",
            category: "Education",
            level: "Intermediate",
            duration: "6 weeks",
            schedule: "Mon-Wed, 18:00-20:00",
            participants: "15-20",
            price: "€460",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
            description: "Integrate Science, Technology, Engineering, Arts, and Mathematics in education.",
            highlights: ["Project-Based Learning", "Maker Education", "Interdisciplinary", "Innovation"]
        },
        {
            id: 23,
            title: "Stress Management and Burnout Prevention",
            slug: "stress-management",
            category: "Professional",
            level: "Beginner",
            duration: "4 weeks",
            schedule: "Thursdays, 18:00-20:00",
            participants: "15-25",
            price: "€340",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
            description: "Strategies for managing stress and preventing burnout in educational settings.",
            highlights: ["Mindfulness", "Work-Life Balance", "Resilience", "Self-Care"]
        },
        {
            id: 24,
            title: "Storytelling in English Teaching/Learning",
            slug: "storytelling-english",
            category: "Education",
            level: "Intermediate",
            duration: "5 weeks",
            schedule: "Tuesdays, 18:30-20:30",
            participants: "12-18",
            price: "€390",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
            description: "Use storytelling as an effective method for English language teaching.",
            highlights: ["Narrative Techniques", "Digital Storytelling", "Student Engagement", "Materials"]
        }
    ];

    // Filter courses
    const filteredCourses = courses.filter(course => {
        const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
        const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
        return categoryMatch && levelMatch;
    });

    const emailAddress = 'info@erasmuswarsaw.eu';
    const phoneNumber = '48123456789';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your courses. Can you provide more information?")}`;

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <BookOpen className="w-16 h-16 mb-4" style={{ color: '#D4AF37' }} />
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Training Courses</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">Professional development courses for educators and youth workers across Europe</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <Award className="w-12 h-12 mx-auto mb-3" style={{ color: '#8B1F1F' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>24</p>
                            <p className="text-gray-600 mt-2">Training Courses</p>
                        </div>
                        <div className="p-6">
                            <Users className="w-12 h-12 mx-auto mb-3" style={{ color: '#D4AF37' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>1000+</p>
                            <p className="text-gray-600 mt-2">Trained Professionals</p>
                        </div>
                        <div className="p-6">
                            <Globe2 className="w-12 h-12 mx-auto mb-3" style={{ color: '#8B1F1F' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>30+</p>
                            <p className="text-gray-600 mt-2">Countries</p>
                        </div>
                        <div className="p-6">
                            <Target className="w-12 h-12 mx-auto mb-3" style={{ color: '#D4AF37' }} />
                            <p className="text-4xl font-bold" style={{ color: '#8B1F1F' }}>98%</p>
                            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="py-12" style={{ backgroundColor: '#F8F5F0' }}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center mb-6">
                        <Filter className="w-6 h-6 mr-2" style={{ color: '#8B1F1F' }} />
                        <h2 className="text-2xl font-bold text-gray-900">Filter Courses</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-sm"
                                    style={{
                                        backgroundColor: selectedCategory === category ? '#8B1F1F' : 'white',
                                        color: selectedCategory === category ? 'white' : '#8B1F1F',
                                        border: `2px solid ${selectedCategory === category ? '#8B1F1F' : '#D4AF37'}`
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Level Filter */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {levels.map(level => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className="px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-sm"
                                    style={{
                                        backgroundColor: selectedLevel === level ? '#D4AF37' : 'white',
                                        color: selectedLevel === level ? 'white' : '#8B1F1F',
                                        border: `2px solid ${selectedLevel === level ? '#D4AF37' : '#8B1F1F'}`
                                    }}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    {(selectedCategory !== 'All' || selectedLevel !== 'All') && (
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Showing <strong style={{ color: '#8B1F1F' }}>{filteredCourses.length}</strong> course{filteredCourses.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Courses Grid */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map(course => (
                            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2" style={{ borderColor: '#FEF7ED' }}>
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: '#8B1F1F' }}>
                                        {course.price}
                                    </div>
                                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                                        {course.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#FEF7ED', color: '#8B1F1F' }}>
                                            {course.level}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2" style={{ color: '#8B1F1F' }} />
                                            <span>{course.duration} • {course.schedule}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-2" style={{ color: '#8B1F1F' }} />
                                            <span>{course.participants} participants</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Link
                                            to={`/courses/${course.slug}`}
                                            className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-full font-bold text-white transition-all transform hover:scale-105 shadow-md"
                                            style={{ backgroundColor: '#8B1F1F' }}
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative" style={{ backgroundColor: '#8B1F1F' }}>
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
                        Join hundreds of educators who have already transformed their teaching with our courses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href={`mailto:${emailAddress}`}
                            className="bg-white text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg font-bold"
                            style={{ color: '#8B1F1F' }}
                        >
                            Contact Us
                            <ArrowRight className="inline-block ml-2" />
                        </a>
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg"
                            style={{ backgroundColor: '#D4AF37' }}
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;