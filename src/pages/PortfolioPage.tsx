import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useCallback } from "react";
import { X, FileText, Grid3x3, LayoutGrid, Calendar, Hash, ArrowLeft, ArrowRight, ChevronUp } from "lucide-react";
import { portfolioItems, categories, PortfolioItem } from "@/data/portfolioData";
import { InlineCarousel } from "@/components/portfolio/InlineCarousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";
type LayoutMode = "masonry" | "grid";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("masonry");

  // SEO
  useEffect(() => {
    document.title = "Portfolio | N B Productions & Films";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Browse our complete portfolio of cinematic photography, videography, brand identity, editorial designs, brochures, and product showcases by N B Productions & Films.");
  }, []);

  // Reset sub index when changing lightbox item
  useEffect(() => {
    setCurrentSubIndex(0);
  }, [selectedItem]);

  // Scroll-to-top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let items = portfolioItems;
    
    // Filter
    if (activeCategory !== "All Works" && activeCategory !== "All") {
      items = portfolioItems.filter((item) => item.categories.includes(activeCategory));
    }

    // Sort
    const sorted = [...items].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.date.localeCompare(a.date);
        case "oldest":
          return a.date.localeCompare(b.date);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [activeCategory, sortBy]);

  // Current item index in lightbox slideshow
  const currentLightboxIndex = useMemo(() => {
    if (selectedItem === null) return -1;
    return filteredItems.findIndex((item) => item.id === selectedItem);
  }, [selectedItem, filteredItems]);

  const selectedItemData = selectedItem !== null && currentLightboxIndex !== -1
    ? filteredItems[currentLightboxIndex]
    : null;

  // Slideshow Navigation Handlers
  const handlePrev = () => {
    if (currentLightboxIndex > 0) {
      setSelectedItem(filteredItems[currentLightboxIndex - 1].id);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1].id);
    }
  };

  const handleNext = () => {
    if (currentLightboxIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentLightboxIndex + 1].id);
    } else {
      setSelectedItem(filteredItems[0].id);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItem === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentLightboxIndex, filteredItems]);

  // Dynamic counts for badges
  const getCategoryCount = (cat: string) => {
    if (cat === "All Works" || cat === "All") return portfolioItems.length;
    return portfolioItems.filter((item) => item.categories.includes(cat)).length;
  };

  return (
    <>
      <GalaxyBackground />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-8">
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
                Creative <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Explore a handpicked showcase of our photography, cinematic videography, and graphic designs.
              </p>
            </motion.div>

            {/* Stats Panel */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto animate-fade-in">
              {[
                { label: "Total Works", value: portfolioItems.length },
                { label: "Cinematic Photography", value: portfolioItems.filter((i) => i.categories.includes("Cinematic Photography")).length },
                { label: "Motion & Videography", value: portfolioItems.filter((i) => i.categories.includes("Motion Picture & Videography")).length },
                { label: "Design & Brand", value: portfolioItems.filter((i) => i.categories.includes("Brand Identity & Insignia") || i.categories.includes("Editorial Posters & Visuals") || i.categories.includes("Digital Cover Art")).length },
                { label: "Publications & Decks", value: portfolioItems.filter((i) => i.categories.includes("Print Media & Brochures") || i.categories.includes("Presentations & Pitch Decks")).length },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                  className="glass rounded-2xl p-5 hover:glass-gold transition-all duration-500 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-heading">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters & Control Bar */}
        <section className="py-6 bg-black/40 border-y border-white/5 relative z-10">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              
              {/* Category Filter Bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2.5 max-w-full overflow-x-auto py-1 scrollbar-none"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`group relative px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 rounded-full border whitespace-nowrap ${
                      activeCategory === category
                        ? "border-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {category}
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-full transition-colors font-medium ${
                          activeCategory === category
                            ? "bg-black/20 text-primary-foreground"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                        }`}
                      >
                        {getCategoryCount(category)}
                      </span>
                    </span>
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeCategoryMain"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </motion.div>

              {/* Sort & Layout Toggles */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 shrink-0"
              >
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <Select
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value as SortOption)}
                  >
                    <SelectTrigger className="border-none bg-transparent h-auto p-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs text-gray-300 font-semibold cursor-pointer gap-1 flex items-center [&>svg]:opacity-100">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-border text-foreground">
                      <SelectItem value="newest" className="cursor-pointer text-xs text-gray-300 focus:bg-primary/20 focus:text-primary">Newest First</SelectItem>
                      <SelectItem value="oldest" className="cursor-pointer text-xs text-gray-300 focus:bg-primary/20 focus:text-primary">Oldest First</SelectItem>
                      <SelectItem value="title-asc" className="cursor-pointer text-xs text-gray-300 focus:bg-primary/20 focus:text-primary">Title A-Z</SelectItem>
                      <SelectItem value="title-desc" className="cursor-pointer text-xs text-gray-300 focus:bg-primary/20 focus:text-primary">Title Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Layout Switcher */}
                <div className="flex items-center gap-1 glass rounded-full p-1">
                  <button
                    onClick={() => setLayoutMode("masonry")}
                    className={`p-2 rounded-full transition-all ${
                      layoutMode === "masonry" ? "bg-primary text-primary-foreground" : "text-gray-400 hover:text-primary"
                    }`}
                    title="Masonry Layout"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setLayoutMode("grid")}
                    className={`p-2 rounded-full transition-all ${
                      layoutMode === "grid" ? "bg-primary text-primary-foreground" : "text-gray-400 hover:text-primary"
                    }`}
                    title="Grid Layout"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                </div>

                {/* Count Badge */}
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                  <Hash className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary">{filteredItems.length}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container-custom">
            <motion.div
              layout={layoutMode === "grid"}
              className={
                layoutMode === "masonry"
                  ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
                  : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout={layoutMode === "grid" ? "position" : false}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.02,
                      layout: { type: "spring", bounce: 0.15, duration: 0.5 }
                    }}
                    className={layoutMode === "masonry" ? "break-inside-avoid inline-block w-full" : ""}
                  >
                    {item.pdfUrl ? (
                      <button
                        onClick={() => window.open(item.pdfUrl, "_blank", "noopener,noreferrer")}
                        className={`group block w-full relative ${
                          item.categories.includes("Presentations & Pitch Decks") ? "aspect-video" : "aspect-[3/4]"
                        } rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black/40 text-left`}
                      >
                        {/* WebP Page Thumbnail */}
                        <div className="absolute inset-0">
                          <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                            />
                          {!item.categories.includes("Presentations & Pitch Decks") && (
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                          )}
                        </div>

                        {/* PDF/DECK Floating Corner Badge */}
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md shadow-black/30 border border-white/10 transition-transform duration-300 group-hover:scale-105">
                          <FileText className="w-3.5 h-3.5 text-white" />
                          <span>{item.categories.includes("Presentations & Pitch Decks") ? "DECK" : "PDF"}</span>
                        </div>

                        {/* Hover Overlay Title */}
                        <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                          <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl font-heading text-white mb-2">
                              {item.title}
                            </h3>
                            <span className="text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                              {item.categories.includes("Presentations & Pitch Decks") ? "Open Deck" : "Open Brochure"}
                            </span>
                          </div>
                        </div>

                        {/* Animated Corner Accents */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-md transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-md transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />

                        {/* Card bottom info label */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                          <h3 className="text-sm font-semibold text-foreground truncate">{item.title}</h3>
                          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{item.categories.slice(0, 2).join(" / ")}</span>
                        </div>
                      </button>
                    ) : (
                      /* ── UNIVERSAL NATURAL-DIMENSION CARD — no forced aspect ratios ── */
                      <button
                        onClick={() => setSelectedItem(item.id)}
                        className="group block w-full rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black/40 text-left bg-black/20"
                      >
                        {/* Media wrapper — always natural size */}
                        <div className="relative w-full">
                          {item.isCarousel && item.images ? (
                            <InlineCarousel images={item.images} alt={item.title} />
                          ) : item.videoUrl ? (
                            /* Video thumbnail + centred play button, natural aspect */
                            <>
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-black/60 border-2 border-primary/70 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary group-hover:text-black ml-1 transition-colors duration-300"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                              </div>
                            </>
                          ) : item.image ? (
                            /* Any image: photos, logos, reels, posters — all at natural size */
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          ) : (
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-charcoal" />
                          )}

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center pointer-events-none">
                            <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-primary mx-auto mb-2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                              <span className="text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20">View</span>
                            </div>
                          </div>

                          {/* Corner accents */}
                          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-sm" />
                          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-sm" />
                        </div>

                        {/* Title strip below the image */}
                        <div className="px-3 py-2.5 bg-black/40">
                          <h3 className="text-xs font-semibold text-foreground/90 truncate leading-tight">{item.title}</h3>
                          <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">{item.categories.slice(0, 2).join(" / ")}</span>
                        </div>
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Upgraded Slideshow Lightbox Modal */}
        <AnimatePresence>
          {selectedItem !== null && selectedItemData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-3 bg-black/80 hover:bg-black rounded-full text-primary border border-white/10 hover:border-primary/50 transition-all duration-300 z-50"
                onClick={() => setSelectedItem(null)}
              >
                <X size={24} />
              </button>

              {/* Prev Navigation Button */}
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black rounded-full text-primary border border-white/5 hover:border-primary/50 transition-all duration-300 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ArrowLeft size={24} />
              </button>

              {/* Next Navigation Button */}
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black rounded-full text-primary border border-white/5 hover:border-primary/50 transition-all duration-300 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ArrowRight size={24} />
              </button>

              {/* Content Panel */}
              <motion.div
                key={selectedItemData.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl max-h-[75vh] flex flex-col items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItemData.isCarousel && selectedItemData.images ? (
                  <div className="relative w-full max-w-md aspect-[3/4] bg-black/60 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSubIndex}
                        src={selectedItemData.images[currentSubIndex]}
                        alt={`${selectedItemData.title} - Slide ${currentSubIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                      />
                    </AnimatePresence>
                    
                    {/* Sub-navigation arrows for Carousel */}
                    {selectedItemData.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSubIndex((prev) => (prev > 0 ? prev - 1 : selectedItemData.images!.length - 1));
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black rounded-full text-white/80 hover:text-primary transition-all duration-200 border border-white/10 z-10"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSubIndex((prev) => (prev + 1) % selectedItemData.images!.length);
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black rounded-full text-white/80 hover:text-primary transition-all duration-200 border border-white/10 z-10"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </>
                    )}
                    
                    {/* Sub-indicators dots for Carousel */}
                    <div className="absolute bottom-4 flex gap-1.5 z-10 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                      {selectedItemData.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSubIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSubIndex === idx ? "bg-primary w-4" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : selectedItemData.isLogo ? (
                  <div className="glass-gold rounded-3xl p-12 w-full aspect-square max-w-md flex items-center justify-center">
                    <img loading="lazy"
                      src={selectedItemData.image}
                      alt={selectedItemData.title}
                      className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                    />
                  </div>
                ) : selectedItemData.videoUrl ? (
                  <video preload="none"
                    src={selectedItemData.videoUrl}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/5 bg-black/40"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : selectedItemData.isVideo && selectedItemData.image ? (
                  <video preload="none"
                    src={selectedItemData.image}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/5 bg-black/40"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : selectedItemData.image ? (
                  <img loading="lazy"
                    src={selectedItemData.image}
                    alt={selectedItemData.title}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/5"
                  />
                ) : null}

                {/* Slideshow Caption Overlay */}
                <div className="mt-6 text-center select-text flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-heading text-white font-semibold mb-1">
                    {selectedItemData.title}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-muted-foreground font-semibold">
                    <span className="text-primary tracking-wider uppercase">{selectedItemData.categories.join(" / ")}</span>
                    <span>•</span>
                    <span>{selectedItemData.date}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-muted text-[11px]">{currentLightboxIndex + 1} / {filteredItems.length}</span>
                  </div>
                  {selectedItemData.pdfUrl && (
                    <button
                      onClick={() => window.open(selectedItemData.pdfUrl, "_blank", "noopener,noreferrer")}
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-white" />
                      <span>{selectedItemData.categories.includes("Presentations & Pitch Decks") ? "View Full Pitch Deck" : "View Full PDF Brochure"}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll-to-top floating button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-primary/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}

        <Footer />
      </main>
    </>
  );
};

export default PortfolioPage;
