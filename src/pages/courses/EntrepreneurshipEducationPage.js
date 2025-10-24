import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const EntrepreneurshipEducationPage = () => {
    const courseData = {
        title: "Entrepreneurship in Education",
        subtitle: "Foster entrepreneurial mindset and skills in learners",
        category: "Professional",
        level: "Advanced",
        duration: "6 weeks",
        schedule: "Tue-Thu, 18:00-20:00",
        participants: "12-18",
        price: "€520",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&auto=format&fit=crop",
        overview: "Develop entrepreneurial competences in educational contexts using the EntreComp framework. Learn to design learning experiences that build creativity, initiative, problem-solving, and business acumen in students of all ages.",
        learningOutcomes: [
            "Apply EntreComp framework",
            "Foster entrepreneurial mindset",
            "Design business education programs",
            "Teach financial literacy",
            "Support student startups",
            "Create innovation projects",
            "Assess entrepreneurial skills",
            "Build partnerships with business"
        ],
        modules: [
            { title: "Entrepreneurial Education", description: "EntreComp framework and entrepreneurship competences." },
            { title: "Idea Generation", description: "Creative thinking, opportunity spotting, problem-solving." },
            { title: "Business Planning", description: "From idea to viable business plan for students." },
            { title: "Financial Literacy", description: "Teach budgeting, pricing, and financial management." },
            { title: "Student Startups", description: "Support young entrepreneurs from concept to launch." },
            { title: "Assessment & Impact", description: "Measure entrepreneurial learning outcomes." }
        ],
        targetAudience: "For educators, business teachers, career counselors, and anyone developing entrepreneurship education programs. Advanced course requiring pedagogical experience.",
        includes: [
            "6 weeks intensive training",
            "EntreComp toolkit",
            "Business plan templates",
            "Professional certificate",
            "Startup mentorship guides",
            "Assessment rubrics",
            "Business network access",
            "Funding opportunities info"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default EntrepreneurshipEducationPage;