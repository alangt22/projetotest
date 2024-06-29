import styled from "styled-components";

export const Header = styled.header`
    width:auto;
    height: 80px;
    background-color: #0000ce;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @media screen and (max-width: 590px) {
        flex-direction: column;
        width:420px;
        align-items: center;
        height: auto;
        padding: 10px 0;
    }
`;

export const Div = styled.div`
    color: white;
    display: flex;
    gap: 15px;
    align-items: center;

    @media screen and (max-width: 590px) {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    h1 {
        font-size: 45px;
        margin-top: 15px;
        margin-left: 20px;

        @media screen and (max-width: 590px) {
            margin: 0;
            font-size: 30px;
            margin-right: 210px;
            margin-top: 10px;
           
        }
    }

    h4 {
        margin-top: 36px;
        font-weight: normal;
        font-size: small;

        @media screen and (max-width: 750px) {
            margin-top:-14px;
            margin-right: 210px;
            
        }
    }
`;
