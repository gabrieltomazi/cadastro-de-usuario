import styled from 'styled-components'


export const Container = styled.div`
    background-color: #171E34;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 2vw;
    h1{
        font-size: 40px;
        text-align: center;
        color: #ffffffdd;
        
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }
`


export const DivSpan = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffffff;
    font-size: 12px;
    gap: 3px;
    span{
        color: red;
    }
    
`


export const DivTwo = styled.div`
    display: flex;
`


export const Input = styled.input`
     
    padding: 10px;    
    display: flex;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-right: 10px;

`