import React from "react";
import { Portfolio } from "../types";
import General from "../components/Portfolio/General";
import Skills from "../components/Portfolio/Skills";
import Education from "../components/Portfolio/Education";
import Experience from "../components/Portfolio/Experience";
import Projects from "../components/Portfolio/Projects";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";

const PortfolioPage: React.FC = () => {
  const { data: portfolio } = useFetch<Portfolio>("/portfolio");

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50"></div>
        <div className="relative section-container">
          <General 
            name={portfolio.name}
            title={portfolio.title}
            description={portfolio.description}
            socials={portfolio.contact.social}
          />
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative">
        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-10 bg-white"
        >
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enkele technologieën en programmeertalen waarmee ik ervaring heb.
              </p>
            </div>
            <Skills skills={portfolio.skills} />
          </div>
        </motion.section>

        {/* Education & Experience Section */}
        <section className="py-10 bg-gray-50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Opleiding
                  </h2>
                  <p className="text-lg text-gray-600">
                    Mijn academische achtergrond en certificaten
                  </p>
                </div>
                <Education education={portfolio.education} />
              </div>

              {/* Experience */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ervaring
                  </h2>
                  <p className="text-lg text-gray-600">
                    Professionele werkervaring en projecten
                  </p>
                </div>
                <Experience experience={portfolio.experience} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="py-10 bg-white">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Uitgelichte Projecten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Een selectie van mijn recente werk en projecten
              </p>
            </div>
            <Projects projects={portfolio.projects} />
            <div className="text-center mt-12">
              <a
                href="/projects"
                className="btn-primary"
              >
                Bekijk alle projecten
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
