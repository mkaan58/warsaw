import React from 'react';
import CourseDetailPage from '../../components/CourseDetailPage';

const GenderEqualityPage = () => {
    const courseData = {
        title: "Gender Equality",
        subtitle: "Promote gender equality in education and society",
        category: "Social",
        level: "Intermediate",
        duration: "4 weeks",
        schedule: "Thursdays, 18:00-20:30",
        participants: "15-25",
        price: "€340",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop",
        overview: "Address gender inequality through education. Learn frameworks, strategies, and tools to promote gender equality, challenge stereotypes, and create inclusive environments for all genders.",
        learningOutcomes: [
            "Understand gender concepts",
            "Challenge gender stereotypes",
            "Apply gender mainstreaming",
            "Create inclusive practices",
            "Use policy frameworks",
            "Address gender-based violence",
            "Promote girls' education",
            "Advocate for equality"
        ],
        modules: [
            { title: "Gender Fundamentals", description: "Gender vs sex, stereotypes, intersectionality." },
            { title: "Gender in Education", description: "Bias, gaps, and strategies for equality." },
            { title: "Inclusive Practices", description: "Gender-sensitive pedagogy and curriculum." },
            { title: "Advocacy & Action", description: "Create change projects and policies." }
        ],
        targetAudience: "For educators, social workers, activists committed to gender equality. Suitable for all working with young people.",
        includes: [
            "4 weeks training",
            "Gender toolkit",
            "Policy resources",
            "Certificate",
            "Case studies",
            "Advocacy guides",
            "Expert sessions",
            "Network access"
        ]
    };
    return <CourseDetailPage courseData={courseData} />;
};

export default GenderEqualityPage;