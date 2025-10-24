import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const RoboticsCodingPage = () => {
    const courseData = {
        title: "Robotics and Coding",
        subtitle: "Introduction to robotics and programming for educational applications",
        category: "Technology",
        level: "Intermediate",
        duration: "8 weeks",
        schedule: "Tue-Thu, 18:00-20:00",
        participants: "10-15",
        price: "€580",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop",
        overview: "Embark on an exciting journey into the world of educational robotics and coding! This comprehensive course combines hardware and software skills, teaching you to build and program robots using platforms like Arduino, Raspberry Pi, and educational robot kits. Perfect for educators looking to integrate robotics into STEM curricula, this hands-on course covers programming fundamentals, sensor integration, and practical classroom applications. No prior coding experience required – we start from the basics and progress to creating autonomous robots.",
        learningOutcomes: [
            "Program Arduino and Raspberry Pi boards",
            "Build and wire electronic circuits",
            "Write Python code for robotics applications",
            "Integrate sensors and actuators",
            "Design educational robotics projects",
            "Troubleshoot hardware and software issues",
            "Implement robotics in classroom settings",
            "Create engaging STEM learning experiences"
        ],
        modules: [
            {
                title: "Introduction to Robotics",
                description: "Overview of robotics in education, hardware platforms, and setting up your first robot."
            },
            {
                title: "Arduino Basics",
                description: "Learn Arduino programming, digital/analog inputs and outputs, and basic electronics."
            },
            {
                title: "Sensors & Actuators",
                description: "Work with various sensors (ultrasonic, IR, light) and actuators (motors, servos, LEDs)."
            },
            {
                title: "Python Programming",
                description: "Introduction to Python for robotics. Control Raspberry Pi and create interactive programs."
            },
            {
                title: "Autonomous Navigation",
                description: "Build robots that can navigate autonomously using sensors and decision-making algorithms."
            },
            {
                title: "Educational Robots",
                description: "Explore educational robot kits (LEGO Mindstorms, mBot) and design classroom activities."
            },
            {
                title: "Project Development",
                description: "Design and build your own educational robotics project suitable for classroom use."
            },
            {
                title: "Integration & Showcase",
                description: "Present your project, learn curriculum integration strategies, and receive certification."
            }
        ],
        targetAudience: "This course is ideal for STEM teachers, technology educators, youth workers, and anyone passionate about bringing robotics into educational settings. No programming experience required, but basic computer skills and a curiosity about technology are essential. Perfect for educators who want to inspire students with hands-on robotics projects.",
        includes: [
            "8 weeks of comprehensive training",
            "Arduino and Raspberry Pi starter kits (yours to keep)",
            "All electronic components and sensors",
            "Professional certificate upon completion",
            "Access to online learning resources",
            "Project mentorship and support",
            "Classroom activity templates",
            "Alumni community access"
        ]
    };

    return <CourseDetailPage courseData={courseData} />;
};

export default RoboticsCodingPage;