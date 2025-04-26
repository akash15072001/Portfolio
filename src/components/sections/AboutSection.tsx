
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-50">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="animate-on-scroll max-w-4xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed text-justify">
            I'm a passionate data analyst and software developer with a strong foundation in 
            mathematical and computational techniques. My journey in the realm of data science and software 
            development has equipped me with the skills to extract meaningful insights from complex data sets 
            and develop efficient software solutions.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-justify">
            I specialize in data analysis, machine learning algorithms, predictive modeling, and 
            software development. My technical expertise includes working with various programming languages 
            and frameworks, allowing me to approach problems from multiple angles and deliver robust solutions.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            I'm constantly expanding my knowledge and skills through continuous learning and practical application. 
            My goal is to leverage data-driven approaches to solve real-world problems and create impactful 
            software that makes a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
