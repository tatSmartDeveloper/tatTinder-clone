import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark Zuckerburg"
        message="Hey, the next Facebook CEO 🔥"
        timestamp="40 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1xjRI7MOy7uD6C7B5Nt8snCuigQY1FUSaXw&usqp=CAU"
      />
    </div>
  );
};

export default Chats;
