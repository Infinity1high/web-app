import React, {useEffect, useState} from 'react';
// import './style.css';


const Message = ({content, user, timestamp, id, isFirstMessage}) => {
    const isMe = user.toLowerCase() === 'me';
    const date = new Date(timestamp);
    console.log(content, user, timestamp,id, isFirstMessage)


    return <div className={`message-wrapper ${isMe && 'self'}`}>
        <div className={`message with-arrow ${isMe && 'self'}`}>
            {isFirstMessage && !isMe && <h3>{user}</h3>}
            <div>{content}</div>
            {date.getHours()}:
            {date.getMinutes()}
        </div>
    </div>
};

export default Message;
