import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Camera, Video, Film, Palette, FileImage, Megaphone } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography for weddings, events, products, and portraits.",
    image: "/services/Photography.webp",
    link: "/services#photography",
  },
  {
    icon: Video,
    title: "Videography & Reels",
    description: "Creative video production, video editing, and short-form reels for social media.",
    image: "/services/Videography & Reels.webp",
    link: "/services#videography-reels",
  },
  {
    icon: Film,
    title: "Cinematography & Production",
    description: "Cinematic storytelling, creative production, and high-end artistic direction.",
    image: "/services/Cinematography & Production.webp",
    link: "/services#cinematography-production",
  },
  {
    icon: Palette,
    title: "Graphic & Branding Design",
    description: "Logos, brand identity design, and comprehensive graphic design solutions.",
    image: "/services/Graphic & Branding Design.webp",
    link: "/services#graphic-branding",
  },
  {
    icon: FileImage,
    title: "Content & Social Media",
    description: "Social media management, content creation, and digital asset design.",
    image: "/services/Content & Social Media.webp",
    link: "/services#content-social",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Performance marketing (Meta/Google Ads), email marketing, and digital strategy.",
    image: "/services/Digital Marketing.webp",
    link: "/services#digital-marketing",
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
                className="group relative block p-8 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 h-full shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img loading="lazy"
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Heavy dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/85 transition-colors duration-500 group-hover:bg-black/75" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <service.icon
                      size={40}
                      className="text-primary transition-transform duration-500 group-hover:-translate-y-1"
                    />
                  </div>
                  <h3 className="text-xl font-heading mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <span className="inline-block mt-auto text-primary text-sm tracking-wide opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
