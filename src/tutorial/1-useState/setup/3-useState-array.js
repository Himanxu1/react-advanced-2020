import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setpeople] = React.useState(data);

  const removeItem = (id)=>{
   let newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople)
  }

  return (
  <>
  {people.map((person) =>{
    const {id,name} = person;
    return(
      <div key={id} className='item'>
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    )
  })}
  <button  className='btn' onClick={() => setpeople([])}>clear item</button>
  </>
    )
};

export default UseStateArray;
