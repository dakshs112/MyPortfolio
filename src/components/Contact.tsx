import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CONTACT_EMAIL = 'dakshs112@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio contact: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === 'false') {
        throw new Error(result.message || 'Failed to send message');
      }

      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email me directly at dakshs112@gmail.com.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />,
      label: "Email",
      value: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary shrink-0" />,
      label: "Phone",
      value: "+91 8088263651",
      link: "tel:+918088263651"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />,
      label: "Location",
      value: "Bengaluru, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "GitHub",
      url: "https://github.com/dakshs112",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/dakshsharma112/",
      color: "text-foreground hover:text-secondary"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      url: `mailto:${CONTACT_EMAIL}`,
      color: "text-foreground hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full min-w-0">
          <div className="text-center mb-10 sm:mb-16 fade-in px-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-gradient mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 fade-in w-full min-w-0 space-y-6 sm:space-y-8">
              <div className="card-glow !p-4 sm:!p-6 w-full min-w-0">
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-foreground mb-4 sm:mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="mt-0.5 shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors font-mono text-sm sm:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-mono text-sm sm:text-base break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glow !p-4 sm:!p-6 w-full min-w-0">
                <h4 className="text-lg sm:text-xl font-mono font-semibold text-foreground mb-4">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 fade-in w-full min-w-0">
              <div className="card-glow !p-4 sm:!p-6 w-full min-w-0">
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-foreground mb-4 sm:mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full min-w-0">
                  {/* Honeypot for bots — leave empty */}
                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-muted/30 border-border focus:border-primary transition-colors w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="min-w-0">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-muted/30 border-border focus:border-primary transition-colors w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-muted/30 border-border focus:border-primary transition-colors w-full"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/30 border-border focus:border-primary transition-colors resize-y min-h-[120px] w-full"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero group w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        Sending...
                        <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
