import React, {Component} from 'react';
import {connect} from 'react-redux';

import NotificationPageSmall from '../../components/NotificationPageSmall';
import * as authSelectors from "../../store/auth/selectors";
import * as messageActions from "../../store/messages/actions";
import * as messagesSelectors from "../../store/messages/selectors";


class PushPage extends Component {
    state = {
        thisPage: '',
        total: false,
        isFetching: false,
        news: [],
    };

    componentDidMount() {
        if (this.props.isAuthorized === false) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }
        else {
            this.props.fetchMessagesList();
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isAuthorized !== this.props.isAuthorized &&
            this.props.isAuthorized === false
        ) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }
    }

    render() {
        return (
            <NotificationPageSmall
                {...this.state}
                language={this.props.settings.language}
                messagesList={this.props.messagesList}
                messages={this.props.messages}
            />
        );
    }




}

const mapStateToProps =
    ({
         settings,
         auth,
         messages,
     }) => ({
        settings,
        messages,
        isAuthorized: authSelectors.getAuthStatus(auth),
        messagesList: messagesSelectors.getMessagesList(messages),

    });

const mapDispatchToProps = dispatch => ({
    fetchMessagesList: () => dispatch(messageActions.fetchMessagesList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PushPage);
