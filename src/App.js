import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addpassenger from "./Components/Addpassenger";
import { useDispatch } from "react-redux";
import Home from "./Components/Home";
import UpdatePassenger from "./Components/UpdatePassenger";
import { fetchArlines, fetchPassanger } from "./Features/PassngerSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPassanger());
    dispatch(fetchArlines());
  }, []);

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
