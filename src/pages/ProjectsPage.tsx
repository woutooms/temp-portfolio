import React from "react";
import { Portfolio } from "../types";
import ProjectsList from "../components/Projects/ProjectsList";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  const { data: portfolio } = useFetch<Portfolio>("/portfolio");

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mijn Projecten
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Een overzicht van mijn belangrijkste projecten en werk
          </p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <ProjectsList projects={portfolio.projects} />
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
