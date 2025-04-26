
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spam Mail Prediction using Machine Learning",
      description: "Developed a machine learning model to identify and filter spam emails with high accuracy. The model was trained on a dataset of labeled emails and uses natural language processing techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NLP"],
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Interactive Sales Dashboard",
      description: "Created a comprehensive interactive dashboard visualizing sales data, customer insights, and forecasts. Features include dynamic filtering, drill-down capabilities, and trend analysis.",
      technologies: ["Tableau", "Data Visualization", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">Selected works that showcase my technical abilities</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="mr-2">View Details</Button>
                <Button variant="ghost" size="sm">Source Code</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
