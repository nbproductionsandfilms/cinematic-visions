import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Awards Won" },
  ];

  return (
    <>
      <GalaxyBackground />
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              About Us
            </span>
            <h1 className="heading-xl mb-6">
              We Are <span className="text-primary">Storytellers</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              N B Productions & Films is a creative studio dedicated to producing
              exceptional visual content that captivates and inspires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2019, N B Productions & Films began with a simple vision:
                to create visual content that moves people. What started as a passion
                project has grown into a full-service creative studio.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey has been marked by countless stories told, brands
                transformed, and moments captured. We believe in the power of visual
                storytelling to connect, inspire, and leave lasting impressions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push creative boundaries, combining technical
                expertise with artistic vision to deliver exceptional results for
                every client.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-charcoal-light rounded-lg overflow-hidden">
                <div className="absolute inset-4 border border-primary/30 rounded" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-heading text-primary/20">NB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-8">Our Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "To be the creative partner of choice for brands and individuals
                seeking to tell their stories through compelling visual content."
              </p>
              <div className="w-16 h-px bg-primary mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="block text-5xl md:text-6xl font-heading text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
};

export default AboutPage;
