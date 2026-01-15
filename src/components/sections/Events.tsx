import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Camera, Users, Sparkles, Play, X } from "lucide-react";

const eventCategories = [
  {
    icon: Sparkles,
    title: "Fashion Shows",
    description: "Capturing runway elegance and designer collections with cinematic precision.",
    image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14.jpeg",
  },
  {
    icon: Camera,
    title: "Photo Walks",
    description: "Community photography events exploring scenic locations and street photography.",
    image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (1).jpeg",
  },
  {
    icon: Calendar,
    title: "Party Events",
    description: "Dynamic coverage of celebrations, corporate events, and nightlife photography.",
    image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18.jpeg",
  },
];

const apnaWalaClickGallery = [
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (1).jpeg", title: "Model Session" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (1).jpeg", title: "Behind The Scenes" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (2).jpeg", title: "Collaborative Shoot" },
  { type: "video", src: "/videos/WhatsApp Video 2026-01-13 at 11.19.21.mp4", title: "BTS Video", thumbnail: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.37.jpeg" },
  { type: "image", src: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03 (1).jpeg", title: "Traditional Setup" },
  { type: "video", src: "/videos/WhatsApp Video 2026-01-13 at 11.19.25.mp4", title: "Event Highlights", thumbnail: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.38.jpeg" },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section" ref={ref} id="events">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Live Experiences
          </span>
          <h2 className="heading-lg mb-6">
            Our <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fashion runways to creative photo walks, we bring visual stories to life
            through immersive event experiences.
          </p>
        </motion.div>

        {/* Event Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {eventCategories.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <event.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-heading mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apna Wala Click Special Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wide">Special Event</span>
            </div>
            <h3 className="heading-md mb-4">
              <span className="font-brand text-primary">Apna Wala Click</span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A unique collaborative photography experience where multiple models, cameramen, and makeup artists
              come together for an extraordinary photoshoot session. Experience the magic of creative synergy
              with behind-the-scenes access and stunning final shots.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Multiple Models", "Professional Cameramen", "Makeup Artists", "BTS Coverage", "Collaborative Shoots"].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full text-sm text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {apnaWalaClickGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`group relative rounded-lg overflow-hidden ${
                  index === 0 || index === 5 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                {item.type === "video" ? (
                  <button
                    onClick={() => setSelectedVideo(item.src)}
                    className="w-full h-full"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">
                Explore All Events
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-card/80 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full aspect-video"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Events;
