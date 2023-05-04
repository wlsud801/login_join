import React, { useEffect } from "react";
import Button from "../ele/Button";
import { useNavigate } from "react-router-dom";
import { confirm } from "../api/members";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    // 토큰 없이 url로 진입시 로그인화면으로
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
    confirm(localStorage.getItem("access_token"));
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <div>
      <Button onClick={logoutHandler}>로그아웃</Button>
    </div>
  );
}

export default Main;
