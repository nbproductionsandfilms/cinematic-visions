import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Camera, Users, Sparkles, MapPin, Clock, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const eventCategories = [
  {
    icon: Sparkles,
    title: "Fashion Shows",
    description: "Capturing runway elegance and designer collections with cinematic precision. Our team covers backstage preparations, model walks, and the electric atmosphere of fashion events.",
    image: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.14.jpeg",
    highlights: ["Runway Coverage", "Backstage Access", "Designer Profiles", "Model Portfolios"]
  },
  {
    icon: Camera,
    title: "Photo Walks",
    description: "Community photography events exploring scenic locations, urban landscapes, and street photography. Join fellow photographers for creative exploration.",
    image: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.17.16 (1).jpeg",
    highlights: ["Location Scouting", "Group Sessions", "Skill Workshops", "Portfolio Building"]
  },
  {
    icon: Calendar,
    title: "Party Events",
    description: "Dynamic coverage of celebrations, corporate events, nightlife, and social gatherings. We capture the energy and emotions of your special moments.",
    image: "/new/couple_shoots/WhatsApp Image 2026-01-13 at 11.19.18.jpeg",
    highlights: ["Corporate Events", "Birthday Parties", "Club Photography", "Social Gatherings"]
  },
];

const apnaWalaClickGallery = [
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (1).jpeg", title: "Model Session" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (1).jpeg", title: "Behind The Scenes" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (2).jpeg", title: "Collaborative Shoot" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17 (3).jpeg", title: "Team Setup" },
  { type: "video", src: "/videos/WhatsApp Video 2026-01-13 at 11.19.21.mp4", title: "BTS Video 1", thumbnail: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.37.jpeg" },
  { type: "image", src: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03 (1).jpeg", title: "Traditional Setup" },
  { type: "image", src: "/new/traditional_shoots/WhatsApp Image 2026-01-13 at 11.19.03.jpeg", title: "Cultural Vibes" },
  { type: "video", src: "/videos/WhatsApp Video 2026-01-13 at 11.19.25.mp4", title: "Event Highlights", thumbnail: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.20.38.jpeg" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18 (2).jpeg", title: "Creative Angles" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.19.17.jpeg", title: "Final Shots" },
  { type: "video", src: "/videos/WhatsApp Video 2026-01-13 at 11.19.32.mp4", title: "Full Coverage", thumbnail: "/new/aesthetic_shoots/WhatsApp Image 2026-01-13 at 11.19.32.jpeg" },
  { type: "image", src: "/new/model_shoots/WhatsApp Image 2026-01-13 at 11.17.18.jpeg", title: "Makeup Session" },
];

const EventsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <GalaxyBackground />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
                Live Experiences
              </span>
              <h1 className="heading-xl mb-6">
                Our <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From fashion runways to creative photo walks, we bring visual stories to life
                through immersive event experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20">
          <div className="container-custom">
            <div className="space-y-20">
              {eventCategories.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <event.icon className="w-12 h-12 text-primary mb-6" />
                    <h2 className="heading-md mb-4">{event.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {event.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-4 py-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apna Wala Click Feature Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium tracking-wide">Special Event</span>
                </div>
                <h2 className="heading-lg mb-4">
                  <span className="font-brand text-primary">Apna Wala Click</span>
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                  A unique collaborative photography experience where multiple models, cameramen, and makeup artists
                  come together for an extraordinary photoshoot session. Experience the magic of creative synergy
                  with behind-the-scenes access and stunning final shots.
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg mb-2">Multiple Models</h3>
                  <p className="text-sm text-muted-foreground">5-10 models per session for diverse portfolio shots</p>
                </div>
                <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg mb-2">Pro Cameramen</h3>
                  <p className="text-sm text-muted-foreground">Professional photographers with varied styles</p>
                </div>
                <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg mb-2">Makeup Artists</h3>
                  <p className="text-sm text-muted-foreground">Expert stylists for complete transformation</p>
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-heading mb-6 text-center">Behind The Scenes & Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {apnaWalaClickGallery.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`group relative rounded-lg overflow-hidden ${
                        index === 0 || index === 7 ? "md:col-span-2 md:row-span-2" : ""
                      } ${index === 0 || index === 7 ? "aspect-square" : "aspect-[4/3]"}`}
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
                            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                              <Play className="w-5 h-5 text-primary-foreground ml-1" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                            <span className="text-xs font-medium">{item.title}</span>
                          </div>
                        </button>
                      ) : (
                        <>
                          <img
                            src={item.src}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Join Next Event
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>

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
    </>
  );
};

export default EventsPage;
