import React from 'react'
import "../App.css";

export default function task({activityName, time, day}) {
    return (
        <div clssName="activity">
            <h1>ActivityName: {activityName}</h1>
            <h1>Time To Complete: {time}</h1>
            <h1>Day to Complete: {day}</h1>
        </div>
    )
}