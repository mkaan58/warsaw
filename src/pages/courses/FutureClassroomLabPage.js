import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const FutureClassroomLabPage = () => {
    const courseData = {
        title: "Future Classroom Lab (FCL)",
        subtitle: "Design innovative learning spaces following FCL model",
        category: "Technology",
        level: "Advanced",
        duration: "5 weeks",
        schedule: "Saturdays, 10:00-14:00",
        participants: "12-16",
        price: "€490",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop",
        overview: "Transform learning spaces using European Schoolnet's Future Classroom Lab model. Design flexible, technology-rich environments that support innovative pedagogy and 21st-century skills.",
        learningOutcomes: [
            "Design flexible learning spaces",
            "Integrate EdTech effectively",
            "Create learning zones",
            "Develop learning scenarios",
            "Apply FCL framework",
            "Facilitate space transformation",
            "Measure space impact",
            "Sustain innovation"
        ],
        modules: [
            { title: "FCL Principles", description: "Future Classroom Lab philosophy and learning zones." },
            { title: "Space Design", description: "Creating flexible, technology-rich environments." },
            { title: "Learning Scenarios", description: "Design activities for innovative spaces." },
            { title: "Implementation", description: "Transform your classroom or school space." }
        ],
        targetAudience: "For educators, school leaders, architects interested in innovative learning spaces. Advanced course requiring strategic thinking.",
        includes: [
            "5 weeks expert training",
            "FCL toolkit",
            "Space design templates",
            "Certificate",
            "Virtual FCL tour",
            "Scenario library",
            "Implementation guide",
            "Network access"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default FutureClassroomLabPage;