import styled from "styled-components/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const BackgroundPNG = require("./assets/img/background.png");

export const Wrapper = styled(KeyboardAwareScrollView)`
`;

export const Background = styled.ImageBackground.attrs({
    source: BackgroundPNG
})`
    flex: 1;    
`;

export const MySafeArea = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;