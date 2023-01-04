import React, { useContext } from "react";

import { UserContext } from "./App";

import { Name, Email, Company, Title } from "./InputField";

function Login() {
  const { userDetails, setUserDetails } = useContext(UserContext);

  function savetoLocalStorage(e) {
    e.preventDefault();
    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      companyName: e.target.companyName.value,
      yourTitle: e.target.yourTitle.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUserDetails(user);
  }

  return (
    <div className="login_container page">
      <div className="title">Book A Demo Now</div>
      <div className="form_container">
        <fieldset>
          <form onSubmit={savetoLocalStorage}>
            <div className="input_field">
              <Name />
            </div>
            <div className="input_field">
              <Email />
            </div>
            <div className="input_field">
              <Company />
            </div>
            <div className="input_field">
              <Title />
            </div>
            <button>Book Demo</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;

{
  /* <img src='https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp'/> */
}
