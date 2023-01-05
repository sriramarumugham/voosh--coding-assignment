import React from "react";
import UpdatedComponent from "./HOC";

import "../styles/InputField.css";

function NameComponent({ val, handleChange }) {
  return (
    <>
      <label for="name" className="input_label">
        {" "}
        Name <span className="red_icon">*</span>
      </label>
      <input
        placeholder="EX. John Doe"
        required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="name"
        name="name"
        className="input_style"
      />
    </>
  );
}

function EmailComponent({ val, handleChange }) {
  return (
    <>
      <label for="email" className="input_label">
        Email <span className="red_icon">*</span>
      </label>
      <input
        placeholder="EX. mail@website.com"
        required={true}
        onChange={handleChange}
        value={val}
        type="email"
        id="email"
        name="email"
        className="input_style"
      />
    </>
  );
}

function CopanyNameComponent({ val, handleChange }) {
  return (
    <>
      <label for="copamanyName" className="input_label">
        {" "}
        Compna Name <span className="red_icon">*</span>
      </label>
      <input
        placeholder="EX. XYZ PVT LTD"
        required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="companyName"
        name="companyName"
        className="input_style"
      />
    </>
  );
}

function YourTitleComponent({ val, handleChange }) {
  return (
    <>
      <label for="yourTitle" className="input_label">
        Your Title <span className="red_icon">*</span>
      </label>
      <input
        placeholder="EX. Operational Head"
        required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="yourTitle"
        name="yourTitle"
        className="input_style"
      />
    </>
  );
}

function PasswordCompnent({ val, handleChange }) {
  return (
    <>
      <label for="password" className="input_label">
        Password <span className="red_icon">*</span>
      </label>
      <input
        placeholder="Enter Password"
        required={true}
        onChange={handleChange}
        value={val}
        type="password"
        id="password"
        name="password"
        className="input_style"
      />
    </>
  );
}

const Name = UpdatedComponent(NameComponent);
const Email = UpdatedComponent(EmailComponent);
const Company = UpdatedComponent(CopanyNameComponent);
const Title = UpdatedComponent(YourTitleComponent);
const Password = UpdatedComponent(PasswordCompnent);
export { Name, Email, Company, Title, Password };
