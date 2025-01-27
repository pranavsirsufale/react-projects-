import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { themeSwither } from "../store/slice/theme";
import { CiDark } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { useMediaQuery } from "@mui/material";
import { FcList } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";

//todo we don't use a tag in react because it relodes the page
//! DIFFERENT BETWEENT LINK vS NAVLINK >>

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const dark = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("dark");
  const [on, setOn] = useState(true);

  const toggle = () => {
    setOn((is) => !is);
  };

  useEffect(() => {
    if (!dark) {
      setTheme("light");
      theme;
    }
  }, [dark]);

  const handleTheme = () => {
    dispatch(themeSwither());
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav
        className={`border-gray-200 px-4 lg:px-6 py-2.5`}
        style={{
          backgroundColor: dark ? `#201123` : "#e2f0f1",
        }}
      >
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/logo/logo.jpg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {isMobile ||
            (isTablet &&
              (on ? (
                <FcMinus className="duration-300" onClick={toggle} />
              ) : (
                <FcList className="duration-300" onClick={toggle} />
              )))}

          <div>
            {dark ? (
              <FiSun onClick={handleTheme} />
            ) : (
              <CiDark onClick={handleTheme} />
            )}
          </div>

          {/* <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-green-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div> */}

          <div
            className={`${
              !on && "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/graph"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Graph
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) => `
                            block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-green-700"
                            } border-b border-x-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
