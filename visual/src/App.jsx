import SimpleCharts from "./components/LinePlot";
import CsvReader from "./components/GetData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./router/OutLet";
import Home from "./components/home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Github from "./github/Github";

function App() {
  const dark = useSelector((state) => state.themeReducer.theme);

  const [theme, setTheme] = useState("dark");

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
        },
        {
          path: "github",
          element: <Github />,
        },
      ],
    },
  ]);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

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
