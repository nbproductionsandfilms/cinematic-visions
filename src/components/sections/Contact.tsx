import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

const services = [
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

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
    <section className="section" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Get in Touch
            </span>
            <h2 className="heading-lg mb-6">
              Let's Create <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll get back to you as soon as possible.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 p-10 bg-primary/10 border border-primary/30 rounded-2xl text-center"
              >
                <CheckCircle2 size={48} className="text-primary" />
                <h3 className="text-xl font-heading text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Send Another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <Input required placeholder="Your Name" value={formData.name} onChange={set("name")}
                      className="bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Email *</label>
                    <Input required type="email" placeholder="you@example.com" value={formData.email} onChange={set("email")}
                      className="bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Phone</label>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={set("phone")}
                      className="bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={set("service")}
                      className="w-full h-10 px-3 py-2 rounded-md text-sm bg-card/30 backdrop-blur-sm border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-colors"
                    >
                      <option value="" className="bg-background">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Message *</label>
                  <Textarea required rows={5} placeholder="Tell us about your project…" value={formData.message} onChange={set("message")}
                    className="bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary resize-none" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <><Loader2 size={16} className="mr-2 animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={16} className="mr-2" /> Send Message</>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-heading mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                    <a href="mailto:nbproductionsandfilms@gmail.com"
                      className="text-foreground hover:text-primary transition-colors">
                      nbproductionsandfilms@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                    <a href="tel:+917709477615"
                      className="text-foreground hover:text-primary transition-colors">
                      +91 77094 77615
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                    <p className="text-foreground">Bhosari, Pune - 411039<br />India</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground text-red-400/80">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
