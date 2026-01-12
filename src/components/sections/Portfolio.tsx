import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Photography", "Videography", "Design"];

const portfolioItems = [
  {
    id: 1,
    title: "Wedding Story",
    category: "Photography",
    image: "linear-gradient(135deg, hsl(43, 74%, 30%) 0%, hsl(0, 0%, 10%) 100%)",
  },
  {
    id: 2,
    title: "Brand Film",
    category: "Videography",
    image: "linear-gradient(135deg, hsl(200, 40%, 20%) 0%, hsl(0, 0%, 8%) 100%)",
  },
  {
    id: 3,
    title: "Logo Design",
    category: "Design",
    image: "linear-gradient(135deg, hsl(280, 40%, 25%) 0%, hsl(0, 0%, 8%) 100%)",
  },
  {
    id: 4,
    title: "Product Shoot",
    category: "Photography",
    image: "linear-gradient(135deg, hsl(160, 40%, 20%) 0%, hsl(0, 0%, 8%) 100%)",
  },
  {
    id: 5,
    title: "Corporate Event",
    category: "Videography",
    image: "linear-gradient(135deg, hsl(30, 50%, 25%) 0%, hsl(0, 0%, 8%) 100%)",
  },
  {
    id: 6,
    title: "Poster Campaign",
    category: "Design",
    image: "linear-gradient(135deg, hsl(350, 40%, 25%) 0%, hsl(0, 0%, 8%) 100%)",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

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
              <Link
                to={`/portfolio/${item.id}`}
                className="group block relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ background: item.image }}
                />
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
    </section>
  );
};

export default Portfolio;
