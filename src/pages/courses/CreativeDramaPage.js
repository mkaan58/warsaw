import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const CreativeDramaPage = () => {
    const courseData = {
        title: "Creative Drama",
        subtitle: "Use drama techniques as powerful educational tools",
        category: "Education",
        level: "Intermediate",
        duration: "5 weeks",
        schedule: "Fridays, 17:00-20:00",
        participants: "12-16",
        price: "€390",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&auto=format&fit=crop",
        overview: "Transform your teaching with creative drama techniques that boost engagement and learning. Master improvisation, role-play, storytelling, and theatrical games to create dynamic educational experiences across all subjects.",
        learningOutcomes: [
            "Apply drama methods in teaching",
            "Facilitate improvisation exercises",
            "Design role-play activities",
            "Use theatre games effectively",
            "Integrate drama across curricula",
            "Build confidence and expression",
            "Create safe performance spaces",
            "Assess drama-based learning"
        ],
        modules: [
            { title: "Drama in Education", description: "Philosophy and benefits of creative drama in learning contexts." },
            { title: "Improvisation Techniques", description: "Master spontaneous creation and theatrical improvisation." },
            { title: "Role-Play & Simulation", description: "Design effective role-plays for different subjects." },
            { title: "Theatre Games", description: "Learn energizers, warm-ups, and educational drama games." },
            { title: "Application & Integration", description: "Create drama-based lessons and workshops." }
        ],
        targetAudience: "Perfect for teachers, drama educators, youth workers, and anyone wanting to use drama for engagement and learning. No acting experience required.",
        includes: [
            "5 weeks of experiential training",
            "Drama games collection",
            "Lesson plan templates",
            "Professional certificate",
            "Video demonstrations",
            "Practice facilitation",
            "Resource library",
            "Community access"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default CreativeDramaPage;