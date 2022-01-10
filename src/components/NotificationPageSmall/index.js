import React from 'react';
import * as styles from "./styles";

const NotificationSmall = ({
                                   messagesList,
                       }) => (
    <styles.Wrapper>
            {messagesList &&
            messagesList.length ?
                <styles.News>
                        {messagesList.map(item => (
                        <styles.NewsElement
                            key={item._id}
                        >
                            <React.Fragment>

                                <styles.ElementTitle>
                                    {item.title}
                                </styles.ElementTitle>
                                <styles.ElementText>
                                    {item.body}
                                </styles.ElementText>

                            </React.Fragment>
                        </styles.NewsElement>
                    ))}
                </styles.News>
                :
                <styles.Title>
                    У вас пока нет сообщений
                </styles.Title>
            }
    </styles.Wrapper>
);

export default NotificationSmall;
