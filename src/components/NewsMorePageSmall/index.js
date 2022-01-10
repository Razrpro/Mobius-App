import React, {Component} from 'react';
import {connect} from "react-redux";

import * as styles from './styles';
import NewsModule from "../MainPage/NewsModule";

const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

class NewsMorePageSmall extends Component {

    render() {
        const {
            news,
            language
        } = this.props;

        return (
            news ?
                <styles.Wrapper>
                    <styles.ImageBlock
                        source={{uri: `${ENDPOINT}/api/news/img/${news._id}`}}
                    />

                    <styles.Title>
                        {news.name}
                    </styles.Title>


                    <styles.Text>
                        {news.text}
                    </styles.Text>

                    <NewsModule
                        language={language}
                    />
                </styles.Wrapper>
                :
                null
        );
    };

}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsMorePageSmall);
