import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

function Github() {
  const [userDetails, setUserDetails] = useState({
    public_repos: "",
    avatar_url: "",
    login: "",
    html_url: "",
    name: "",
    bio: "",
  });

  const githubInfoLoader = async () => {
    const response = await fetch(
      "https://api.github.com/users/pranavsirsufale"
    );
    const dat = await response.json();
    return dat;
  };

  const loadUserData = async () => {
    const userData = await githubInfoLoader();

    const { public_repos, avatar_url, login, html_url, name, bio } = userData;
    setUserDetails({
      public_repos,
      avatar_url,
      login,
      html_url,
      name,
      bio,
    });
  };

  loadUserData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        {" "}
        Public Repository :
        <span className={`hover:scale-105 transition-all duration-200`}>
          {userDetails.public_repos}
        </span>
      </div>

      <NavLink to={userDetails.html_url} target="parent">
        <img
          src={userDetails.avatar_url}
          alt={`${userDetails.login} img`}
          className={`hover:scale-105 transition-all duration-200`}
        />
        <h1 className="mt-4 text-4xl"> name : {userDetails.name} </h1>
        <h1 className="mt-4 text-4xl"> Bio : {userDetails.bio} </h1>
      </NavLink>
    </>
  );
}

export default Github;
