import React,{useState} from "react";


export default function App()
{

 

  function fun()
  {
    setcount(count += 1)
    console.log(count);
  }



  return(
    <div>
      <center>
        <h1>Welcome to React !</h1>
        <h4>Count:{count} </h4>
        <button onClick={fun}>Add</button>
      </center>
    </div>
  )
}