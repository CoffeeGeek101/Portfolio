import { TurnLeft} from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react'
import './techstack.css';
import {motion} from 'framer-motion'
import code from '../../assets/techelement.png'
export default function Techstack() {

  return (
    <>
    <motion.img 
    animate={{rotate:[0,360]}}
    transition={{
      duration:50,
      // ease: "easeInOut",
      repeat: Infinity,
    }}
    className='techstack-hero-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"/>
    <div className='techstack-container'>
      <div className='techstack-wrapper'>
        <p className='techstack-title'>TechStack.</p>
        <p className='techstack-des'>Technologies I use for my personal & professional works.</p>
        <div className='techstack'>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>TypeScript</p>
              </div>
              <img className='tech-logo' src='https://cdn.hashnode.com/res/hashnode/image/upload/v1628508546375/5cUotnuhg.png'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>Next</p>
              </div>
              <img className='tech-logo' src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>React</p>
              </div>
              <img className='tech-logo' src='https://www.komododigital.co.uk/app/uploads/2021/05/React-1.jpg'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>HTML</p>
              </div>
              <img className='tech-logo' src='https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>Tailwind CSS</p>
              </div>
              <img className='tech-logo css' src='https://www.devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>Redis</p>
              </div>
              <img className='tech-logo firebase' src='https://www.mortensi.com/wp-content/uploads/2021/10/Redis-server.jpg'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>GitHub</p>
              </div>
              <img className='tech-logo firebase' src='https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png'/>
            </div>
            <div className='techstack-element'>
              <div className='tech-label'>
              <TurnLeft className='stack-waterfall'/>
              <p className='tech-name'>MongoDB</p>
              </div>
              <img className='tech-logo firebase' src='https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png'/>
            </div>
        </div>
        <img className='code-element' src={code}/>
        <div className='punch-line'>
          <p className='line-i'>Turning Coffee</p>
          <p className='line-ii'>into <span>Code</span>.</p>
        </div>
      </div>
    </div>
    </>
  )
}
