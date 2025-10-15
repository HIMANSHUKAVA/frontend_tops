import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Toolbar } from '@mui/x-charts';
import Layoutm from '../Layoutm'
import { Box, Divider, Typography } from '@mui/material';

export default function DataChart() {

    // create the chart for student attendece and absent

    const [chartData ,  setChartData] =  useState({
       presentData: [],
       absentData: [],
       dates: [], 
    })

useEffect(() => {
  fetch(`http://localhost:8080/view-attend`) // यहाँ अपनी API डालें
    .then((res) => res.json())
    .then((data) => {
      const dateMap = {};
      // डेटा को date के हिसाब से गिनना
      data.forEach((item) => {
        const date = item.date;
        if (!dateMap[date]) {
          dateMap[date] = { present: 0, absent: 0 };
        }
        if (item.status.toLowerCase() === "attend") {
          dateMap[date].present += 1;
        } else {
          dateMap[date].absent += 1;
        }
      });

      
      const dates = Object.keys(dateMap).sort();
      const presentData = dates.map((d) => dateMap[d].present);
      const absentData = dates.map((d) => dateMap[d].absent);

      setChartData({ presentData, absentData, dates });
    })
    .catch((err) => console.error("डेटा लाने में त्रुटि:", err));
}, []);

    
  return (
    <>
    <Layoutm/>

    <Toolbar/>

    <Box sx={{ml:"190px" , p:3}}>
        <Typography variant="h4" color="initial">Attendence Deta</Typography>
        <Divider sx={{mt:2}}/>

        <BarChart
      series={[
        { data: chartData.presentData, label: "Present", id: "presentId" },
        { data: chartData.absentData, label: "Absent", id: "absentId" },
      ]}
      xAxis={[{ data: chartData.dates }]}
      yAxis={[{ width: 50 }]}
    />
    </Box>
    </>
  )
}
