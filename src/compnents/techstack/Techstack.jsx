import { TurnLeft } from "@mui/icons-material";
import "./techstack.css";
import { motion, useScroll, useTransform } from "framer-motion";
import code from "../../assets/techelement.png";
import { techstack } from "../../lib/techstackData";
import { useRef } from "react";

export default function Techstack() {

  const coffee = useRef(null);
  const {scrollYProgress} = useScroll({
    target : coffee,
    offset : ['start start', 'start end']
  });
  const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [0,10, 500]);

  const codeRef = useRef(null);
  const {scrollYProgress : CodeElement} = useScroll({
    target : codeRef,
    offset : ['start end', 'start start']
  });

  const translateY_code = useTransform(CodeElement, [0, 0.5], [300,0]);

  const titleRef = useRef(null);
  const {scrollYProgress : title} = useScroll({
    target : titleRef,
    offset : ['start end', 'end start']
  });

  const opacity = useTransform(title, [0, 0.5, 1], [0, 1, 1]);

  return (
    <>
      <motion.img
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 50,
          repeat: Infinity,
        }}
        className="techstack-hero-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
      />
      <div className="techstack-container">
        <div className="techstack-wrapper">
          <motion.p 
          ref={titleRef}
          style={{opacity}}
          className="techstack-title">TechStack.</motion.p>
          <p className="techstack-des">
            Technologies I use for my personal & professional works.
          </p>
          <div className="techstack">
            {techstack.map((tech) => (
              <div className="techstack-element">
                <div className="tech-label">
                  <TurnLeft className="stack-waterfall" />
                  <p className="tech-name">{tech.name}</p>
                </div>
                <img className="tech-logo" src={tech.img} />
              </div>
            ))}
          </div>
          <motion.img
          ref={codeRef}
          style={{translateY : translateY_code}}
          initial={{opacity : 0}}
          animate={{opacity : 1, transition : {damping:1, duration : 3, delay : 1}}}
          className="code-element" src={code} />
          <motion.div 
          ref={coffee}
          style={{translateX}}
          initial={{opacity : 0}}
          animate={{opacity : 1, transition : {damping:1, duration : 3, delay : 1}}}
          className="punch-line">
            <p className="line-i">Turning Coffee</p>
            <p className="line-ii">
              into <span>Code</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
