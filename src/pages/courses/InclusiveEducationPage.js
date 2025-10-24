import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const InclusiveEducationPage = () => {
    const courseData = {
        title: "Inclusive Education",
        subtitle: "Create accessible learning environments for all",
        category: "Education",
        level: "Intermediate",
        duration: "5 weeks",
        schedule: "Wednesdays, 17:00-20:00",
        participants: "15-20",
        price: "€410",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop",
        overview: "Build truly inclusive classrooms. Master Universal Design for Learning, differentiation, assistive technology, and strategies for supporting diverse learners.",
        learningOutcomes: [
            "Apply UDL principles",
            "Differentiate instruction",
            "Use assistive technology",
            "Support special needs",
            "Create culturally responsive classrooms",
            "Design accessible materials",
            "Collaborate with specialists",
            "Understand legal frameworks"
        ],
        modules: [
            { title: "Inclusive Foundations", description: "Philosophy, frameworks, social model of disability." },
            { title: "Universal Design", description: "UDL guidelines and implementation." },
            { title: "Differentiation", description: "Content, process, product, environment." },
            { title: "Assistive Technology", description: "Tools and apps for diverse learners." },
            { title: "Implementation", description: "Create your inclusive action plan." }
        ],
        targetAudience: "Essential for teachers, special education coordinators, administrators. All education levels. Teaching experience recommended.",
        includes: [
            "5 weeks comprehensive training",
            "UDL toolkit",
            "Assistive tech guide",
            "Certificate",
            "Differentiation templates",
            "Assessment strategies",
            "Audit checklist",
            "Expert consultation"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default InclusiveEducationPage;