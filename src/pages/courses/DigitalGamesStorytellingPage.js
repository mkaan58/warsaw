import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const DigitalGamesStorytellingPage = () => {
    const courseData = {
        title: "Digital Games and Storytelling",
        subtitle: "Create engaging educational games and interactive narratives",
        category: "Technology",
        level: "Intermediate",
        duration: "6 weeks",
        schedule: "Mon-Wed, 19:00-21:00",
        participants: "10-15",
        price: "€480",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&auto=format&fit=crop",
        overview: "Combine game design with storytelling to create compelling educational experiences. Learn to design narratives, develop interactive games, and use digital tools to engage learners through play and story.",
        learningOutcomes: [
            "Design educational game narratives",
            "Create interactive stories",
            "Use game design principles",
            "Develop digital storytelling skills",
            "Apply narrative techniques",
            "Use game development tools",
            "Test and iterate game designs",
            "Integrate games into curricula"
        ],
        modules: [
            { title: "Game Design Basics", description: "Core mechanics, dynamics, and aesthetics of educational games." },
            { title: "Narrative Design", description: "Storytelling techniques for interactive media." },
            { title: "Digital Tools", description: "Twine, Scratch, and other game creation platforms." },
            { title: "Educational Integration", description: "Align games with learning objectives." },
            { title: "Prototyping", description: "Create and test your educational game." },
            { title: "Implementation", description: "Launch games in educational settings." }
        ],
        targetAudience: "For educators, game enthusiasts, instructional designers wanting to create engaging educational games. Basic computer skills required.",
        includes: [
            "6 weeks of hands-on training",
            "Game design toolkit",
            "Storytelling templates",
            "Certificate of completion",
            "Software licenses",
            "Project mentorship",
            "Testing support",
            "Publishing guidance"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default DigitalGamesStorytellingPage;