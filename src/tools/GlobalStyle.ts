import styled, { createGlobalStyle } from 'styled-components';
import Responsive from './Responsive';

const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
    max-width: 1355px;
    margin-left: 80px;
    margin-right: 80px;
    width: 100%;
    background-color: red;
        ${Responsive.laptop}{
            max-width: 1190px;
            margin-left: 30px;
            margin-right: 30px;
            background-color: green;
        }
        ${Responsive.tabletLandscape}{
            max-width: 970px;
            margin-left: 30px;
            margin-right: 30px;
            background-color: aqua;
        }
        ${Responsive.tablet}{
            max-width: unset;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 15px;
            padding-right: 15px;
            background-color: yellow;
        }
        ${Responsive.mobile}{
            max-width: unset;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 15px;
            padding-right: 15px;
            background-color: gray;
        }
`;
 
export default GlobalStyle;


