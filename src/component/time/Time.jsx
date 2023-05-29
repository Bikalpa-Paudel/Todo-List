import React from 'react'
import "./time.css"
import {useState,useEffect} from 'react'
export default function Time() {
  const [time, setTime] = useState({})
    useEffect(()=>{
      setInterval(()=>{
        let date = new Date(); 
        let timeObj = {
          "hour" : date.getHours() < 10 ? "0"+date.getHours() : date.getHours(),
          "min" : date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes(),
          "sec" : date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()
        }
        setTime(timeObj)
      },1000)
    },[])
  return (
    <div className='time'>
        <div>{`${time.hour}:${time.min}:${time.sec}`}</div>
    </div>
  )

  }