import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Camera, Video, Film, Palette, FileImage, Megaphone } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography for weddings, events, products, and portraits.",
    link: "/services#photography",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Creative video production for commercials, documentaries, and social media.",
    link: "/services#videography",
  },
  {
    icon: Film,
    title: "Cinematography",
    description: "Cinematic storytelling with high-end equipment and artistic direction.",
    link: "/services#cinematography",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, branding materials, posters, and visual identity design.",
    link: "/services#design",
  },
  {
    icon: FileImage,
    title: "Digital Content",
    description: "Thumbnails, social media graphics, and digital marketing assets.",
    link: "/services#digital",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Strategic visual content for campaigns and brand promotion.",
    link: "/services#marketing",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            What We Do
          </span>
          <h2 className="heading-lg mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of creative services to bring your vision to life,
            from concept to final delivery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 hover:bg-card/50 transition-all duration-500 h-full"
              >
                <div className="mb-6">
                  <service.icon
                    size={40}
                    className="text-primary transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
