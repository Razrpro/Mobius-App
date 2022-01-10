import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import SigninPageSmall from "../../components/SigninPageSmall";
import {formatPhone, validateEmail, validateInput, validatePhone} from "../../utils";
import {AsyncStorage, Platform} from "react-native";

import {SIGNIN, SIGNUP} from "../../constants/language";
import {authorizedSuccess, signin} from "../../store/auth/actions";
import {fetchMyProfile} from "../../store/user/actions";
import * as authSelectors from "../../store/auth/selectors";
import {getMyProfile} from "../../store/user/selectors";
import { Api } from "../../api";
import messaging from "@react-native-firebase/messaging";


class SigninPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            formattedPhone: '',
            alert: true,
            expired: false,
            isFetching: false,
            error: false,
            showCodeScreen: false,
        };
        this.codetRef = React.createRef();
    }


    testPhone = (phone) => {
        phone = phone.replace(/[^0-9.]/g,'');

        const isValid = validatePhone(phone);
        this.setState(state => ({
            formattedPhone: formatPhone(phone),
            phone: phone,
        }));

        this.setState({
            alert: !isValid
        });
    };

    codeCheck = (code) => {
        const isNotNull = validateInput(code);
        this.setState( {
            code,
            isFetching: true,
        }, () => {
            if(isNotNull){
                Api.auth.signin(this.state.phone, code).then(response => {
                    if(response && response.data){
                        if(response.data.status === "SUCCESS"){

                            this.signinSuccess(response.data.tokens);
                            this.setState({
                                isFetching: false
                            },() => {
                                this.props.history.push('/profile');
                            });
                        }
                    }
                }).catch(error => {
                    if(error &&
                        error.response &&
                        error.response.data &&
                        error.response.data.status
                    ) {
                        const status = error.response.data.status;
                        if (status === "WRONG_CODE") {
                            this.setState({
                                error: true,
                                isFetching: false,
                                expired: false
                            });
                        } else if (status === "CODE_TIMEOUT") {
                            this.setState({
                                error: false,
                                isFetching: false,
                                expired: true
                            });
                        }
                    }
                });
            }
        });

        return isNotNull;
    };

    onSubmit = () => {
        Api.auth.login(this.state.phone).then(response => {
            if(response && response.data && response.data.status === "CODE_SENDED"){
                this.setState({
                    showCodeScreen: true,
                    expired: false,
                    error: false
                });

            }
        });
    }

    onBack = () => {
        this.setState({
            phone: '',
            code: '',
            formattedPhone: '',
            alert: true,
            expired: false,
            error: false,
            showCodeScreen: false
        });
    };

    componentDidUpdate(prevProps, prevState) {
        let language = this.props.settings.language;

        // only update chart if the data has changed
        if (prevProps.signinStatusErrorPassword !== this.props.signinStatusErrorPassword &&
            this.props.signinStatusErrorPassword
        ) {
            this.setState(state => ({
                alertText: {
                    ...state.alertText,
                    password: SIGNIN.ALERTS.PASSWORD_INCORRECT[language]
                },
                alert: {
                    ...state.alert,
                    password: false
                }
            }));
        }

        if (prevProps.getSigninStatusUserNotExist !== this.props.getSigninStatusUserNotExist &&
            this.props.getSigninStatusUserNotExist
        ) {
            this.setState(state => ({
                alertText: {
                    ...state.alertText,
                    email: SIGNIN.ALERTS.EMAIL_NOT_REGISTERED[language]
                },
                alert: {
                    ...state.alert,
                    email: false
                }
            }));
        }

        if (prevProps.signinStatus !== this.props.signinStatus &&
            this.props.signinStatus.isFetched &&
            this.props.signinStatus.data &&
            this.props.signinStatus.data.data &&
            this.props.signinStatus.data.data.status === "SUCCESS"
        ) {
            this.signinSuccess(this.props.signinStatus.data.data.tokens);
        }

        if(prevProps.isAuthorized !== this.props.isAuthorized &&
           this.props.isAuthorized){

            Api.users.getMyProfile().then(response => {
               if(response &&
                   response.data &&
                   response.data.lastname &&
                   response.data.firstname ){
                   // профиль заполнен - идем на страницу профиля
                   this.props.history.push('/profile');
               } else {
                   //профиль НЕ заполнен - идем на страницу редактирования
                   this.props.history.push('/profile/edit');
               }
            });
        }
    }

    setTokens = (tokens) => {
        AsyncStorage.setItem("tokens", JSON.stringify(tokens));
    }

    updateAxios = token => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    };

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
            messaging().getInstance().getToken()
                .then(token => {
                    Api.users.updateUser({
                        fcmToken: token
                    })
                });
        }
    }

    signinSuccess = (tokens) => {
        this.setTokens(tokens);
        this.updateAxios(tokens.accessToken);
        this.props.authorizedSuccess();
        this.requestUserPermission();
    }

    render() {

        return (
            <SigninPageSmall
                {...this.state}
                language={this.props.settings.language}
                testPhone={this.testPhone}
                onSubmit={this.onSubmit}
                onBack={this.onBack}
                codeCheck={this.codeCheck}
                codetRef={this.codetRef}
                signinStatus={this.props.signinStatus.isFetching}
            />
        );
    }
}

const mapStateToProps =
    ({
         settings,
         auth,
         user
     }) => ({
        settings,
        myProfile: getMyProfile(user),
        signinStatus: authSelectors.getSigninStatus(auth),
        signinStatusErrorPassword: authSelectors.getSigninStatusErrorPassword(auth),
        getSigninStatusUserNotExist: authSelectors.getSigninStatusUserNotExist(auth),
        isAuthorized: authSelectors.getAuthStatus(auth)
    });


const mapDispatchToProps = dispatch => ({
    signin: (email, password) => dispatch(signin(email, password)),
    fetchMyProfile: () => dispatch(fetchMyProfile()),
    authorizedSuccess: () => dispatch(authorizedSuccess()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninPage);
