import './App.css'
import Home from './pages/home/home'
import {useState,useEffect} from 'react'

function App() {

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
    <div className='app'>
      <Home time={time}/>
    </div>
  )
  }

export default App
