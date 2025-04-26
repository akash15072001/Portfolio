
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/akash15072001",
      icon: <Linkedin size={20} />
    },
    {
      name: "GitHub",
      url: "https://github.com/akash15072001",
      icon: <Github size={20} />
    },
    {
      name: "Email",
      url: "mailto:akashrajput80066@gmail.com",
      icon: <Mail size={20} />
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Akash Babu
            </h2>
            <p className="text-slate-300 mt-2">Data Analyst & Software Developer</p>
            <p className="text-slate-400 mt-4 max-w-md">
              Transforming data into insights and bringing ideas to life through code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">Let's Connect</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Akash Babu. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-8">
            <a href="#about" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
