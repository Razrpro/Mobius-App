import styled from "styled-components/native";
import {Link} from 'react-router-native';

const FilterPNG = require("../../assets/images/filter.png");

const LogoPNG = require("../../assets/img/logo.png");


export const Wrapper = styled.View`
  display: flex;
  width: 100%;
`;


export const Logo = styled.Image.attrs({
    source: LogoPNG
})`
  display: flex;
  width: 268px;
  height: 146px;
  margin-bottom: 41px;
  align-self: center;
`;


export const ToMainLink = styled(Link)`
   display: flex;
   width: 172px;
   height: 23px;
`;

export const Header = styled.View`
    display: flex;
    align-items: center; 
`;

export const Button = styled(Link)`
    display: flex;
    position: absolute;
    align-items: center; 
    right: 0;
    margin: 12px;
`;

export const ButtonText = styled.Text`
    display: flex;
    color: #FFFFFF;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 200;   
`;

export const Title = styled.Text`
    display: flex;
    color: #FFFFFF;
    padding-top: 10px;
    font-family: Helvetica;
    font-size: 17px;   
`;

export const Filter = styled.Image.attrs({
    source: FilterPNG
})`
   display: flex;
   width: 35px;
   height: 35px;
`;


export const MenuItem = styled(Link)`
   display: flex;
   height: 57px;
   border-bottom-width: 1px;
   border-bottom-color: rgba(255, 255, 255, 0.10);
   justify-content: center;
   padding-left: 80px; 
`;
