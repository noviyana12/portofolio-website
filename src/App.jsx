import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'remixicon/fonts/remixicon.css'
import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
