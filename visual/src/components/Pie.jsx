import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webusage/WebUsage";
import { useSelector } from "react-redux";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { FcBusinessman } from "react-icons/fc";
// import { NavLink } from "react-router-dom";

export default function Pie({ data, allGenderData }) {
  const dark = useSelector((state) => state.themeReducer.theme);

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
      <div className="flex justify-center align-center my-7">
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

      <div className="flex items-center justify-center pr-24 pt-5">
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




      <div
        className={`flex justify-center align-center max-w-[100vw] m-10 p-5 `}
      >
        <ul
          // className="flex justify-center align-center px-10 w-full overflow-x-auto"

          className="flex flex-col max-h-20 overflow-auto 
          
          "
          // style={{
          //   scrollPaddingInline : '2px solid red'
          // }}
        >
          {allGenderData &&
            allGenderData.map((genderDataObject) => (
              <li
              onClick={() => handleShowData(genderDataObject)}
                key={genderDataObject["PROGRAMME.NAME"]}
                className={`px-5 ml-10 bg-emerald-${!dark ? '200':'950'} p-3 hover:bg-blue-${!dark ?'100' : '500'} duration-200 cursor-pointer`}

              
              >
                {/* <NavLink to={`programmewisegender/${genderDataObject['PROGRAMME.NAME']}`} > */}

                <button >
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
