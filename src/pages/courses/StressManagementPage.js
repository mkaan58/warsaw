import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const StressManagementPage = () => {
    const courseData = {
        title: "Stress Management and Burnout Prevention",
        subtitle: "Wellbeing strategies for educators",
        category: "Professional",
        level: "Beginner",
        duration: "4 weeks",
        schedule: "Thursdays, 18:00-20:00",
        participants: "15-25",
        price: "€340",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop",
        overview: "Protect your wellbeing and prevent burnout. Learn stress management techniques, mindfulness, work-life balance, and resilience strategies for sustainable teaching careers.",
        learningOutcomes: [
            "Recognize stress & burnout signs",
            "Practice mindfulness",
            "Develop coping strategies",
            "Set healthy boundaries",
            "Build resilience",
            "Create self-care plans",
            "Achieve work-life balance",
            "Support colleagues"
        ],
        modules: [
            { title: "Understanding Stress", description: "Stress, burnout, compassion fatigue in education." },
            { title: "Mindfulness Practices", description: "Meditation, breathing, present moment awareness." },
            { title: "Resilience Building", description: "Cognitive strategies and emotional regulation." },
            { title: "Sustainable Practice", description: "Work-life balance and self-care routines." }
        ],
        targetAudience: "For all educators, administrators, support staff. Essential for maintaining wellbeing in demanding profession. All welcome.",
        includes: [
            "4 weeks wellness training",
            "Mindfulness recordings",
            "Self-care toolkit",
            "Certificate",
            "Resilience workbook",
            "Boundary setting guides",
            "Wellness apps access",
            "Support community"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default StressManagementPage;