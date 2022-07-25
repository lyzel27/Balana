import React, { useState } from "react";
import "./App.css";

function App() {

    const [activityName, setActivityName] = useState("")
    const [time, setTime] = useState("")
    const [day, setDay] = useState("")
    const [activitylist, setActivityList] = useState("")

    const addActivityList = () => {
        setActivityList([...activitylist, {activity: activityName, time: time, day: day}])
        setActivityName('')
        setTime('')
        setDay('')
    }

    return (
        <div className="App">
            <h1>Weekend Activity</h1>
            <label>Activity Name:</label>
            <input type="text" id="task" onChange={(e) => {
                setActivityName(e.target.value)
            }}
        />

            <label>Time:</label>
            <input type="text" id="time"  onChange={(e) =>{
                setTime(e.target.value)
            }}
        />

            <label>Day:</label>
            <input type="text" id="day" onChange={(e) => {
                setDay(e.target.value)

            }}
        />

        <button onClick={addActivityList}>Add</button>

        {activityname.((activity) => {
            <activity activityName={activity.activityName} time={activity.time} day={activity.day} />
        })}
        </div>
    );
}