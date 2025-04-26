import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/akash15072001', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'GitHub', url: 'https://github.com/akash15072001', icon: <Github className="h-5 w-5" /> },
    { name: 'Email', url: 'mailto:akashrajput80066@gmail.com', icon: <Mail className="h-5 w-5" /> },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: '8d4786f6-cd15-4251-8655-1c90dd2eeda2', ...formData }),
      });

      const data = await response.json();

      if (data.success) {
        toast({ title: 'Message Sent!', description: "Thanks for reaching out. I'll respond soon." });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed.');
      }
    } catch {
      toast({ title: 'Error!', description: 'Unable to send message. Try again later.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-tr from-muted/10 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let's create something amazing together. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-6 mt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-white transition-all shadow hover:shadow-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-primary focus-visible:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-primary focus-visible:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your idea or project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-lg font-semibold transition hover:scale-[1.02] hover:shadow-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
