import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webusage/WebUsage";
import { FcBusinessman } from "react-icons/fc";

export default function SimpleCharts({ data }) {
  const total = data.reduce((acc, data) => {
    return (acc += parseFloat(data.Count));
  }, 0);

  const genders = data.map((data) => ({
    label: `${data.Gender} - ${data.Count} `,
    value: `${parseFloat((parseFloat(data.Count) / total) * 100).toFixed(2)} `,
  }));

  return (
    <>
      <PieChart
        series={[
          {
            data: genders,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        height={200}
      />

      <div className="flex items-center justify-center">
       
          <img src="../../public/gender/girl.png" className="hover:scale-110 transition duration-300" alt="girl" width="100rem" />
     

       
          <img src="../../public/gender/boy.png" className="hover:opacity-75 transition duration-300" alt="boy" width="100rem" />
      
     
          <img
            src="../../public/gender/trans.png"
            alt="Transgender"
            width="100rem"

            className="hover:
            
            grayscale transition duration-300"
          />


          
          {/* <img
            src="../../public/gender/trans.png"
            alt="Transgender"
            width="100rem"

            className="hover:scale-105 hover:rotate-3 hover:grayscale hover:shadow-lg transition duration-300"
          />
          <img
            src="../../public/gender/trans.png"
            alt="Transgender"
            width="100rem"

            className="hover:blur-sm transition duration-300"
          />
          <img
            src="../../public/gender/trans.png"
            alt="Transgender"
            width="100rem"

            className="hover:border-blue-500 transition duration-300"
          /> */}
    
      </div>
    </>
  );
}
