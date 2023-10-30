import React from "react";
import './CourseDate.css';

function CourseDate(props){
    const month = props.date.toLocalString('en-US', {month: 'long'});
    const day = props.date.toLocalString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
     <div className="registration-date">
        <div>{day} / {month} / {year}</div>
        
     </div>

    )
}