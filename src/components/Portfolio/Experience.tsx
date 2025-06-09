import React from "react";
import { BriefcaseIcon, LinkIcon } from "@heroicons/react/24/outline";

interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
  website?: string;
}

interface ExperienceProps {
  experience: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-200"
        >
          {/* Timeline indicator */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent-700 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-gray-600 font-medium">
                      {exp.company}
                    </p>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-2 py-1 text-accent-600 hover:text-accent-700 hover:bg-accent-50 rounded-md transition-all duration-200 cursor-pointer"
                        title="Bezoek website"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Website</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-accent-100 text-accent-700 rounded-full group-hover:bg-accent-200 transition-colors duration-300">
                    {exp.year}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
          
          {/* Connecting line (except for last item) */}
          {index < experience.length - 1 && (
            <div className="absolute left-[1.75rem] top-[4.5rem] w-0.5 h-8 bg-gray-200"></div>
          )}
          
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-50/30 to-primary-50/30 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
