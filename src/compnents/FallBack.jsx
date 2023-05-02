import './fallback.css'
import React from 'react'
import {motion} from 'framer-motion'

const FallBack = () => {
  return (
    <div className='fallback'>
        <div className='fallback-ii'>
        <motion.img 
    animate={{rotate:[0,360]}}
    transition={{
      duration:4,
      repeat: Infinity,
    }}
    className='loader-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"/>
       <p className='loading'>Loading</p>
       </div>
    </div>
  )
}

export default FallBack