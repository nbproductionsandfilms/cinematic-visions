import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/layout/GalaxyBackground";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Instagram, Youtube, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

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
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="heading-sm mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Service Interested In
                      </label>
                      <Input
                        placeholder="e.g., Photography, Videography"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
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
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:hello@nbproductions.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        hello@nbproductions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground">
                        Mumbai, Maharashtra<br />India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Hours</p>
                      <p className="text-foreground">
                        Mon-Fri: 10AM - 7PM<br />
                        Sat: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="section bg-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-md mb-6">
              Thank You for <span className="text-primary">Considering Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have a clear vision or just a spark of an idea, we're here
              to help bring it to life. Every great project starts with a conversation.
              Let's start yours.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
};

export default ContactPage;
