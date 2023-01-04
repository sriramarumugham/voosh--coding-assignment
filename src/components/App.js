import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, NothingFound } from "../pages/index";

import "../styles/App.css";

export const UserContext = createContext(undefined);

function App() {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NothingFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
