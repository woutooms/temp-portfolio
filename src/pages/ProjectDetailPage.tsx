import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Project } from "../types";
import { motion } from "framer-motion";
import { 
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: project } = useFetch<Project>(`/projects/${id}`);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-5 bg-gradient-to-br from-primary-50 to-accent-50"
      >
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/80 text-gray-800 rounded-full backdrop-blur-sm mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              {project.year && (
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.status && (
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>{project.status}</span>
                </div>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span>Website bezoeken</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images && project.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`${project.name} afbeelding ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-10 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Over dit project
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                {project.detailedDescription && project.detailedDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Gebruikte technologieën
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 rounded-lg p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Project informatie
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Categorie</span>
                      <p className="text-gray-900">{project.category}</p>
                    </div>
                    {project.year && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Periode</span>
                        <p className="text-gray-900">{project.year}</p>
                      </div>
                    )}
                    {project.status && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Status</span>
                        <p className="text-gray-900">{project.status}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Geïnteresseerd in samenwerking?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Neem contact met me op om te bespreken hoe ik jouw project kan helpen realiseren.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary"
              >
                Contact opnemen
              </a>
              <a
                href="/projects"
                className="btn-secondary inline-flex items-center"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Alle projecten bekijken
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage; 