import styled from "styled-components";



export const Button = styled.button`
    border: ${(props) =>
        props.theme === 'primary'
            ? 'none'
            : '1px solid white'
    };
background: ${(props) =>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)'
            : 'transparent'
    };
    outline: none;
    font-size: 16px;
    color: white;
    width: fit-content;
    padding: 16px 32px;
    border-radius: 30px;
    cursor: pointer;
    align-self: center;
    transition: opacity .3s ease;
    

    &:hover{
    opacity: .8;
}

    &:active{
    opacity: .6;
    transition: none;
}
`