import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home