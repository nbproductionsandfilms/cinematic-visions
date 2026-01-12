import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Nikhil Baharwal",
    role: "Director & Co-founder",
    description: "Visionary leader with a passion for cinematic storytelling.",
    image: "NB",
  },
  {
    name: "Divyaraj Baharwal",
    role: "Co-founder & Technical Director",
    description: "Technical mastermind ensuring flawless execution.",
    image: "DB",
  },
  {
    name: "Durvesh Baharwal",
    role: "Co-founder & Creative Director",
    description: "Creative genius driving innovative visual concepts.",
    image: "DB",
  },
];

const Team = () => {
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
            Our Team
          </span>
          <h2 className="heading-lg mb-6">
            Meet the <span className="text-primary">Creators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind every successful project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent group-hover:from-primary/50 transition-all duration-500" />
                <div className="absolute inset-2 rounded-full bg-charcoal-light flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors duration-500">
                  <span className="text-4xl font-heading text-primary">
                    {member.image}
                  </span>
                </div>
                {/* Hover ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-heading mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary text-sm tracking-wide mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
