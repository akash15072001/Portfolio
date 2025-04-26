
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Lovely Professional University",
      duration: "2019 - 2023",
      location: "Jalandhar, Punjab",
      description: "Focused on data science, machine learning, and software development. Completed multiple projects in predictive analysis and data visualization."
    },
    {
      degree: "Intermediate",
      field: "Science and Mathematics",
      institution: "Shree Sonpal Kushwah Inter College",
      duration: "2017 - 2019",
      location: "Uttar Pradesh",
      description: "Specialized in Mathematics and Computer Science. Participated in various mathematics competitions and programming challenges."
    },
    {
      degree: "Matriculation",
      institution: "Marehra Public School",
      duration: "2015 - 2017",
      location: "Uttar Pradesh",
      description: "Strong foundation in mathematics and science. Active participant in academic competitions and extracurricular activities."
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <p className="section-subtitle text-center">My academic background and qualifications</p>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/70 before:to-transparent md:before:mx-auto">
          {education.map((item, index) => (
            <div key={index} className={`relative animate-on-scroll ${
              index % 2 === 0 ? 'md:flex md:flex-row-reverse' : 'md:flex'
            } md:items-center`}>
              <div className="ml-10 md:w-1/2 md:ml-0 md:px-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="space-y-1">
                      <CardTitle>{item.degree}</CardTitle>
                      {item.field && <CardDescription className="text-primary font-medium">{item.field}</CardDescription>}
                      <CardDescription>{item.institution}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{item.duration}</span>
                      <span>{item.location}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-0 top-2 md:left-1/2 md:-ml-3 md:top-1/2 md:-mt-3 flex items-center justify-center">
                <div className="h-10 w-10 rounded-full border-4 border-secondary bg-primary flex items-center justify-center text-white text-sm">
                  {education.length - index}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
