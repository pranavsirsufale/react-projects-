import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Pie from "./Pie";
import { useDispatch, useSelector } from "react-redux";
import { addPHDGenderData , addPhdProgrammeWiseGenderDistribution } from "./store/slice/gender";


const CsvReader = () => {
  const genderData = useSelector((state) => state.genderReducer?.gender?.phd);
  const allProgrammeGender = useSelector((state) => state.genderReducer?.phdProgrammeWiseGender)
  


  
  const [data, setData] = useState([]);
  const [genderEachProgramme , setGenderEachProgramme] = useState([])
 
  const dispatch = useDispatch();

  
 
  
  useEffect(() => {
   
    
  
    if (!genderData) {

      

      fetch("/csv/phd_gender.csv")
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            complete: (result) => {
              const dat = result.data.filter((obje) => obje[""] !== "");
              setData({allGender : dat});
              dispatch(addPHDGenderData({allGender : dat}));
              fetch('/all_programme_gender/all_programme_gender.csv')
              .then((response)=> response.text())
              .then((csvText) => {
                Papa.parse(csvText , {
                  header : true,
                  complete : (result) => {
                    const dat = result.data.filter((column) => column[''] !== "");
                    setGenderEachProgramme(dat)
                    dispatch(addPhdProgrammeWiseGenderDistribution(dat))
                  }
                })
              })
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

  return <div>{data?.allGender?.length > 0 && <Pie data={data.allGender} allGenderData={genderEachProgramme} />}</div>;
};

export default CsvReader;
