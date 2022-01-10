import React, {Component} from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";

class BottomMenu extends Component {
    state = {

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {

    }
    render() {

        return (
            <styles.Wrapper>
                <styles.MainMenuWrapper>
                    <styles.MenuButton
                        onPress={() => {
                            this.props.history.push(`/`)
                        }}
                    >
                        <styles.MenuIcoNews
                            active={this.props.history.location.pathname === `/`}
                        />
                        <styles.MenuText
                            active={this.props.history.location.pathname === `/`}
                        >
                            Новости
                        </styles.MenuText>
                    </styles.MenuButton>
                    <styles.MenuButton
                        onPress={() => {
                            this.props.history.push(`/shedule`)
                        }}
                    >
                        <styles.MenuIcoShedule
                            active={this.props.history.location.pathname === `/shedule`}
                        />
                        <styles.MenuText
                            active={this.props.history.location.pathname === `/shedule`}
                        >
                            Расписание
                        </styles.MenuText>
                    </styles.MenuButton>
                    <styles.MenuButton
                        absolute
                        onPress={() => {
                            this.props.history.push(`/qr`)
                        }}
                    >
                        <styles.MenuIcoQr
                            active={this.props.history.location.pathname === `/qr`}
                        />
                    </styles.MenuButton>
                    <styles.MenuButton
                        onPress={() => {
                            this.props.history.push(`/push`)
                        }}
                    >
                        <styles.MenuIcoNotification
                            active={this.props.history.location.pathname === `/push`}
                        />
                        <styles.MenuText
                            active={this.props.history.location.pathname === `/push`}
                        >
                            Уведомления
                        </styles.MenuText>
                    </styles.MenuButton>
                    <styles.MenuButton
                        onPress={() => {
                            this.props.history.push(`/profile`)
                        }}
                    >
                        <styles.MenuIcoProfile
                            active={this.props.history.location.pathname === `/profile` ||
                            this.props.history.location.pathname === `/profile/edit` ||
                            this.props.history.location.pathname === `/profile/save`
                            }
                        />
                        <styles.MenuText
                            active={this.props.history.location.pathname === `/profile`||
                            this.props.history.location.pathname === `/profile/edit` ||
                            this.props.history.location.pathname === `/profile/save`}
                        >
                            Профиль
                        </styles.MenuText>
                    </styles.MenuButton>
                </styles.MainMenuWrapper>
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
    )(BottomMenu)
);