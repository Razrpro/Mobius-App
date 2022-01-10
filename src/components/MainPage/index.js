import React from 'react';

import * as styles from "./styles";
import NewsModule from "./NewsModule";


const MainPageLarge = ({
    language
}) => (
        <styles.Wrapper>

            <NewsModule
                language={language}
            />

        </styles.Wrapper>
);

export default MainPageLarge;
