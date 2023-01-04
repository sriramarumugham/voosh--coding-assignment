import { Route, Routes } from "react-router-dom";

import {Home , NothingFound} from "../pages/index";


import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NothingFound/>} />
      </Routes>
    </div>
  );
}

export default App;
