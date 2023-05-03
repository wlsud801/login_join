import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../ele/Button";
import Input from "../ele/Input";
import { login } from "../api/members";
import { token } from "../modules/token";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenReceived = useSelector((state) => {
    // console.log(state);
  });

  const [input, setInput] = useState({ id: "", password: "" });

  const mutation = useMutation(login, {
    onSuccess: (response) => {
      dispatch(token(response.token));
      // document.cookie = `token=${response.token};`;
      localStorage.setItem("access_token", response.token);
      console.log('성공')
      navigate("/Main");
    },
    onError: (error) => {
      alert(error);
    },
  });

  // 아이디, 비밀번호 input값 저장
  const onChangeInputHandler = (event) => {
    event.target.name === "ID"
      ? setInput({ id: event.target.value, password: input.password })
      : setInput({ id: input.id, password: event.target.value });
  };

  // 로그인 버튼 이벤트 핸들러 함수
  const loginButtonHandler = (event) => {
    if (input.id !== "" && input.password !== "") {
      event.preventDefault();
      mutation.mutate(input);
    } else {
      alert("ID와 PASSWORD를 모두 입력하셔야 합니다!");
    }
  };

  return (
    <Layout>
      <h1>Login</h1>
      <StForm>
        <label htmlFor='ID'>ID</label>
        <Input
          onChange={(event) => onChangeInputHandler(event)}
          name='ID'
          type='text'
        />
        <label htmlFor='PW'>PW</label>
        <Input
          onChange={(event) => onChangeInputHandler(event)}
          name='PW'
          type='password'
        />
        <div className='btnwrap'>
          <Button onClick={(event) => loginButtonHandler(event)} type='submit'>
            로그인
          </Button>
          <Button
            className='white'
            onClick={() => {
              navigate("/Join");
            }}
          >
            회원가입
          </Button>
        </div>
      </StForm>
    </Layout>
  );
}

export default Login;

const StForm = styled.form`
  & > label {
    font-weight: 500;
  }
  & > .btnwrap {
    margin-top: 30px;
  }
`;
