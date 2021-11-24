import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Footer from "./Footer";
import About from "../Routes/About";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
