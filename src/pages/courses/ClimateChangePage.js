import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const ClimateChangePage = () => {
    const courseData = {
        title: "Climate Change Adaptation and Sustainability",
        subtitle: "Understanding climate impacts and developing sustainable solutions",
        category: "Environment",
        level: "Beginner",
        duration: "4 weeks",
        schedule: "Wednesdays, 18:00-20:00",
        participants: "15-25",
        price: "€320",
        image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&auto=format&fit=crop",
        overview: "Equip yourself with knowledge and tools to address the climate crisis in educational settings. Learn climate science, adaptation strategies, and sustainable solutions aligned with UN SDGs.",
        learningOutcomes: [
            "Understand climate change science",
            "Develop adaptation strategies",
            "Integrate sustainability into education",
            "Design climate action projects",
            "Connect learning to SDGs",
            "Use climate education frameworks",
            "Engage students in stewardship",
            "Create sustainability plans"
        ],
        modules: [
            { title: "Climate Science Essentials", description: "Greenhouse gases, global warming, and climate impacts." },
            { title: "Adaptation Strategies", description: "Mitigation vs adaptation, resilience building, sustainable solutions." },
            { title: "SDGs and Climate Education", description: "Connect climate action to Sustainable Development Goals." },
            { title: "Youth Climate Action", description: "Empower students as climate leaders and create action projects." }
        ],
        targetAudience: "For educators, environmental coordinators, youth workers passionate about climate action. No prior climate science knowledge required.",
        includes: [
            "4 weeks of expert training",
            "Climate education toolkit",
            "SDG integration resources",
            "Certificate of completion",
            "Project planning templates",
            "Climate education network",
            "Guest climate speakers",
            "Curriculum support"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default ClimateChangePage;