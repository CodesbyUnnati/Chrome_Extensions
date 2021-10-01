import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: ${(props) => props.theme.font.family.montserrat};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
    }
`;

export const Container = styled.div`
    width: 400px;
    height: 500px;
    padding: 1rem;
    background: ${(props) => props.theme.colors.white};
`;
