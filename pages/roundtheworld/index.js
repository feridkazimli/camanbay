import Head from "next/head";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => (
  <section
    className="hero"
    id="home"
  >
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Round World</h1>
          <div className="subtitle">Time Race Game</div>
          <p>
            Farklı kültürlerden ilham alan eşsiz puzzle macerasına hazır mısın?
            Dünyayı döndür, renkleri eşleştir ve karakterleri topla!
          </p>
          <div className="cta-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.Camanbay.RoundWorld"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📱</span> Şimdi İndir
            </a>
            <button
              onClick={() => scrollToSection("features")}
              className="btn-secondary"
            >
              Özellikleri Keşfet
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="game-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎮",
      title: "Yenilikçi Oynanış",
      description:
        "Geleneksel match-3 oyunlarını unut! Round World'de dünyayı döndürerek düşen nesneleri eşleştir. Öğrenmesi kolay, ustalaşması zor!",
    },
    {
      icon: "🌍",
      title: "4 Farklı Tema",
      description:
        "Japonya'nın huzurlu güzelliğinden Viking'lerin buzlu topraklarına kadar 4 farklı kültürel temayı keşfet.",
    },
    {
      icon: "👥",
      title: "Toplanabilir Karakterler",
      description:
        "Noburo, Sakuro, Mummy, Horus ve daha fazlası! Her temaya özel benzersiz karakterleri topla ve oyununu kişiselleştir.",
    },
    {
      icon: "📶",
      title: "Offline Oynama",
      description:
        "İnternet bağlantısı olmadan da oynayabilirsin! Her yerde, her zaman Round World maceran devam ediyor.",
    },
    {
      icon: "🎯",
      title: "Sezgisel Kontroller",
      description:
        "Basit dokunma ve kaydırma hareketleriyle herkes kolayca oynayabilir. Karmaşık kontroller yok!",
    },
    {
      icon: "🔄",
      title: "Düzenli Güncellemeler",
      description:
        "Sürekli yeni içerikler, özellikler ve iyileştirmelerle oyunun tadını çıkarmaya devam et!",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Neden Round World?</h2>
          <p>
            Geleneksel puzzle oyunlarından sıkıldın mı? Round World ile tamamen
            yeni bir deneyim yaşa!
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ThemesSection = () => {
  const themes = [
    {
      emoji: "🌸",
      title: "Japonya",
      description:
        "Kiraz çiçeklerinin güzelliği ve geleneksel mimarinin huzuruyla dolu mistik Japonya temasını yaşa.",
      gradient: "from-pink-400 to-pink-200",
    },
    {
      emoji: "🏜️",
      title: "Mısır",
      description:
        "Piramitlerin gizemleri ve antik kalıntıların sırlarını çöl güneşinin altında keşfet.",
      gradient: "from-yellow-400 to-orange-300",
    },
    {
      emoji: "🏔️",
      title: "Çin",
      description:
        "Majestik dağlar ve ikonik yapılarla Uzak Doğu'nun büyüleyici dünyasında yolculuğa çık.",
      gradient: "from-blue-400 to-blue-300",
    },
    {
      emoji: "⚔️",
      title: "Viking",
      description:
        "Buzlu rüzgarlar ve sert manzaralarla Norse savaşçılarının cesur dünyasını deneyimle.",
      gradient: "from-purple-400 to-indigo-400",
    },
  ];

  return (
    <section className="themes" id="themes">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">Dünyaları Keşfet</h2>
          <p className="text-white/80">
            Her tema kendine özgü atmosfer ve karakterlerle dolu!
          </p>
        </div>
        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div key={index} className="theme-card">
              <div
                className={`theme-image bg-gradient-to-br ${theme.gradient}`}
              ></div>
              <div className="theme-content">
                <h3>
                  {theme.emoji} {theme.title}
                </h3>
                <p>{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="cta-section" id="download">
    <div className="container">
      <h2>Maceraya Başlamaya Hazır Mısın?</h2>
      <p>Round World'ü hemen indir ve eşsiz puzzle deneyiminin tadını çıkar!</p>
      <div className="download-buttons">
        <a
          href="https://play.google.com/store/apps/details?id=com.Camanbay.RoundWorld"
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="download-icon">📱</div>
          <div>
            <div className="text-sm opacity-80">Google Play'den</div>
            <div className="font-semibold">Ücretsiz İndir</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Round World</h3>
          <p>
            Eşsiz puzzle macerasının adresi. Farklı kültürlerden ilham alan
            temalarla dolu bağımlılık yapan oyun deneyimi.
          </p>
        </div>
        <div className="footer-section">
          <h3>Oyun Özellikleri</h3>
          <p>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white"
            >
              Yenilikçi Oynanış
            </button>
          </p>
          <p>
            <button
              onClick={() => scrollToSection("themes")}
              className="text-white/80 hover:text-white"
            >
              4 Farklı Tema
            </button>
          </p>
          <p>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white"
            >
              Toplanabilir Karakterler
            </button>
          </p>
          <p>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white"
            >
              Offline Oynama
            </button>
          </p>
        </div>
        <div className="footer-section">
          <h3>Geliştirici</h3>
          <p>Camanbay Studio</p>
          <p>Mobil oyun geliştirme</p>
          <p>İnovatif puzzle deneyimleri</p>
        </div>
        <div className="footer-section">
          <h3>İletişim</h3>
          <p>Geri bildirimleriniz bizim için değerli!</p>
          <p>
            <a
              href="mailto:support@roundworld.app"
              className="text-white/80 hover:text-white"
            >
              support@roundworld.app
            </a>
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.Camanbay.RoundWorld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
            >
              Google Play Store
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Camanbay Studio. Tüm hakları saklıdır. |{" "}
          <button
            onClick={() => scrollToSection("privacy")}
            className="text-white/60 hover:text-white/80"
          >
            Gizlilik Politikası
          </button>{" "}
          |{" "}
          <button
            onClick={() => scrollToSection("terms")}
            className="text-white/60 hover:text-white/80"
          >
            Kullanım Şartları
          </button>
        </p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>
          Round World: Time Race Game - Bağımlılık Yapan Puzzle Macerası
        </title>
        <meta
          name="description"
          content="Round World ile eşsiz puzzle macerasına başla! Farklı kültürlerden ilham alan 4 tema, benzersiz karakterler ve strateji dolu oynanış. Ücretsiz indir!"
        />
        <meta
          name="keywords"
          content="round world, puzzle oyunu, mobile game, android oyun, puzzle macerası, brain teaser, renk eşleştirme, mobil puzzle"
        />
        <meta name="author" content="Camanbay" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Round World: Time Race Game - Bağımlılık Yapan Puzzle Macerası"
        />
        <meta
          property="og:description"
          content="Dünyayı döndür, renkleri eşleştir, karakterleri topla! Japonya, Mısır, Çin ve Viking temasıyla eşsiz puzzle deneyimi."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://roundworld.app" />
        <meta property="og:site_name" content="Round World Game" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Round World: Time Race Game" />
        <meta
          name="twitter:description"
          content="Dünyayı döndür, renkleri eşleştir, karakterleri topla! Eşsiz puzzle macerası."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://roundworld.app" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="tr" href="https://roundworld.app/tr" />
        <link rel="alternate" hrefLang="en" href="https://roundworld.app/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://roundworld.app"
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Round World: Time Race Game",
              description:
                "Resmi Round World oyun sayfası. Ücretsiz indir ve puzzle macerasına başla!",
              url: "https://roundworld.app",
              mainEntity: {
                "@type": "MobileApplication",
                name: "Round World: Time Race Game",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Ana Sayfa",
                    item: "https://roundworld.app",
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Round World: Time Race Game",
              description:
                "Resmi Round World oyun sayfası. Ücretsiz indir ve puzzle macerasına başla!",
              url: "https://roundworld.app",
              mainEntity: {
                "@type": "MobileApplication",
                name: "Round World: Time Race Game",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Ana Sayfa",
                    item: "https://roundworld.app",
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Round World: Time Race Game",
              description:
                "Round World ile eşsiz puzzle macerasına başla! Farklı kültürlerden ilham alan temalar, benzersiz karakterler ve strateji dolu oynanış deneyimi.",
              applicationCategory: "GameApplication",
              operatingSystem: "Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "1000",
              },
              publisher: {
                "@type": "Organization",
                name: "Camanbay",
              },
              downloadUrl:
                "https://play.google.com/store/apps/details?id=com.Camanbay.RoundWorld",
              screenshot: [
                "/screenshot1.jpg",
                "/screenshot2.jpg",
                "/screenshot3.jpg",
              ],
              genre: ["Puzzle", "Casual", "Strategy"],
              inLanguage: ["tr", "en"],
              featureList: [
                "4 Benzersiz Tema (Japonya, Mısır, Çin, Viking)",
                "Toplanabilir Karakterler",
                "Offline Oynanabilirlik",
                "Sezgisel Kontroller",
                "Düzenli İçerik Güncellemeleri",
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <FeaturesSection />
        <ThemesSection />
        <CTASection />
        <Footer />
      </div>

      <style jsx>{`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .hero-text h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: white;
            line-height: 1.1;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .hero-text .subtitle {
            font-size: 1.4rem;
            color: rgba(255,255,255,0.9);
            margin-bottom: 30px;
            font-weight: 300;
        }
        
        .hero-text p {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.8);
            margin-bottom: 40px;
            line-height: 1.8;
        }
        
        .cta-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .btn-primary {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 18px 35px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(238, 90, 36, 0.3);
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(238, 90, 36, 0.4);
        }
        
        .btn-secondary {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 18px 35px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        .btn-secondary:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }
        
        .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .phone-mockup {
            width: 300px;
            height: 600px;
            background: linear-gradient(145deg, #2c3e50, #34495e);
            border-radius: 30px;
            position: relative;
            box-shadow: 0 25px 60px rgba(0,0,0,0.3);
            transform: rotate(-5deg);
            animation: float 6s ease-in-out infinite;
        }
        
        .phone-screen {
            width: 260px;
            height: 520px;
            background: linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef);
            border-radius: 25px;
            position: absolute;
            top: 40px;
            left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .game-elements {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .floating-circle {
            position: absolute;
            border-radius: 50%;
            animation: spin 8s linear infinite;
        }
        
        .circle-1 {
            width: 80px;
            height: 80px;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            top: 20%;
            left: 30%;
            animation-delay: 0s;
        }
        
        .circle-2 {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            top: 60%;
            right: 25%;
            animation-delay: -2s;
        }
        
        .circle-3 {
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #ffeaa7, #fdcb6e);
            bottom: 30%;
            left: 20%;
            animation-delay: -4s;
        }
        
        @keyframes float {
            0%, 100% { transform: rotate(-5deg) translateY(0px); }
            50% { transform: rotate(-5deg) translateY(-20px); }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Features Section */
        .features {
            padding: 120px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 80px;
        }
        
        .section-title h2 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .section-title p {
            font-size: 1.2rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        
        .feature-card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            font-size: 24px;
            color: white;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: #333;
        }
        
        .feature-card p {
            color: #666;
            line-height: 1.7;
        }
        
        /* Themes Section */
        .themes {
            padding: 120px 0;
            background: #1a1a2e;
            color: white;
        }
        
        .themes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }
        
        .theme-card {
            background: linear-gradient(145deg, #16213e, #0f172a);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .theme-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .theme-image {
            height: 200px;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            position: relative;
            overflow: hidden;
        }
        
        .theme-card:nth-child(1) .theme-image {
            background: linear-gradient(45deg, #ff9a9e, #fecfef);
        }
        
        .theme-card:nth-child(2) .theme-image {
            background: linear-gradient(45deg, #ffeaa7, #fdcb6e);
        }
        
        .theme-card:nth-child(3) .theme-image {
            background: linear-gradient(45deg, #74b9ff, #0984e3);
        }
        
        .theme-card:nth-child(4) .theme-image {
            background: linear-gradient(45deg, #a29bfe, #6c5ce7);
        }
        
        .theme-content {
            padding: 25px;
        }
        
        .theme-content h3 {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .theme-content p {
            color: rgba(255,255,255,0.8);
            font-size: 0.95rem;
            line-height: 1.6;
        }
        
        /* CTA Section */
        .cta-section {
            padding: 100px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            text-align: center;
            color: white;
        }
        
        .cta-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        
        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        
        .download-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .download-btn {
            display: inline-flex;
            align-items: center;
            gap: 15px;
            background: rgba(0,0,0,0.2);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 15px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .download-btn:hover {
            background: rgba(0,0,0,0.3);
            transform: translateY(-2px);
        }
        
        .download-icon {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-weight: bold;
        }
        
        /* Footer */
        .footer {
            background: #1a1a2e;
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-section h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .footer-section p,
        .footer-section a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            line-height: 1.8;
        }
        
        .footer-section a:hover {
            color: white;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 30px;
            text-align: center;
            color: rgba(255,255,255,0.6);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .hero-text h1 {
                font-size: 2.5rem;
            }
            
            .phone-mockup {
                width: 250px;
                height: 500px;
            }
            
            .phone-screen {
                width: 210px;
                height: 420px;
            }
            
            .cta-buttons {
                justify-content: center;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .themes-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
        }
        
        /* Loading Animation */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loader {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        /* Smooth scroll behavior */
        html {
            scroll-behavior: smooth;
        }`}</style>
    </>
  );
}
