import React from 'react';
import * as styles from "./styles";

import {PROFILE, SCOPE_LIST, USER} from "../../constants/language";
const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

const ProfilePageSmall =
    ({
         logout,
         groups,
         user
     }) => (
        <styles.Wrapper>
            <styles.UserCard>
                <styles.Title>
                    Мое фото
                </styles.Title>
                <styles.UserPhotoBlock
                    loading={!user.photo}
                >
                    <styles.UserPhotoWrapper>
                    { user &&
                      user.photo &&
                            <styles.UserPhoto
                                source={{uri: `${ENDPOINT}/api/users/photo/${user.id}?rand=${Math.random()}`}}
                            />
                    }
                    </styles.UserPhotoWrapper>

                </styles.UserPhotoBlock>

                <styles.UserFlexBlock>
                    <styles.Title>
                        Фамилия:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            loading={!user}
                        >
                            {user && user.lastname}
                        </styles.Name>
                    </styles.LineIn>

                    <styles.Title>
                        Имя:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            loading={!user}
                        >
                            {user && user.firstname}
                        </styles.Name>
                    </styles.LineIn>

                    <styles.Title>
                        Отчество:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            loading={!user}
                        >
                            {user && user.middlename}
                        </styles.Name>
                    </styles.LineIn>

                    <styles.Title>
                        Группы:
                    </styles.Title>
                    {
                        user &&
                        user.groups &&
                        user.groups.length > 0
                            ?
                                <styles.Groups>
                                    { user.groups.map(group => (
                                        <styles.Group>
                                            <styles.GroupText>
                                                {groups && groups.find(g => g.id === group)?.name}
                                            </styles.GroupText>
                                        </styles.Group>
                                    ))}
                                </styles.Groups>
                            :
                            <styles.GroupTextNone>
                                у вас еще нет назначенных групп для занятий (назначает руководитель студии после заполнения данных профиля)
                            </styles.GroupTextNone>
                    }
                </styles.UserFlexBlock>
                <styles.LogoutBlock>
                    <styles.LogoutButton
                        onPress={logout}
                    >
                        <styles.LogoutButtonText>
                            Выйти из аккаунта
                        </styles.LogoutButtonText>
                    </styles.LogoutButton>
                </styles.LogoutBlock>
            </styles.UserCard>
        </styles.Wrapper>
    );

export default ProfilePageSmall;
