import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Nikhil Baharwal",
    role: "Director & Co-founder",
    description: "Visionary leader with a passion for cinematic storytelling.",
    image: "/founders/Nikhil-Baharwal-Director-and-Co-founder.png",
  },
  {
    name: "Divyaraj Baharwal",
    role: "Co-founder & Technical Director",
    description: "Technical mastermind ensuring flawless execution.",
    image: "/founders/Divyaraj-Baharwal-Technical-Director-and-Co-founder.png",
  },
  {
    name: "Durvesh Baharwal",
    role: "Co-founder & Creative Director",
    description: "Creative genius driving innovative visual concepts.",
    image: "/founders/Durvesh-Baharwal-Creative-Director-and-Co-founder.png",
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
              <div className="relative mb-6 mx-auto w-full max-w-sm">
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-xl group-hover:from-primary/30 transition-all duration-500" />

                {/* Gold frame border */}
                <div className="relative border-2 border-primary bg-background p-2 group-hover:border-primary/80 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
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
