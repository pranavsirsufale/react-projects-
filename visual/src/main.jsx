import { createRoot } from "react-dom/client";
import "./index.css";
import CsvReader from "./components/GetData";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./router/OutLet";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider, useSelector } from "react-redux";
import { store } from "./components/store/store";




const theme = (theme) => {
  return theme
}

const darkTheme = createTheme({
  palette: {
    mode: theme() || 'dark'
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutLet theme={theme} />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "graph",
        element: <CsvReader />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
