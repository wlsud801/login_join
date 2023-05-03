import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../ele/Button";
import Input from "../ele/Input";
import { login } from "../api/members";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ id: "", password: "" });
  const mutation = useMutation(login, {
    onSuccess: () => {
      console.log(mutation);
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
    event.preventDefault();
    mutation.mutate(input);
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
