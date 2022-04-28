import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setvalue] = useState(0);

  useEffect(() =>{
    console.log('call use effect');
    if(value >= 1){
      document.title = `New message (${value})`;
    }
  },[]);
  return (
  <>
  <h1>{value}</h1>
  <button className='btn'onClick={() => setvalue(value+1)}>change</button>
  </>
    )
};



export default UseEffectBasics;
