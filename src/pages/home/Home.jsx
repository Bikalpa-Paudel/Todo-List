import React from 'react'
import "./home.css"
import Time from '../../component/time/Time'

function Home(props) {
  return (
    <div className='home'>
        <Time time={props.time}/>
    </div>
  )
}

export default Home