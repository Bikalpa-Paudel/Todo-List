import React from 'react'
import "./time.css"
export default function Time(props) {
    let {hour, min, sec} = props.time;
  return (
    <div className='time'>
        <div>{`${hour}:${min}:${sec}`}</div>
    </div>
  )

  }