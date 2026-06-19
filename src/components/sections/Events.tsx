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
    image: "/events/fashion-shows/1a.webp",
  },
  {
    icon: Camera,
    title: "Photo Walks",
    description: "Community photography events exploring scenic locations and street photography.",
    image: "/events/photo-walks/20240414_183415.webp",
  },
  {
    icon: Calendar,
    title: "Party Events",
    description: "Dynamic coverage of celebrations, corporate events, and nightlife photography.",
    image: "/events/party-events/aafw.webp",
  },
];

const apnaWalaClickGallery = [
  { type: "image", src: "/events/apnawalaclick/DSC04070.JPG", title: "Model Session" },
  { type: "image", src: "/events/apnawalaclick/IMG_2084.JPG", title: "Behind The Scenes" },
  { type: "image", src: "/events/apnawalaclick/IMG_2086.JPG", title: "Collaborative Shoot" },
  { type: "image", src: "/events/apnawalaclick/IMG_4302.JPEG", title: "Team Setup" },
  { type: "video", src: "https://www.youtube.com/embed/YPYKDmW6T3Y", title: "BTS Video 1", thumbnail: "https://img.youtube.com/vi/YPYKDmW6T3Y/maxresdefault.webp" },
  { type: "image", src: "/events/apnawalaclick/WhatsApp Image 2026-01-13 at 11.19.17 (3).webp", title: "Traditional Setup" },
  { type: "image", src: "/events/apnawalaclick/WhatsApp Image 2026-04-06 at 15.29.05 (1).webp", title: "Cultural Vibes" },
  { type: "video", src: "https://www.youtube.com/embed/0CcZut1P5Rg", title: "Event Highlights", thumbnail: "https://img.youtube.com/vi/0CcZut1P5Rg/maxresdefault.webp" },
  { type: "image", src: "/events/apnawalaclick/IMG_5504.webp", title: "Portrait Shot" },
  { type: "video", src: "/events/apnawalaclick/IMG_1568.MOV", title: "Action Glimpse 1", thumbnail: "/events/apnawalaclick/IMG_1568_thumb.webp" },
  { type: "video", src: "/events/apnawalaclick/IMG_5464.MOV", title: "Action Glimpse 2", thumbnail: "/events/apnawalaclick/IMG_5464_thumb.webp" },
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
                <img loading="lazy"
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
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-8">
            {apnaWalaClickGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-lg overflow-hidden break-inside-avoid shadow-lg bg-card/10"
              >
                {item.type === "video" ? (
                  <button
                    onClick={() => setSelectedVideo(item.src)}
                    className="w-full h-full block"
                  >
                    <img loading="lazy"
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-5 h-5 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background via-background/80 to-transparent text-left">
                      <span className="text-xs font-medium">{item.title}</span>
                    </div>
                  </button>
                ) : (
                  <div className="relative block">
                    <img loading="lazy"
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 pointer-events-none text-left">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </div>
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
            {selectedVideo.includes("youtube.com") || selectedVideo.includes("youtu.be") ? (
              <iframe
                src={selectedVideo.includes("?") ? `${selectedVideo}&autoplay=1` : `${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            ) : (
              <video preload="none"
                src={selectedVideo}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Events;
