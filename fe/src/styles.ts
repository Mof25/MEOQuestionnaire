import styled from 'styled-components';

export const MainContainer = styled.div` 
    min-height: 100vh;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    padding-top:40px;
    background-color:white;
    width:50%;
    padding: 12px 72px 12px 72px;
    margin-top:70px;
    border-radius: 20px;
`;



export const TitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
`;

export const Title = styled.h1`
    font-size:20px;
`;

export const Hr = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
`;

export const Label = styled.h2`
    font-size:16px;
    color: #000033;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: ${props => props.padding};
    input{
        height: ${props => props.height};
    }
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`;



