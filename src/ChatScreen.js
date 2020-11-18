import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      message: 'Hello handsome 💌',
    },
    {
      name: 'Mark Zuckerburg',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1xjRI7MOy7uD6C7B5Nt8snCuigQY1FUSaXw&usqp=CAU',
      message: 'Hey, the next Facebook CEO 🔥',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput('');
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MARK ZUCKERBURG ON 02/10/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
