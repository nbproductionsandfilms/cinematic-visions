import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InlineCarouselProps {
  images: string[];
  alt: string;
}

export const InlineCarousel = ({ images, alt }: InlineCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images, isPaused]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-black/20 group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} - Slide ${index + 1}`}
          loading="lazy"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="w-full h-auto block"
        />
      </AnimatePresence>

      {/* Prev / Next arrows — visible on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black rounded-full text-white/80 hover:text-primary transition-all duration-200 border border-white/10 z-10 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black rounded-full text-white/80 hover:text-primary transition-all duration-200 border border-white/10 z-10 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/55 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setIndex(idx); }}
              className={`rounded-full transition-all duration-300 ${
                index === idx ? "bg-primary w-4 h-1.5" : "bg-white/40 w-1.5 h-1.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
