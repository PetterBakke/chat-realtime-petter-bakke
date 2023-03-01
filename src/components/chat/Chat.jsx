import React, { useContext } from 'react'
import {AiFillVideoCamera} from "react-icons/ai";
import {MdAdd} from "react-icons/md";
import {RiMoreFill} from "react-icons/ri";
import Messages from '../message/Messages';
import Input from "../input/Input";
import { ChatContext } from '../../context/ChatContext';

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.name}</span>
        <div className='chatIcons'>
          <AiFillVideoCamera className='icons'/>
          <MdAdd className='icons'/>
          <RiMoreFill className='icons'/>
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat