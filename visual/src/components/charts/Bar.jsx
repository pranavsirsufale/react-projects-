import React, { useState } from 'react'
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
        width: 500,
        height: 500,
      };

      
      
      const [slicing , setSlicing ] = useState([0,9])
      

      // console.log(start, pointer)
      console.log(slicing)
      
      const initialSlice = []

      
      for(let i = slicing[0] ; i <= slicing[1] ; i++ ){
        initialSlice.push(districtDataPHD[i])
      }
      
      const [slicedData , setSlicedData ] = useState(initialSlice)

      const sliceCreator = () => {
        

        setSlicing((slicing) => {
          slicing[0] = slicing[0] + 10 
          slicing[1] = slicing[1] + 10 

          return slicing
        })

        const districtSlice = []
      for(let i = slicing[0] ; i <= slicing[1] ; i++ ){
        districtSlice.push(districtDataPHD[i])
      }
      setSlicedData(districtSlice)
      }


     
    

  return (
    <>
    <div
    className='flex w-full justify-center '
    >
        <BarChart
      dataset={slicedData}
      yAxis={[{ scaleType: 'band', dataKey: 'District' }]}
      series={[{ dataKey: 'Count', label: 'District Distribution', valueFormatter  }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
      />

</div>
      <button
      onClick={sliceCreator}
      >
        Slice 
      </button>
      </>
 
  )
}

export default Bar