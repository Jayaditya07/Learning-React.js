import React,{useState,useEffect} from "react";


export default function App()
{

  let[count,setCount] = useState(0)

  useEffect(fun,[])

  function fun()
  {
    console.log("Hi");
  }
  


  return (
    <div>
      <center>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}} >Add Count</button>
      </center>
    </div>
  )

}
