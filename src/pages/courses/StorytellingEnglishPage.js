import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const StorytellingEnglishPage = () => {
    const courseData = {
        title: "Storytelling in English Teaching/Learning",
        subtitle: "Use narrative for effective language learning",
        category: "Education",
        level: "Intermediate",
        duration: "5 weeks",
        schedule: "Tuesdays, 18:30-20:30",
        participants: "12-18",
        price: "€390",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop",
        overview: "Master storytelling as a language teaching method. Learn narrative techniques, digital storytelling, story selection, and activities that make English learning engaging and memorable.",
        learningOutcomes: [
            "Select appropriate stories",
            "Tell stories effectively",
            "Create digital stories",
            "Design story-based activities",
            "Develop listening skills",
            "Build vocabulary through stories",
            "Enhance speaking fluency",
            "Assess through storytelling"
        ],
        modules: [
            { title: "Storytelling Pedagogy", description: "Benefits and techniques for language learning." },
            { title: "Story Selection", description: "Choose stories for different levels and objectives." },
            { title: "Narrative Techniques", description: "Voice, gestures, expression, engagement." },
            { title: "Digital Storytelling", description: "Create multimedia stories with students." },
            { title: "Activities & Assessment", description: "Story-based exercises and evaluation." }
        ],
        targetAudience: "For English teachers, language educators, ESOL instructors. All levels welcome. Creativity valued over tech skills.",
        includes: [
            "5 weeks interactive training",
            "Story library",
            "Activity templates",
            "Certificate",
            "Digital tools access",
            "Recording equipment guide",
            "Assessment rubrics",
            "Storytelling community"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default StorytellingEnglishPage;