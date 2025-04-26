
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "HackerRank 5-star C++ Achievement",
      description: "Earned a 5-star rating on HackerRank for C++, demonstrating advanced proficiency in the language through solving complex algorithmic challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: "International Mathematical Olympiad (IMO) Participation",
      description: "Participated in the International Mathematical Olympiad, representing my region in this prestigious global mathematics competition.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Data Analysis Project Excellence",
      description: "Successfully completed and received recognition for a complex data analysis project that provided actionable insights for business decision-making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="bg-secondary/50">
      <div className="container">
        <h2 className="section-title text-center">Achievements</h2>
        <p className="section-subtitle text-center">Recognition and milestones from my professional journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="animate-on-scroll hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <CardTitle className="text-center">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
