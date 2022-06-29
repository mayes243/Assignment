import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import FileNotFound from "./pages/FileNotFound";
import Home from "./pages/Home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import PrivateRoutes from "./Protected";

// baseURL is the url that will be used for all requests
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

/* ------------------- create a interceptors of axios ------------------- */
const auth = JSON.parse(localStorage.getItem("token"));

axios.interceptors.request.use(
  (config) => {
    if (auth?.token) config.headers.Authorization = `Bearer ${auth?.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<Signup />} />

        {/* 404 page */}
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </>
  );
};

export default App;
