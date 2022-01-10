import styled from "styled-components";
import {StyleSheet} from 'react-native';

export const Wrapper = styled.View`
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.View`
    display: flex;
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    color: #000000;
`;

export const Blocks = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
`;

export const Block = styled.View`
    display: flex;
    height: 83px;
    margin: 57px 0 0 0;
    flex-direction: column;
    align-items: center;
`;

export const SubTitle = styled.Text`
    display: flex;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
`;

export const Comment = styled.Text`
    display: flex;
    font-size: 13px;
    line-height: 17px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 10px;
    ${props =>
    props.margintop &&
    `
        margin-top: 40px;
    `}; 
     
    ${props =>
    props.yellow &&
    `
        color: #FBFF00;
    `};
    
    
`;


export const Input = styled.TextInput`
    display: flex;
    width: 214px;
    height: 45px;
    margin: 22px 0 0 0; 
    padding: 13px 21px;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border-top-width: 1px; 
    background: rgba(0,135,153,0.50);
    border-top-color: rgba(0,0,0,0.26);

    ${props =>
    props.code &&
    `
       width: 115px; 
       text-align: center;  
       margin-bottom: 20px;
    `};
    
`;

export const Breaker = styled.View`
    display: flex;
    width: 100%;
    height: 2px;
    margin: 33px 0 31px 0;
    background-color: #D8D8D8;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
      width: 214px;
    height: 40px;
    position: relative;
    background-color: #01525E;
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    
    ${props =>
    props.disabled &&
    `
        opacity: 0.5;
    `};
    
    ${props =>
    props.margintop &&
    `
        margin-top: 120px;
    `};
    
`;


export const ButtonText = styled.Text`
    display: flex;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;

`;

export const InputLine = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Error = styled.Text`
    display: flex;
    font-size: 15px;
    line-height: 18px;
    color: #F57040;
`;


export const CodeInput = styled.Text`
    width: 40px;
    height: 40px;
    line-height: 38px;
    font-size: 24px;
    color: #ffffff;
    background: #008799;
    margin-right: 10px;
    border-width: 2px;
    border-color: #ffffff00;
    text-align: center;
    ${props =>
    props.isFocused &&
    `
        border-color: #fff;
    `};
    ${props =>
    props.disabled &&
    `
      opacity: 0.2;
    `};
`;
