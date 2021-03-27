import styled from 'styled-components/native';
import colors from "./Colors"


export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${ props => props.primary ? colors.primary : colors.default };
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export default ButtonContainer;
