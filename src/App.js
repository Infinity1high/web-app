import React from 'react';
import Controls from './Controls/index.js';
import Dialogue from './Dialogue';
import Typing from './Typing';
import './style.css';


const App = () => {
   return (
       <div className='container'>
        <Dialogue/>
        <div className='fixed-wrapper'>
            <Typing />
            <Controls/>
        </div>
       </div>
   )};

export default App;
