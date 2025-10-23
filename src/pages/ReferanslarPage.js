import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

// Basit bir Google ikonu bileşeni
const GoogleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={props.className}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.38,36.258,44,30.651,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const testimonials = [
    { name: 'Erkin Hendekçi', quote: 'Murat Bey ve eşiyle tanışmak bizim için harika bir fırsattı. Titizlikleri ve güler yüzleriyle gerçekten örnek bir esnaf çifti. Perde seçiminden montajına kadar her aşamada sabırla ilgilendiler ve her ayrıntıda memnuniyetimizi göz önünde bulundurdular. Gözünüz kapalı onlara güvenebilirsiniz!' },
    { name: 'Merve Çınar', quote: 'Oturma odamızın perdelerini yaptırdık ve çok memnun kaldık. Tam istediğimiz gibi, zamanında teslim edildi. Murat Bey ve eşine kaliteli hizmetlerinden dolayı teşekkür ederiz.' },
    { name: 'Devran ÇETİN', quote: 'Muhteşem. Klasik tül perdelerin ötesine geçmek istedim ve ahşap stor perde yaptırdım. Her şeyle ilgilendiler ve her ayrıntıya dikkat ettiler. Tam istediğimiz gibiydi. Teşekkürler!' },
    { name: 'Kübra Korkmaz', quote: 'Murat Bey ve eşi, helal ticareti benimsemiş, dürüst, nazik, sabırlı ve dikkatli bir aile işletmesi. Hiçbir sorun yaşamadan harika bir iş çıkardılar. Yeni mekanımız hayırlı uğurlu ve bereketli olsun.' },
    { name: 'Sercan Sagman', quote: 'Güler yüzlü tutumları ve kaliteli işleri için Sarissa perdeye çok teşekkür ederiz. Geniş ürün yelpazeleri sayesinde istediğimiz tarzda, uygun fiyata perdelerimizi seçtik. Çok kısa sürede ölçümler alındı ve siparişlerimiz geldi.' },
    { name: 'Aylin Nur Sandıkçı', quote: 'Koltukların fotoğrafını gönderip birkaç kırlentini götürdüğüm odaya uygun o kadar muazzam işçilikle ürünleri 2 günde teslim ettiler. Salonum için bordürle çalıştıkları fonu herkes çok beğendi. Pişman olmazsınız.' },
    { name: 'Kayak', quote: 'Kaliteli hizmet anlayışı ile müşteri memnuniyetini ön planda tutan, ihtiyaçları dikkate alıp uygun çözümler sunan dürüst bir firma. İçten ve samimi iletişimi ile kesinlikle tercih edilebilir. İyi ki tercih etmişiz.' },
    { name: 'Kubilay Özçalık', quote: 'Evinizin tüm perdelerini ve güneşliklerini yaptılar. Önce keşif için gelip ölçü aldılar. Kısa sürede dikip getirdiler, işinin ehli insanlar, çok memnun kaldık, tavsiye ederim.' },
    { name: 'Hasan DEMİR', quote: 'Yeni aldığım evim için bütün perde işlerimi yapan Model Perdeye teşekkür ediyorum. Gerçekten kaliteli ve hızlı hizmet, ilgi alaka ve kaliteyi ön planda tutan bir işletme.' },
    { name: 'Bej Doku', quote: 'Aldığım hizmetten çok memnun kaldım, belirttikleri saatte gelmeleri, işlerini bu denli titiz ve zamanında yapmaları oldukça kaliteli bir hizmet, tekrar teşekkür ederim.' },
    { name: 'Sinan Turan', quote: 'Perdeleri çok beğendik evimize çok güzel bir hava kattı. Ürün ve hizmetlerinden son derecede memnun kaldık. İşinin ehli çalışanları var. Yakınlarıma kesinlikle tavsiye edeceğim.' },
    { name: 'Fatih Mavibas', quote: 'Hizmet, kalite ve güleryüz isteyen herkese tavsiye ederim.' },
];

const ReferanslarPage = () => {
    const heroImageUrl = "https://plus.unsplash.com/premium_photo-1682097379771-082f70085106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8MHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&auto=format&fit=crop";
    const phoneNumber = '905551234567'; // BURAYI KENDİ NUMARANIZLA GÜNCELLEYİN
    const message = encodeURIComponent("Merhaba, referanslarınızı inceledim ve hizmetleriniz hakkında bilgi almak istiyorum.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const googleReviewsUrl = "https://g.co/kgs/Rwzaoga";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Mutlu Müşterilerimiz</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl">Başarımızın en büyük kanıtı, müşterilerimizin memnuniyeti.</p>
                </div>
            </div>

            {/* Referanslar Bölümü */}
            <div className="py-20 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    
                    {/* YENİ EKLENEN GOOGLE BAĞLANTI BÖLÜMÜ */}
                    <div className="mb-16 text-center">
                        <a
                            href={googleReviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-sm hover:shadow-lg hover:border-gray-400 hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out"
                        >
                            <GoogleIcon className="h-6 w-6" />
                            <span>Referanslarımızı Google'da İnceleyin</span>
                        </a>
                    </div>
                    {/* GOOGLE BAĞLANTI BÖLÜMÜ SONU */}

                    {/* Referanslar Gridi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-current" />)}
                                </div>
                                <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-cyan-700">
                {/* ... (Bu bölüm değiştirilmedi) ... */}
                <div className="container mx-auto py-16 px-6 text-center">
                    <h2 className="text-3xl font-bold text-white">Sıradaki Mutlu Müşterimiz Siz Olun</h2>
                    <p className="mt-4 text-lg text-cyan-100 max-w-2xl mx-auto">
                        Kaliteli ürünlerimiz ve profesyonel hizmet anlayışımızla tanışın, evinizi veya iş yerinizi birlikte güzelleştirelim.
                    </p>
                    <div className="mt-8">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-cyan-600 font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block shadow-lg">
                            Hemen Teklif Al
                            <ArrowRight className="inline-block ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferanslarPage;