import React,{useState} from "react";


export default function App()
{

  let [count,setcount] = useState(0)

  function fun()
  {
    setcount(count += 1)
    console.log(count);
  }




}