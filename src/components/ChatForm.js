import React , {useState} from 'react'
import styles from './styles.module.css'
import {sendMessage} from '../socketApi.js'
import {useChatContext} from '../context/ChatContext.js'

function ChatForm() {
    const {setChat} = useChatContext();
    const [message, setMessage] = useState('');
    const handleChange = (e)=>{
            setMessage(e.target.value);
        }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setChat((prevState)=>[...prevState,{ message, fromMe: true}]);
        sendMessage(message);
        setMessage('');        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput} type="text" placeholder="Type a message..." value={message} onChange={handleChange} />
        </form>
    </div>
  )
}

export default ChatForm