import styled from "styled-components/native";
import {Link} from 'react-router-native';
const SaveArrowPNG = require("../../assets/img/savearrow.png");

const NoPhotoPNG = require("../../assets/img/nophoto.png");
// const ExpertChevronSVG = require("../../assets/images/svg/expert-chevron-profile.svg");

export const Wrapper = styled.View`
    flex-direction: column;
`;

export const UserCard = styled.View`
      align-items: center;
`;

export const UserPhotoBlock = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
}
`;

export const UserFlexBlock = styled.View`
    width: 100%;
    flex: 1;
}
`;

export const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
  margin-top: 19px;
  padding: 9px 20px;
`;

export const UserPhotoWrapper = styled.TouchableOpacity`
    width: 96px;
    height: 96px;
    border-radius: 50px;
    margin-top: 10px;
    justify-content: flex-end;
    overflow: hidden;
`;

export const SaveArrow = styled.Image.attrs({
    source: SaveArrowPNG
})`
  position: absolute;
  align-items: center; 
  right: 0;
  margin: 15px 30px;
  width: 17px;
  height: 26px;
`;

export const UserPhotoBackground = styled.ImageBackground.attrs({
    source: NoPhotoPNG
})`
    width: 96px;
    height: 96px;
    background-color: #ffffff;

`;

export const UserPhoto = styled.Image`
    width: 96px;
    height: 96px;
    opacity: 0.7;
`;


export const LineIn = styled.View`
  width: 100%;
  height: 40px;
  background: rgba(0,135,153,0.50);
  padding: 10px 21px;
`;


export const Name = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 0;
`;

export const Groups = styled.View`
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
`;

export const Group = styled.TouchableOpacity`
     padding: 7px 15px;
`;

export const GroupText = styled.Text`
     color: #FFFFFF;
     font-size: 12px;
     line-height: 14px;
`;

export const GroupTextNone = styled.Text`
     color: rgba(255,255,255,0.30);
     font-size: 17px;
     line-height: 20px;
     font-weight: 300;
     padding: 5px 20px;
`;

export const LogoutBlock = styled.View`
      flex-direction: row;
      width: 100%;
      padding: 40px 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
      flex-direction: row;
      width: 129px;
      height: 32px;
      background: #003740;
      align-items: center;
      justify-content: center;
`;

export const LogoutButtonText = styled.Text`
     color: #ffffff;
     font-size: 12px;
     line-height: 14px;
`;







export const Position = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin: 23px 35px 0 35px;
    
    ${props =>
    props.loading &&
    `
       height: 20px;
       width: 300px;
    `}
`;


export const Company = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin: 0 35px 16px 35px;
    
      ${props =>
    props.loading &&
    `
           margin-top: 2px;
           height: 20px;
           width: 220px;
        `}
`;



export const Scope = styled.View`
    padding: 0 35px 23px 35px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #D8D8D8;
`;

export const ScopeName = styled.Text`
    font-size: 14px;
    line-height: 15px;
    color: #000000;
    
    ${props =>
    props.isExpert &&
    `
        color: #F14942;
        font-weight: bold;
    `}
`;

export const ScopeTitle = styled.Text`
    font-size: 14px;
    line-height: 15px;
    color: #3C7DFF;
    margin-left: 7px;
    font-weight: bold;
    min-height: 15px;
    
    ${props =>
    props.isExpert &&
    `
        color: #000000;
        font-weight: normal;
    `}
`;

export const UserDescription = styled.Text`
    font-size: 14px;
    line-height: 22px;
    color: #4A4A4A;
    margin: 22px 35px 16px 35px;
    min-height: 300px;
`;

// export const ScopeExpert = styled.View`
//     width: 58px;
//     height: 32px;
//     background: url(${ExpertChevronSVG}) no-repeat;
//     background-size: cover;
//     margin-right: 13px;
// `;
