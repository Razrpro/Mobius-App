import styled from "styled-components";
import { Link } from 'react-router-native';


export const Wrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0 0;
`;

export const Title = styled.Text`
  display: flex;
  font-size: 20px;
  line-height: 22px;
  margin-bottom: 5px;
  color: #ffffff;
`;

export const NewsText = styled.Text`
  display: flex;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: #ffffff;
`;

export const News = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
`;


export const NewsElementWrapper = styled.View`
  display: flex;
`;


export const NewsElement = styled.View` 
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(0, 135,153,0.5);
  margin-bottom: 20px;
`;

export const NewsLoading = styled.View`
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(0, 135,153,0.5);
  margin-bottom: 20px;
`;

export const NewsLoadingImg = styled.View`
  width: 174px;
  height: 174px;
  border-radius: 10px;
  margin: 12px 0;
  background: rgba(255,255,255,0.2);
`;

export const NewsLoadingTitle = styled.View`
  width: 150px;
  height: 22px;
  border-radius: 10px;
  background: rgba(255,255,255,0.2);
  margin: 0;
`;

export const NewsLoadingSubTitle = styled.View`
  width: 100%;
  height: 12px;
  border-radius: 10px;
  background: rgba(255,255,255,0.2);
  margin-top: 10px;
`;

export const Img = styled.Image`
  width: 174px;
  height: 174px;
  border-radius: 10px;
  margin: 12px 0;
`;
