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
    margin:70px 0 70px 0;
    border-radius: 20px;

    @media only screen and (max-width: 1200px) {
         width:100%;
    }

`;



export const TitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    padding-top: 20px;
`;

export const Title = styled.h1`
    font-size:35px;
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
    font-size:24px;
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

    .ant-checkbox-wrapper{
            margin:0 !important;
        }

        @media only screen and (max-width: 700px) {
         width:100%;
    }

    @media only screen and (min-width:700px) and (max-width: 1200px) {
         width:80%;
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 20px 0;
    width: 100%;
`;



