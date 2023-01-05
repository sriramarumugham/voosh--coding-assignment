import React, { useEffect, useContext } from "react";
import {
  Login,
  Navbar,
  LogoContainer,
  TitleContainer,
  MyProfileImage,
} from "../components";
import { UserContext } from "../components/App";

import styles from "../styles/Home.css";
const Home = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserDetails(user);
    }
  }, []);
  let LoginSession = null;

  if (!userDetails) {
    LoginSession = <Login />;
  } else {
    LoginSession = (
      <h1>Hello,{userDetails.name ? userDetails.name : "user"} !</h1>
    );
  }

  return (
    <>
      <div className="page1_container" id="page1">
        <div className="landing_page"></div>
        <Navbar />
        <div className="Title_container">
          <TitleContainer />
          <div className="MyProfile_container">
            <LogoContainer />
            <MyProfileImage />
          </div>
        </div>
      </div>

      <div className="page2_container" id="page2">
        {LoginSession}
      </div>
    </>
  );
};

export default Home;
