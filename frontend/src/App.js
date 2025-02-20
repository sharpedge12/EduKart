import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage , SignupPage ,   ActivationPage , HomePage} from "./Routes.js";
import axios from "axios";
import { server } from "./server"; 
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());
    // Store.dispatch(loadSeller());
    // Store.dispatch(getAllProducts());
    // Store.dispatch(getAllEvents());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/sign-up" element = {<SignupPage/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App