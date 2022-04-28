import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setperson] = useState({
    name:'peter',
    age:20,
    message:'this is hello'
  })
const changeMessage = () =>{
  setperson({...person,message:'hello',age:29})
}
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change</button>
    </>
  )
};

export default UseStateObject;
