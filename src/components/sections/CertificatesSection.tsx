import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Import Button

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Data Analysis with R Language",
      issuer: "Coursera",
      date: "May 2023",
      description: "Comprehensive course covering R data analysis tools, statistical methods, and data visualization techniques.",
      image: "/images/r.png",
      link: "https://drive.google.com/file/d/1QjEIqceHbrAOMgkdXID-8gS-apCgdBQJ/view?usp=sharing"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "GeeksforGeeks (GFG)",
      date: "December 2022",
      description: "In-depth exploration of machine learning algorithms, model evaluation, and practical applications.",
      image: "/images/dsa.png",
      link: "https://drive.google.com/file/d/1WDhw3uWLuRXC5u79a6fix7lj100ECrUK/view?usp=sharing"
    },
    {
      title: "Tableau Data Visualization",
      issuer: "Coursera",
      date: "August 2023",
      description: "Advanced training in creating interactive dashboards and effective data storytelling using Tableau.",
      image: "/images/tableau.png",
      link: "https://drive.google.com/file/d/1kTkRb9Utbl3l_DfLE8ff-To7lcSl4TJ1/view?usp=sharing"
    },
    {
      title: "Microsoft Excel",
      issuer: "GeeksforGeeks (GFG)",
      date: "June 2022",
      description: "Comprehensive training in Excel, query optimization, and data analysis techniques.",
      image: "/images/217.png",
      link: "https://drive.google.com/file/d/1Qgd4sPW07xvTsSEuhekyREdWyYg1nB8V/view?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container">
        <h2 className="section-title text-center mb-4 text-4xl font-bold">Certificates</h2>
        <p className="section-subtitle text-center mb-12 text-muted-foreground">
          Professional certifications and courses that have enhanced my skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((certificate, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all overflow-hidden animate-fade-up rounded-xl border-muted/30">
              
              {/* IMAGE */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.issuer} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <CardHeader className="space-y-2 text-center px-6 pt-4">
                <CardTitle className="text-2xl">{certificate.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {certificate.issuer} — <span className="text-muted-foreground text-sm">{certificate.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center px-6 pb-6 space-y-4">
                <p className="text-muted-foreground">{certificate.description}</p>

                {/* VIEW CERTIFICATE BUTTON */}
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    View Certificate
                  </Button>
                </a>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
