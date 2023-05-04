import React, { useEffect } from "react";
import Button from "../ele/Button";
import { useNavigate } from "react-router-dom";
import { confirm } from "../api/members";

function Main() {
  const navigate = useNavigate();

  // 토큰이 없으면 페이지에 머물지 못 함
  useEffect(() => {
    (async () => {
      try {
        const result = await confirm(localStorage.getItem("access_token"));
      } catch (error) {
        error.status !== 200 && alert(error.data.message);
        navigate("/");
      }
    })();
  }, []);

  // 현재 인증 여부를 판별하는 함수
  const amIStillAuthorized = async () => {
    try {
      const result = await confirm(localStorage.getItem("access_token"));
      alert(result.data.message);
    } catch (error) {
      alert(error.data.message);
      navigate("/");
    }
  };

  // 로그 아웃 버튼을 누르면 토큰 삭제하고 로그인 페이지로
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <div>
      <Button onClick={logoutHandler}>로그아웃</Button>
      <Button type='button' onClick={amIStillAuthorized}>
        현재 Authorized 여부
      </Button>
    </div>
  );
}

export default Main;
