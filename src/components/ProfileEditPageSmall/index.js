import React from 'react';
import * as styles from "./styles";

const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

const ProfileEditPageSmall =
    ({
         user,
         changedAvatar,
         handleLastNameChange,
         uploadAvatar,
         handleFirstNameChange,
         handleMiddleNameChange,
     }) => (
        <styles.Wrapper>
            <styles.UserCard>
                <styles.Title>
                    Заполните ваш профиль и нажмите
                </styles.Title>
                <styles.SaveArrow />

                <styles.UserPhotoBlock
                    loading={!user}
                >
                    { user &&
                        <styles.UserPhotoWrapper
                            onPress={uploadAvatar}
                        >
                            <styles.UserPhotoBackground>
                                { (changedAvatar &&
                                  changedAvatar.uri)
                                    ? <styles.UserPhoto
                                        source={{uri: changedAvatar.uri}}
                                      />
                                    : <styles.UserPhoto
                                        source={{uri: `${ENDPOINT}/api/users/photo/${user.id}?rand=${Math.random()}`}}
                                      />
                                }

                            </styles.UserPhotoBackground>
                        </styles.UserPhotoWrapper>
                    }
                </styles.UserPhotoBlock>

                <styles.UserFlexBlock>
                    <styles.Title>
                        Фамилия:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            placeholder={`Введите фамилию`}
                            placeholderTextColor = "#FFFFFF50"
                            loading={!user}
                            value={user.lastname}
                            onChangeText={handleLastNameChange}
                        />
                    </styles.LineIn>

                    <styles.Title>
                        Имя:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            loading={!user}
                            placeholder={`Введите имя`}
                            placeholderTextColor = "#FFFFFF50"
                            value={user.firstname}
                            onChangeText={handleFirstNameChange}
                        />
                    </styles.LineIn>

                    <styles.Title>
                        Отчество:
                    </styles.Title>
                    <styles.LineIn>
                        <styles.Name
                            loading={!user}
                            placeholder={`Введите отчество`}
                            placeholderTextColor = "#FFFFFF50"
                            value={user.middlename}
                            onChangeText={handleMiddleNameChange}
                        />
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
                                                {group.name}
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

            </styles.UserCard>
        </styles.Wrapper>
    );

export default ProfileEditPageSmall;
