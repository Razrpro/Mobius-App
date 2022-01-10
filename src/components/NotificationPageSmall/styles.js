import styled from "styled-components";
import { Link } from 'react-router-native';
import {TouchableOpacity} from "react-native";

export const Wrapper = styled.View`
  flex-direction: column;
`;


export const Title = styled.Text`
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF70;
  margin-top: 30px;
  padding: 20px;
  text-align: center;
`;


export const News = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
  margin-top: 50px;
`;

export const NewsElement = styled.View`
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(0, 135,153,0.5);
  margin-bottom: 20px;
`;


export const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;


export const ElementTitle = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  font-weight: bold;
  margin-left: 10px;
`;


export const ElementText = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 10px;
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
