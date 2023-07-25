import Home from "./Home";
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      <Route path="/searched/:search" element={<Searched />}></Route>
    </Routes>
  );
}

export default Pages;
