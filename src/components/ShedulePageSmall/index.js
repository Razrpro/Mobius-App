import React from 'react';
import * as styles from "./styles";
import { Dimensions } from 'react-native';


const ConturConfig = require("../../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

const { width, height } = Dimensions.get('window');

const renderItem = (newsOne) => (
    <styles.NewsElement
        to={`/events/${newsOne.item._id}`}
        key={newsOne.item._id}
    >
        <React.Fragment>
            <styles.ElementTitle>
                {newsOne.item.name}
            </styles.ElementTitle>
        </React.Fragment>
    </styles.NewsElement>
);

const EventsPageSmall = ({
                             shedule,
                            selectDay,
                             changeWeek,
                            selectedDay,
                       }) => (
    <styles.Wrapper>
        {shedule &&
        shedule.length > 0 &&
        <styles.SlideWrapper
            autoplay={false}
            isLooped={false}
            onPageBeingChanged={(p) => {
                changeWeek(p);
            }}
        >
            {shedule.map(week => (
                <styles.WeekWrapper
                    key={week.id}
                >
                    <styles.WeekHeader>
                        {week.data &&
                        week.data.map(oneDay => (
                            <styles.Day
                                key={oneDay.id}
                                onPress={()=>{
                                    selectDay(oneDay);
                                }}
                            >
                                <styles.DayName>
                                    {oneDay.shortName}
                                </styles.DayName>
                                <styles.DayDate
                                    selected={oneDay?.id === selectedDay?.id}
                                >
                                    <styles.DayDateText
                                        selected={oneDay?.id === selectedDay?.id}
                                    >
                                        {oneDay.day}
                                    </styles.DayDateText>
                                </styles.DayDate>
                            </styles.Day>
                        ))}
                    </styles.WeekHeader>
                    <styles.SelectedDay>
                        <styles.SelectedDayText>
                            {selectedDay?.fullName}
                        </styles.SelectedDayText>
                    </styles.SelectedDay>
                    <styles.SheduleList>
                        {
                            week?.data?.find(d => d.id === selectedDay?.id)?.data?.map(oneDance => (
                                <styles.OneDance>
                                    <styles.DanceDate>
                                        {oneDance.header}
                                    </styles.DanceDate>
                                    <styles.DanceGroup>
                                        <styles.DanceGroupText>
                                            {oneDance.group.name}
                                        </styles.DanceGroupText>
                                        <styles.DanceGroupComment>
                                            {oneDance.place.name}
                                        </styles.DanceGroupComment>
                                        {oneDance.comment.length > 0 &&
                                        <styles.DanceGroupComment>
                                            ({oneDance.comment})
                                        </styles.DanceGroupComment>
                                        }
                                    </styles.DanceGroup>
                                </styles.OneDance>
                            ))
                        }
                    </styles.SheduleList>
                </styles.WeekWrapper>
            ))}
        </styles.SlideWrapper>
        }
    </styles.Wrapper>
);

export default EventsPageSmall;
