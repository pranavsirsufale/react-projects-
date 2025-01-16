import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  //! authentication true = can visit the route without authentication
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  const route = useLocation()



  


  useEffect(() => {
    //
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if( authStatus && route.pathname === '/login') {
        navigate('/')
    } else if (authStatus && route.pathname === '/signup'){
      navigate('/')
    }
    
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1> Loading... </h1> : <> {children} </>;
}