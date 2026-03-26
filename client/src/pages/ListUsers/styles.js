import styled from "styled-components";


export const ContainerList = styled.div`
    background-color: #171E34;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    overflow: hidden;
    
`

export const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    width: 90%;
    max-width: 1200px;
    gap: 20px;

    margin: 40px auto;

    
    @media (max-width: 1020px) {
        grid-template-columns: 1fr 1fr;
    }   
    @media (max-width: 710px) {
        grid-template-columns: 1fr;
    }   
`

export const DivUser = styled.div`
    background-color: #22283F;
    height: 150px;
    width: 100%;
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


export const DivParagraph = styled.div`
    color: white;
    background-color: #22283F;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-top: 50px; 
    width: 90%;
    max-width: 600px; 
    text-align: center;
    margin-bottom: 2rem;
`


