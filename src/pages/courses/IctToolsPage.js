import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const IctToolsPage = () => {
    const courseData = {
        title: "ICT Tools",
        subtitle: "Essential digital tools for modern education",
        category: "Technology",
        level: "Beginner",
        duration: "6 weeks",
        schedule: "Tue-Thu, 19:00-21:00",
        participants: "12-18",
        price: "€450",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&auto=format&fit=crop",
        overview: "Master essential digital tools for teaching and collaboration. From Google Workspace to Microsoft 365, learn platforms and apps that enhance productivity and engagement.",
        learningOutcomes: [
            "Use Google Workspace",
            "Master Microsoft 365",
            "Apply collaboration tools",
            "Create digital content",
            "Manage online classrooms",
            "Ensure digital safety",
            "Integrate ICT in lessons",
            "Build digital literacy"
        ],
        modules: [
            { title: "Digital Essentials", description: "Overview of key platforms and tools." },
            { title: "Google Workspace", description: "Docs, Slides, Classroom, Meet mastery." },
            { title: "Microsoft 365", description: "Teams, OneNote, Forms, PowerPoint." },
            { title: "Collaboration Tools", description: "Padlet, Miro, Mentimeter, Kahoot." },
            { title: "Content Creation", description: "Canva, video tools, podcasting." },
            { title: "Integration", description: "Implement ICT in your teaching practice." }
        ],
        targetAudience: "Perfect for teachers new to educational technology. No technical background required - start from basics.",
        includes: [
            "6 weeks hands-on training",
            "Tool licenses",
            "Tutorial videos",
            "Certificate",
            "Practice activities",
            "Digital literacy guides",
            "Technical support",
            "Resource library"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default IctToolsPage;