import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';


const Container = styled.div`
    
    height: 90vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url('https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80');
    background-size: cover;
`

const Wrapper = styled.form`
    display: flex;
    height: 70vh;
    width: calc(30vw + 30px);
    align-self: center;
    flex-direction: column;
    padding: 20px;
    background-color: #ececec;
`
const Title = styled.h2`
    font-weight: 400;
`




const Input = styled.input`
    --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  width: 30vw;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
  margin-bottom: 10px;
  ::placeholder{
    color: var(--font-color-sub);
    opacity: 0.8;
  };
  :focus{
    border: 2px solid var(--input-focus);
  };
    
`

const Date = styled.input`
    margin-top: 10px;
    --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  width: 15vw;
  height: 30px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 2px;
  outline: none;
  margin-bottom: 10px;
  ::placeholder{
    color: var(--font-color-sub);
    opacity: 0.8;
  };
  :focus{
    border: 2px solid var(--input-focus);
  };
`



const Select = styled.select`
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  width: calc(31vw + 10px);
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
  margin-bottom: 10px;
  ::placeholder{
    color: var(--font-color-sub);
    opacity: 0.8;
  };
  :focus{
    border: 2px solid var(--input-focus);
  };
`

const Option = styled.option`

`


const Button = styled.button`
    padding:10px;
    font-weight: 300;
    font-size: 18px;
    width: 200px;
    background-color: white;
    border-radius: 5px;
`

const NewTask = () => {

    return (
        <div>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>
                        Add a new Item
                    </Title>
                    <Input placeholder='Enter name of the task' name='task' equired />
                    <Input placeholder='Description of the Task' name='desc'required />
                    <Select name='priority'>
                        <Option>High</Option>
                        <Option>Medium</Option>
                        <Option>Low</Option>
                    </Select>
                    <Date type='date' name='deadline' />
                    <Button >
                        Add Item
                    </Button>
                </Wrapper>

            </Container>
        </div>
    );

}

export default NewTask;




