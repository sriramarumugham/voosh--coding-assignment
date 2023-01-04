import React from "react";
import UpdatedComponent from "./HOC";

function NameComponent({ val, handleChange }) {
  return (
    <>
      <label for="name">
        {" "}
        Name <span>*</span>
      </label>
      <input
        placeholder="EX. John Doe"
        // required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="name"
        name="name"
      />
    </>
  );
}

function EmailComponent({ val, handleChange }) {
  return (
    <>
      <label for="email">
        Email <span>*</span>
      </label>
      <input
        placeholder="EX. mail@website.com"
        // required={true}
        onChange={handleChange}
        value={val}
        // type="email"
        id="email"
        name="email"
      />
    </>
  );
}

function CopanyNameComponent({ val, handleChange }) {
  return (
    <>
      <label for="copamanyName">
        {" "}
        Compna Name <span>*</span>
      </label>
      <input
        placeholder="EX. XYZ PVT LTD"
        // required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="companyName"
        name="companyName"
      />
    </>
  );
}

function YourTitleComponent({ val, handleChange }) {
  return (
    <>
      <label for="yourTitle">
        Your Title <span>*</span>
      </label>
      <input
        placeholder="EX. Operational Head"
        // required={true}
        onChange={handleChange}
        value={val}
        type="text"
        id="yourTitle"
        name="yourTitle"
      />
    </>
  );
}

const Name = UpdatedComponent(NameComponent);
const Email = UpdatedComponent(EmailComponent);
const Company = UpdatedComponent(CopanyNameComponent);
const Title = UpdatedComponent(YourTitleComponent);

export { Name, Email, Company, Title };
