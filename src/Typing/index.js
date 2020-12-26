import React, {useEffect, useState} from 'react';
import './style.css';

const Typing = () => {
    const [typingInfo, saveTypingInfo] = useState([]);
    useEffect(() => {
        window.Chat.onTyping((userTyping) => {
            const typingInfoToUpdate = typingInfo.find(item => item.user === userTyping);
            const time = Date.now();
            if(!typingInfoToUpdate) {
                saveTypingInfo([...typingInfo, {user: userTyping, time}]);
            }
            setTimeout(() => {
                const now = Date.now();
                if(now >= time + 8000) {
                    const typingInfoAfterClean = typingInfo.filter(item => item.user !== userTyping)
                    saveTypingInfo(typingInfoAfterClean);
                }
            }, 8000);
        });
    });

    return !!typingInfo.length && (
    <div className='container-typing'>
        {typingInfo.map((item, i) => <span key={`${item.user}_${item.time}`} className='user-typing'>{item.user}{i<typingInfo.length -1 && ','} </span>)}
        is writing ...
    </div>
    )
};

export default Typing;
