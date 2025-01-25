import * as React from 'react';
import { BarChart  } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

export default function SimpleCharts({data}) {
    

    const gender = data.map((data)=>data.Gender && data.Gender ).filter((data)=>data)
    const count = data.map((data)=>data.Count && data.Count).filter((data)=>data)





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
