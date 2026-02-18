import styled from "styled-components";


export const ContainerList = styled.div`
    background-color: #171E34;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const DivGrid = styled.div`
    display: grid;
    height: 100%;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 3rem;
`

export const DivUser = styled.div`
    background-color: #22283F;
    height: 150px;
    max-width: 600px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    color: white;
    font-weight: 200;
    img:nth-child(1){
        border-radius: 50%;
    }
    .trash{
        width: 30px;
        cursor: pointer;
        
        &:active{
            opacity: 0.8;
        }
    }
    .divNames{
        width: 100%;
        margin-left: 20px;
    }    
    .name{
        font-weight: bold;
        font-size: 1.5rem;
        color: #ffffffdd;

    }
`


