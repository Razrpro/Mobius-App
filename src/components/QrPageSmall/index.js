import React from 'react';
import * as styles from "./styles";
import Spinner from "../Spinner";
const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

const QrPageSmall =
    ({
         qr,
         user
     }) => (
        <styles.Wrapper>
            <styles.UserCard>
                <styles.UserPhotoBlock>
                    { user &&
                      user.photo &&
                        <styles.UserPhotoWrapper>
                            <styles.UserPhoto
                                source={{uri: `${ENDPOINT}/api/users/photo/${user.id}`}}
                            />
                        </styles.UserPhotoWrapper>
                    }

                    {  !user.id &&
                         <styles.UserPhotoWrapper>
                            <Spinner />
                         </styles.UserPhotoWrapper>
                    }
                </styles.UserPhotoBlock>

                { user &&
                  user.lastname &&
                  user.firstname &&
                    <React.Fragment>
                        <styles.Title upper>
                            {user && user.lastname}
                        </styles.Title>
                        <styles.Title>
                            {user && `${user.firstname} ${user.middlename}` }
                        </styles.Title>
                    </React.Fragment>
                }

                { user &&
                  user.lastname &&
                  user.firstname &&
                  qr ?
                    <styles.QrImage
                        source={{uri: `${qr}`}}
                    />
                  :
                    user.id &&
                    <styles.ColumnBox>
                        <styles.SubTitle>
                            Для получения пропуска — заполните профиль!
                        </styles.SubTitle>
                        <styles.Button to={`/profile/edit`}>
                            <styles.ButtonText>
                                Перейти к заполнению
                            </styles.ButtonText>
                        </styles.Button>
                    </styles.ColumnBox>

                }


            </styles.UserCard>
        </styles.Wrapper>
    );

export default QrPageSmall;
