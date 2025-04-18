import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center p-8 bg-card rounded-lg shadow-md text-center">
      <div className="text-primary mb-5 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
} 