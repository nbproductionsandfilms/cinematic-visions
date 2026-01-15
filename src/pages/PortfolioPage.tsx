import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, FileText } from "lucide-react";

const categories = ["All", "Photography", "Videography", "Kids & Baby", "Aesthetic", "Couples", "Model", "Traditional", "Logos", "YouTube Thumbnails", "Posters", "Reels", "Brochures"];

const portfolioItems = [
  // Kids & Baby Shoots
  { id: 53, title: "Kids Shoot 1", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (1).jpeg", isPhotography: true },
  { id: 54, title: "Kids Shoot 2", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (2).jpeg", isPhotography: true },
  { id: 55, title: "Kids Shoot 3", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.15.jpeg", isPhotography: true },
  { id: 56, title: "Kids Shoot 4", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19 (1).jpeg", isPhotography: true },
  { id: 57, title: "Kids Shoot 5", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19 (2).jpeg", isPhotography: true },
  { id: 58, title: "Kids Shoot 6", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.19.jpeg", isPhotography: true },
  { id: 59, title: "Kids Shoot 7", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (1).jpeg", isPhotography: true },
  { id: 60, title: "Kids Shoot 8", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (2).jpeg", isPhotography: true },
  { id: 61, title: "Kids Shoot 9", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20 (3).jpeg", isPhotography: true },
  { id: 62, title: "Kids Shoot 10", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.20.jpeg", isPhotography: true },
  { id: 63, title: "Kids Shoot 11", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (1).jpeg", isPhotography: true },
  { id: 64, title: "Kids Shoot 12", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (2).jpeg", isPhotography: true },
  { id: 65, title: "Kids Shoot 13", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21 (3).jpeg", isPhotography: true },
  { id: 66, title: "Kids Shoot 14", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.17.21.jpeg", isPhotography: true },
  { id: 67, title: "Kids Shoot 15", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (2).jpeg", isPhotography: true },
  { id: 68, title: "Kids Shoot 16", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (3).jpeg", isPhotography: true },
  { id: 69, title: "Kids Shoot 17", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (1).jpeg", isPhotography: true },
  { id: 70, title: "Kids Shoot 18", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (2).jpeg", isPhotography: true },
  { id: 71, title: "Kids Shoot 19", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19 (3).jpeg", isPhotography: true },
  { id: 72, title: "Kids Shoot 20", category: "Kids & Baby", image: "/new/Kids_and_baby_shoots/WhatsApp Image 2026-01-13 at 11.19.19.jpeg", isPhotography: true },
  // Aesthetic Shoots
  { id: 73, title: "Aesthetic Shoot 1", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (1).jpeg", isPhotography: true },
  { id: 74, title: "Aesthetic Shoot 2", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (2).jpeg", isPhotography: true },
  { id: 75, title: "Aesthetic Shoot 3", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (3).jpeg", isPhotography: true },
  { id: 76, title: "Aesthetic Shoot 4", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (1).jpeg", isPhotography: true },
  { id: 77, title: "Aesthetic Shoot 5", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.17.jpeg", isPhotography: true },
  { id: 78, title: "Aesthetic Shoot 6", category: "Aesthetic", image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.19.32.jpeg", isPhotography: true },
  // Couple Shoots
  { id: 79, title: "Couple Shoot 1", category: "Couples", image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18 (1).jpeg", isPhotography: true },
  { id: 80, title: "Couple Shoot 2", category: "Couples", image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18.jpeg", isPhotography: true },
  // Model Shoots
  { id: 81, title: "Model Shoot 1", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14 (1).jpeg", isPhotography: true },
  { id: 82, title: "Model Shoot 2", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14.jpeg", isPhotography: true },
  { id: 83, title: "Model Shoot 3", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (2).jpeg", isPhotography: true },
  { id: 84, title: "Model Shoot 4", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.17 (3).jpeg", isPhotography: true },
  { id: 85, title: "Model Shoot 5", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (1).jpeg", isPhotography: true },
  { id: 86, title: "Model Shoot 6", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (2).jpeg", isPhotography: true },
  { id: 87, title: "Model Shoot 7", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18.jpeg", isPhotography: true },
  { id: 88, title: "Model Shoot 8", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (1).jpeg", isPhotography: true },
  { id: 89, title: "Model Shoot 9", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (2).jpeg", isPhotography: true },
  { id: 90, title: "Model Shoot 10", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (3).jpeg", isPhotography: true },
  { id: 91, title: "Model Shoot 11", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17.jpeg", isPhotography: true },
  { id: 92, title: "Model Shoot 12", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.37.jpeg", isPhotography: true },
  { id: 93, title: "Model Shoot 13", category: "Model", image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.38.jpeg", isPhotography: true },
  // Traditional Shoots
  { id: 94, title: "Traditional Shoot 1", category: "Traditional", image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.17.15 (3).jpeg", isPhotography: true },
  { id: 95, title: "Traditional Shoot 2", category: "Traditional", image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.17.16.jpeg", isPhotography: true },
  { id: 96, title: "Traditional Shoot 3", category: "Traditional", image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03 (1).jpeg", isPhotography: true },
  { id: 97, title: "Traditional Shoot 4", category: "Traditional", image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03.jpeg", isPhotography: true },
  { id: 98, title: "Traditional Shoot 5", category: "Traditional", image: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.04.jpeg", isPhotography: true },

  // Previous items...
  // Logo Designs (7)
  { id: 1, title: "Chairman Saheb", category: "Logos", image: "/logos/Chairman_saheb_logo_white.png", isLogo: true },
  { id: 2, title: "Infinite Waves", category: "Logos", image: "/logos/Infinite-Waves-logo.png", isLogo: true },
  { id: 3, title: "PN Computers", category: "Logos", image: "/logos/PN Computers without bg.png", isLogo: true },
  { id: 4, title: "Pranav Multi-purpose Society", category: "Logos", image: "/logos/Pranav Multi-purpose Society LOGO-transperent.png", isLogo: true },
  { id: 5, title: "Shinde Industrial Suppliers", category: "Logos", image: "/logos/Shinde Industrial Suppliers.png", isLogo: true },
  { id: 6, title: "Patidar Properties", category: "Logos", image: "/logos/patidar-properties-logo.png", isLogo: true },
  { id: 7, title: "The Bhartiya Trekkers", category: "Logos", image: "/logos/the-bhartiya-trekkers.png", isLogo: true },
  // YouTube Thumbnails (9) - 16:9
  { id: 8, title: "YouTube Thumbnail 1", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0037.jpg", isThumbnail: true },
  { id: 9, title: "YouTube Thumbnail 2", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0038.jpg", isThumbnail: true },
  { id: 10, title: "YouTube Thumbnail 3", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0039.jpg", isThumbnail: true },
  { id: 11, title: "YouTube Thumbnail 4", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0040.jpg", isThumbnail: true },
  { id: 12, title: "YouTube Thumbnail 5", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0041.jpg", isThumbnail: true },
  { id: 13, title: "YouTube Thumbnail 6", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0042.jpg", isThumbnail: true },
  { id: 14, title: "YouTube Thumbnail 7", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0043.jpg", isThumbnail: true },
  { id: 15, title: "YouTube Thumbnail 8", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0044.jpg", isThumbnail: true },
  { id: 16, title: "YouTube Thumbnail 9", category: "YouTube Thumbnails", image: "/youtube-thumbnails/IMG-20260112-WA0045.jpg", isThumbnail: true },
  // Posters & Flyers (19) - 3:4
  { id: 17, title: "Poster Design 1", category: "Posters", image: "/posters-flyers/IMG-20251219-WA0008.jpg", isPoster: true },
  { id: 18, title: "Poster Design 2", category: "Posters", image: "/posters-flyers/IMG-20260108-WA0013.jpg", isPoster: true },
  { id: 19, title: "Poster Design 3", category: "Posters", image: "/posters-flyers/IMG-20260108-WA0014.jpg", isPoster: true },
  { id: 20, title: "Poster Design 4", category: "Posters", image: "/posters-flyers/IMG-20260108-WA0015.jpg", isPoster: true },
  { id: 21, title: "Poster Design 5", category: "Posters", image: "/posters-flyers/IMG-20260108-WA0016.jpg", isPoster: true },
  { id: 22, title: "Poster Design 6", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0003.jpg", isPoster: true },
  { id: 23, title: "Poster Design 7", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0004.jpg", isPoster: true },
  { id: 24, title: "Poster Design 8", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0011.jpg", isPoster: true },
  { id: 25, title: "Poster Design 9", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0012.jpg", isPoster: true },
  { id: 26, title: "Poster Design 10", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0013.jpg", isPoster: true },
  { id: 27, title: "Poster Design 11", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0015.jpg", isPoster: true },
  { id: 28, title: "Poster Design 12", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0018.jpg", isPoster: true },
  { id: 29, title: "Poster Design 13", category: "Posters", image: "/posters-flyers/IMG-20260109-WA0019.jpg", isPoster: true },
  { id: 30, title: "Poster Design 14", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0006.jpg", isPoster: true },
  { id: 31, title: "Poster Design 15", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0007.jpg", isPoster: true },
  { id: 32, title: "Poster Design 16", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0008.jpg", isPoster: true },
  { id: 33, title: "Poster Design 17", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0010.jpg", isPoster: true },
  { id: 34, title: "Poster Design 18", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0014.jpg", isPoster: true },
  { id: 35, title: "Poster Design 19", category: "Posters", image: "/posters-flyers/IMG-20260110-WA0015.jpg", isPoster: true },
  // Reel Thumbnails (10) - 9:16
  { id: 36, title: "Reel Thumbnail 1", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0046.jpg", isReel: true },
  { id: 37, title: "Reel Thumbnail 2", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0047.jpg", isReel: true },
  { id: 38, title: "Reel Thumbnail 3", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0048.jpg", isReel: true },
  { id: 39, title: "Reel Thumbnail 4", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0049.jpg", isReel: true },
  { id: 40, title: "Reel Thumbnail 5", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0050.jpg", isReel: true },
  { id: 41, title: "Reel Thumbnail 6", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0051.jpg", isReel: true },
  { id: 42, title: "Reel Thumbnail 7", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0052.jpg", isReel: true },
  { id: 43, title: "Reel Thumbnail 8", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0053.jpg", isReel: true },
  { id: 44, title: "Reel Thumbnail 9", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0054.jpg", isReel: true },
  { id: 45, title: "Reel Thumbnail 10", category: "Reels", image: "/reel-thumbnails/IMG-20260112-WA0055.jpg", isReel: true },
  // Brochures (4) - PDFs
  { id: 46, title: "Do Dham Package", category: "Brochures", pdfUrl: "/broshures/Do dham Broshure alpine Trekkers.pdf", isBrochure: true },
  { id: 47, title: "Gokarna Package", category: "Brochures", pdfUrl: "/broshures/Gokarna Broshure.pdf", isBrochure: true },
  { id: 48, title: "Manali Package", category: "Brochures", pdfUrl: "/broshures/Manali Broshure.pdf", isBrochure: true },
  { id: 49, title: "Rajasthan Package", category: "Brochures", pdfUrl: "/broshures/Rajasthan Broshure alpine Trekkers.pdf", isBrochure: true },
  // Videography (5)
  { id: 1001, title: "Cinematic Video 1", category: "Videography", image: "/videos/WhatsApp Video 2026-01-13 at 11.19.21.mp4", isVideo: true },
  { id: 1002, title: "Cinematic Video 2", category: "Videography", image: "/videos/WhatsApp Video 2026-01-13 at 11.19.25.mp4", isVideo: true },
  { id: 1003, title: "Cinematic Video 3", category: "Videography", image: "/videos/WhatsApp Video 2026-01-13 at 11.19.32.mp4", isVideo: true },
  { id: 1004, title: "Cinematic Video 4", category: "Videography", image: "/videos/WhatsApp Video 2026-01-15 at 11.39.39.mp4", isVideo: true },
  { id: 1005, title: "Cinematic Video 5", category: "Videography", image: "/videos/WhatsApp Video 2026-01-15 at 11.39.40.mp4", isVideo: true },
  // No placeholders
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <GalaxyBackground />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
                Our Work
              </span>
              <h1 className="heading-xl mb-6">
                <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                A showcase of our finest work across photography, videography, and design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-full border ${activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section pt-8">
          <div className="container-custom">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {item.isBrochure ? (
                    <button
                      onClick={() => setSelectedBrochure(item.pdfUrl || null)}
                      className="group block w-full relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-charcoal-light"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <FileText className="w-20 h-20 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                        <h3 className="text-lg font-heading text-foreground text-center mb-2">{item.title}</h3>
                        <span className="text-sm text-primary">Travel Brochure PDF</span>
                      </div>
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedItem(item.id)}
                      className={`group block w-full relative ${item.isThumbnail ? 'aspect-video' :
                        item.isPoster || item.isPhotography ? 'aspect-[3/4]' :
                          item.isReel ? 'aspect-[9/16]' :
                            item.isVideo ? 'aspect-[9/16]' :
                              'aspect-[4/3]'
                        } rounded-lg overflow-hidden text-left`}
                    >
                      {item.isLogo ? (
                        <div className="absolute inset-0 bg-card/50 backdrop-blur-sm flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                      ) : item.isVideo ? (
                        <div className="absolute inset-0 bg-black">
                          <video
                            src={item.image}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            muted
                            loop
                            autoPlay
                            playsInline
                          />
                        </div>
                      ) : item.isThumbnail || item.isPoster || item.isReel || item.isPhotography ? (
                        <div className="absolute inset-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-charcoal transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-xl font-heading text-foreground mb-2">
                            {item.title}
                          </h3>
                          <span className="text-primary text-sm tracking-wide">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                        <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                        <span className="text-xs text-muted-foreground">{item.category}</span>
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`w-full max-w-4xl rounded-lg overflow-hidden ${portfolioItems.find(i => i.id === selectedItem)?.isReel || portfolioItems.find(i => i.id === selectedItem)?.isVideo
                ? 'aspect-[9/16] max-w-sm'
                : portfolioItems.find(i => i.id === selectedItem)?.isThumbnail
                  ? 'aspect-video'
                  : 'aspect-[3/4] md:aspect-[4/3] lg:aspect-video'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {portfolioItems.find((i) => i.id === selectedItem) && (
                <>
                  {portfolioItems.find((i) => i.id === selectedItem)?.isLogo ? (
                    <div className="w-full h-full bg-card/80 backdrop-blur-md flex items-center justify-center p-16">
                      <img
                        src={portfolioItems.find((i) => i.id === selectedItem)?.image}
                        alt={portfolioItems.find((i) => i.id === selectedItem)?.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : portfolioItems.find((i) => i.id === selectedItem)?.isVideo ? (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <video
                        src={portfolioItems.find((i) => i.id === selectedItem)?.image}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <img
                        src={portfolioItems.find((i) => i.id === selectedItem)?.image}
                        alt={portfolioItems.find((i) => i.id === selectedItem)?.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Brochure PDF Modal */}
        {selectedBrochure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBrochure(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[90vh] bg-card/90 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedBrochure(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
              <iframe
                src={selectedBrochure}
                className="w-full h-full"
                title="Brochure PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}

        <Footer />
      </main >
    </>
  );
};

export default PortfolioPage;
