import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const ClilDblPage = () => {
    const courseData = {
        title: "CLIL & DBL",
        subtitle: "Content and Language Integrated Learning with Design-Based Learning",
        category: "Education",
        level: "Advanced",
        duration: "5 weeks",
        schedule: "Tue-Thu, 18:30-20:30",
        participants: "15-20",
        price: "€450",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&auto=format&fit=crop",
        overview: "Master Content and Language Integrated Learning (CLIL) combined with Design-Based Learning (DBL) approaches. Learn to teach subject content through a foreign language while applying design thinking principles for innovative curriculum development.",
        learningOutcomes: [
            "Apply CLIL framework in teaching",
            "Design bilingual lesson plans",
            "Integrate design thinking principles",
            "Create DBL projects",
            "Scaffold language and content",
            "Assess bilingual learning outcomes",
            "Develop CLIL materials",
            "Implement innovative curricula"
        ],
        modules: [
            { title: "CLIL Fundamentals", description: "Introduction to CLIL theory, 4Cs framework, and language scaffolding." },
            { title: "Design-Based Learning", description: "Design thinking process and project-based learning integration." },
            { title: "Lesson Planning", description: "Create effective CLIL lesson plans with DBL elements." },
            { title: "Materials Development", description: "Design authentic CLIL resources and assessment tools." },
            { title: "Implementation Strategies", description: "Classroom management and differentiation in CLIL contexts." }
        ],
        targetAudience: "Advanced course for language teachers, subject teachers in bilingual programs, curriculum developers, and educators implementing innovative pedagogies.",
        includes: [
            "5 weeks of expert training",
            "CLIL lesson plan templates",
            "DBL project frameworks",
            "Professional certificate",
            "Assessment rubrics",
            "Material design toolkit",
            "Guest expert sessions",
            "Peer collaboration network"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default ClilDblPage;