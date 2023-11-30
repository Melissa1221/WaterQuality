import React from 'react'
import { Box, Typography } from '@mui/material';

export const FondoImagen = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%', // Esto hace que el contenedor ocupe toda la pantalla horizontal
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage:'url("https://images.unsplash.com/photo-1618426018046-77564bc4b0eb?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      //background:'linear-gradient(45deg, #0073e6, #00c6a7)',
    }}>

    <div className='bg'>
            <Typography variant='h1' sx={{ textAlign: 'center', color: 'white' }}>
              Water Quality
            </Typography>
            
            <Typography variant='subtitule1'sx={{ textAlign: 'center', color: 'white' }}>
              Se muestran datos de calidad de agua, presentando diversos indicadores como el nivel de pH, temperatura,
              turbidez, y residuos sólidos. 
            </Typography>
          </div>

    </Box>
  )
}
