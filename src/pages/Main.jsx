import React, { useEffect, useState } from "react";
import Button from "../ele/Button";
import { useNavigate } from "react-router-dom";
import { confirm } from "../api/members";

function Main() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const amIStillAuthorized = async () => {
    try {
      const result = await confirm(localStorage.getItem("access_token"));
      alert(result.data.message);
    } catch (error) {
      navigate("/");
      alert(error.data.message);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <div>
      <Button onClick={logoutHandler}>로그아웃</Button>
      <Button type='button' onClick={amIStillAuthorized}>
        Authorized 여부
      </Button>
      <h1>{message}</h1>
    </div>
  );
}

export default Main;
