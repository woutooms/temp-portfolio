import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Portfolio } from "../types";
import useFetch from "../hooks/useFetch";
import { 
  ArrowLeftIcon, 
  ArrowTopRightOnSquareIcon, 
  CalendarIcon, 
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const ProjectDetailPage: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const { data: portfolio } = useFetch<Portfolio>("/portfolio");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visible, setVisible] = useState<boolean>(false);

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  const project = portfolio.projects.find(
    p => p.name.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project niet gevonden</h1>
          <a 
            href="/projects"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Terug naar projecten
          </a>
        </div>
      </div>
    );
  }

  const images = project.images || [project.image];

  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Breadcrumb */}
      <section className=" bg-white border-b border-gray-200">
        <div className="section-container">
          <nav className={`flex items-center space-x-4 text-sm transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              Home
            </a>
            <span className="text-gray-300">/</span>
            <a href="/projects" className="text-gray-500 hover:text-primary-600 transition-colors">
              Projecten
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{project.name}</span>
          </nav>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-5 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="section-container">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
      </section>

      {/* Image Gallery */}
      <section className="py-5 bg-white">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            {/* Main Image */}
            <div className={`mb-8 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src={images[selectedImageIndex]}
                  alt={`${project.name} - Afbeelding ${selectedImageIndex + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className={`flex flex-wrap gap-6 justify-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-32 h-24 rounded-lg overflow-hidden transition-all duration-200 bg-gray-100 ${
                      selectedImageIndex === index
                        ? 'ring-2 ring-primary-500 scale-105'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-10 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Description */}
              <div className={`md:col-span-2 transition-all duration-700 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Over dit project
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  {(project.detailedDescription || project.description).split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className={`space-y-8 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Gebruikte technologieën
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Info */}
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
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 delay-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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