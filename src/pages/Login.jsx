import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout'
import Button from '../ele/Button';
import Input from '../ele/Input';

function Login() {

    const navigate = useNavigate();

  return (
    <Layout>
        <h1>Login</h1>
        <StForm>
            <label htmlFor='ID'>ID</label>
            <Input type="text"/>
            <label htmlFor='ID'>PW</label>
            <Input type="password"/>
            <div className='btnwrap'>
                <Button type="submit">로그인</Button>
                <Button className="white" onClick={() => {navigate('/Join')}}>회원가입</Button>
            </div>
        </StForm>
    </Layout>
  )
}

export default Login;

const StForm = styled.form`
    & > label{
        font-weight:500;
    }
    & > .btnwrap{
        margin-top:30px;
    }
`