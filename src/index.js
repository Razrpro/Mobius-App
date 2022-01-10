/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import messaging from '@react-native-firebase/messaging';

import {connect} from 'react-redux';
import {NativeRouter as Router} from "react-router-native";
import BottomMenu from "./components/BottomMenu";
import MainMenu from "./components/MainMenu";

import Content from "./components/Content"
import { Api } from "./api"
import { AsyncStorage, Platform } from "react-native";
import axios from "axios";

import * as userSelectors from "./store/user/selectors";
import * as settingsSelectors from "./store/settings/selectors";
import * as authSelectors from "./store/auth/selectors";

import {toogleLanguage} from "./store/settings/actions";
import {fetchMyProfile} from "./store/user/actions";
import {authorizedFailed, authorizedSuccess} from "./store/auth/actions";

import * as styles from "./styles";

console.disableYellowBox = true;

class App extends Component {

    componentDidMount() {
        this.checkAuthorization();
        this.requestUserPermission();
    }

    getTokens = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("tokens").then(value =>
                resolve(JSON.parse(value))
            );

        });
    }

    clearTokens = () => {
        axios.defaults.headers.common["Authorization"] = "";
        AsyncStorage.removeItem("tokens");
    }


     requestUserPermission = () => {
        if(Platform.OS === 'ios'){
            messaging().requestPermission()
                .then(authStatus => {
                    const enabled =
                        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

                    if (enabled) {
                        messaging().getToken()
                            .then(token => {
                                Api.users.updateUser({
                                    fcmToken: token
                                })
                            });
                    }
                })
        } else {
            messaging().getToken()
                .then(token => {
                    Api.users.updateUser({
                        fcmToken: token
                    })
                });
        }

    }


    checkAuthorization = () => {
        this.getTokens().then(
            tokens => {
                if (tokens) {
                    axios.defaults.headers.common["Authorization"] = "Bearer " + tokens.accessToken;
                    this.props.fetchMyProfile();
                    this.props.authorizedSuccess();
                }
                else{
                    this.props.authorizedFailed();
                }
            },
            error => {
                this.props.authorizedFailed();
            }
        );
    }

    logout = () => {
        this.clearTokens();
        this.props.authorizedFailed();
    }


    render() {
        return (
            <Router>
                <styles.Background>
                    <styles.MySafeArea>
                    <MainMenu
                        language={this.props.settings.language}
                        toggleLanguage={this.props.toggleLanguage}
                        isAuthorized={this.props.isAuthorized}
                        myProfile={this.props.myProfile}
                        logout={this.logout}
                    />


                    <styles.Wrapper
                        keyboardShouldPersistTaps='handled'
                        contentContainerStyle={{ flexGrow: 1 }}
                        enableOnAndroid={true}
                    >
                        <Content />

                    </styles.Wrapper>
                    </styles.MySafeArea>
                   <BottomMenu
                        language={this.props.settings.language}
                        toggleLanguage={this.props.toggleLanguage}
                        isAuthorized={this.props.isAuthorized}
                        myProfile={this.props.myProfile}
                        logout={this.logout}
                    />
                </styles.Background>
            </Router>
        );
    }
}

const mapStateToProps =
    ({
         user,
         settings,
         auth
     }) => ({
        user,
        myProfile: userSelectors.getMyProfile(user),
        settings: settingsSelectors.getSettingsLanguage(settings),
        isAuthorized: authSelectors.getAuthStatus(auth)
    });

const mapDispatchToProps = dispatch => ({
    toggleLanguage: () => dispatch(toogleLanguage()),
    fetchMyProfile: () => dispatch(fetchMyProfile()),
    authorizedSuccess: () => dispatch(authorizedSuccess()),
    authorizedFailed: () => dispatch(authorizedFailed())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

