import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "./App";

import { Name, Email, Company, Title, Password } from "./InputField";

import styles from "../styles/Login.module.css";

function Login() {
  const { userDetails, setUserDetails } = useContext(UserContext);

  function savetoLocalStorage(e) {
    e.preventDefault();
    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      companyName: e.target.companyName.value,
      yourTitle: e.target.yourTitle.value,
      password: e.target.password.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUserDetails(user);
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.cover_img}></div>
      <div className={styles.title}>Book A Demo Now</div>

      <div className="form_container">
        <fieldset>
          <form onSubmit={savetoLocalStorage}>
            <div className={styles.input_field}>
              <Name />
            </div>
            <div className={styles.input_field}>
              <Email />
            </div>
            <div className={styles.input_field}>
              <Company />
            </div>
            <div className={styles.input_field}>
              <Title />
            </div>
            <div className={styles.input_field}>
              <Password />
            </div>
            <button className={styles.booknow_button_container_style}>
              Book Demo
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;

{
}
