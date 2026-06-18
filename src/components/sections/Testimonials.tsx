import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "N B Productions transformed our brand identity with exceptional logo design and marketing materials. Their creative vision perfectly captured the essence of AI Alpha Tech. Highly professional and a pleasure to work with!",
    author: "Shamalee Pawar",
    role: "Founder, AI Alpha Tech",
    initials: "SP",
    color: "from-violet-500 to-purple-700",
    rating: 5,
  },
  {
    quote: "The promotional videos and brochures created by N B Productions elevated our trekking packages to a whole new level. Their attention to detail and understanding of adventure tourism is outstanding. Our bookings increased significantly!",
    author: "Saurabh Sawant",
    role: "Co-founder, Alpine Trekkers",
    initials: "SS",
    color: "from-amber-500 to-orange-600",
    rating: 5,
  },
  {
    quote: "Working with N B Productions was a game-changer for Infinite Waves. Their branding expertise and creative designs helped us establish a strong market presence. The team's dedication and innovative approach are truly commendable.",
    author: "Vikrant Narkhade",
    role: "Founder, Infinite Waves",
    initials: "VN",
    color: "from-cyan-500 to-blue-600",
    rating: 5,
  },
  {
    quote: "From logo design to complete marketing collateral, N B Productions delivered beyond expectations. Their cinematic approach to our travel content captured the spirit of adventure perfectly. A reliable partner for all our creative needs!",
    author: "Darshan Patil",
    role: "Founder, The Bhartiya Trekkers",
    initials: "DP",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-lg mb-16">
            What Our <span className="text-primary">Clients</span> Say
          </h2>

          {/* Card */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Large decorative quote */}
            <Quote size={56} className="text-primary/15 absolute -top-4 -left-2 hidden md:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-heading text-foreground leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  {/* Avatar circle with initials */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-sm">{t.initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-primary font-semibold">{t.author}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-6 h-px bg-border/50 rounded-full overflow-hidden">
              <motion.div
                key={currentIndex}
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8 h-2" : "bg-border hover:bg-muted-foreground w-2 h-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
