import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import { Layers, Lightbulb, Target, Network } from 'lucide-react';

const ZebraPage = () => {
    const pageData = {
        title: "KA210 Projects",
        subtitle: "Small-Scale Partnerships - Cooperation Made Simple and Accessible",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
        content: {
            title: "Collaborate Across Borders",
            description: "KA210 small-scale partnerships are designed for organizations new to Erasmus+ or those seeking simpler, shorter collaboration projects. These partnerships involve at least two organizations from different European countries working together on innovative projects in youth, education, or training. With reduced administrative requirements and flexible project scopes, KA210 makes international cooperation accessible to grassroots organizations and newcomers to European programs.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80"
        },
        features: [
            { 
                name: "Simplified Process", 
                description: "Streamlined application and reporting procedures make it easier for small organizations to participate in European cooperation.", 
                icon: <Layers size={24} /> 
            },
            { 
                name: "Innovation Focus", 
                description: "Develop and test innovative practices, methods, or tools to address challenges in youth work and education.", 
                icon: <Lightbulb size={24} /> 
            },
            { 
                name: "Flexible Duration", 
                description: "Projects can run from 6 to 24 months, allowing organizations to plan according to their capacity and objectives.", 
                icon: <Target size={24} /> 
            },
            { 
                name: "Network Building", 
                description: "Establish meaningful partnerships with European organizations and expand your international network.", 
                icon: <Network size={24} /> 
            }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop"
        ],
        cta: {
            title: "Launch Your First European Partnership",
            description: "KA210 is the perfect starting point for organizations new to Erasmus+. Let us help you design and implement your small-scale cooperation project."
        }
    };

    return <ProjectPageLayout {...pageData} />;
};

export default ZebraPage;