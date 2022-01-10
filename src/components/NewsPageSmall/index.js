import React from 'react';
import * as styles from "./styles";
import { NEWS } from "../../constants/language";
import Spinner from "../Spinner";

const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

const renderItem = (newsOne) => (
    <styles.NewsElement
        to={`/news/${newsOne.item._id}`}
        key={newsOne.item._id}
    >
        <React.Fragment>
            <styles.Img
                source={{uri: `${ENDPOINT}/api/news/img/${newsOne.item._id}`}}
                resizeMode={'cover'}
            />
            <styles.ElementTitle>
                {newsOne.item.name}
            </styles.ElementTitle>
        </React.Fragment>
    </styles.NewsElement>
);

const NewsPageSmall = ({
                           news,
                           language,
                           fetchMore,
                           isFetching
                       }) => (
    <styles.Wrapper>
            {news &&
            news.length ?
                <styles.News
                    data={news}
                    keyExtractor={(item) => item._id}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.5}
                    onEndReached={fetchMore}
                />
                :
                null
            }
            {/*<styles.SpinnerBlock*/}
            {/*    visible={isFetching}*/}
            {/*>*/}
            {/*    <Spinner />*/}
            {/*</styles.SpinnerBlock>*/}
    </styles.Wrapper>
);

export default NewsPageSmall;
