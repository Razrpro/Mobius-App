import React, {Component} from 'react';
import {connect} from 'react-redux';

import MainPageLarge from '../../components/MainPage';

class MainPage extends Component {
    state = {
        test: '',
    };

    componentDidMount() {

    }


    render() {
        return (
            <MainPageLarge
                {...this.state}
            />
        );
    }
}

const mapStateToProps =
    ({
         settings,
     }) => ({
        settings,
    });

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
