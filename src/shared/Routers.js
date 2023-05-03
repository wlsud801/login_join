import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from '../GobalStyles';
import Join from '../pages/Join';
import Login from '../pages/Login';

const Routers = () => {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Join" element={<Join />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers