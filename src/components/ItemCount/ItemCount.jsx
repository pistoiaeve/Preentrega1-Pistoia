import React, { useState } from "react";
import './stylesItemCount.css'

export const ItemCount = () =>{
    const [counter, setCounter] = useState(0)
    const sumar = () =>{
        setCounter(counter+1)

    }
    const restar = () =>{
        if(counter>0){
        setCounter(counter-1)
        }
    }
    
    const resetear = () =>{
        setCounter(0)

    }

    return(<>
    <div className="contador">
    <h4>{counter}</h4>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <button onClick={resetear}> Restart </button>
    </div>
    </>)
}