import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const ErasmusProjectWritingPage = () => {
    const courseData = {
        title: "Erasmus+ Project Writing Training",
        subtitle: "Master the art of writing successful Erasmus+ grant applications",
        category: "Professional",
        level: "Advanced",
        duration: "4 weeks",
        schedule: "Wednesdays, 18:00-21:00",
        participants: "10-15",
        price: "€580",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop",
        overview: "Unlock the secrets to successful Erasmus+ project applications with this intensive training course. Led by experienced project managers with proven track records, you'll learn to craft compelling project proposals, develop realistic budgets, and navigate the complex EU funding landscape. This course covers all Key Actions (KA1, KA2, KA3) with special focus on quality standards, evaluation criteria, and common pitfalls. By the end, you'll have drafted your own project application ready for submission.",
        learningOutcomes: [
            "Understand Erasmus+ program structure and priorities",
            "Write high-quality project descriptions",
            "Develop comprehensive project budgets",
            "Create effective work packages and timelines",
            "Build strong partnership consortia",
            "Meet quality and eligibility criteria",
            "Navigate the application portal",
            "Increase your success rate significantly"
        ],
        modules: [
            {
                title: "Erasmus+ Program Overview",
                description: "Deep dive into program structure, Key Actions, priorities, and funding opportunities for 2021-2027."
            },
            {
                title: "Project Design & Partnership",
                description: "Learn to design impactful projects, identify needs, set SMART objectives, and build effective partnerships."
            },
            {
                title: "Writing the Application",
                description: "Master the art of writing compelling project descriptions, addressing relevance, quality, and impact criteria."
            },
            {
                title: "Budget & Management",
                description: "Create realistic budgets, understand unit costs, and plan project management structures."
            },
            {
                title: "Quality Standards & Evaluation",
                description: "Understand evaluation criteria, quality standards, and how to maximize your project score."
            },
            {
                title: "Submission & Follow-up",
                description: "Navigate the application portal, submit your project, and learn about grant agreement procedures."
            }
        ],
        targetAudience: "This course is designed for educators, youth workers, project coordinators, NGO staff, and anyone interested in securing Erasmus+ funding. Participants should have a project idea or work for an organization planning to apply for EU grants. Prior project management experience is beneficial but not required.",
        includes: [
            "4 weeks of expert training",
            "Access to successful project examples",
            "Application templates and checklists",
            "Budget calculation tools",
            "Professional certificate",
            "1-on-1 project consultation session",
            "Partner search support",
            "Post-course application review"
        ]
    };

    return <CourseDetailPage courseData={courseData} />;
};

export default ErasmusProjectWritingPage;