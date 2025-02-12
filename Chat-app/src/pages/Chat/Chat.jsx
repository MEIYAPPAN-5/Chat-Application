import React from 'react'
import  './chat.css'
import Leftbar from '../../components/Leftbar/Leftbar'
import Chatbox from '../../components/Chatbox/Chatbox'
import Rightbar from '../../components/Rightbar/Rightbar'


const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatcontainer'>
        <Leftbar/>
        <Chatbox/>
        <Rightbar/>
        


      </div>
      
    </div>
  )
}

export default Chat