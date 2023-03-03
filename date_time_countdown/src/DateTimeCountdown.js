import React, { useState } from 'react';
import { useEffect } from 'react';

export const DateTimeCountdown = () => {
    const [dateObj, setDateObj] = useState(new Date().toLocaleString());
    const [start, setStart] = useState('');
    const [timer, setTimer] = useState('');

    const countdown = () => {
        let currentDate1 = dateObj.split(',')[0].split('/');
        let currentDateDay = currentDate1[1]
        let currentDateMonth = currentDate1[0]
        let currentDateYear = currentDate1[2];
        let currentTime = dateObj.split(',')[1].substring(0, 9).trim().split(':');
        let currentHour = currentTime[0];
        let currentMinute = currentTime[1];
        let currentSeconds = currentTime[1];

        //Formatted current Date:  yyyy-mm-dd hh:mm:ss 
        let now = new Date(currentDateYear + "-" + currentDateMonth + "-" + currentDateDay + ", " + currentHour + ":" + currentMinute + ":" + currentSeconds)

        // Formatted start & end date 
        let startDate = new Date(2022 + "-" + 11 + "-" + 13 + ", " + 10 + ":" + 0 + ":" + 0)
        setStart(startDate.toString().substring(3, 24));
        let endDate = new Date(2022 + "-" + 11 + "-" + 14 + ", " + 7 + ":" + 50 + ":" + 0)

        //compare date
        if (now.getDate() === startDate.getDate()) {
            //compare time
            if ((startDate.getTime() - now.getTime() > 0)) {
                let totalSeconds = (startDate.getTime() - now.getTime()) / (1000 * 3600 * 24) * 86400;

                let hours = Math.floor(totalSeconds / 3600);
                let minutes = Math.floor(totalSeconds % 3600 / 60) + 1;
                let seconds = Math.floor(totalSeconds % 3600 % 60);

                if (hours > 0)
                    setTimer(hours + " hours, " + minutes + " minutes left");
                else
                    setTimer(minutes + " minutes left");
            }
            else if ((startDate.getTime() - now.getTime() <= 0))
                setTimer("0 minutes left");
            else
                setTimer("TEST EXPIRED");

        } else if (now.getDate() < startDate.getDate()) {
            //compare Date
            setTimer(startDate.getDate() - now.getDate() + " days left");
        } else {
            // expired
            setTimer("TEST EXPIRED");
        }
    }

    useEffect(() => {
        let secTimer = setInterval(() => {
            setDateObj(new Date().toLocaleString())
            countdown();
        }, 500);
        return () => clearInterval(secTimer);
    }, [dateObj]);


    const formatCurrentDateAndTime = (dateObj) => {
        let dateAndTime = dateObj.split(',');

        let unformattedDate = dateAndTime[0].split('/');
        let formattedDate = unformattedDate[1] + "/" + unformattedDate[0] + "/" + unformattedDate[2];

        return formattedDate + dateAndTime[1];
    }

    return (
        <div>
            <h1 style={{ fontWeight: "700" }}>Current :  {dateObj && formatCurrentDateAndTime(dateObj)}</h1>
            <h1 style={{ fontWeight: "700" }}>Start :  {start}</h1>
            <h1 style={{ fontWeight: "100" }}>{timer}</h1>
        </div>
    )
}
