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
import CoursePage from './pages/CoursePage';
// Diğer sayfalar (oluşturulunca import edilecek)
import HizmetlerPage from './pages/HizmetlerPage'; 
import GaleriPage from './pages/GaleriPage'; // YENİ İMPORT
import ReferanslarPage from './pages/ReferanslarPage'; // YENİ İMPORT
import IletisimPage from './pages/IletisimPage'; // YENİ İMPORT
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import CourseDetailPage from './components/CourseDetailPage';
import ThreeDPrintingPage from './pages/courses/ThreeDPrintingPage';
import ErasmusProjectWritingPage from './pages/courses/ErasmusProjectWritingPage';
import RoboticsCodingPage from './pages/courses/RoboticsCodingPage';
import BoalMethodologyPage from './pages/courses/BoalMethodologyPage';
import ClilDblPage from './pages/courses/ClilDblPage';
import ClimateChangePage from './pages/courses/ClimateChangePage';
import CreativeDramaPage from './pages/courses/CreativeDramaPage';
import CulturalHeritagePage from './pages/courses/CulturalHeritagePage';
import CyberBullyingPage from './pages/courses/CyberBullyingPage';
import DigitalGamesStorytellingPage from './pages/courses/DigitalGamesStorytellingPage';
import EcoSchoolsPage from './pages/courses/EcoSchoolsPage';
import EntrepreneurshipEducationPage from './pages/courses/EntrepreneurshipEducationPage';
import FlippedClassroomPage from './pages/courses/FlippedClassroomPage';
import FutureClassroomLabPage from './pages/courses/FutureClassroomLabPage';
import GamificationPage from './pages/courses/GamificationPage';
import GenderEqualityPage from './pages/courses/GenderEqualityPage';
import IctToolsPage from './pages/courses/IctToolsPage';
import InclusiveEducationPage from './pages/courses/InclusiveEducationPage';
import MobileAppsPage from './pages/courses/MobileAppsPage';
import MontessoriReggioEmiliaPage from './pages/courses/MontessoriReggioEmiliaPage';
import PeerBullyingPage from './pages/courses/PeerBullyingPage';
import StemSteamPage from './pages/courses/StemSteamPage';
import StressManagementPage from './pages/courses/StressManagementPage';
import StorytellingEnglishPage from './pages/courses/StorytellingEnglishPage';

// const avatarUrl = "/sarissa-logo-avatar.png";
const avatarUrl = "https://ik.imagekit.io/46nvsdwq8/Sirinler/warsaw.svg?updatedAt=1761154173237";

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
          
          {/* proje çeşitleri Sayfaları */}
          <Route path="/ka122" element={<StorPage />} />
          <Route path="/ka210" element={<ZebraPage />} />
          <Route path="/ka220" element={<JaluziPage />} />
          <Route path="/ka153" element={<TulPage />} />
          <Route path="/other" element={<PlisePage />} /> {/* YENİ ROTA */}

          {/* Diğer Sayfalar (oluşturulunca eklenecek) */}
          <Route path="/hizmetler" element={<HizmetlerPage />} />
          <Route path="/gallery" element={<GaleriPage />} />
          <Route path="/referanslar" element={<ReferanslarPage />} />
          <Route path="/contact" element={<IletisimPage />} />
          <Route path="/course" element={<CoursePage />} />

{/* Individual Course Detail Pages */}
<Route path="/courses/3d-printing" element={<ThreeDPrintingPage />} />
<Route path="/courses/boal-methodology" element={<BoalMethodologyPage />} />
<Route path="/courses/clil-dbl" element={<ClilDblPage />} />
<Route path="/courses/climate-change" element={<ClimateChangePage />} />
<Route path="/courses/creative-drama" element={<CreativeDramaPage />} />
<Route path="/courses/cultural-heritage" element={<CulturalHeritagePage />} />
<Route path="/courses/cyber-bullying" element={<CyberBullyingPage />} />
<Route path="/courses/digital-games-storytelling" element={<DigitalGamesStorytellingPage />} />
<Route path="/courses/eco-schools" element={<EcoSchoolsPage />} />
<Route path="/courses/entrepreneurship-education" element={<EntrepreneurshipEducationPage />} />
<Route path="/courses/erasmus-project-writing" element={<ErasmusProjectWritingPage />} />
<Route path="/courses/flipped-classroom" element={<FlippedClassroomPage />} />
<Route path="/courses/future-classroom-lab" element={<FutureClassroomLabPage />} />
<Route path="/courses/gamification" element={<GamificationPage />} />
<Route path="/courses/gender-equality" element={<GenderEqualityPage />} />
<Route path="/courses/ict-tools" element={<IctToolsPage />} />
<Route path="/courses/inclusive-education" element={<InclusiveEducationPage />} />
<Route path="/courses/mobile-apps" element={<MobileAppsPage />} />
<Route path="/courses/montessori-reggio-emilia" element={<MontessoriReggioEmiliaPage />} />
<Route path="/courses/peer-bullying" element={<PeerBullyingPage />} />
<Route path="/courses/robotics-coding" element={<RoboticsCodingPage />} />
<Route path="/courses/stem-steam" element={<StemSteamPage />} />
<Route path="/courses/stress-management" element={<StressManagementPage />} />
<Route path="/courses/storytelling-english" element={<StorytellingEnglishPage />} />
        </Routes>
      </main>
      <Footer />
      
      <FloatingWhatsApp 
        phoneNumber="48123456789"
        accountName="Inclusive Innovative Warsaw"
        statusMessage="We answer within minutes!"
        chatMessage={"Hi! 🤝\nWelcome to Inclusive Innovative.How can we help you ?"}
        placeholder="Type your message..."
        avatar={avatarUrl}
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
