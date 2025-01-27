import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { dataset , valueFormatter } from './formatter/Formatter'
import { useSelector } from 'react-redux'


const Bar = () => {


    

    const districtDataPHD = useSelector(state => state.districtsReducer.phdDistricts)

   

    const chartSetting = {
        xAxis: [
          {
            label: 'PHD Student District Wise Distribution',
          },
        ],
        width: 1000,
        height: 1000,
      };


     
      let start = 0 
      let pointer = 9 

      const [slicedData , setSlicedData ] = useState([])

      
      useEffect(()=>{

        const districtSlice = []
      for(let i = start ; i <= pointer ; i++ ){
        districtSlice.push(districtDataPHD[i])
      }
      setSlicedData(districtSlice)
      },[])
     
      


  return (
 
        slicedData && <BarChart
        dataset={slicedData}
        yAxis={[{ scaleType: 'band', dataKey: 'District' }]}
        series={[{ dataKey: 'Count', label: 'District Distribution', valueFormatter  }]}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
        />
 
  )
}

export default Bar