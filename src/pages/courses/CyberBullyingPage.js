import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const CyberBullyingPage = () => {
    const courseData = {
        title: "Cyber Bullying",
        subtitle: "Prevention, identification, and intervention strategies",
        category: "Social",
        level: "Intermediate",
        duration: "3 weeks",
        schedule: "Mondays, 18:00-20:30",
        participants: "15-25",
        price: "€280",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",
        overview: "Address the growing challenge of cyberbullying with evidence-based strategies. Learn to identify online harassment, implement prevention programs, support victims, and create safe digital environments for young people.",
        learningOutcomes: [
            "Recognize cyberbullying forms",
            "Implement prevention programs",
            "Support victims effectively",
            "Address perpetrator behavior",
            "Use legal frameworks",
            "Teach digital citizenship",
            "Create safe online spaces",
            "Develop school policies"
        ],
        modules: [
            { title: "Understanding Cyberbullying", description: "Types, prevalence, and impacts of online harassment." },
            { title: "Prevention Strategies", description: "Evidence-based programs for preventing cyberbullying." },
            { title: "Intervention & Support", description: "Responding to incidents and supporting affected students." }
        ],
        targetAudience: "Essential for teachers, school counselors, administrators, and youth workers dealing with digital safety and wellbeing issues.",
        includes: [
            "3 weeks intensive training",
            "Prevention program toolkit",
            "Intervention protocols",
            "Certificate of completion",
            "Policy templates",
            "Parent communication guides",
            "Digital safety resources",
            "Expert consultation"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default CyberBullyingPage;