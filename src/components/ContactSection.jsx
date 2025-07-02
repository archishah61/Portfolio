import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from 'emailjs-com';

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      style: {
        border: "1px solid hsl(var(--primary))",
        padding: "16px",
        color: "hsl(var(--foreground))",
        backgroundColor: "hsl(var(--background))",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    });

    try {
      // Use EmailJS to send the email
      await emailjs.send(
        'service_we5drke', // Replace with your EmailJS service ID
        'template_uit1x47', // Replace with your EmailJS template ID
        formData,
        'Yy2Pew_s-_TQt2cGk' // Replace with your EmailJS public key
      );

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
        style: {
          border: "1px solid #10b981",
          padding: "16px",
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05)",
        },
        iconTheme: {
          primary: "#10b981",
          secondary: "hsl(var(--background))",
        },
      });

      // Clear form inputs
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send the message. Please try again later.", {
        duration: 4000,
        style: {
          border: "1px solid #ef4444",
          padding: "16px",
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05)",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "hsl(var(--background))",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
        }}
      />
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In<span className="text-primary"> Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:archishah61@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      archishah61@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+918511616476" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8511 616 476
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Gujarat, India.
                    </a>
                  </div>
                </div>
                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect With me</h4>
                  <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/archishah61/" target="_blank" className="hover:text-primary">
                      <Linkedin />
                    </a>
                    <a href="" target="_blank" className="hover:text-primary">
                      <Twitter />
                    </a>
                    <a href="https://www.instagram.com/_archishah_07/" target="_blank" className="hover:text-primary">
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" name="name" required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Alex Johnson..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input type="email" id="email" name="email" required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="alexjohnson@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea id="message" name="message" required
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
