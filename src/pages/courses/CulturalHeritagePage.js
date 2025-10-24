import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const CulturalHeritagePage = () => {
    const courseData = {
        title: "Cultural Heritage",
        subtitle: "Explore, preserve, and promote cultural heritage through education",
        category: "Social",
        level: "Beginner",
        duration: "4 weeks",
        schedule: "Saturdays, 10:00-13:00",
        participants: "15-20",
        price: "€350",
        image: "https://images.unsplash.com/photo-1513415277979-3ba81c0ea46e?w=1200&auto=format&fit=crop",
        overview: "Learn to preserve and celebrate cultural heritage in educational contexts. Explore tangible and intangible heritage, documentation methods, and community-based projects that connect learners with their cultural roots.",
        learningOutcomes: [
            "Understand cultural heritage concepts",
            "Document heritage sites and traditions",
            "Design heritage education projects",
            "Use digital tools for preservation",
            "Engage communities in heritage",
            "Integrate heritage into curricula",
            "Apply EU heritage frameworks",
            "Create sustainable heritage programs"
        ],
        modules: [
            { title: "Heritage Fundamentals", description: "Types of cultural heritage and international frameworks." },
            { title: "Documentation Methods", description: "Techniques for recording and preserving heritage." },
            { title: "Heritage Education", description: "Pedagogical approaches for teaching cultural heritage." },
            { title: "Community Projects", description: "Design participatory heritage projects with communities." }
        ],
        targetAudience: "For educators, museum professionals, cultural workers, and anyone interested in preserving and promoting cultural heritage through education.",
        includes: [
            "4 weeks of expert guidance",
            "Heritage documentation toolkit",
            "Project design templates",
            "Certificate of completion",
            "Field visit (if local)",
            "Digital tools training",
            "EU program information",
            "Heritage network access"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default CulturalHeritagePage;