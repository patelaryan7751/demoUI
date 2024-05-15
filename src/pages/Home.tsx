import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const removeToken = () => {
    const navigate = useNavigate();
    localStorage.removeItem("sessionToken");
    navigate("/login");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={removeToken}>Log out</button>
    </>
  );
};

export default Home;
