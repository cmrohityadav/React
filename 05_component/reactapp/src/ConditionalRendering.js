import { useState } from "react";


function Render(){
let [x,stateSetter]   = useState(0);
const [isEdititng,setIsEditting]=useState(false);
const [todos,setTodos]=useState(["todo 1",'todo 2']);


return(
    <><br />
        <br />
        Counter X:{x} is {(x%2==0)? "Even":"Odd"} <br />
        <button onClick={()=> stateSetter(x+=1)}>Increament</button>
        <button onClick={()=> stateSetter(x-=1)}>Decreament</button>

        <br />
        <br />
        <br />
        <br />
        <h1>To Do</h1>
        {
            (isEdititng)? <input/>:<p>Some todo</p>
        }
        <button onClick={()=> setIsEditting(!isEdititng)}>Click</button>
        <br />
        <br />
        <br />
        <br />
        <div>
            <ul>
                {todos.map((todo)=><li>{todo}</li>)}
                <button onClick={()=>setTodos([...todos,"another"])}>click</button>
            </ul>
        </div>



    </>
)
}
export default Render;