
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Data Analysis with Python",
      issuer: "Coursera",
      date: "May 2023",
      description: "Comprehensive course covering Python data analysis tools, statistical methods, and data visualization techniques."
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "GeeksforGeeks (GFG)",
      date: "December 2022",
      description: "In-depth exploration of machine learning algorithms, model evaluation, and practical applications."
    },
    {
      title: "Tableau Data Visualization",
      issuer: "Coursera",
      date: "August 2023",
      description: "Advanced training in creating interactive dashboards and effective data storytelling using Tableau."
    },
    {
      title: "SQL Database Management",
      issuer: "GeeksforGeeks (GFG)",
      date: "June 2022",
      description: "Comprehensive training in SQL database design, query optimization, and database administration."
    }
  ];

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title text-center">Certificates</h2>
        <p className="section-subtitle text-center">Professional certifications and courses that have enhanced my skills</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="animate-on-scroll hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{certificate.date}</span>
                </div>
                <CardDescription className="text-primary font-medium">
                  {certificate.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{certificate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
