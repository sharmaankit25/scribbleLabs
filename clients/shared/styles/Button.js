import styled from 'styled-components';
import colors from "./Colors"


export default styled.button`
    background-color: ${ props => props.primary ?  colors.primary: colors.default };
    border: none;
    color: ${ props => props.fontColor };
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${ props => props.size || 1 }rem;
    cursor: pointer;
`;

