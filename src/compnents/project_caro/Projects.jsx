import { GitHub } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import './project.css'
import {motion} from 'framer-motion'

export default function Projects() {

    const[width, setWidth] = useState(0);
    const carousel = useRef(0);
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        console.log(carousel.current.scrollWidth);
        console.log(carousel.current.offsetWidth);
    },[])
    console.log(width);

  return (
    //inner caro - project-carousel
    <>
    <div id='project' className='project-container'> 
        <div className='project-wrapper'> 
        <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='caro-wrapper'> 
        <img className='project-hero' src='https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png'/>
            <p className='project-heading'>Projects.</p>
            <p className='project-des'>These are some of the projects I have worked on.</p>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='project-carousel'>
                <div className='project'>
                    <img className='project-img' src='/chat-u.png'/>
                    <div className='project-overview'>
                        <div className='about-project'>
                            <div className='project-details'>
                                <p className='project-title'>chatU</p>
                                <p className='project-category'>Realtime Chat Application</p>
                            </div>
                            <a className='github-linker' href='https://github.com/CoffeeGeek101/chatU'>
                            <GitHub/>
                            </a>
                        </div>
                        <div className='project-stack'>
                            <button className='project-stack-tag'>React</button>
                            <button className='project-stack-tag'>Firebase</button>
                            <button className='project-stack-tag'>Framer</button>
                            <button className='project-stack-tag'>APIs</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-img' src='/weather.png'/>
                    <div className='project-overview'>
                        <div className='about-project'>
                            <div className='project-details'>
                                <p className='project-title'>Weather Application</p>
                                <p className='project-category'>Modern weather UI</p>
                            </div>
                            <a className='github-linker' href='https://github.com/CoffeeGeek101/Modern-weather-app.'>
                            <GitHub/>
                            </a>
                        </div>
                        <div className='project-stack'>
                            <button className='project-stack-tag'>React</button>
                            <button className='project-stack-tag'>AsyncPaginate</button>
                            <button className='project-stack-tag'>APIs</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-img' src='https://w0.peakpx.com/wallpaper/172/343/HD-wallpaper-netflix-logo-black-logo-minimal-netflix.jpg'/>
                    <div className='project-overview'>
                        <div className='about-project'>
                            <div className='project-details'>
                                <p className='project-title'>Netflix Clone</p>
                                <p className='project-category'>FullStack</p>
                            </div>
                            <a className='github-linker' href='https://github.com/CoffeeGeek101/Netflix-frontend'>
                            <GitHub/>
                            </a>
                        </div>
                        <div className='project-stack'>
                            <button className='project-stack-tag'>React</button>
                            <button className='project-stack-tag'>MonogDB</button>
                            <button className='project-stack-tag'>Axios</button>
                            <button className='project-stack-tag'>APIs</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-img' src='/port-folio.png'/>
                    <div className='project-overview'>
                        <div className='about-project'>
                            <div className='project-details'>
                                <p className='project-title'>Modern Portfolio UI</p>
                                <p className='project-category'>Frontend UI</p>
                            </div>
                            <a className='github-linker' href='https://shoumyadeep.netlify.app'>
                            <GitHub/>
                            </a>
                        </div>
                        <div className='project-stack'>
                            <button className='project-stack-tag'>React</button>
                            <button className='project-stack-tag'>Framer</button>
                            <button className='project-stack-tag'>CSS</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        </div>
    </div>
    </>
  )
}
