import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import SimpleCharts from "./LinePlot";
import { useDispatch, useSelector } from "react-redux";
import { addPHDGenderData } from "./store/slice/gender";

const CsvReader = () => {
  const genderData = useSelector((state) => state.genderReducer?.gender?.phd);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!genderData) {
      fetch("../../public/csv/phd_gender.csv")
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            complete: (result) => {
              const dat = result.data.filter((obje) => obje[""] !== "");
              setData(dat);
              dispatch(addPHDGenderData(dat));
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
            },
          });
        })
        .catch((error) => {
          console.error("Error fetching CSV:", error);
        });
    } else {
      setData(genderData);
      // console.log('gender data is available')
    }
  }, []);

  return <div>{data.length > 0 && <SimpleCharts data={data} />}</div>;
};

export default CsvReader;
