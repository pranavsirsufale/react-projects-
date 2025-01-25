import React, { useState } from 'react';
import Papa from 'papaparse';
import SimpleCharts from './LinePlot';

const CsvReader = () => {
  const [data, setData] = useState([]);



  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}


    {
        data.length > 0 && <SimpleCharts data={data}  />
    }


    </div>
  );
};

export default CsvReader;
