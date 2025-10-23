import React, { useState, useMemo } from 'react';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const allImages = [
  // { id: 1, category: 'stor', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241003-WA0067.jpg?updatedAt=1761205679294', alt: 'Youth exchange program in Warsaw' },
  { id: 2, category: 'tul', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20240930-WA0030.jpg?updatedAt=1761205679286', alt: 'Cultural workshop participants' },
  // { id: 3, category: 'jaluzi', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241003-WA0078.jpg?updatedAt=1761205679275', alt: 'Training course activity' },
  // { id: 4, category: 'zebra', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241019-WA0108.jpg?updatedAt=1761205679149', alt: 'International networking event' },
  { id: 6, category: 'tul', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241019-WA0111.jpg?updatedAt=1761205678980', alt: 'Study abroad program' },
  { id: 7, category: 'stor', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241019-WA0100.jpg?updatedAt=1761205678974', alt: 'Volunteering project' },
  { id: 8, category: 'jaluzi', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241019-WA0075.jpg?updatedAt=1761205678801', alt: 'Language learning session' },
  // { id: 9, category: 'zebra', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241021-WA0049.jpg?updatedAt=1761205678689', alt: 'Group collaboration activity' },
  { id: 10, category: 'tul', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241021-WA0153.jpg?updatedAt=1761205678225', alt: 'Summer school program' },
  { id: 11, category: 'jaluzi', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/WhatsApp%20Image%202025-01-10%20at%2016.56.30%20(2).jpeg?updatedAt=1761205677950', alt: 'Digital skills workshop' },
  // { id: 12, category: 'stor', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241010-WA0012.jpg?updatedAt=1761205677988', alt: 'Entrepreneurship training' },
  { id: 13, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241004-WA0054.jpg?updatedAt=1761205677879', alt: 'Erasmus+ participants in Warsaw' },
  // { id: 14, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241024-WA0014.jpg?updatedAt=1761205677833', alt: 'International students gathering' },
  { id: 15, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/WhatsApp%20Image%202025-01-10%20at%2016.56.30%20(3).jpeg?updatedAt=1761205677645', alt: 'Cultural exchange moment' },
  // { id: 17, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241004-WA0041.jpg?updatedAt=1761205677537', alt: 'Workshop session' },
  { id: 18, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/WhatsApp%20Image%202025-01-10%20at%2016.56.30.jpeg?updatedAt=1761205677425', alt: 'Team building activity' },
  { id: 19, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/IMG-20241010-WA0028.jpg?updatedAt=1761205677384', alt: 'Learning together' },
  { id: 20, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/Sirinler/WhatsApp%20Image%202025-01-10%20at%2016.56.31.jpeg?updatedAt=1761205677165', alt: 'Project presentation' },
  // { id: 21, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/17.jpeg?updatedAt=1752170410850', alt: 'Networking event' },
  // { id: 22, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/55.jpeg?updatedAt=1752170411973', alt: 'Collaborative work' },
  // { id: 23, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/34.jpeg?updatedAt=1752169872734', alt: 'Study session' },
  // { id: 24, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/27.jpeg?updatedAt=1752169871151', alt: 'Cultural activity' },
  // { id: 25, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/21.jpeg?updatedAt=1752169871143', alt: 'Group discussion' },
  // { id: 26, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/30.jpeg?updatedAt=1752169870091', alt: 'Training moment' },
  // { id: 27, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/26.jpeg?updatedAt=1752169868287', alt: 'Educational program' },
  // { id: 28, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/18.jpeg?updatedAt=1752169866323', alt: 'International collaboration' },
  // { id: 29, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/24.jpeg?updatedAt=1752169865483', alt: 'Workshop participants' },
  // { id: 30, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/19.jpeg?updatedAt=1752170603040', alt: 'Learning experience' },
  // { id: 31, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/32.jpeg?updatedAt=1752169865319', alt: 'Program activity' },
  // { id: 32, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/33.jpeg?updatedAt=1752169864822', alt: 'Cultural exchange' },
  // { id: 33, category: 'tumu', src: 'https://ik.imagekit.io/46nvsdwq8/1.jpeg?updatedAt=1752169446768', alt: 'Erasmus+ experience' }
];

const categories = [
  { key: 'tumu', name: 'All Photos' },
  { key: 'stor', name: 'Youth Exchanges' },
  { key: 'zebra', name: 'Training Courses' },
  { key: 'tul', name: 'Study Programs' },
  { key: 'jaluzi', name: 'Volunteering' },
];

const GaleriPage = () => {
  const [activeCategory, setActiveCategory] = useState('tumu');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = useMemo(() => 
    activeCategory === 'tumu'
      ? allImages
      : allImages.filter(image => image.category === activeCategory),
    [activeCategory]
  );
  
  // const heroImageUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop";
    const heroImageUrl = "https://images.unsplash.com/photo-1585427915733-13af3fcb80b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334";
  const phoneNumber = '48123456789';
  const message = encodeURIComponent("Hello! I'm interested in your Erasmus+ programs. Can I get more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Our Gallery</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl">Moments where we turn dreams into reality through Erasmus+ programs</p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map(cat => (
              <button 
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.key 
                    ? 'text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-700'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.key ? '#8B1F1F' : undefined
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat.key) {
                    e.target.style.backgroundColor = '#FEF7ED';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat.key) {
                    e.target.style.backgroundColor = '#E5E7EB';
                  }
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative block rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Camera size={48} className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X size={40} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white transition-all z-50 p-2 rounded-full"
            style={{ backgroundColor: '#8B1F1F' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div 
            className="max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white transition-all z-50 p-2 rounded-full"
            style={{ backgroundColor: '#8B1F1F' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-medium px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(139, 31, 31, 0.8)' }}>
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-slate-50">
        <div className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Inspired by What You See?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step toward your European adventure. Contact us for more information about our programs and upcoming opportunities.
          </p>
          <div className="mt-8">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg"
              style={{ backgroundColor: '#8B1F1F' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#6B1717'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1F1F'}
            >
              Contact Us on WhatsApp
              <ArrowRight className="inline-block ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriPage;