import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const MobileAppsPage = () => {
    const courseData = {
        title: "Mobile Apps",
        subtitle: "Develop educational mobile applications",
        category: "Technology",
        level: "Advanced",
        duration: "8 weeks",
        schedule: "Mon-Wed-Fri, 19:00-21:00",
        participants: "10-12",
        price: "€650",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop",
        overview: "Create mobile apps for education using modern frameworks. Learn React Native, app design, user experience, and publishing to create impactful educational tools.",
        learningOutcomes: [
            "Develop with React Native",
            "Design app interfaces",
            "Create user experiences",
            "Integrate APIs",
            "Test apps thoroughly",
            "Publish to app stores",
            "Monetize educational apps",
            "Maintain and update apps"
        ],
        modules: [
            { title: "Mobile Development", description: "React Native basics and environment setup." },
            { title: "UI/UX Design", description: "Create beautiful, intuitive interfaces." },
            { title: "Core Features", description: "Navigation, data storage, authentication." },
            { title: "Educational Integration", description: "Learning analytics, gamification, content delivery." },
            { title: "Testing & Debugging", description: "Ensure app quality and performance." },
            { title: "Publishing", description: "App Store and Google Play deployment." },
            { title: "Advanced Features", description: "Push notifications, offline mode, multimedia." },
            { title: "Final Project", description: "Build and publish your educational app." }
        ],
        targetAudience: "For developers, tech-savvy educators, computer science teachers. Programming experience required (JavaScript preferred).",
        includes: [
            "8 weeks intensive coding",
            "React Native training",
            "Design tools",
            "Certificate",
            "Publishing guidance",
            "Code reviews",
            "Mentorship",
            "App hosting support"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default MobileAppsPage;