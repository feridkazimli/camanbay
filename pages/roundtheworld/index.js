import Head from "next/head";

import '@styles/style.css'

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
    </>
  );
}
