import React from "react";

interface Skill {
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1"
        >
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          <div className="absolute inset-[2px] bg-white rounded-[10px] group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-accent-50 transition-all duration-300"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Decorative gradient bar at top */}
            <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300 mb-3">
                {skill.name}
              </h3>
              
              {/* Enhanced level badge with gradient */}
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
                skill.level === 'Ervaren' 
                  ? 'bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-md'
                  : 'bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 group-hover:from-accent-500 group-hover:to-primary-500 group-hover:text-white group-hover:shadow-md'
              }`}>
                {skill.level}
              </span>
            </div>
          </div>
          
          {/* Enhanced decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:opacity-60 transition-all duration-300 group-hover:scale-110"></div>
          <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-30 group-hover:opacity-80 transition-all duration-300 group-hover:scale-125"></div>
          
          {/* Bottom gradient accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
