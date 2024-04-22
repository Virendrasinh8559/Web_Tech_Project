import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
    padding-right: 5px;
    position: relative;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
        
`
const Left = styled.div`
    flex: 5;
`;

const Heading = styled.h1`
    color:white;
    padding-left: 15px;
`

const Right = styled.div`
    flex:2;
    display: flex;
    
`;
const Button = styled.button`
    height: 45px;
    width: 200px;
    margin-left:10px;
    border-radius: 5px;
    font-size: 20px;
    background-color: ${props => props.type === 'filled' ? '#2b35cf' : 'white'};
    color: ${props => props.type === 'filled' ? 'white' : 'black'};
    cursor:pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Link to={'/'} style={{ textDecoration: "none", color: "black", height: '70px', width: '200px' }}>
                    <Heading>TaskBuddy</Heading>
                </Link>
            </Left>
            <Right>
               <Link style={{ textDecoration: "none" }} to={`/tasks`}>
                    <Button>
                        Your Tasks
                    </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to={'/add'}>
                    <Button type='filled'>
                        Add Tasks
                    </Button>
                </Link>
            </Right>
        </Container>
    );
}

export default Navbar;
