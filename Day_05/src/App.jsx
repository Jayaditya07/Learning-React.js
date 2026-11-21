import React,{useState} from "react";


export default function App()
{

  let [count,setcount] = useState(0)

  


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