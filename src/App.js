import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addpassenger from "./Components/Addpassenger";

import Home from "./Components/Home";
import UpdatePassenger from "./Components/UpdatePassenger";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addpassenger" element={<Addpassenger />} />
          <Route path="/updatepassenger/:id" element={<UpdatePassenger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
