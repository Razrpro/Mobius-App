import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authSelectors from "../../store/auth/selectors";
import ImagePicker from "react-native-image-picker";
import QrPageSmall from "../../components/QrPageSmall";
import {getMyProfile} from "../../store/user/selectors";

import {fetchMyProfile} from "../../store/user/actions";
import { Api } from "../../api";
import axios from "axios";
import {AsyncStorage} from "react-native";
import {authorizedFailed} from "../../store/auth/actions";

export const DEFAULT_AVATAR_SIZE = 20000000;

class QrPage extends Component {
    initUser = {
        user:  {
            id: undefined,
            firstname: '',
            lastname: '',
            middlename: '',
            groups: [],
            photo: undefined,
        },
        qr: undefined
    };

    state = {
        avatarError: false,
        user: this.initUser
    }

    componentDidMount() {
        if (this.props.isAuthorized === false) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }
        this.props.fetchMyProfile();
        Api.users.getQr().then(response => {
            if(response && response.data && response.data.image){
                this.setState({qr: response.data.image});
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.isAuthorized !== this.props.isAuthorized &&
            this.props.isAuthorized === false
        ) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }


        if (prevProps.myProfile !== this.props.myProfile &&
            this.props.myProfile
        ) {
            this.setState({
                user: {
                    id: this.props.myProfile._id,
                    firstname: this.props.myProfile.firstname,
                    lastname: this.props.myProfile.lastname,
                    middlename: this.props.myProfile.middlename,
                    groups: this.props.myProfile.groups,
                    photo: this.props.myProfile.photo,
                }
            })
        }

        if (prevProps.match.path !== this.props.match.path &&
            prevProps.match.path === '/profile/edit' &&
            this.props.match.path === '/profile/save'
        ) {

            this.setState({user: this.initUser});

            const newUser = this.state.user;

            Api.users.updateUser({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                middlename: newUser.middlename,
                photo: (this.state.changedAvatar &&
                    this.state.changedAvatar.uri) ?
                    this.state.changedAvatar.uri
                    : undefined,
            }).then(response => {
                if(response.data.status === true){
                        this.props.fetchMyProfile();
                        this.props.history.push('/profile');
                }
            }).catch( err => console.log('err',err))

        }
    }

    logout = () => {
        axios.defaults.headers.common["Authorization"] = "";
        AsyncStorage.removeItem("tokens");
        this.props.authorizedFailed();
    }

    handleLastNameChange = (lastname) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                lastname
            }
        }));
    };

    handleFirstNameChange = (firstname) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                firstname
            }
        }));
    };

    handleMiddleNameChange = (middlename) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                middlename
            }
        }));
    };

    uploadAvatar = () => {
        ImagePicker.launchImageLibrary({}, response => {
            this.changeProfileImage(response);
        });
    };

    changeProfileImage = response => {
        if (response.fileSize > DEFAULT_AVATAR_SIZE) {
            return this.setState({
                avatarError: "Слишком большой размер фотографии"
            });
        }

        if (response.didCancel) {
            // User cancelled image picker
        } else if (response.error) {
            // ImagePicker Error
        } else if (response.customButton) {
            // User tapped custom button
        } else {

            const fileType = response.fileName
                ? response.fileName.split(".")[response.fileName.split(".").length - 1]
                : "JPG";

            this.setState({
                changedAvatar: {
                    uri: `data:image/${fileType};base64,${response.data}`
                },
                avatarError: ""
            });
        }
    };

    render() {
            return (
                <QrPageSmall
                    {...this.state}
                    logout={this.logout}
                />
            );

    }
}

const mapStateToProps =
    ({
         auth,
         settings,
         user
     }) => ({
        isAuthorized: authSelectors.getAuthStatus(auth),
        settings,
        myProfile: getMyProfile(user)
    });


const mapDispatchToProps = dispatch => ({
    fetchMyProfile: () => dispatch(fetchMyProfile()),
    authorizedFailed: () => dispatch(authorizedFailed())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QrPage);
