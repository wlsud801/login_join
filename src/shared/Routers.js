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
        <Route path='/' element={
          // 로그인 된 상태일 땐 로그인 페이지. 회원가입 페이지 접속 불가
          <PublicRouter>
            <Login />
          </PublicRouter>
        }></Route>
        <Route path='/Join' element={
          <PublicRouter>
            <Join />
          </PublicRouter>
        }></Route>
        <Route path='/Main' element={
          <PrivateRouter>
            <Main />
          </PrivateRouter>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
