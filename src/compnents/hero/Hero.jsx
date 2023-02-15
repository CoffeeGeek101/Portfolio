import { Box, Button, Center, Image, Text, Tooltip } from '@chakra-ui/react'
import { Article, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import React, { useEffect, useState, useRef } from 'react'
import './hero.css'


export default function Hero() {

    const[role, setRole] = useState('role-1');
    const Intervalref = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(()=>{
        const animate_role = () =>{
            setTimeout(()=>{
                setRole('role-1');
            },0);
            setTimeout(()=>{
                setRole('role-2');
            },4000);
            setTimeout(()=>{
                setRole('role-3');
            },6000);
            setTimeout(()=>{
                setRole('role-4');
            },8000);
        }
        timeoutRef.current = animate_role();
        Intervalref.current = setInterval(animate_role, 10000);
     
        return()=>{
            clearTimeout(timeoutRef.current)
            clearInterval(Intervalref.current);
        }
        
    },[]);

  return (
    <Box className='hero-container'>
        <Center className='hero-wrapper' textAlign={'center'}>
            <Image className='hero-logo' src='https://media2.giphy.com/media/EZ9X7p7g6x1EK1jEIR/giphy.gif?cid=ecf05e47i29pvl6b6hv5byalg4kgqcbqblizpsnz5rwg2646&rid=giphy.gif&ct=s' alt='geek'/>
            <Box>
                <Text className='name'>My name is <em>Shoumyadeep</em>. I'm a</Text>
                <span className={`${role}`}> SOFTWARE ENGINEER</span>
                <Text className='hero-des'>I help people built interactive interfaces for their business. We might make a good team.</Text>
            </Box>
            <Box className='hero-links'>
                <Tooltip label="CoffeeGeek101">
                <GitHub className='link-ele git'/>
                </Tooltip>
                <Tooltip label="@shoumyadeep_">
                <Twitter className='link-ele twt'/>
                </Tooltip>
                <Tooltip label="Shoumyadeep Narayan">
                <LinkedIn className='link-ele linkedin'/>
                </Tooltip>
            </Box>
            <button className='resume-redirect'><Article/> My Resume</button>
        </Center>
    </Box>
  )
}
