import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale("ru");

import ShedulePageSmall from '../../components/ShedulePageSmall';

import {fetchSheduleList} from "../../store/shedule/actions";

import * as sheduleSelectors from "../../store/shedule/selectors";
import * as authSelectors from "../../store/auth/selectors";


class ShedulePage extends Component {
    state = {
        isFetching: false,
        shedule: [],
        selectedDay: undefined,
        weekNum: 0,
    };

    componentDidMount() {
        if (this.props.isAuthorized === false) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }
          this.props.fetchSheduleList();
    }

    selectDay = (day) => {
        this.setState({
            selectedDay: {
                ...day,
                fullName: moment(`${day.day}.${day.month}.${day.year}`, 'DD.MM.YYYY')
                    .format('dddd, DD MMMM YYYY')
            },

        });
    };

    changeWeek = (weekNum) => {
        if(weekNum !== this.state.weekNum){
            this.selectDay(this.state.shedule[weekNum].data[this.state.selectedDay.idxOfWeek]);
            this.setState({
                weekNum
            });
        }
    };

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.isAuthorized !== this.props.isAuthorized &&
            this.props.isAuthorized === false
        ) {
            this.props.history.push('/signin'); //NEED AUTHORIZED
        }

        if (prevProps.shedule !== this.props.shedule &&
            this.props.shedule
        ) {
            this.setState(state => ({
                shedule: this.props.shedule.map(week => ({
                    id: uuidv4(),
                    data: week && week.map((day, idx) => ({
                        ...day,
                        data: day.data?.map(d => ({
                            ...d,
                            header: `${moment(d.date).format('HH:mm')} - ${moment(d.date).add(d.longtime, 'minutes').format('HH:mm')}`
                        })),
                        idxOfWeek: idx,
                        shortName: moment(`${day.day}.${day.month}.${day.year}`, 'DD.MM.YYYY')
                            .format('dddd')[0],
                        id: uuidv4()
                    })) || []
                })),
                isFetching: false
            }), () => {
                this.selectDay(
                    this.state.shedule[0].data.find(
                        day => day.isToday === true
                    )
                );
            })
        }
    }

    render() {
        return (
            <ShedulePageSmall
                {...this.state}
                selectDay={this.selectDay}
                changeWeek={this.changeWeek}
            />
        );
    }




}

const mapStateToProps =
    ({
         settings,
         shedule,
         auth,
     }) => ({
        settings,
        shedule: sheduleSelectors.getEventsList(shedule),
        isAuthorized: authSelectors.getAuthStatus(auth),
    });

const mapDispatchToProps = dispatch => ({
    fetchSheduleList: () => dispatch(fetchSheduleList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShedulePage);
