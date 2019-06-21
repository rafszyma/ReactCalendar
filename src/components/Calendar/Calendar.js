import React from 'react'
import PropTypes from 'prop-types'
import CalendarDay from '../CalendarDay/CalendarDay';
import styled from 'styled-components';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Parent = styled.div`
      width: 714px;
    margin: 0 auto;
    border: thin solid #ddd;
    text-align: left;
    align-content: center;

`;

const Weekday = styled.div`
      width: 100px;
    margin: 0 auto;
    border: thin solid #ddd;
    text-align: center;
display: inline-block;
    &:hover {
   background-color: brown;
 }
`;

const Calendar = props => {
    const date = new Date(props.year, props.month, 1);
    const days = [];
    for (let i = 1; i < date.getDay(); i++) {

        days.push(null)
    }
    while (date.getMonth() === props.month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return <>
        <div>Displaying month: {monthNames[props.month]} of year: {props.year}</div>
        <Parent>
            <Weekday>Monday</Weekday><Weekday>Tuesday</Weekday><Weekday>Wednesday</Weekday><Weekday>Thursday</Weekday><Weekday>Friday</Weekday><Weekday>Saturday</Weekday><Weekday>Sunday</Weekday>
            {days.map(day => <CalendarDay key={day} calendarDay={day}/>)}
        </Parent>
    </>
};

export default Calendar;

Calendar.propTypes = {
    year: PropTypes.number,
    month: PropTypes.number
};