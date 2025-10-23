import React from 'react';
import ProjectPageLayout from '../components/ProjectPageLayout';
import { Heart, MessageCircle, Megaphone, Star } from 'lucide-react';

const TulPage = () => {
    const pageData = {
        title: "KA153 Projects",
        subtitle: "Youth Participation Activities - Empowering Young Voices in Democracy",
        heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop&q=80",
        content: {
            title: "Shape the Future of Europe",
            description: "KA153 projects focus on youth participation in democratic life, encouraging young people to become active citizens and engage with European and local policies. These activities support youth-led initiatives, debates, simulations, and consultations that give young people a voice in decision-making processes. Through KA153, youth organizations can organize events that bring together young participants from different countries to discuss topics such as environmental sustainability, social inclusion, digital transformation, and the future of Europe.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80"
        },
        features: [
            { 
                name: "Democratic Engagement", 
                description: "Empower young people to participate actively in democratic processes and policy discussions at European and local levels.", 
                icon: <Megaphone size={24} /> 
            },
            { 
                name: "Youth-Led Initiatives", 
                description: "Support projects designed and implemented by young people themselves, fostering leadership and entrepreneurial skills.", 
                icon: <Star size={24} /> 
            },
            { 
                name: "Dialogue & Debate", 
                description: "Organize consultations, forums, and debates where young people can express their views and influence policy decisions.", 
                icon: <MessageCircle size={24} /> 
            },
            { 
                name: "Social Cohesion", 
                description: "Promote solidarity, intercultural dialogue, and understanding among young people from diverse backgrounds.", 
                icon: <Heart size={24} /> 
            }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
        ],
        cta: {
            title: "Give Young People a Voice with KA153",
            description: "Support youth participation activities that strengthen democracy and civic engagement. Let's work together to empower the next generation of active citizens."
        }
    };

    return <ProjectPageLayout {...pageData} />;
};

export default TulPage;