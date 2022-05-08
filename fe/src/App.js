import React, { useState } from "react";
import './styles.css'
import { Input, Button } from 'antd';
import { Title, MainContainer, TitleContainer, Hr, Label, InputContainer } from './styles.ts'
import 'antd/dist/antd.css';

const App = () => {


  const MAX_LENGTH_INPUT = 100;

  const [req, setReq] = useState({});
  const [inputStatus, setInputStatus] = useState({});

  const handleSubmit = () => {
    console.log("req", req)
  }



  return (
    <div className="main">
      <MainContainer>
        <TitleContainer>
          <Title>Questionario da empresa XPTO MEO</Title>
          <Hr />
        </TitleContainer>
        <InputContainer height={'20px'} padding={'5px 0 0 0'}>
          <Label>First Question</Label>
          <Input size="large" placeholder="First Question" onChange={e => setReq(({
            ...req,
            firstQuestion: e.target.value
          }))} maxLength={MAX_LENGTH_INPUT} />
        </InputContainer>
        <InputContainer height={'20px'} padding={'5px 0 0 0'}>
          <Label>Second Question (max. 20 carateres)</Label>
          <Input size="large" placeholder="Second Question" status={inputStatus.secondQuestion} onChange={e => {
            setReq(({
              ...req,
              secondQuestion: e.target.value
            }));
            e.target.value.length === 20 && setInputStatus({ ...inputStatus, secondQuestion: 'warning' })
          }
          } maxLength={20} />
        </InputContainer>
        <InputContainer height={'20px'} padding={'5px 0 15px 0'}>
          <Label>Third Question (only numbers)</Label>
          <Input size="large" placeholder="Third Question" type='number' onChange={e => setReq(({
            ...req,
            thirdQuestion: e.target.value
          }))} maxLength={MAX_LENGTH_INPUT} />
        </InputContainer>
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </MainContainer>
    </div>
  );
}

export default App;
