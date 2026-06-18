import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioItems } from "@/data/portfolioData";
import { InlineCarousel } from "@/components/portfolio/InlineCarousel";

const categories = [
  "All Works",
  "Cinematic Photography",
  "Motion Picture & Videography",
  "Brand Identity & Insignia",
  "Digital Cover Art",
  "Editorial Posters & Visuals",
  "Short-Form Cinema & Reels",
  "Print Media & Brochures"
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All Works");

  // Filter items: prefer featured, fall back to first 9 if not enough
  const filteredItems = useMemo(() => {
    let items = portfolioItems;
    if (activeCategory !== "All Works" && activeCategory !== "All") {
      items = portfolioItems.filter((item) => item.categories.includes(activeCategory));
    }
    const featured = items.filter((i) => i.featured);
    return (featured.length >= 9 ? featured : items).slice(0, 9);
  }, [activeCategory]);

  // Dynamic counts for badges
  const getCategoryCount = (category: string) => {
    if (category === "All Works" || category === "All") return portfolioItems.length;
    return portfolioItems.filter((item) => item.categories.includes(category)).length;
  };

  return (
    <section className="section" ref={ref}>
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
              className={`group relative px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full border ${
                activeCategory === category
                  ? "border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors font-medium ${
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
                  layoutId="activeCategoryHomepage"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.02,
                  layout: { type: "spring", bounce: 0.15, duration: 0.5 }
                }}
              >
                {item.pdfUrl ? (
                  <button
                    onClick={() => window.open(item.pdfUrl, "_blank", "noopener,noreferrer")}
                    className={`group block relative ${
                      item.categories.includes("Presentations & Pitch Decks") ? "aspect-video" : "aspect-[3/4]"
                    } rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black/40 text-left w-full`}
                  >
                    {/* WebP Page Thumbnail */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  /* ── UNIVERSAL NATURAL-DIMENSION CARD (homepage) ── */
                  <Link
                    to="/portfolio"
                    className="group block w-full rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black/40 bg-black/20"
                  >
                    {/* Media — always natural dimensions */}
                    <div className="relative w-full">
                      {item.isCarousel && item.images ? (
                        <InlineCarousel images={item.images} alt={item.title} />
                      ) : item.videoUrl ? (
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

                    {/* Title strip */}
                    <div className="px-3 py-2.5 bg-black/40">
                      <h3 className="text-xs font-semibold text-foreground/90 truncate leading-tight">{item.title}</h3>
                      <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">{item.categories.slice(0, 2).join(" / ")}</span>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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


    </section>
  );
};

export default Portfolio;

