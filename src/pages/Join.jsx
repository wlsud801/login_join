import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Flx from '../components/Flx';
import Layout from '../components/Layout'
import Button from '../ele/Button';
import Input from '../ele/Input';

function Join() {
    const navigate = useNavigate();
  return (
    <Layout>
        <Flx>
            <h1>Jogin</h1>
            <Button className='move' onClick={() => {navigate(-1)}}>뒤로가기</Button>
        </Flx>
        <StForm>
            <label htmlFor='ID'>ID</label>
            <Input type="text" name='ID' placeholder="5자 이내로 입력하세요"/>
            <label htmlFor='PW'>PW</label>
            <Input type="password" name='PW' placeholder="5자 이내로 입력하세요"/>
            <label htmlFor='PWF'>PW 확인하기</label>
            <Input type="password" name='PWF' placeholder="비밀번호 확인을 위해 한번 더 입력해주세요"/>
            <div className='btnwrap'>
                <Button type="submit">회원가입하기</Button>
            </div>
        </StForm>
    </Layout>
  )
}

export default Join

const StForm = styled.form`
    & > label{
        font-weight:500;
    }
    & > .btnwrap{
        margin-top:30px;
    }
`