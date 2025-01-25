import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import SimpleCharts from './LinePlot';


const CsvReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../public/csv/phd_gender.csv")
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data.filter((obje)=>obje[''] !== ''))
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching CSV:', error);
      });
  }, []);

  return (
    <div>
     
{
    data.length > 0 && <SimpleCharts data={data}  />
}
    </div>
  );
};

export default CsvReader;




