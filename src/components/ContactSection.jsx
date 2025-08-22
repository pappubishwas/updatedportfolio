import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitter,
  Map,
} from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { SiUpwork } from "react-icons/si";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "your_service_id",   // replace with your EmailJS service ID
        "your_template_id",  // replace with your EmailJS template ID
        e.target,            // form element
        "your_public_key"    // replace with your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Message Sent ✅",
            description: "Thanks for reaching out! I'll get back to you soon.",
            variant: "success",
          });
          setIsSubmitting(false);
          e.target.reset(); // clear form after sending
        },
        () => {
          toast({
            title: "Error ❌",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          collaboration opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:pappuovi8@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pappuovi8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918456968725"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8456968725
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    India, Odisha, Bhubaneswar
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/pappu-bishwas-tan87/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.upwork.com/freelancers/~01f0753e23feaf583f" target="_blank" rel="noopener noreferrer">
                  <SiUpwork className="w-6 h-6 text-[#6fda44]" />
                </a>
                <a href="https://x.com/OviPappu" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/pappuovi88/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/pappuovi8" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Pappu Bishwas..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="pappuovi8@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Pappu, I would like to discuss..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
