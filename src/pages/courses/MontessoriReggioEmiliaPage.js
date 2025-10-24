import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const MontessoriReggioEmiliaPage = () => {
    const courseData = {
        title: "Montessori, Reggio Emilia",
        subtitle: "Child-centered educational approaches",
        category: "Education",
        level: "Intermediate",
        duration: "6 weeks",
        schedule: "Saturdays, 10:00-14:00",
        participants: "12-18",
        price: "€480",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&auto=format&fit=crop",
        overview: "Explore Montessori and Reggio Emilia philosophies. Learn child-centered approaches, environment design, documentation, and materials that foster natural development and creativity.",
        learningOutcomes: [
            "Apply Montessori principles",
            "Use Reggio Emilia approach",
            "Design learning environments",
            "Create Montessori materials",
            "Document learning",
            "Follow the child",
            "Support independence",
            "Integrate philosophies"
        ],
        modules: [
            { title: "Montessori Fundamentals", description: "Maria Montessori's philosophy and prepared environment." },
            { title: "Reggio Emilia Approach", description: "100 languages, documentation, provocations." },
            { title: "Environment Design", description: "Creating spaces that inspire learning." },
            { title: "Materials & Documentation", description: "Hands-on materials and learning documentation." },
            { title: "Implementation", description: "Apply approaches in your setting." }
        ],
        targetAudience: "For early childhood educators, preschool teachers, parents interested in alternative education. Suitable for ages 0-12 focus.",
        includes: [
            "6 weeks immersive learning",
            "Philosophy resources",
            "Material guides",
            "Certificate",
            "Documentation templates",
            "Environment checklists",
            "Video examples",
            "Community network"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default MontessoriReggioEmiliaPage;