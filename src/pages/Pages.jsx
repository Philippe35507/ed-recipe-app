import Home from "./Home";
import Cuisine from "./Cuisine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine" element={<Cuisine />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
