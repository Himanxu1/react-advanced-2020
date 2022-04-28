import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setsize] = useState(window.innerWidth);

  const checkSize = () =>{
    console.log('hello');
    setsize(window.innerWidth);
    
  }

  useEffect(()=>{
    
    window.addEventListener('resize',checkSize)
    return ()=>{
      console.log('clean');
      window.removeEventListener('resize',checkSize)
    }
  },[])
 

  return(
    <>
    <h1>window</h1>
    <h2>{size}PX</h2>
   </>
  )
  
};

export default UseEffectCleanup;


