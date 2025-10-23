import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Bileşenleri import et
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sayfaları import et
import HomePage from './pages/HomePage';
import StorPage from './pages/StorPage';
import ZebraPage from './pages/ZebraPage';
import JaluziPage from './pages/JaluziPage';
import TulPage from './pages/TulPage';
import PlisePage from './pages/PlisePage'; // YENİ İMPORT
// Diğer sayfalar (oluşturulunca import edilecek)
import HizmetlerPage from './pages/HizmetlerPage'; 
import GaleriPage from './pages/GaleriPage'; // YENİ İMPORT
import ReferanslarPage from './pages/ReferanslarPage'; // YENİ İMPORT
import IletisimPage from './pages/IletisimPage'; // YENİ İMPORT
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const avatarUrl = "/sarissa-logo-avatar.png";

// Sayfa değiştiğinde en üste scroll yapma bileşeni
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          {/* Ana Sayfa */}
          <Route path="/" element={<HomePage />} />
          
          {/* Perde Çeşitleri Sayfaları */}
          <Route path="/ka122" element={<StorPage />} />
          <Route path="/ka210" element={<ZebraPage />} />
          <Route path="/ka220" element={<JaluziPage />} />
          <Route path="/ka153" element={<TulPage />} />
          <Route path="/other" element={<PlisePage />} /> {/* YENİ ROTA */}

          {/* Diğer Sayfalar (oluşturulunca eklenecek) */}
          <Route path="/hizmetler" element={<HizmetlerPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
          <Route path="/referanslar" element={<ReferanslarPage />} />
          <Route path="/iletisim" element={<IletisimPage />} />
        </Routes>
      </main>
      <Footer />
      
      <FloatingWhatsApp 
        phoneNumber="905073075204"
        accountName="Sarissa Perde"
        statusMessage="Genellikle hemen yanıt veririz"
        chatMessage={"Merhaba! 🤝\nSarissa Perde'ye hoş geldiniz. Size nasıl yardımcı olabiliriz?"}
        placeholder="Mesajınızı yazın..."
        avatar={avatarUrl}
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
