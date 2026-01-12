import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const categories = ["All", "Photography", "Videography", "Design", "Branding"];

const portfolioItems = [
  { id: 1, title: "Elegant Wedding", category: "Photography", color: "from-amber-900/40" },
  { id: 2, title: "Brand Film", category: "Videography", color: "from-blue-900/40" },
  { id: 3, title: "Logo Suite", category: "Branding", color: "from-emerald-900/40" },
  { id: 4, title: "Product Launch", category: "Photography", color: "from-purple-900/40" },
  { id: 5, title: "Corporate Event", category: "Videography", color: "from-rose-900/40" },
  { id: 6, title: "Poster Campaign", category: "Design", color: "from-cyan-900/40" },
  { id: 7, title: "Fashion Editorial", category: "Photography", color: "from-orange-900/40" },
  { id: 8, title: "Documentary", category: "Videography", color: "from-indigo-900/40" },
  { id: 9, title: "Social Media Kit", category: "Design", color: "from-pink-900/40" },
  { id: 10, title: "Restaurant Shoot", category: "Photography", color: "from-yellow-900/40" },
  { id: 11, title: "Music Video", category: "Videography", color: "from-red-900/40" },
  { id: 12, title: "Brand Identity", category: "Branding", color: "from-teal-900/40" },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-card to-background">
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
                className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-full border ${
                  activeCategory === category
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
                <button
                  onClick={() => setSelectedItem(item.id)}
                  className="group block w-full relative aspect-[4/3] rounded-lg overflow-hidden text-left"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} to-charcoal transition-transform duration-700 group-hover:scale-110`}
                  />
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
            className="max-w-4xl w-full aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {portfolioItems.find((i) => i.id === selectedItem) && (
              <div
                className={`w-full h-full bg-gradient-to-br ${
                  portfolioItems.find((i) => i.id === selectedItem)?.color
                } to-charcoal flex items-center justify-center`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-heading text-foreground mb-2">
                    {portfolioItems.find((i) => i.id === selectedItem)?.title}
                  </h2>
                  <p className="text-primary">
                    {portfolioItems.find((i) => i.id === selectedItem)?.category}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
};

export default PortfolioPage;
