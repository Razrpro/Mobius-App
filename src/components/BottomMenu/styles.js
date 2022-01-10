import styled from "styled-components/native";
import {Link} from 'react-router-native';


const MenuIcoNewsPNG = require("../../assets/img/newsico.png");
const MenuIcoShedulePNG = require("../../assets/img/sheduleico.png");
const MenuIcoQrPNG = require("../../assets/img/qrcodebutton.png");
const MenuIcoNotificationPNG = require("../../assets/img/notificationico.png");
const MenuIcoProfilePNG = require("../../assets/img/profileico.png");

export const Wrapper = styled.View`
  display: flex;
  width: 100%;
  height: 80px;
  align-self: flex-end;
  flex-direction: column;
  
   ${props =>
    props.isOpen &&
    `
        width: 100%;
        height: 100%;
    `};
`;

export const MainMenuWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: #7FACB9;
  padding: 0 20px 15px 20px;
  justify-content: space-between;
 
`;

export const MenuButton = styled.TouchableOpacity`
   display: flex;
   height: 80px;
   align-items: center;
   justify-content: space-between;
   height: 44px;
    
    ${props =>
    props.absolute &&
    `
        margin-top: -50px;
    `};
    
`;

export const MenuIcoNews = styled.Image.attrs({
    source: MenuIcoNewsPNG
})`
   display: flex;
   width: 25px;
   height: 20px;
   opacity: 0.5;
   
    ${props =>
    props.active &&
    `
        opacity: 1;
    `};
`;


export const MenuIcoShedule = styled.Image.attrs({
    source: MenuIcoShedulePNG
})`
   display: flex;
   width: 24px;
   height: 26px;
      opacity: 0.5;
   
    ${props =>
    props.active &&
    `
        opacity: 1;
    `};
`;

export const MenuIcoQr = styled.Image.attrs({
    source: MenuIcoQrPNG
})`
   display: flex;
   width: 57px;
   height: 57px;
     ${props =>
    props.active &&
    `
        border-width: 2px;
        border-color: #FFFFFF;
        border-radius: 50px;
    `};
`;

export const MenuIcoNotification = styled.Image.attrs({
    source: MenuIcoNotificationPNG
})`
   display: flex;
   width: 28px;
   height: 26px;
      opacity: 0.5;
   
    ${props =>
    props.active &&
    `
        opacity: 1;
    `};
`;

export const MenuIcoProfile = styled.Image.attrs({
    source: MenuIcoProfilePNG
})`
   display: flex;
   width: 26px;
   height: 26px;
      opacity: 0.5;
   
    ${props =>
    props.active &&
    `
        opacity: 1;
    `};
`;

export const Title = styled.Text`
    display: flex;
    color: #000000;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
     ${props =>
    props.orange &&
    `
        color: #F35E41;
    `};
    
`;

export const MenuText = styled.Text`
    display: flex;
    color: #ffffff;
    font-family: Helvetica;
    font-size: 10px;
    opacity: 0.5;
   
    ${props =>
    props.active &&
    `
        opacity: 1;
    `};
`;


