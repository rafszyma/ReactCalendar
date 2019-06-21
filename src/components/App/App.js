import React from 'react';

import Calendar from "../Calendar/Calendar"

export default function App () {
    let currentDate = new Date();

    return <Calendar month={currentDate.getMonth()} year = {currentDate.getFullYear()}/>
}