import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webusage/WebUsage";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { FcBusinessman } from "react-icons/fc";
// import { NavLink } from "react-router-dom";

export default function Pie({ data, allGenderData }) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const dark = useSelector((state) => state.themeReducer.theme);

  const districtData = useSelector(
    (state) => state.districtsReducer.phdDistricts
  );

  const [tempData, setTempData] = useState(data);
  const [dataLable, setDataLabel] = useState(
    "Total Enrollment Gender Distribution"
  );

  const [ishovered, setIsHovered] = useState(false);

  const total = tempData.reduce((acc, data) => {
    return (acc += parseFloat(data.Count));
  }, 0);

  const genders = tempData.map((data) => ({
    label: `${data.Gender} - ${data.Count} `,
    value: `${parseFloat((parseFloat(data.Count) / total) * 100).toFixed(2)} `,
  }));

  const handleShowData = (programmeData) => {
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
      <div
        className={`grid grid-cols-${
          isMobile || isTablet ? "1" : "2"
        } w-full justify-center align-center `}
      >
        {/*  First Div  */}

        <div className="">
          <div className=" justify-center align-center">
            <h1>{dataLable}</h1>
          </div>

          <PieChart
            series={[
              {
                data: genders,
                highlightScope: { fade: "global", highlight: "item" },

                // legend: {
                //   direction: 'row',
                //   position: { vertical: 'top', horizontal: 'middle' },
                //   padding: 10,
                // },

                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={isMobile ? 140 : 200}
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
        </div>

        {/*  Second div  */}
        <div
          className={`flex justify-center align-center max-w-full m-10 p-5 `}
        >
          <ul className="flex flex-col max-h-70 overflow-auto  ">
            {allGenderData &&
              allGenderData.map((genderDataObject) => (
                <li
                  onClick={() => handleShowData(genderDataObject)}
                  key={genderDataObject["PROGRAMME.NAME"]}
                  // style={{
                  //   backgroundColor : '#100112',

                  // }}

                  className={`px-5 ml-10 bg-[#100112] p-3 duration-200 cursor-pointer
                     hover:bg-[#A64D79]
                    `}
                  style={
                    dark
                      ? {
                          backgroundColor: "#100112",
                        }
                      : {
                          backgroundColor: "#EBD3F8",
                        }
                  }
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* <NavLink to={`programmewisegender/${genderDataObject['PROGRAMME.NAME']}`} > */}

                  <button>{genderDataObject["PROGRAMME.NAME"]}</button>

                  {/* </NavLink> */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
