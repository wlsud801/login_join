import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GobalStyles";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Main from "../pages/Main";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
// import PrivateRouter from "./PrivateRouter";

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Join' element={<Join />}></Route>
        <Route path='/Main' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
