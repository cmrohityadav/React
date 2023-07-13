import { useState } from "react";
let z=10;

function Counter(){
let [x,stateSetter]   = useState(0);
let [y,stateSetterY]   = useState(0);

return(
    <>
        Counter X:{x}
        <button onClick={()=> stateSetter(x+=1)}>Increament</button>
        <button onClick={()=> stateSetter(x-=1)}>Decreament</button>

        <br />

        Counter Y:{y}
        <button onClick={()=> stateSetterY(y+=1)}>Increament</button>
        <button onClick={()=> stateSetterY(y-=1)}>Decreament</button>
        <br />

        Counter z:{z}
        <button onClick={()=> z+=1}>Increament</button>

    </>
)
}
export default Counter;