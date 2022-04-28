import React, { useState } from 'react';

const UseStateBasics = () => {
   
  const [text,setText] = useState('random ti tle');
  const handleClick = ()=>{
    setText('hello world')
  }


  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>chnage title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
