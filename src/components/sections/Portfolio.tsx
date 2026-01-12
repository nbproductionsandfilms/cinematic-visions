import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, X } from "lucide-react";

const categories = ["All", "Photography", "Videography", "Logos", "YouTube Thumbnails", "Posters", "Reels", "Brochures"];

const portfolioItems = [
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
  { id: 26, title: "Poster Design 10", category: "Posters", image: "/posters-flyers/IMG-2026010-WA0013.jpg", isPoster: true },
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
  // Placeholders
  { id: 50, title: "Wedding Story", category: "Photography", image: "linear-gradient(135deg, hsl(43, 74%, 30%) 0%, hsl(0, 0%, 10%) 100%)" },
  { id: 51, title: "Brand Film", category: "Videography", image: "linear-gradient(135deg, hsl(200, 40%, 20%) 0%, hsl(0, 0%, 8%) 100%)" },
  { id: 52, title: "Product Shoot", category: "Photography", image: "linear-gradient(135deg, hsl(160, 40%, 20%) 0%, hsl(0, 0%, 8%) 100%)" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section bg-card" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Our Work
          </span>
          <h2 className="heading-lg mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              {item.isBrochure ? (
                <button
                  onClick={() => setSelectedBrochure(item.pdfUrl)}
                  className="group block relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-charcoal-light w-full"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <FileText className="w-20 h-20 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="text-lg font-heading text-foreground text-center mb-2">{item.title}</h3>
                    <span className="text-sm text-primary">Travel Brochure PDF</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              ) : (
                <Link
                  to={`/portfolio/${item.id}`}
                  className={`group block relative ${item.isThumbnail ? 'aspect-video' :
                    item.isPoster ? 'aspect-[3/4]' :
                      item.isReel ? 'aspect-[9/16]' :
                        'aspect-[4/3]'
                    } rounded-lg overflow-hidden`}
                >
                  {item.isLogo ? (
                    <div className="absolute inset-0 bg-charcoal-light flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : item.isThumbnail || item.isPoster || item.isReel ? (
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{ background: item.image }}
                    />
                  )}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-heading text-foreground mb-2">
                        {item.title}
                      </h3>
                      <span className="text-primary text-sm tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>

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
            className="relative w-full max-w-6xl h-[90vh] bg-charcoal-light rounded-lg overflow-hidden shadow-2xl"
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
    </section>
  );
};

export default Portfolio;
