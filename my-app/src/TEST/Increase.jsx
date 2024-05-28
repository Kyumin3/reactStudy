import React from "react";
import { useState } from "react";


 const Increase = (props) => {

    let [count, setCount] = useState(0);
    let [size, setSize] = useState(15);

    let increase = () =>{
        setCount(count + 1);
        setSize(size + 5);
    }

    return(
    <div>
        <div style={{fontSize : size}}>{count}</div>
        <button onClick={increase}>증가</button>

    </div>
     );
}

 export default Increase; 