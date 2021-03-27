import styled from 'styled-components';
import colors from "./Colors"


export default styled.button`
    background-color: ${ props => props.primary ?  colors.primary: colors.default };
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
`;

