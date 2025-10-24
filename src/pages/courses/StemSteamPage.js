import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const StemSteamPage = () => {
    const courseData = {
        title: "STEM and STEAM",
        subtitle: "Integrate Science, Technology, Engineering, Arts, Mathematics",
        category: "Education",
        level: "Intermediate",
        duration: "6 weeks",
        schedule: "Mon-Wed, 18:00-20:00",
        participants: "15-20",
        price: "€460",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&auto=format&fit=crop",
        overview: "Transform education with STEM/STEAM approaches. Learn project-based learning, maker education, and interdisciplinary teaching that prepares students for innovation careers.",
        learningOutcomes: [
            "Apply STEM pedagogy",
            "Integrate arts (STEAM)",
            "Design maker projects",
            "Use design thinking",
            "Facilitate inquiry learning",
            "Build 21st century skills",
            "Create STEM labs",
            "Assess STEM learning"
        ],
        modules: [
            { title: "STEM/STEAM Philosophy", description: "Principles, benefits, career connections." },
            { title: "Project-Based Learning", description: "Design authentic STEM challenges." },
            { title: "Maker Education", description: "Hands-on creation and innovation." },
            { title: "Interdisciplinary Units", description: "Connect subjects meaningfully." },
            { title: "STEM Lab Design", description: "Create makerspaces and STEM environments." },
            { title: "Implementation", description: "Launch STEM programs successfully." }
        ],
        targetAudience: "For science, math, tech, art teachers, STEM coordinators. All levels K-12. Passion for innovation required.",
        includes: [
            "6 weeks project-based training",
            "STEM curriculum guides",
            "Maker project library",
            "Certificate",
            "Assessment tools",
            "Lab design resources",
            "Materials lists",
            "Innovation network"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default StemSteamPage;