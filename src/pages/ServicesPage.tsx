import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";
import { Camera, Video, Film, Palette, FileImage, Megaphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "photography",
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for all occasions.",
    image: "/services/Photography.png",
    features: [
      "Wedding Photography",
      "Product Photography",
      "Portrait Sessions",
      "Event Coverage",
      "Fashion Shoots",
      "Corporate Headshots",
    ],
  },
  {
    id: "videography-reels",
    icon: Video,
    title: "Videography & Reels",
    description: "Creative video production and editing for every platform.",
    image: "/services/Videography & Reels.png",
    features: [
      "Video Editing & Reels",
      "Social Media Content",
      "Promotional Videos",
      "Event Documentation",
      "Interview Production",
      "Behind-the-Scenes",
    ],
  },
  {
    id: "cinematography-production",
    icon: Film,
    title: "Cinematography & Production",
    description: "Cinematic storytelling with artistic direction.",
    image: "/services/Cinematography & Production.png",
    features: [
      "Creative Production",
      "Brand Films",
      "Documentary Production",
      "Commercial Spots",
      "Music Videos",
      "Short Films",
    ],
  },
  {
    id: "graphic-branding",
    icon: Palette,
    title: "Graphic & Branding Design",
    description: "Visual identity and creative branding solutions.",
    image: "/services/Graphic & Branding Design.png",
    features: [
      "Graphic Design",
      "Branding & Identity Design",
      "Logo Design",
      "Poster Design",
      "Brochures",
      "Packaging Design",
    ],
  },
  {
    id: "content-social",
    icon: FileImage,
    title: "Content & Social Media",
    description: "Engaging content creation and full-service social media management.",
    image: "/services/Content & Social Media.png",
    features: [
      "Social Media Management",
      "Content Creation",
      "YouTube Thumbnails",
      "Instagram Content",
      "Social Media Graphics",
      "Web Graphics",
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic marketing and performance campaigns.",
    image: "/services/Digital Marketing.png",
    features: [
      "Digital Marketing",
      "Performance Marketing (Meta/Google Ads)",
      "Email Marketing",
      "Campaign Strategy",
      "Ad Creative",
      "Performance Analysis",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <GalaxyBackground />
      <main className="min-h-screen">
        <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              What We Offer
            </span>
            <h1 className="heading-xl mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Comprehensive creative solutions tailored to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <service.icon size={48} className="text-primary mb-6" />
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
                
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-card/5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-4 border border-primary/20 rounded pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6">
              Ready to Get <span className="text-primary">Started</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
