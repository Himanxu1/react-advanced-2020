import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const refDiv = useRef(null);


  const handlesubmit  = (e)=>{
    e.preventDefault();
    console.log(refContainer.current.value)
    console.log(refDiv.current)

  }

 useEffect(()=>{
   console.log()
 })

  return <>
  <form className='form' onSubmit={handlesubmit}>
    <div>
    <input type="text" ref={refContainer}/>
    <button type="submit">submit</button>  
    
    </div>
  
  </form>
  <div ref={refDiv}>hello world</div> 
  
  </>;
};

export default UseRefBasics;
