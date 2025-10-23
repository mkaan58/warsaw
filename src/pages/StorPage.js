import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import { Users, Globe, BookOpen, Award } from 'lucide-react';

const StorPage = () => {
    const pageData = {
        title: "KA122 Projects",
        subtitle: "Youth Mobility - Individual Learning Opportunities for Young People",
        heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
        content: {
            title: "Empower Your Future Through Mobility",
            description: "KA122 projects focus on individual youth mobility, offering young people aged 13-30 the opportunity to participate in job shadowing, traineeships, and youth exchanges across Europe. These programs are designed to enhance personal development, improve employability skills, and foster intercultural understanding. Through hands-on experiences in international environments, participants gain valuable competencies that shape their professional and personal growth.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
        },
        features: [
            { 
                name: "Individual Learning", 
                description: "Personalized learning paths tailored to your interests and career goals in European partner organizations.", 
                icon: <BookOpen size={24} /> 
            },
            { 
                name: "Youth Exchanges", 
                description: "Participate in collaborative projects with young people from different countries, building lasting international networks.", 
                icon: <Users size={24} /> 
            },
            { 
                name: "Job Shadowing", 
                description: "Gain practical work experience by observing professionals in your field of interest across Europe.", 
                icon: <Globe size={24} /> 
            },
            { 
                name: "Youthpass Certificate", 
                description: "Receive official recognition of your learning outcomes and competencies developed during the mobility.", 
                icon: <Award size={24} /> 
            }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop"
        ],
        cta: {
            title: "Start Your European Adventure with KA122",
            description: "Join our youth mobility programs and discover new opportunities for personal and professional growth. Applications are open for young people ready to explore Europe."
        }
    };

    return <ProjectPageLayout {...pageData} />;
};

export default StorPage;