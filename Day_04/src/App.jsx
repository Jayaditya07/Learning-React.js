import React from "react";
import A from "./pages/A";
import B from "./pages/b";




export default function App()
{
    let name = "Jayaditya"
    return(
        <div>
            <h1>Hello React !</h1>
            <A name = {name}/>
            <B name = {name}/>
        </div>
    )
}