import React from "react";
import { EducationProps } from "../../types";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
          {/* Timeline indicator */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 mt-1 font-medium">
                    {edu.school}
                  </p>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting line (except for last item) */}
          {index < education.length - 1 && (
            <div className="absolute left-[1.75rem] top-[4.5rem] w-0.5 h-6 bg-gray-200"></div>
          )}
          
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Education;
