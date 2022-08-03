import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init , subscribeToChat, } from "../socketApi";
import {useChatContext} from '../context/ChatContext'
// import { subscribeInitialMessages } from "../socketApi";

function Container() {
  const {setChat} = useChatContext();
  useEffect(() => {
    init();
    
  //   subscribeInitialMessages((messages) => {
  //     setChat(messages); 
  // }); //initial messages
    
    subscribeToChat((message)=>{
        setChat((prevState)=>[...prevState,{message}]);
    });
  }, []);

  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
