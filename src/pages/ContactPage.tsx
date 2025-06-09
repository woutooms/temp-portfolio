import React from "react";
import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-12"
    >
      {/* Header Section */}
      <section className="py-10 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Neem gerust contact met me op voor vragen of samenwerkingen.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <Contact />
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
