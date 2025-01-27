import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { dataset , valueFormatter } from './formatter/Formatter'
import { useSelector } from 'react-redux'


const Bar = () => {


    

    const districtDataPHD = useSelector(state => state.districtsReducer.phdDistricts)

    console.log(districtDataPHD)
    console.log(dataset)

    const chartSetting = {
        xAxis: [
          {
            label: 'rainfall (mm)',
          },
        ],
        width: 500,
        height: 400,
      };
      


  return (
 
        <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
      />
 
  )
}

export default Bar