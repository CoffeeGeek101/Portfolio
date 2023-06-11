import {Tooltip } from '@chakra-ui/react'
import {GitHub, Language, LinkedIn, Twitter, WorkOutline } from '@mui/icons-material'
import React, { useEffect, useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './hero.css'
import {motion, useScroll, useTransform} from 'framer-motion';


export default function Hero() {

    const[role, setRole] = useState('role-1');
    const Intervalref = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(()=>{
        const animate_role = () =>{
            clearTimeout(timeoutRef.current)
            setTimeout(()=>{
                setRole('role-1');
            },0);
            setTimeout(()=>{
                setRole('role-2');
            },4000);
            setTimeout(()=>{
                setRole('role-3');
            },8000);
            setTimeout(()=>{
                setRole('role-4');
            },10000);
        }
        timeoutRef.current = animate_role();
        clearInterval(Intervalref.current);
        Intervalref.current = setInterval(animate_role, 12000);
     
        return()=>{
            clearTimeout(timeoutRef.current);
            clearInterval(Intervalref.current);
        }
        
    },[]);



  return (
    <div className='hero-container'>
        <div className='hero-wrapper'>
            <motion.img
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1, transition: {duration: 1.5}}}
            className='hero-logo' src='/portHero.webp' alt='geek'/>
            
            <div className='hero-element-wrapper'>
                <motion.p
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0, transition: {duration: 1}}}
                className='name'>My name is <em>Shoumyadeep</em>. I'm a</motion.p>
                <motion.p
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0, transition: {duration: 1, delay: 1}}}
                className={`${role}`}> SOFTWARE ENGINEER</motion.p>
                <motion.p 
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0, transition: {duration: 1, delay: 1.5}}}
                className='hero-des'>I help people built interactive interfaces for their business. We might make a good team.</motion.p>
            </div>
            <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale:1, transition: {duration: 0.5, delay: 2}}}
            className='hero-links'>
                <Tooltip label="CoffeeGeek101">
                <a href='https://github.com/CoffeeGeek101'><GitHub className='link-ele git'/></a>
                </Tooltip>
                <Tooltip label="@shoumyadeep_">
                <a href='https://twitter.com/Shoumyadeep_'><Twitter className='link-ele twt'/></a> 
                </Tooltip>
                <Tooltip label="Shoumyadeep Narayan">
                <a href='https://www.linkedin.com/in/shoumyadeep/'><LinkedIn className='link-ele linkedin'/></a>
                </Tooltip>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale:1, transition: {duration: 0.5, delay: 2}}}
            className='customer-needs'>
            <AnchorLink href='#connect'>
                <button className='resume-redirect'><WorkOutline className='customer-logo' style={{marginRight:'2px'}}/>  Want a Dev</button>
            </AnchorLink>
            <AnchorLink href='#connect'>
            <button className='resume-redirect'><Language className='customer-logo' style={{marginRight:'2px'}}/>  Want a Site</button>
            </AnchorLink>
            </motion.div>
        </div>
    </div>
  )
}
