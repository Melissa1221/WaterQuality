import React, { useEffect, useState } from 'react'
import { ColorType, LineStyle, createChart } from 'lightweight-charts'
import { Box, Button, Tooltip } from '@mui/material'
import clientSocket from '../Network'


export const GraficaTemperaura = props => {
  const {data} = props;
  const chartContainerRef = React.useRef();
  const tooltipRef = React.useRef();
  const chartRef = React.useRef();

  console.log(data);

  useEffect( () => {


    const chart = createChart(chartContainerRef.current);
    chart.applyOptions({
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
      layout: {
        background: { color: 'white' },
        textColor: 'black',
    },
    grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
    },
      width : 900,
      height: 400,  
      display: 'flex',
      crosshair: {
        vertLine: {
          width: 5, 
          style: LineStyle.Solid,
        }
      },
  });
  chart.timeScale().applyOptions({
    borderColor: 'rgb(25,24,40)',
  })
  chart.timeScale().applyOptions({
    borderColor: 'rgb(25,24,40)',
  })

  const handleResize = () => {
    chart.applyOptions({
      width:chartContainerRef.current.clientWidth,
    })
  }
  window.addEventListener('resize', handleResize)
    
  chartRef.current = chart
    
    
    return () => {
      chart.remove();
      chart.current = undefined;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    if (chartRef.current ){
      const newSeries = chartRef.current.addAreaSeries({
        lineColor: '#028090',
        topColor: '#028090',
        bottomColor: 'white',
        textColor: 'black',
      } );
      newSeries.setData(data);
    }
  }, [data])

  


  return (
    <Box  id='#GraficaTemp' sx={{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      
      }}
       >
      <div  ref={chartContainerRef} style={{
        alignItems: 'center',
        justifyContent: 'center', 
        display: 'flex',
      }} >
        
      </div>
      
    </Box>
  )
}
