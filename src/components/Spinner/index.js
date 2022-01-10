import React from 'react';

import * as styles from "./styles";
import {
    ActivityIndicator
} from 'react-native'

const Spinner = ({
    width,
    height,
    offset
}) => (
        <styles.Wrapper offset={offset ? offset : "0"}>
            <ActivityIndicator size="large" color="#ffffff" />
        </styles.Wrapper>
);

export default Spinner;
