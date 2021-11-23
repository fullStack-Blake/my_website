import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Footer from "./Footer";
import Modal from "./Modal";

const Router = () => (
  <BrowserRouter>
    <Modal />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
