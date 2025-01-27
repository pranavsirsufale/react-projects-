// import SimpleCharts from "./components/LinePlot";
import CsvReader from "./components/GetData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./router/OutLet";
import Home from "./components/home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Github from "./github/Github";
import ContactUsForm from "./components/contact/ContactUsForm";
import ProgrammeWiseGender from "./components/gender/ProgrammeWiseGender";
import Bar from "./components/charts/Bar";
import { addPHDDistricts } from './components/store/slice/districts'



function App() {
  const dark = useSelector((state) => state.themeReducer.theme);

  const [theme, setTheme] = useState("dark");

  const [phdDistricts, setPhdDistricts] = useState([])

  useEffect(() => {
    if (!dark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [dark]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <OutLet setTheme={setTheme} />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "graph",
          element: <CsvReader />,
          children: [
            {
              path: "/graph/programmewisegender/:name",
              element: <ProgrammeWiseGender />,
            },
          ],
        },
        {
          path : 'districts',
          element : <Bar/>
        },
        {
          path: "github",
          element: <Github />,
        },
        {
          path: "contactus",
          element: <ContactUsForm />,
        },
      ],
    },
  ]);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });



  fetch('/districts_distribution/phd_district_distribution.csv')
  .then(response => response.text())
   .then((csvText )=>{
    Papa.parse(csvText , {
      header : true,
      complete : (result)=> {
        const districtsData = result.data.filter(object => object[''] !== '');
        setPhdDistricts(districtsData)
        dispatch(addPHDDistricts(districtsData))
      }
    })
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <RouterProvider router={router}>
          <RouterProvider router={router} />
        </RouterProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
