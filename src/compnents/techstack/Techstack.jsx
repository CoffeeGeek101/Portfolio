import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import './techstack.css';

export default function Techstack() {
  return (
    <Box className='techstack-container'>
      <Box className='techstack-wrapper'>
        <Text className='techstack-title'>Tech Stack.</Text>
        <Text className='techstack-des'>Technologies i use for my personal and professional works.</Text>
        
      </Box>
    </Box>
  )
}
