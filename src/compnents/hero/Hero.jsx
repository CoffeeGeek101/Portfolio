import { Box, Button, Center, Image, Text, Tooltip } from '@chakra-ui/react'
import { Article, GitHub, Language, LinkedIn, Twitter, WorkOutline } from '@mui/icons-material'
import React, { useEffect, useState, useRef } from 'react'
import './hero.css'
import {motion} from 'framer-motion';


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
            <img className='hero-logo' src='https://media2.giphy.com/media/EZ9X7p7g6x1EK1jEIR/giphy.gif?cid=ecf05e47i29pvl6b6hv5byalg4kgqcbqblizpsnz5rwg2646&rid=giphy.gif&ct=s' alt='geek'/>
            <div className='hero-element-wrapper'>
                <p className='name'>My name is <em>Shoumyadeep</em>. I'm a</p>
                <p className={`${role}`}> SOFTWARE ENGINEER</p>
                <p className='hero-des'>I help people built interactive interfaces for their business. We might make a good team.</p>
            </div>
            <div className='hero-links'>
                <Tooltip label="CoffeeGeek101">
                <GitHub className='link-ele git'/>
                </Tooltip>
                <Tooltip label="@shoumyadeep_">
                <Twitter className='link-ele twt'/>
                </Tooltip>
                <Tooltip label="Shoumyadeep Narayan">
                <LinkedIn className='link-ele linkedin'/>
                </Tooltip>
            </div>
            <div className='customer-needs'>
            <button className='resume-redirect'><WorkOutline className='customer-logo'/>  Want a Dev</button>
            <button className='resume-redirect'><Language className='customer-logo'/>  Want a Site</button>
            </div>
        </div>
    </div>
  )
}
