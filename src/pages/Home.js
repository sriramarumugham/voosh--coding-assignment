import React, { useEffect, useContext } from "react";
import { Login } from "../components";
import { UserContext } from "../components/App";

const Home = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserDetails(user);
    }
  }, []);

  if (!userDetails) {
    return <Login />;
  } else {
    return <h1>Hello,{userDetails.name ? userDetails.name : "user"} !</h1>;
  }
};

export default Home;
