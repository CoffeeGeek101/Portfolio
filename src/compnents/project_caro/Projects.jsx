import { GitHub } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import "./project.css";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

export default function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(0);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth);
    console.log(carousel.current.offsetWidth);
  }, [carousel.current.offsetWidth]);

  return (
    //inner caro - project-carousel
    <>
      <div id="project" className="project-container">
        <div className="project-wrapper">
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className="caro-wrapper"
          >
            <img
              className="project-hero"
              src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
            />
            <p className="project-heading">Projects.</p>
            <p className="project-des">
              These are some of the projects I have worked on.
            </p>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="project-carousel"
            >
              {projects.map((project) => (
                <div className="project" key={project.link}>
                  <img className="project-img" src={project.img} />
                  <div className="project-overview">
                    <div className="about-project">
                      <div className="project-details">
                        <p className="project-title">{project.title}</p>
                        <p className="project-category">{project.des}</p>
                      </div>
                      <a className="github-linker" href={project.link}>
                        <GitHub />
                      </a>
                    </div>
                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <button className="project-stack-tag">{tech}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
