import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const BoalMethodologyPage = () => {
    const courseData = {
        title: "BOAL's Methodology in Education",
        subtitle: "Theatre of the Oppressed for transformative education",
        category: "Education",
        level: "Intermediate",
        duration: "4 weeks",
        schedule: "Thursdays, 17:00-20:00",
        participants: "12-18",
        price: "€380",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop",
        overview: "Explore Augusto Boal's Theatre of the Oppressed methodology for transformative education. Learn Forum Theatre, Image Theatre, and other interactive techniques that empower learners to become active participants in addressing social issues.",
        learningOutcomes: [
            "Understand Theatre of the Oppressed principles",
            "Facilitate Forum Theatre sessions",
            "Apply Image Theatre techniques",
            "Use theatre for social change",
            "Design participatory workshops",
            "Address power dynamics in education",
            "Create safe learning spaces",
            "Integrate drama into curricula"
        ],
        modules: [
            { title: "Introduction to Boal", description: "Life, work, and philosophy of Augusto Boal. Theatre of the Oppressed overview." },
            { title: "Forum Theatre", description: "Learn to facilitate Forum Theatre for problem-solving and empowerment." },
            { title: "Image Theatre", description: "Explore non-verbal communication and body expression techniques." },
            { title: "Application in Education", description: "Design workshops and integrate Boal's methods into teaching practice." }
        ],
        targetAudience: "Ideal for educators, drama teachers, youth workers, and facilitators interested in participatory theatre and social justice education.",
        includes: [
            "4 weeks of experiential learning",
            "Forum Theatre toolkit",
            "Workshop design templates",
            "Certificate of completion",
            "Video resources",
            "Practice facilitation sessions",
            "Reading materials",
            "Alumni network access"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default BoalMethodologyPage;