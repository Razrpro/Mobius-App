import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewsPageSmall from '../../components/NewsPageSmall';

import {fetchNewsList} from "../../store/news/actions";

import * as newsSelectors from "../../store/news/selectors";


class NewsPage extends Component {
    state = {
        thisPage: '',
        total: false,
        isFetching: false,
        news: [],
    };

    componentDidMount() {
          this.props.fetchNewsList(0,6);
    }

    fetchMore = () => {
        if(!this.state.total){
            this.setState({
                isFetching: true
            });
            this.props.fetchNewsList(this.state.news.length,6);
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.news !== this.props.news &&
            this.props.news
        ) {
            this.setState(state => ({
                news: state.news.concat(this.props.news),
                total: !this.props.news.length,
                isFetching: false
            }))
        }
    }

    render() {
        return (
            <NewsPageSmall
                {...this.state}
                language={this.props.settings.language}
                fetchMore={this.fetchMore}
            />
        );
    }




}

const mapStateToProps =
    ({
         settings,
         news,
     }) => ({
        settings,
        news: newsSelectors.getNewsList(news),
    });

const mapDispatchToProps = dispatch => ({
    fetchNewsList: (start, count) => dispatch(fetchNewsList(start, count))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsPage);
