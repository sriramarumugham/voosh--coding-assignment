import React, { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [val, setVal] = useState("");
    const handleChange = (e) => {
      setVal(e.target.value);
    };
    return <OriginalComponent handleChange={handleChange} val={val} />;
  }
  return NewComponent;
}

export default UpdatedComponent;
