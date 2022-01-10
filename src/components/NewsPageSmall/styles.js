import styled from "styled-components";
import { Link } from 'react-router-native';
import {TouchableOpacity} from "react-native";

export const Wrapper = styled.View`
  background: #FFFFFF;
  flex-direction: column;
`;


export const Title = styled.Text`
  font-size: 32px;
  line-height: 38px;
  font-weight: bold;
  color: #000000;
`;


export const News = styled.FlatList`
   flex: 1;
   margin: 0 20px;
   flex-direction: column;
`;

export const NewsElement = styled(Link).attrs({
  component: TouchableOpacity
})`
  margin: 15px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
`;


export const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;


export const ElementTitle = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #5A5A5A;
  font-weight: bold;
  margin-left: 10px;
  flex: 1;
`;


export const SpinnerBlock = styled.View`
  width: 100%;
  height: 100px;
  position: relative;
    
    ${props =>
    props.visible &&
    `
        display: none;    
    `}
`;
