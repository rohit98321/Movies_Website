import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bollywood from "../pages/Bollywood"
import Hollywood from "../pages/Hollywood"
import WebSeries from "../pages/WebSeries"
import MovieCard from "../pages/MovieCard";
import Create from "../pages/admin/Create";
import MovieSingleCard from "../pages/MovieSingleCard";

const Mainroutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood/>} />
        <Route path="/hollywood" element={<Hollywood/>} />
        <Route path="/webseries" element={<WebSeries/>} />
        <Route path="/movecard" element={<MovieCard/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/singlecard/:id" element={<MovieSingleCard/>} />



      </Routes>
    </div>
  );
};

export default Mainroutes;
