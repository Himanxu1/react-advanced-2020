import React, { useState } from 'react';

const UseStateCounter = () => {
  const [Counter,setCounter] = useState(0);
  return ( 
    <>
    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{Counter}</h1>
      <button className='btn' onClick={() => setCounter(Counter-1)}>decrease</button>
      <button className='btn' onClick={() => setCounter(0)}>reset</button>
      <button className='btn' onClick={() => setCounter(Counter+1)}>increase</button>
    </section>

    </>
  )
};

export default UseStateCounter;
