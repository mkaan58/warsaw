// =================================================================================
// HizmetlerPage.js (YENİ SAYFA)
// Dosya Yolu: src/pages/HizmetlerPage.js
// =================================================================================
import React from 'react';
import { Ruler, Palette, Wrench, Settings, Hammer, ArrowRight } from 'lucide-react';

const HizmetlerPage = () => {
    // WhatsApp için önceden doldurulmuş mesaj
    const phoneNumber = '905551234567';
    const message = encodeURIComponent("Merhaba, hizmetleriniz hakkında detaylı bilgi almak istiyorum.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Sayfada kullanılacak görseller
    const heroImageUrl = "https://media.istockphoto.com/id/1347514512/photo/window-measuring.webp?a=1&b=1&s=612x612&w=0&k=20&c=1TKrJ441FifSYgZe6nHr1rbecJmxAmSvTzPz98PBaxo=";
    const contentImageUrl = "https://media.istockphoto.com/id/1259171309/photo/young-professional-worker-in-uniform-using-tape-measure-measuring-window-for-installing.webp?a=1&b=1&s=612x612&w=0&k=20&c=9dzUW6a24JgxZjEyYehL0SjelBvG4Az5zZQ9QOmxTgI=";

    // Hizmetleri bir dizi olarak tanımlayarak kodu daha temiz hale getiriyoruz
    const services = [
        {
            icon: <Ruler size={32} className="text-cyan-600 mb-4" />,
            title: "Ücretsiz Keşif & Ölçü Alma",
            description: "Uzman ekibimiz, mekanınıza gelerek pencerelerinizin ölçüsünü hatasız bir şekilde alır ve size en uygun perde çözümleri için yerinde danışmanlık sağlar."
        },
        {
            icon: <Palette size={32} className="text-cyan-600 mb-4" />,
            title: "Renk & Model Danışmanlığı",
            description: "Yüzlerce kumaş, renk ve model arasından kaybolmayın. Dekorasyon tarzınıza, mobilyalarınıza ve duvar renginize en uygun perdeyi seçmenize yardımcı oluyoruz."
        },
        {
            icon: <Wrench size={32} className="text-cyan-600 mb-4" />,
            title: "Profesyonel Montaj",
            description: "Satın aldığınız perdelerin montajını, mekanınıza zarar vermeden, hızlı, temiz ve güvenli bir şekilde gerçekleştiriyoruz. Size sadece keyfini sürmek kalır."
        },
        {
            icon: <Settings size={32} className="text-cyan-600 mb-4" />,
            title: "Perde Tamiri ve Bakım",
            description: "Mevcut perdelerinizin mekanizmasında bir sorun mu var? Yıpranma veya yırtılma mı oldu? Perdelerinizi ilk günkü haline getirmek için tamir ve bakım hizmeti sunuyoruz."
        },
        {
            icon: <Hammer size={32} className="text-cyan-600 mb-4" />,
            title: "Korniş Montaj ve Tamiri",
            description: "Yeni bir eve mi taşındınız veya kornişleriniz mi eskidi? Her türlü tavan yapısına uygun korniş montajı ve mevcut kornişlerinizin tamirini yapıyoruz."
        },
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Hizmetlerimiz</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl">A'dan Z'ye Profesyonel Perde Çözümleri</p>
                </div>
            </div>

            {/* Giriş Metni */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hayalinizdeki Pencerelere Giden Yol</h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Sarissa Perde olarak amacımız sadece perde satmak değil, fikir aşamasından montaj sonrası desteğe kadar tüm süreçte yanınızda olmaktır. Her müşterimizin ihtiyacına özel, kusursuz bir hizmet deneyimi sunmak için çalışıyoruz.
                    </p>
                </div>
            </div>

            {/* Hizmetler Grid */}
            <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                                {service.icon}
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Görsel ve Metin Alanı */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-800 leading-tight">Sadece Satış Değil, Tam Destek</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Bizim için her proje, bir evin veya ofisin karakterini şekillendiren önemli bir sanatsal dokunuştur. Bu yüzden ölçü alımından montaja kadar her adımı titizlikle yürütüyor, projeniz bittikten sonra bile her türlü sorunuz ve ihtiyacınız için bir telefon uzağınızda oluyoruz.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold">Doğru Planlama:</span> Mekanınıza en uygun çözümü birlikte belirliyoruz.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold">Zamanında Teslimat:</span> Belirlenen tarihte montajınızı tamamlıyoruz.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold">Satış Sonrası Garanti:</span> Hizmetlerimizin ve ürünlerimizin arkasındayız.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img src={contentImageUrl} alt="Perde kumaşı ve renk kartelaları" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-cyan-700">
                <div className="container mx-auto py-16 px-6 text-center">
                    <h2 className="text-3xl font-bold text-white">Hizmetlerimizle İlgili Sorularınız mı Var?</h2>
                    <p className="mt-4 text-lg text-cyan-100 max-w-2xl mx-auto">
                        Aklınıza takılan her konuda size yardımcı olmaktan mutluluk duyarız. Uzman ekibimizle görüşmek için bizimle iletişime geçin.
                    </p>
                    <div className="mt-8">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-cyan-600 font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg">
                            WhatsApp'tan Sor
                            <ArrowRight className="inline-block ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Bu bileşeni sonradan ekledim, lucide-react'tan import etmeyi unutmuşum gibi davran.
const CheckCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);


export default HizmetlerPage;
