import React from 'react';
import { AboutTemplateProps } from './AboutTemplateProps.interface';
import './AboutTemplate.css';

const AboutTemplate: React.FC<AboutTemplateProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="about-template min-h-screen bg-gray-50 px-6 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="about-header mb-8 text-center">
          <h1 className="about-title text-3xl font-semibold text-gray-800">
            {title}
          </h1>
          <p className="about-description mt-4 text-xl text-gray-600">
            {description}
          </p>
        </div>
        <div className="about-content">{children}</div>
      </div>
    </div>
  );
};

export default AboutTemplate;
