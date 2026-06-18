import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Instagram, Youtube, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

const SERVICES = [
  "Cinematic Photography",
  "Motion Picture & Videography",
  "Video Editing & Reels",
  "Graphic Design",
  "Branding & Identity Design",
  "Content Creation",
  "Social Media Management",
  "Digital Marketing",
  "Performance Marketing (Ads)",
  "Email Marketing",
  "Creative Production",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [status, setStatus] = useState<Status>("idle");

  // SEO
  useEffect(() => {
    document.title = "Contact Us | N B Productions & Films";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Get in touch with N B Productions & Films. Reach out for photography, videography, branding, and design projects.");
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry from ${formData.name} — ${formData.service || "General"}`,
          from_name: "NB Productions Website",
          ...formData,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

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
                Get in Touch
              </span>
              <h1 className="heading-xl mb-6">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Have a project in mind? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <h2 className="heading-sm mb-6">Send Us a Message</h2>

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    >
                      <CheckCircle2 size={56} className="text-primary" />
                      <h3 className="text-2xl font-heading">Message Sent!</h3>
                      <p className="text-muted-foreground max-w-sm">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setStatus("idle")}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                          <Input required placeholder="John Doe" value={formData.name} onChange={set("name")}
                            className="bg-background border-border focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Email Address *</label>
                          <Input required type="email" placeholder="john@example.com" value={formData.email} onChange={set("email")}
                            className="bg-background border-border focus:border-primary" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
                          <Input type="tel" placeholder="+91 77094 77615" value={formData.phone} onChange={set("phone")}
                            className="bg-background border-border focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">Service Interested In</label>
                          <select
                            value={formData.service}
                            onChange={set("service")}
                            className="w-full h-10 px-3 py-2 rounded-md text-sm bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-colors"
                          >
                            <option value="" className="bg-background">Select a service…</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s} className="bg-background">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">Your Message *</label>
                        <Textarea required rows={6} placeholder="Tell us about your project…" value={formData.message} onChange={set("message")}
                          className="bg-background border-border focus:border-primary resize-none" />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/30 border border-red-900/40 rounded-lg px-4 py-3">
                          <AlertCircle size={16} className="shrink-0" />
                          <span>Something went wrong. Please try again or email us directly.</span>
                        </div>
                      )}

                      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full md:w-auto">
                        {status === "loading" ? (
                          <><Loader2 size={16} className="mr-2 animate-spin" /> Sending…</>
                        ) : (
                          <><Send size={16} className="mr-2" /> Send Message</>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <h3 className="text-xl font-heading mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <a href="mailto:nbproductionsandfilms@gmail.com"
                          className="text-foreground hover:text-primary transition-colors break-all">
                          nbproductionsandfilms@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <a href="tel:+917709477615" className="text-foreground hover:text-primary transition-colors">
                          +91 77094 77615
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <p className="text-foreground">Bhosari, Pune - 411039<br />India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Hours</p>
                        <p className="text-foreground">
                          Mon–Fri: 10AM – 7PM<br />
                          Sat: 10AM – 4PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                  <h3 className="text-xl font-heading mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/nb.productions_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300"
                    >
                      <Instagram size={18} />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@nbproductionsandfilms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-red-500 hover:text-red-500 text-muted-foreground transition-all duration-300"
                    >
                      <Youtube size={18} />
                      <span className="text-sm font-medium">YouTube</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
