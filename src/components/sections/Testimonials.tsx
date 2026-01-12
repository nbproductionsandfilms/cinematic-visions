import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "N B Productions captured our wedding day perfectly. Every frame tells a story, and the attention to detail was incredible.",
    author: "Priya & Rahul",
    role: "Wedding Clients",
  },
  {
    quote: "Their cinematography work for our brand campaign exceeded all expectations. Professional, creative, and delivered on time.",
    author: "Amit Sharma",
    role: "Marketing Director, TechCorp",
  },
  {
    quote: "The team's creative vision transformed our ideas into stunning visual content. Highly recommend their services!",
    author: "Sneha Patel",
    role: "Founder, StyleHub",
  },
  {
    quote: "Exceptional quality and professionalism. They understood our brand and delivered content that truly resonates.",
    author: "Vikram Singh",
    role: "CEO, StartupX",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-card" ref={ref}>
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

          {/* Testimonial Card */}
          <div className="relative">
            <Quote size={48} className="text-primary/20 absolute -top-4 left-0" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="py-8"
            >
              <p className="text-xl md:text-2xl font-heading text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
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
