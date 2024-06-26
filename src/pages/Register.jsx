import styled from "styled-components";
import Navbar from "../components/Navbar"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(0,0,0,0.2)) ,url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60') center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;    
    background-color: white;
     
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`

const Input = styled.input`
    border-radius: 50px;
    flex: 1;
    border: 1px solid black;
    margin: 20px 10px 0 0 ;
    min-width: 40%;
    padding: 15px;
    background-color: lightgrey;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`

const Button = styled.button`
    width: 30%;
    padding: 15px 0;
    
    cursor: pointer;
`

const Register = () => {
    return (
        <>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="username" name="username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account. I consent to the processing of my personal data in accordance
                        with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
        </>
    );
}

export default Register;
