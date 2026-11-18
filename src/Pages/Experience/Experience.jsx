  import React from 'react';
  import './Experience.css';
  import { motion as Motion } from 'framer-motion';

  const Experience = () => {
    const fadeUp = {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.08,
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]  
        }
      }),
    };


    const technologies = [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'MySQL',
      'Spring Boot',
      'React',
      'Bootstrap',
    ];

    return (
      <div className='Experience-container'>
        <Motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          Exper<span>ience</span>
        </Motion.h2>

        <Motion.div
          className="experience-sec"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header">
            <Motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <strong>Role:</strong> Java Full Stack Developer Intern
            </Motion.p>

            <Motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <strong>Company:</strong> Besanth Technologies
            </Motion.p>

            <Motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <strong>Dates:</strong> Feb 2026 - May 2026
            </Motion.p>
          </div>

          <Motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            During my Java Full Stack internship, I built responsive web pages using HTML, CSS, Bootstrap, and JavaScript and integrated them with Spring Boot REST APIs and MySQL for full CRUD operations.
          </Motion.p>

          <div className="description">
            {[
              'Built responsive web pages using HTML, CSS, Bootstrap, and JavaScript',
              'Integrated frontend pages with Spring Boot REST APIs',
              'Connected application features to MySQL for CRUD operations',
            ].map((text, i) => (
              <Motion.p
                key={i}
                custom={i + 5}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {text}
              </Motion.p>
            ))}
          </div>

          <Motion.div
            className="tools"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={8}
          >
            {technologies.map((technology) => (
              <div className="tech-item" key={technology}>
                <p>{technology}</p>
              </div>
            ))}
          </Motion.div>
        </Motion.div>
      </div>
    );
  };

  export default Experience;
