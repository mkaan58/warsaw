// src/components/PerdeKarti.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react'; // Kapatma ikonu için X ekliyoruz

// Perde kartı için props (özellikler) tanımlıyoruz: isim, link (slug), ve resim adresi (imgSrc)
const PerdeKarti = ({ isim, slug, imgSrc }) => {
    // Modal'ın (büyütülmüş resim) açık olup olmadığını takip eden state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal'ı açan ve kapatan fonksiyonlar
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
            {/* Resim Alanı - Tıklandığında modal'ı açar */}
            <div 
                className="relative w-full h-80 cursor-pointer group"
                onClick={openModal}
            >
                <img 
                    src={imgSrc} 
                    alt={isim} 
                    className="w-full h-full object-contain p-2" // object-contain ile resmin tamamı görünür, p-2 ile kenarlardan boşluk bırakılır
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Resmi Büyüt</p>
                </div>
            </div>

            {/* Bilgi ve Link Alanı */}
            <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{isim}</h3>
                <Link 
                    to={slug} 
                    className="mt-3 text-cyan-600 font-semibold inline-flex items-center hover:text-cyan-800 group/link"
                >
                    İncele 
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
            </div>
            
            {/* Resim Büyütme Modalı - Sadece isModalOpen true ise görünür */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeModal} // Arka plana tıklayınca kapat
                >
                    <button 
                        onClick={closeModal} 
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                    >
                        <X size={40} />
                    </button>
                    <img 
                        src={imgSrc} 
                        alt={isim} 
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default PerdeKarti;