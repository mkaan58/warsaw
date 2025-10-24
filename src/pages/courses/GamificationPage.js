import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const GamificationPage = () => {
    const courseData = {
        title: "Gamification",
        subtitle: "Apply game design elements to enhance engagement",
        category: "Technology",
        level: "Intermediate",
        duration: "5 weeks",
        schedule: "Mon-Wed, 18:30-20:30",
        participants: "15-20",
        price: "€420",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop",
        overview: "Transform learning with gamification strategies. Apply game mechanics like points, badges, leaderboards, and quests to boost motivation and engagement in any subject.",
        learningOutcomes: [
            "Understand gamification principles",
            "Design point systems",
            "Create badge structures",
            "Build engaging quests",
            "Use gamification platforms",
            "Balance competition",
            "Measure effectiveness",
            "Avoid pitfalls"
        ],
        modules: [
            { title: "Gamification Fundamentals", description: "Game thinking, motivation theory, mechanics vs dynamics." },
            { title: "Game Mechanics", description: "Points, badges, leaderboards, levels, progress." },
            { title: "Quest Design", description: "Compelling narratives aligned with learning." },
            { title: "Platforms & Tools", description: "Classcraft, Kahoot, Quizizz hands-on." },
            { title: "Implementation", description: "Design and launch your gamified course." }
        ],
        targetAudience: "For teachers, trainers, instructional designers wanting to increase engagement. All subjects and ages. Basic digital literacy required.",
        includes: [
            "5 weeks interactive training",
            "Platform access",
            "Templates & resources",
            "Certificate",
            "Gamified course design",
            "Case studies",
            "Peer feedback",
            "Community support"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default GamificationPage;