import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import { Zap, Coffee, Briefcase, GraduationCap } from 'lucide-react';

const PlisePage = () => {
    const pageData = {
        title: "Other Erasmus+ Projects",
        subtitle: "Discover Additional European Opportunities Beyond Standard Actions",
        heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop&q=80",
        content: {
            title: "Explore More Possibilities",
            description: "Beyond the main Erasmus+ project types, there are numerous additional opportunities for international cooperation, capacity building, and professional development. These include DiscoverEU travel passes for young Europeans, European Solidarity Corps volunteering projects, Jean Monnet actions for European integration studies, Sport projects for grassroots sport activities, and capacity building projects with partner countries outside Europe. Each program offers unique benefits and addresses specific needs in education, youth, and sport sectors.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80"
        },
        features: [
            { 
                name: "DiscoverEU", 
                description: "Free Interrail passes for 18-year-olds to explore Europe, learn about European cultures, and connect with peers.", 
                icon: <Zap size={24} /> 
            },
            { 
                name: "European Solidarity Corps", 
                description: "Volunteering opportunities for young people to contribute to solidarity projects and make a positive impact on communities.", 
                icon: <Coffee size={24} /> 
            },
            { 
                name: "Jean Monnet Actions", 
                description: "Academic projects promoting excellence in teaching and research on European integration in higher education institutions.", 
                icon: <GraduationCap size={24} /> 
            },
            { 
                name: "Capacity Building", 
                description: "Cooperation projects with partner countries outside Europe to modernize education and youth systems.", 
                icon: <Briefcase size={24} /> 
            }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
        ],
        cta: {
            title: "Find Your Perfect European Opportunity",
            description: "Explore the full range of Erasmus+ programs and find the perfect fit for your goals. We're here to guide you through every step of your European journey."
        }
    };

    return <ProjectPageLayout {...pageData} />;
};

export default PlisePage;