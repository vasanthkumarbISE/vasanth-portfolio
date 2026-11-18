import React from 'react';
import { motion } from 'framer-motion';

import lifeDropImage from '../../assets/lifedrop.jpeg';
import healthcareImage from '../../assets/healthcare-management.jpeg';

import './Project.css';

const Project = () => {

  const details = [
    {
      image: lifeDropImage,
      name: 'LifeDrop – Blood Bank Management System',
      Git: 'https://github.com/vasanthkumarbISE/LifeDrop-Blood-Bank.git',
      description:
        'LifeDrop is designed to simplify blood bank operations by organizing donor details and blood stock information in a centralized system.',
      features: [],
      techStack: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      image: healthcareImage,
      name: 'Healthcare Management System',
      Git: 'https://github.com/vasanthkumarbISE/Healthcare-Management-System.git',
      description:
        'The main objective of this project is to improve the efficiency of healthcare management by reducing manual work, maintaining structured patient information, and simplifying administrative processes.',
      features: [],
      techStack: ['HTML', 'JavaScript', 'Java', 'CSS', 'Batchfile'],
    },
  ];

  /* ANIMATIONS */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (

    <section className="portfolio-projects-section">

      <motion.h2
        className="portfolio-projects-title"

        variants={titleVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: false,
          amount: 0.3,
        }}
      >
        Pro<span>jects.</span>
      </motion.h2>

      <motion.div
        className="portfolio-projects-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: false,
          amount: 0.12,
        }}
      >

        {details.map((item, index) => (

          <motion.div
            key={index}

            className="portfolio-project-card"

            variants={cardVariants}

            whileHover={{
              y: -8,
            }}
          >

            <div className="portfolio-project-image-wrapper">

              <img
                src={item.image}
                alt={item.name}
                className="portfolio-project-image"
              />

            </div>

            <div className="portfolio-project-content">

              <h3 className="portfolio-project-name">
                {item.name}
              </h3>

              <p className="portfolio-project-summary">
                {item.description}
              </p>

              {item.features.length > 0 && (
                <div className="portfolio-project-block">
                  <h4>Features</h4>
                  <ul>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="portfolio-project-block">

                <h4>Tech Stack</h4>

                <div className="portfolio-project-tech-list">

                  {item.techStack.map((tech, idx) => (

                    <span
                      key={idx}
                      className="portfolio-project-tech-badge"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              <div className="portfolio-project-links">

                {item.Live && item.Git ? (

                  <>
                    <motion.a
                      href={item.Live}
                      target="_blank"
                      className="portfolio-project-link"

                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={item.Git}
                      target="_blank"
                      className="portfolio-project-link"

                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      GitHub
                    </motion.a>
                  </>

                ) : (

                  <motion.a
                    href={item.Git}
                    target="_blank"
                    className="portfolio-project-link"

                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    GitHub
                  </motion.a>

                )}

              </div>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default Project;