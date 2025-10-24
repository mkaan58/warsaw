import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const ThreeDPrintingPage = () => {
    const courseData = {
        title: "3D Printing",
        subtitle: "Master 3D modeling and printing technologies for education and innovation",
        category: "Technology",
        level: "Intermediate",
        duration: "6 weeks",
        schedule: "Mon-Wed, 18:00-20:00",
        participants: "10-15",
        price: "€520",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&fit=crop",
        overview: "Dive into the world of 3D printing technology with this comprehensive course designed for educators, makers, and innovators. Learn to design 3D models, understand printing technologies, and create practical applications for educational settings. This hands-on course covers everything from basic CAD design to advanced printing techniques, material selection, and troubleshooting. Perfect for those looking to integrate maker education into their classroom or start their own 3D printing projects.",
        learningOutcomes: [
            "Master 3D modeling software (Tinkercad, Fusion 360)",
            "Understand different 3D printing technologies (FDM, SLA, SLS)",
            "Design and print functional educational tools",
            "Troubleshoot common printing issues",
            "Select appropriate materials for different projects",
            "Integrate 3D printing into STEM curricula",
            "Create a portfolio of 3D printed projects",
            "Understand safety and best practices"
        ],
        modules: [
            {
                title: "Introduction to 3D Printing",
                description: "Overview of 3D printing history, technologies, and applications in education. Setting up your first print."
            },
            {
                title: "CAD Design Basics",
                description: "Learn Tinkercad and basic 3D modeling concepts. Create your first designs from scratch."
            },
            {
                title: "Advanced Modeling",
                description: "Introduction to Fusion 360. Parametric design, constraints, and complex geometries."
            },
            {
                title: "Printing Technologies & Materials",
                description: "Deep dive into FDM, SLA, and SLS technologies. Material properties and selection guide."
            },
            {
                title: "Practical Projects",
                description: "Design and print educational tools, classroom aids, and innovative solutions."
            },
            {
                title: "Integration & Application",
                description: "Implement 3D printing in educational settings. Project showcase and certification."
            }
        ],
        targetAudience: "This course is perfect for educators, STEM teachers, makers, youth workers, and anyone interested in bringing 3D printing technology into their classroom or projects. No prior 3D modeling experience required, but basic computer skills are recommended.",
        includes: [
            "6 weeks of intensive training",
            "Access to 3D printers and materials",
            "Professional certificate upon completion",
            "Lifetime access to course materials",
            "Project-based learning approach",
            "Small group instruction (10-15 participants)",
            "Portfolio development support",
            "Community forum access"
        ]
    };

    return <CourseDetailPage courseData={courseData} />;
};

export default ThreeDPrintingPage;