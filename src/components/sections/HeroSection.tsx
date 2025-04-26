import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Hi, I'm <span className="text-primary">Akash Babu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Aspiring Data Analyst & Software Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Transforming data into insights and code into solutions. Passionate about machine learning, 
            data visualization, and building efficient software applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>

            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        
          <div className="relative h-[400px] lg:h-[500px] w-auto bg-gradient-to-br from-primary/5 to-primary/20 rounded-full flex items-center justify-center animate-fade-in">
            <div className="h-[90%] w-[80%] bg-white/80 rounded-full shadow-lg overflow-hidden">
              <img
                src="/pic.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
