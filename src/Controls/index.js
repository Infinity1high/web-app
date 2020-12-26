import React, {useState, useCallback} from 'react';
import './style.css';

export default () => {
    const [message, handleChange] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        window.Chat.sendMessage(message);
        handleChange('');
     }, [message]
    );
  return(
    <form className="controls" onSubmit={handleSubmit}>
      <input value={message} placeholder="Say something" onChange={(e) => handleChange(e.target.value)}/>
      <button type='submit'>Send</button>
  </form>
  )
};
