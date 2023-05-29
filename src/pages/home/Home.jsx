import React from 'react'
import "./home.css"
import Time from '../../component/time/Time'
import List from '../../component/list/List'

function Home() {
  return (
    <div className='home'>
        <Time />
        <List />
    </div>
  )
}

export default Home