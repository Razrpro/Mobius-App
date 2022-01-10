import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Api } from "../../api";
import NewsMorePageSmall from '../../components/NewsMorePageSmall';

import getRNDraftJSBlocks from 'react-native-draftjs-render';

import * as utils from "../../utils";

class NewsMorePage extends Component {
    state = {
        news: {
            _id: '',
            name: '',
            text: undefined,
            date: '',
            isDeleted: undefined,
        }
    };

    componentDidMount() {
        this.loadNews();
    }

    loadNews = () => {
        Api.news.getNews(this.props.match.params.newsId).then(news => {

            if(news.data.date) {
                news.data.date = moment(news.data.date).utc().format('DD.MM.YYYY');
            }

            this.setState({
                news: {
                    ...news.data,
                    text: news.data.text && utils.isJson(news.data.text) ? getRNDraftJSBlocks( { contentState: JSON.parse(news.data.text) } ) : '',
                },
            })
        });
    }

    render() {
        if(this.state.news.text !== undefined){
            return (
                <NewsMorePageSmall
                    {...this.state}
                    language={this.props.settings.language}
                />
            );
        }
        else {
            return null
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.newsId !== prevProps.match.params.newsId &&
            this.props.match.params.newsId
        ){
            this.loadNews();
        }
    }
}

const mapStateToProps =
    ({
         settings
     }) => ({
        settings
    });

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsMorePage);
