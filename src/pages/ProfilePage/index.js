import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authSelectors from "../../store/auth/selectors";
import ImagePicker from "react-native-image-picker";
import ProfilePageSmall from "../../components/ProfilePageSmall";
import ProfileEditPageSmall from "../../components/ProfileEditPageSmall";

import {getMyProfile} from "../../store/user/selectors";
import {fetchMyProfile} from "../../store/user/actions";

import * as groupsSelectors from "../../store/groups/selectors";
import * as groupsActions from "../../store/groups/actions";

import { Api } from "../../api";
import axios from "axios";
import {AsyncStorage} from "react-native";
import {authorizedFailed} from "../../store/auth/actions";

export const DEFAULT_AVATAR_SIZE = 20000000;

class SigninPage extends Component {
    initUser = {
        user:  {
            id: undefined,
            firstname: '',
            lastname: '',
            middlename: '',
            groups: [],
            photo: undefined,
        }
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
        this.props.fetchGroupsList();
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

        if (this.props.history.location.pathname === "/profile/edit") {
            return (
                <ProfileEditPageSmall
                    {...this.state}
                    handleUpdateAvatar={this.handleUpdateAvatar}
                    submitChange={this.submitChange}
                    changeItem={this.changeItem}
                    handleLastNameChange={this.handleLastNameChange}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleMiddleNameChange={this.handleMiddleNameChange}
                    uploadAvatar={this.uploadAvatar}
                />
            );
        } else {
            return (
                <ProfilePageSmall
                    {...this.state}
                    groups={this.props.groups}
                    logout={this.logout}
                />
            );
        }

    }
}

const mapStateToProps =
    ({
         auth,
         settings,
         user,
         groups,
     }) => ({
        isAuthorized: authSelectors.getAuthStatus(auth),
        settings,
        myProfile: getMyProfile(user),
        groups: groupsSelectors.selectGroupsList(groups)
    });


const mapDispatchToProps = dispatch => ({
    fetchMyProfile: () => dispatch(fetchMyProfile()),
    authorizedFailed: () => dispatch(authorizedFailed()),
    fetchGroupsList: () => dispatch(groupsActions.fetchGroupsList()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninPage);
