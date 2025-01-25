import * as React from 'react';
import { BarChart  } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS , valueFormatter } from './webusage/WebUsage';

export default function SimpleCharts({data}) {
    

    const gender = data.map((data)=>data.Gender && data.Gender ).filter((data)=>data)
    const count = data.map((data)=>data.Count && data.Count).filter((data)=>data)


    const genders = {
        gender,
        count
    }

    console.log(data)
    console.log(desktopOS)

//   const desktopOS = [
//         {
//           label: 'Windows',
//           value: 72.72,
//         },
//         {
//           label: 'OS X',
//           value: 16.38,
//         },
//         {
//           label: 'Linux',
//           value: 3.83,
//         },
//         {
//           label: 'Chrome OS',
//           value: 2.42,
//         },
//         {
//           label: 'Other',
//           value: 4.65,
//         },
//       ];


  return (
    // <BarChart
    //   xAxis={[
    //     {
    //       id: 'barCategories',
    //       data: gender,
    //       scaleType: 'band',
    //     },
    //   ]}
    //   series={[
    //     {
    //       data: count,
    //     },
    //   ]}
    //   width={500}
    //   height={300}
    // />

    
  


    <PieChart
    series={[
      {
        data: desktopOS,
        highlightScope: { fade: 'global', highlight: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        valueFormatter,
      },
    ]}
    height={200}
  />
  );
}
