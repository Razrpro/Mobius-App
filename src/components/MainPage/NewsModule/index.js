import React, {Component} from 'react';
import * as styles from "./styles";
import {connect} from 'react-redux';
import {fetchNewsList} from "../../../store/news/actions";
import * as newsSelectors from "../../../store/news/selectors";
import Spinner from "../../Spinner";
import {NEWS} from "../../../constants/language";

const ConturConfig = require("../../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

class NewsModule extends Component {
    state = {
        slides: [
            {
                id: 1,
                isActive: true,
                start: 0
            },
            {
                id: 2,
                isActive: false,
                start: 3
            },
            {
                id: 3,
                isActive: false,
                start: 3
            },
            {
                id: 4,
                isActive: false,
                start: 3
            },
            {
                id: 5,
                    isActive: false,
                start: 3
            }]
    }


    componentDidMount() {
        this.props.fetchNewsList(0, 10);
    }

    render() {
        const {
            news,
            language,
            newsIsFetching
        } = this.props;

        const {slides} = this.state;

        return (
            <styles.Wrapper>
                {
                    newsIsFetching &&
                    <styles.News>
                        {
                            slides.map(slide =>

                                <styles.NewsLoading
                                    key={slide.id}
                                >
                                    <Spinner/>
                                    <styles.NewsLoadingTitle/>
                                    <styles.NewsLoadingSubTitle/>
                                    <styles.NewsLoadingSubTitle/>
                                    <styles.NewsLoadingSubTitle/>
                                </styles.NewsLoading>
                            )
                        }
                    </styles.News>
                }


                {
                    news &&
                    news.length > 0 &&
                    <styles.News>
                        {news.map(event => (
                            <styles.NewsElement
                                to={`/news/${event._id}`}
                                underlayColor='none'
                                key={event._id}
                            >
                                <styles.NewsElementWrapper>
                                    <styles.Title>
                                        {event.name}
                                    </styles.Title>
                                    <styles.NewsText>
                                        {event.text}
                                    </styles.NewsText>
                                </styles.NewsElementWrapper>

                            </styles.NewsElement>
                        ))}
                    </styles.News>
                }

            </styles.Wrapper>
        );

    }

}

const mapStateToProps = (
    {news}
) => ({
    news: newsSelectors.getNewsList(news),
    newsIsFetching: newsSelectors.getNewsFetchingStatus(news),

});

const mapDispatchToProps = dispatch => ({
    fetchNewsList: (start, count) => dispatch(fetchNewsList(start, count))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsModule);