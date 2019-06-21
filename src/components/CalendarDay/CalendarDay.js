import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const SingleDay = styled.div`
      width: 100px;
    margin: 0 auto;
    border: thin solid #ddd;
    text-align: center;
display: inline-block;
    &:hover {
   background-color: pink;
 }
 `;

const EmptyDay = styled.div`
      width: 102px;
    margin: 0 auto;
    text-align: center;
display: inline-block;
 `;

const CalendarDay = props => (
    props.calendarDay == null ? <EmptyDay/> : <SingleDay>{dayNames[props.calendarDay.getDay()]}{}</SingleDay>
);

export default CalendarDay;

CalendarDay.propTypes = {
    calendarDay: PropTypes.object
};