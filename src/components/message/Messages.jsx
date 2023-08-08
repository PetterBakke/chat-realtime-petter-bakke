import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../context/ChatContext';
import { db } from '../../firebase';
import Message from './Message'

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
    
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        } else {
          console.log("Chat document does not exists:", data.chatId);
        }
      });
      
      return () => {
        unSub();
      };
    }
  }, [data.chatId]);

  console.log('Error sending message:',messages);

  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;