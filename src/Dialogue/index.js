import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

const Dialogue = () => {
    const [messages, saveMessage] = useState([]);
    useEffect(() => {
        window.Chat.onMessage(message => {
            const isNotFirstMessage = !!messages.length && messages[messages.length - 1].user === message.user;
            saveMessage([...messages, { ...message, isFirstMessage: !isNotFirstMessage }]);
        });
    });

    return (
        <div className="message-container">
            {messages.map(item => (
                <Message {...item} key={item.id} />
            ))}
        </div>
    );
};

export default Dialogue;
