import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';



export const Header = () => {
    return (
        <AppBar sx={{
          padding: '.7rem 6rem',
          //backgroundPosition: 'center',
          //backgroundImage:'url("https://i.pinimg.com/564x/44/6c/7f/446c7fbeca2836c58f0d99c5dc06473a.jpg")',
          background:'linear-gradient(45deg, #0073e6, #00c6a7)',
          position:'fixed',
          boxShadow:'0 .5rem 1rem rgba(0,0,0,1)',
          display: 'inlline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        
            }}>
          <Typography variant="h5">
              Proyecto Acecom
            </Typography>
          <Toolbar sx={{
            display: 'flex',
            fontSize: '1.3rem',
          }}>
              <Link href="#GraficaPH" underline="none" color="inherit" sx={{marginLeft:'1.5rem'}}>ph</Link>
              <Link href="#GraficaTemp" underline="none" color="inherit" sx={{marginLeft:'1.5rem'}}>Temperatura</Link>
              <Link href="#GraficaTurb" underline="none" color="inherit" sx={{marginLeft:'1.5rem'}}>Turbidez</Link>
              <Link href="#GraficaResi" underline="none" color="inherit" sx={{marginLeft:'1.5rem'}}>Residuos</Link>
              
            
            {/* Add navigation menu or user info here */}
          </Toolbar>
        </AppBar>
      );
}
