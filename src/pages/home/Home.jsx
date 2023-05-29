import React from 'react'
import "./home.css"
import Time from '../../component/time/Time'
import List from '../../component/list/List'

function Home(props) {
  return (
    <div className='home'>
        <Time time={props.time}/>
        <List />
    </div>
  )
}

export default Home