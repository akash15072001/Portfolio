
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const sections = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary">
          Akash<span className="text-foreground">.dev</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {section.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="default" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
