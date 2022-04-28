import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {

  const [Loading,setLoading] = useState(true);
  const [error,seterror] = useState(false);
  const [user,setuser] = useState('Default user')


  useEffect(()=>{
    fetch(url)
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setLoading(false);
        seterror(true);
        throw new Error(resp.statusText);
      }
    })
      .then((user) =>{
        const { login } = user;
        setuser(login);
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])


  if(Loading){
    return(
      <div>
        <h2>loading...</h2>
      </div>
    )
  }

  if(error){
    return(
      <div>
        <h2>error..</h2>
      </div>
    )
  }


  return(
   <div>
     <h1>{user}</h1>
   </div>
    )
};

export default MultipleReturns;
