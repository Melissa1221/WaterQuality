import { Button, Typography } from '@mui/material';
import React from 'react'

export const Boton = ({ buttonName }, {color}) => {

  return (
    <div className='boton' >
        <Button variant="contained" sx={{backgroundColor: {color}}} >
        { buttonName }
        </Button>
    </div>
  )
}
