import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const FlippedClassroomPage = () => {
    const courseData = {
        title: "Flipped Classroom",
        subtitle: "Transform traditional teaching with flipped methodology",
        category: "Education",
        level: "Intermediate",
        duration: "4 weeks",
        schedule: "Tuesdays, 18:00-20:00",
        participants: "15-20",
        price: "€360",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop",
        overview: "Master the flipped classroom model where students learn content at home and practice in class. Create engaging video lessons, design active learning activities, and maximize classroom time for interaction.",
        learningOutcomes: [
            "Understand flipped classroom model",
            "Create video lessons",
            "Design active learning activities",
            "Use flipped platforms",
            "Manage flipped classroom",
            "Assess flipped learning",
            "Engage all learners",
            "Overcome implementation challenges"
        ],
        modules: [
            { title: "Flipped Model", description: "Philosophy, benefits, and research on flipped learning." },
            { title: "Video Creation", description: "Record, edit, and share instructional videos." },
            { title: "Active Learning", description: "Design in-class activities for deep learning." },
            { title: "Implementation", description: "Launch and sustain flipped classroom successfully." }
        ],
        targetAudience: "For teachers ready to innovate their practice. Suitable for all subjects and levels. Basic video editing helpful.",
        includes: [
            "4 weeks practical training",
            "Video creation tools",
            "Activity templates",
            "Certificate",
            "Platform access",
            "Editing tutorials",
            "Student guides",
            "Troubleshooting support"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default FlippedClassroomPage;