import React, { useState } from "react";
import './styles.css'
import { Input, Button, Radio, Space, Checkbox } from 'antd';
import { Title, MainContainer, TitleContainer, Hr, Label, InputContainer, ButtonContainer } from './styles.ts'
import 'antd/dist/antd.min.css';
const { TextArea } = Input;

const App: React.FC = () => {

  const MAX_LENGTH_INPUT = 100;

  const [req, setReq] = useState({});
  const [inputStatus, setInputStatus] = useState({});

  const handleSubmit = () => {
    fetch("http://localhost:3001/submitData", {
      method: "POST",
      headers: {
        'Content-type': "application/json",
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(req)
    }).then((res) => console.log("res", res.json()))
  }

  return (
    <div className="main">
      <MainContainer>
        <TitleContainer>
          <Title>Questionario da empresa XPTO MEO</Title>
          <Hr />
        </TitleContainer>
        <InputContainer height={'25px'} padding={'10px 0 10px 0'}>
          <Label>First Question</Label>
          <Input size="large" placeholder="First Question" onChange={e => setReq(({
            ...req,
            firstQuestion: e.target.value
          }))} maxLength={MAX_LENGTH_INPUT} />
        </InputContainer>
        <InputContainer height={'25px'} padding={'10px 0 10px 0'}>
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
        <InputContainer height={'25px'} padding={'10px 0 15px 0'}>
          <Label>Third Question (only numbers)</Label>
          <Input size="large" placeholder="Third Question" type='number' onChange={e => setReq(({
            ...req,
            thirdQuestion: e.target.value
          }))} maxLength={MAX_LENGTH_INPUT} />
        </InputContainer>
        <InputContainer padding={'5px 0 15px 0'}>
          <Label>Fourth Question </Label>
          <Radio.Group onChange={e => setReq(({
            ...req,
            fourthQuestion: e.target.value
          }))} value={req.fourthQuestion}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </InputContainer>
        <InputContainer padding={'5px 0 15px 0'}>
          <Label>Fiveth Question </Label>
          <Checkbox onChange={e => setReq(({
            ...req,
            fivethQuestion: {
              ...req.fivethQuestion,
              firstCheckBox: e.target.checked
            }
          }))}>first</Checkbox>
          <Checkbox onChange={e => setReq(({
            ...req,
            fivethQuestion: {
              ...req.fivethQuestion,
              secondCheckBox: e.target.checked
            }
          }))}>second</Checkbox>
          <Checkbox onChange={e => setReq(({
            ...req,
            fivethQuestion: {
              ...req.fivethQuestion,
              thirdCheckBox: e.target.checked
            }
          }))}>third</Checkbox>
        </InputContainer>
        <InputContainer padding={'5px 0 15px 0'}>
          <Label>Sixth Question </Label>
          <TextArea rows={4} maxLength={MAX_LENGTH_INPUT} onChange={e => setReq(({
            ...req,
            sixthQuestion: e.target.value
          }))} />
        </InputContainer>
        <ButtonContainer>
          <Button type="primary" size="large" onClick={handleSubmit}>Submit</Button>
        </ButtonContainer>
      </MainContainer>
    </div>
  );
}

export default App;
