import styled from "styled-components";
import { Link } from 'react-router-native';
import {TouchableOpacity} from "react-native";

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import Carousel from 'react-native-looped-carousel';


export const Wrapper = styled.View`
  width: ${width}px; 
  height: ${height}px;
  display: flex;
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


export const SlideWrapper = styled(Carousel)`
  flex: 1;
  display: flex;
`;


export const WeekWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const WeekHeader = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Day = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;
`;

export const DayName = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
  margin-bottom: 6px;
  display: flex;

`;

export const DayDate = styled.View`
  display: flex;
  padding: 7px;
  width: 35px;
  align-items: center;
   ${props =>
    props.selected &&
    `
        background: #FFFFFF;
        border-radius: 50px;
    `}
`;

export const DayDateText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  display: flex;
  color: #FFFFFF;
  
   ${props =>
    props.selected &&
    `
        color: #003740;   
    `}
`;


export const SelectedDay = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SelectedDayText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const SheduleList = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const OneDance = styled.View`
  display: flex;
  flex-direction: column;
`;

export const DanceDate = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 13px 20px 4px 20px;
`;

export const DanceGroup = styled.View`
  display: flex;
  flex-direction: column;
  background: #01525E;
  padding: 12px 70px;
`;

export const DanceGroupText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const DanceGroupComment = styled.Text`
  font-size: 15px;
  line-height: 17px;
  font-weight: 200;
  color: #FFFFFF;
`;