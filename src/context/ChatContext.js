import {createContext, useState, useContext} from 'react'

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [chat, setChat] = useState([]);
    
    const value = {chat, setChat};

    return <ChatContext.Provider value={value}> {children} </ChatContext.Provider>
}

export const useChatContext = () => {
    
    return useContext(ChatContext);
}