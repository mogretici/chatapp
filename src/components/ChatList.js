import React from "react";
import styles from "./styles.module.css";
import { useChatContext } from "../context/ChatContext";
import ChatItem from "./ChatItem.js";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { chat } = useChatContext();

  return (
    <div className={styles.chatlist}>
  <ScrollableFeed forceScroll={true}>
        {chat.map((item, key) => (
           
          <ChatItem key={key} item={item} />
        )
        )}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
