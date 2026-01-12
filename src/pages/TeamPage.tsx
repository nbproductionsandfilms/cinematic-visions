import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Nikhil Baharwal",
    role: "Director & Co-founder",
    bio: "Nikhil brings over 5 years of experience in visual storytelling. His vision and leadership have shaped N B Productions into what it is today. With a keen eye for cinematic excellence, he oversees all major productions.",
    image: "/founders/Nikhil-Baharwal-Director-and-Co-founder.png",
  },
  {
    name: "Divyaraj Baharwal",
    role: "Co-founder & Technical Director",
    bio: "Divyaraj is the technical backbone of the team. His expertise in equipment, post-production, and technical workflows ensures every project meets the highest quality standards.",
    image: "/founders/Divyaraj-Baharwal-Technical-Director-and-Co-founder.png",
  },
  {
    name: "Durvesh Baharwal",
    role: "Co-founder & Creative Director",
    bio: "Durvesh leads the creative vision across all projects. His innovative approach to design and storytelling brings fresh perspectives to every campaign and production.",
    image: "/founders/Durvesh-Baharwal-Creative-Director-and-Co-founder.png",
  },
];

const TeamPage = () => {
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
              Our Team
            </span>
            <h1 className="heading-xl mb-6">
              Meet the <span className="text-primary">Creators</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              The passionate individuals who bring your visions to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Avatar */}
                  <div className="relative w-full max-w-md mx-auto lg:mx-0">
                    {/* Background glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-xl" />

                    {/* Gold frame border */}
                    <div className="relative border-2 border-primary bg-background p-2 hover:border-primary/80 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-auto object-contain relative z-10"
                      />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="heading-md mb-2">{member.name}</h2>
                  <p className="text-primary text-lg tracking-wide mb-6">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {member.bio}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "We strive for perfection in every frame, every edit, every delivery." },
              { title: "Creativity", desc: "Innovation drives us to push boundaries and explore new possibilities." },
              { title: "Integrity", desc: "Honest communication and transparent processes build lasting relationships." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <h3 className="text-2xl font-heading text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TeamPage;
