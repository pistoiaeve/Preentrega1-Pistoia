//import React, { useState } from "react";
import './stylesItemCount.css'

export const ItemCount = ({max, cantidad, modify}) =>{
    //const [counter, setCounter] = useState(0)
    const sumar = () =>{
        if(cantidad< max){
        modify(cantidad+1)}

    }
    const restar = () =>{
        if(cantidad>0){
        modify(cantidad-1)
        }
    }
    
    const resetear = () =>{
        modify(0)

    }

    return(<>
    <div className="contador">
    <h4>{cantidad}</h4>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <button onClick={resetear}> Restart </button>
    </div>
    </>)
}