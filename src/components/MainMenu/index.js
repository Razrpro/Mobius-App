import React, {Component} from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";

import {
    MENU
} from "../../constants/language";


class MainMenu extends Component {
    state = {
        menu: [
        {
            id: 'main',
            name: MENU.MAIN[0],
            link: '/'
        },
        {
            id: 'shedule',
            name: MENU.SHEDULE[0],
            link: '/chat'
        },
        {
            id: 'qr',
                name: MENU.SIGNIN[0],
            link: '/shedule'
        },
        {
            id: 'notification',
                name: MENU.NOTIFICATION[0],
            link: '/members'
        },
        {
            id: 'profile',
                name: MENU.PROFILE[0],
            link: '/about'
        }]
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }


    renderTitle = () => {
        switch (this.props.history.location.pathname) {
            case "/":
                return <styles.Logo />;

            case "/shedule":
                return (
                    <styles.Title>
                        { MENU.SHEDULE[0].toUpperCase() }
                    </styles.Title>
                );

            case "/push":
                return (
                    <styles.Title>
                        { MENU.NOTIFICATION[0].toUpperCase() }
                    </styles.Title>
                );

            case "/profile":
            case "/profile/edit":
            case "/profile/save":
                return (
                    <styles.Title>
                        { MENU.PROFILE[1].toUpperCase() }
                    </styles.Title>
                );
            case "/signin":
                return (
                    <styles.Title>
                        { MENU.SIGNIN[0].toUpperCase() }
                    </styles.Title>
                );
            case "/news":
                return (
                    <styles.Title>
                        { MENU.NEWS[0].toUpperCase() }
                    </styles.Title>
                );


            default:
                return <styles.Logo />;
        }
    }

    renderButton = () => {
        switch (this.props.history.location.pathname) {
            case "/profile":
            case "/profile/save":
                return  <styles.Button
                    to={`/profile/edit`}
                    underlayColor="#ffffff00"
                >
                    <styles.ButtonText>
                        Редактировать
                    </styles.ButtonText>
                </styles.Button>;

            case "/profile/edit":
                return  <styles.Button
                    to={`/profile/save`}
                    underlayColor="#ffffff00"
                >
                    <React.Fragment>
                        <styles.ButtonText>
                            Сохранить
                        </styles.ButtonText>
                    </React.Fragment>
                </styles.Button>;
            default:
                return null;
        }
    }


    render() {
        return (
            <styles.Wrapper>
                <styles.Header>
                    {this.renderTitle()}
                </styles.Header>
                {this.renderButton()}
            </styles.Wrapper>
        );
    }
}


const mapStateToProps =
    ({
         ksp
     }) => ({
       ksp
    });

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MainMenu)
);