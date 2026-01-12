import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
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
    id: "videography",
    icon: Video,
    title: "Videography",
    description: "Creative video production for every platform.",
    features: [
      "Social Media Content",
      "Promotional Videos",
      "Event Documentation",
      "Interview Production",
      "Training Videos",
      "Behind-the-Scenes",
    ],
  },
  {
    id: "cinematography",
    icon: Film,
    title: "Cinematography",
    description: "Cinematic storytelling with artistic direction.",
    features: [
      "Brand Films",
      "Documentary Production",
      "Commercial Spots",
      "Music Videos",
      "Short Films",
      "Wedding Films",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design",
    description: "Visual identity and branding solutions.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Poster Design",
      "Brochures",
      "Business Cards",
      "Packaging Design",
    ],
  },
  {
    id: "digital",
    icon: FileImage,
    title: "Digital Content",
    description: "Optimized content for digital platforms.",
    features: [
      "YouTube Thumbnails",
      "Instagram Content",
      "Social Media Graphics",
      "Banner Ads",
      "Email Templates",
      "Web Graphics",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    description: "Strategic visual content for campaigns.",
    features: [
      "Campaign Strategy",
      "Content Planning",
      "Ad Creative",
      "Performance Analysis",
      "A/B Testing",
      "Brand Consulting",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
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
                
                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute inset-0 bg-charcoal-light rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon size={120} className="text-primary/10" />
                    </div>
                    <div className="absolute inset-4 border border-primary/20 rounded" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-card">
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
  );
};

export default ServicesPage;
