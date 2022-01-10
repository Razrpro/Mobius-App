import styled from "styled-components/native";
import {Link} from 'react-router-native';

// const ChatIcoRedSVG = require("../../assets/images/svg/chat-ico-red.svg");
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
    margin-bottom: 20px;
}
`;

export const UserFlexBlock = styled.View`
    width: 100%;
    flex: 1;
}
`;

export const Title = styled.Text`
  font-size: 25px;
  line-height: 40px;
  color: #FFFFFF;
  font-weight: 700;
   ${props =>
    props.upper &&
    `
       text-transform: uppercase;
    `}
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  line-height: 40px;
  color: #FFFFFF;
  font-weight: 500;
`;

export const UserPhotoWrapper = styled.View`
    width: 139px;
    height: 139px;
    border-radius: 100px;
    justify-content: flex-end;
    overflow: hidden;
    background: #FFFFFF30;
`;

export const ColumnBox = styled.View`
   flex-direction: column;
   display: flex;
`;


export const UserPhoto = styled.ImageBackground`
    width: 139px;
    height: 139px;
    justify-content: flex-end;
`;

export const QrImage = styled.ImageBackground`
    width: 208px;
    height: 208px;
    margin-top: 20px;
    justify-content: flex-end;
`;

export const LineIn = styled.View`
  width: 100%;
  height: 40px;
  background: rgba(0,135,153,0.50);
  padding: 10px 21px;
`;


export const Name = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
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

export const Button = styled(Link)`
      flex-direction: row;
      padding: 10px 20px;     
      background: #003740;
      align-items: center;
      justify-content: center;
`;

export const ButtonText = styled.Text`
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
