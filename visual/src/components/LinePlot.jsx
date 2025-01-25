import * as React from 'react';
import { BarChart  } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS , valueFormatter } from './webusage/WebUsage';

export default function SimpleCharts({data}) {
    
    const total = data.reduce((acc,data)=>{
        return acc += parseFloat(data.Count)
    },0)

    const genders = data.map((data)=> ({ label : `${data.Gender} - ${data.Count} ` ,value : `${(parseFloat((parseFloat(data.Count)/ total ) * 100).toFixed(2))} ` }))



  return (
   
    
  


    <PieChart
    series={[
      {
        data: genders,
        highlightScope: { fade: 'global', highlight: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        valueFormatter,
        
      },
    ]}
    height={200}
  />
  );
}
