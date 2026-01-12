import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Awards Won" },
  ];

  return (
    <section className="section bg-card" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              About Us
            </span>
            <h2 className="heading-lg mb-6">
              Crafting Visual Stories That{" "}
              <span className="text-primary">Inspire</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              N B Productions & Films is a creative studio dedicated to producing
              exceptional visual content. From stunning photography to cinematic
              videography, we bring your vision to life with precision and artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of passionate creatives combines technical expertise with
              artistic vision to deliver content that not only meets but exceeds
              expectations. Every project is an opportunity to tell a unique story.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="block text-3xl md:text-4xl font-heading text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-charcoal-light flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-heading text-primary opacity-20">NB</span>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-primary/30 rounded pointer-events-none" />
            </div>
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground px-6 py-4 rounded shadow-elevated"
            >
              <span className="text-sm tracking-widest uppercase font-medium">
                Since 2019
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
