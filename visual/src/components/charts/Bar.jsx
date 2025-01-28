import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useSelector } from "react-redux";
// import { dataset, valueFormatter } from "./formatter/Formatter";

const Bar = () => {
  const districtDataPHD = useSelector(
    (state) => state.districtsReducer.phdDistricts
  );
  const chartSetting = {
    xAxis: [
      {
        label: "PHD Student District Wise Distribution",
      },
    ],
    width: 500,
    height: 500,
  };

  const [slicing, setSlicing] = useState([0, 9]);

  const initialSlice = [];
  for (let i = slicing[0]; i <= slicing[1]; i++) {
    initialSlice.push(districtDataPHD[i]);
  }
  const [slicedData, setSlicedData] = useState(initialSlice);

  const sliceLimit = districtDataPHD.length;

  const sliceCreator = (forward = false) => {
    if (!forward) {
      if (slicing[1] <= 9 || slicing[0] < 0) {
        setSlicing((newSlice) => {
          const slicing = [...newSlice];
          slicing[0] = sliceLimit - 11;
          slicing[1] = sliceLimit - 1;
        });

        console.log(slicing);
      }

      setSlicing((sliceNew) => {
        const slicing = [...sliceNew];
        slicing[0] -= 10;
        slicing[1] -= 10;

        return slicing;
      });
    } else {
      if (slicing[1] >= sliceLimit - 1) {
        setSlicing((newSlicing) => {
          const slicing = [...newSlicing];
          slicing[0] = 0;
          slicing[1] = 9;
          return slicing;
        });
      }

      setSlicing((slicing) => {
        slicing[0] += 10;
        slicing[1] += 10;
        return slicing;
      });
    }

    const districtSlice = [];
    for (let i = slicing[0]; i <= slicing[1]; i++) {
      districtSlice.push(districtDataPHD[i]);
    }
    setSlicedData(districtSlice);
  };

  return (
    <>
      <div className="flex w-full justify-center ">
        <BarChart
          dataset={slicedData}
          yAxis={[{ scaleType: "band", dataKey: "District" }]}
          series={[
            {
              dataKey: "Count",
              label: "District Distribution",
            },
          ]}
          layout="horizontal"
          grid={{ vertical: true }}
          {...chartSetting}
        />
      </div>

      <div className="flex justify-center align-center p-5 gap-10">
        <button
          onClick={() => sliceCreator(false)}
          className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
        >
          Previous
        </button>
        <button
          onClick={() => sliceCreator(true)}
          className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Bar;
