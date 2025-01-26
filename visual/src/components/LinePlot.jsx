import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webusage/WebUsage";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { FcBusinessman } from "react-icons/fc";
// import { NavLink } from "react-router-dom";

export default function SimpleCharts({ data, allGenderData }) {

  const [tempData, setTempData] = useState(data);
  const [dataLable, setDataLabel] = useState(
    "Total Enrollment Gender Distribution"
  );

  const total = tempData.reduce((acc, data) => {
    return (acc += parseFloat(data.Count));
  }, 0);

  const genders = tempData.map((data) => ({
    label: `${data.Gender} - ${data.Count} `,
    value: `${parseFloat((parseFloat(data.Count) / total) * 100).toFixed(2)} `,
  }));

  const handleShowData = (programmeData) => {
    console.log(programmeData["PROGRAMME.NAME"]);

    setDataLabel(programmeData["PROGRAMME.NAME"]);

    //! UNDERSTAND THIS LETTER >>>>>>>> IMP
    const reshapedObject = Object.entries(programmeData)
      .filter(
        ([key]) => key !== "Total" && key !== "PROGRAMME.NAME" && key !== ""
      )
      .map(([key, value], index) => ({
        "": (index + 1).toString(),
        Gender: key,
        Count: value,
      }));

    setTempData(reshapedObject);
  };

  return (
    <>
      <div>
        <h1>{dataLable}</h1>
      </div>

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
        <img
          src="/gender/boy.png"
          className="hover:scale-110 transition duration-300 hover:rotate-3
          hover:contrast-120 hover:drop-shadow-[0_0_20px_rgba(0,123,255,0.8)]
          "
          alt="boy"
          width="100rem"
        />

        <img
          src="/gender/girl.png"
          className="hover:scale-110 transition duration-300 hover:rotate-3
          hover:contrast-120 hover:drop-shadow-[0_0_20px_rgba(0,123,255,0.8)]
          "
          alt="girl"
          width="100rem"
        />

        <img
          src="/gender/trans.png"
          alt="Transgender"
          width="100rem"
          className="hover:scale-110 transition duration-300 hover:rotate-3
          
        hover:contrast-120 hover:drop-shadow-[0_0_20px_rgba(0,123,255,0.8)]

          "
        />
      </div>

      <div>
        <ul>
          {allGenderData &&
            allGenderData.map((genderDataObject) => (
              <li key={genderDataObject["PROGRAMME.NAME"]}>
                {/* <NavLink to={`programmewisegender/${genderDataObject['PROGRAMME.NAME']}`} > */}

                <button onClick={() => handleShowData(genderDataObject)}>
                  {genderDataObject["PROGRAMME.NAME"]}
                </button>

                {/* </NavLink> */}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
