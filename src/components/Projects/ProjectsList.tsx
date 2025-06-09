import React, { useEffect, useState } from "react";
import { ProjectsListProps } from "../../types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const createProjectSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <a
          key={index}
          href={`/project/${createProjectSlug(project.name)}`}
          className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Project Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/90 text-gray-800 rounded-full backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* View button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200 inline-flex items-center">
                Bekijk project
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsList;
