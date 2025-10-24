import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const PeerBullyingPage = () => {
    const courseData = {
        title: "Peer Bullying",
        subtitle: "Prevention and intervention for school bullying",
        category: "Social",
        level: "Intermediate",
        duration: "3 weeks",
        schedule: "Fridays, 17:00-20:00",
        participants: "15-25",
        price: "€290",
        image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop",
        overview: "Address peer bullying with evidence-based strategies. Learn prevention programs, intervention techniques, mediation skills, and how to create positive school climates.",
        learningOutcomes: [
            "Recognize bullying forms",
            "Implement prevention",
            "Intervene effectively",
            "Mediate conflicts",
            "Support victims",
            "Address bullies",
            "Engage bystanders",
            "Create safe climates"
        ],
        modules: [
            { title: "Understanding Bullying", description: "Types, dynamics, impacts of peer bullying." },
            { title: "Prevention Programs", description: "Evidence-based whole-school approaches." },
            { title: "Intervention", description: "Responding to incidents and supporting students." }
        ],
        targetAudience: "For teachers, counselors, administrators, youth workers addressing bullying. Essential for creating safe schools.",
        includes: [
            "3 weeks intensive training",
            "Prevention toolkit",
            "Intervention protocols",
            "Certificate",
            "Policy templates",
            "Mediation guides",
            "Parent resources",
            "Expert Q&A"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default PeerBullyingPage;