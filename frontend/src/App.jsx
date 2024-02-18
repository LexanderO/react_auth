import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<NoPage />}></Route>
          <Route path="logout" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
