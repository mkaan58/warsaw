import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const EcoSchoolsPage = () => {
    const courseData = {
        title: "Eco-Schools",
        subtitle: "Implement the international Eco-Schools program",
        category: "Environment",
        level: "Intermediate",
        duration: "5 weeks",
        schedule: "Thursdays, 17:00-20:00",
        participants: "15-20",
        price: "€400",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop",
        overview: "Learn to implement the Eco-Schools program, the world's largest environmental education initiative. Guide your school through the Seven Steps framework toward achieving Green Flag certification and creating lasting environmental change.",
        learningOutcomes: [
            "Understand Eco-Schools framework",
            "Implement Seven Steps process",
            "Lead environmental committees",
            "Conduct environmental reviews",
            "Create action plans",
            "Engage school communities",
            "Work toward Green Flag",
            "Sustain environmental programs"
        ],
        modules: [
            { title: "Eco-Schools Introduction", description: "Program overview, benefits, and global impact." },
            { title: "Seven Steps Framework", description: "Master the systematic approach to sustainability." },
            { title: "Environmental Review", description: "Assess current practices and identify improvements." },
            { title: "Action Planning", description: "Design and implement environmental projects." },
            { title: "Green Flag Journey", description: "Navigate certification process and celebrate success." }
        ],
        targetAudience: "For teachers, environmental coordinators, administrators leading sustainability initiatives in schools. Perfect for starting or enhancing Eco-Schools programs.",
        includes: [
            "5 weeks comprehensive training",
            "Eco-Schools toolkit",
            "Green Flag guidance",
            "Certificate of completion",
            "Action plan templates",
            "Student engagement resources",
            "Networking opportunities",
            "Ongoing support"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default EcoSchoolsPage;