import React from 'react';
import Navbar from '../components/Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 100vw;
    overflow: hidden;
`
const Wrapper = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
    width: 100vw; 
`

const Left = styled.div`
    background-color: white;
    color: black;
    flex:1;
    display: flex;
    width: 100vw;
    height: 10vh;
    flex-direction: row;
`
const Right = styled.div`
    min-height: 81vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    background-color: #ececec;
    flex:5;
`
const SubTitle = styled.h3`
    margin-left:15px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
`

const CheckBox = styled.input`
    margin-left:15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 70px;
    border: 2px solid #30cfd0;
    border-radius: 5px;
    background-color: transparent;
    position: relative;
    margin-right: 10px;
  cursor: pointer;
`

const RightWrapper = styled.div`
    padding: 10px;
    width: 80vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    border-radius: 10px;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(190, 190, 190),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`

const Label = styled.label`
  font-size: 18px;
  color: #000;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  justify-items: center;
    align-items: center;
`


const Link = styled.a`
    color: black;
    text-decoration: none;
`

const Option = styled.option`
    width:50px;
`

const Select = styled.select`
    width: 100px;
    margin: 20px;
    height:30px;
`



const Heading = styled.h3`
`

const P = styled.p`
    margin:5px 0;
`

const Tasks = () => {

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Left>
                    <SubTitle>Filter By Priority:</SubTitle>

                    <Label>
                        <CheckBox type="checkbox" value={1} />
                        High
                    </Label>
                    <Label>
                        <CheckBox type="checkbox" value={2} />
                        Medium
                    </Label>
                    <Label>
                        <CheckBox type="checkbox" value={3} />
                        Low
                    </Label>


                    <SubTitle>Filter By:</SubTitle>
                    <Select>
                        <Option value="All">
                            All
                        </Option>
                        <Option selected>
                            Completed
                        </Option>
                        <Option>
                            Not Completed
                        </Option>
                    </Select>
                    <SubTitle>Sort By:</SubTitle>
                    <Select>
                        <Option value="Priority" selected>
                            Priority
                        </Option>
                        <Option value="deadline">
                            Deadline
                        </Option>
                        <Option value="createdAt">
                            Create Date
                        </Option>
                    </Select>
                </Left>
                <Right>
                    <RightWrapper>
                            <div>
                                <Heading>Task: Web Tech</Heading>
                                <P>Complete web tech project</P>
                                <P>Priority: High</P>
                                <P>Deadline:17/3/24</P>
                                <Link></Link>
                            </div>
                    </RightWrapper>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Tasks;
