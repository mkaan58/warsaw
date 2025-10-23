import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import { Settings, Rocket, Building, CheckCircle } from 'lucide-react';

const JaluziPage = () => {
    const pageData = {
        title: "KA220 Projects",
        subtitle: "Cooperation Partnerships - Large-Scale Strategic Collaboration",
        heroImage: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80",
        content: {
            title: "Transform Education and Youth Work",
            description: "KA220 cooperation partnerships bring together organizations from at least three European countries to develop, transfer, and implement innovative practices in education, training, and youth sectors. These strategic partnerships focus on producing high-quality, sustainable results such as digital tools, curricula, pedagogical approaches, and policy recommendations. With substantial funding and longer project durations, KA220 enables ambitious initiatives that create lasting impact across Europe.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
        },
        features: [
            { 
                name: "Strategic Impact", 
                description: "Develop comprehensive solutions addressing systemic challenges in education and youth sectors across Europe.", 
                icon: <Rocket size={24} /> 
            },
            { 
                name: "Intellectual Outputs", 
                description: "Create tangible products such as digital platforms, training materials, methodologies, and research publications.", 
                icon: <Building size={24} /> 
            },
            { 
                name: "Quality Assurance", 
                description: "Implement rigorous monitoring and evaluation frameworks to ensure project excellence and measurable outcomes.", 
                icon: <CheckCircle size={24} /> 
            },
            { 
                name: "Transnational Meetings", 
                description: "Regular face-to-face meetings with partners to coordinate activities, share expertise, and ensure project success.", 
                icon: <Settings size={24} /> 
            }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
        ],
        cta: {
            title: "Drive Innovation with KA220 Partnerships",
            description: "Ready to lead a strategic cooperation project? We support organizations in developing competitive proposals and managing successful KA220 partnerships."
        }
    };

    return <ProjectPageLayout {...pageData} />;
};

export default JaluziPage;