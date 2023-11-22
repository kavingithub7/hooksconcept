import { useState } from "react";
function Form()
{ 
    const [name,newname]  = useState("naeen");
    const change  = () =>
    {
        newname ("kavin")

    } ;
   
    return(
    <div>
    <h1>  my  name  is {name}</h1>
    <button onClick={change}>click to know</button>
    <form>
        <input type="text"
         value={name} 
         placeholder="your name"
         onChange={(y) => newname(y.target.value)}
         />
         <p> {name}</p>
         <button> click to added</button>
    </form>
    </div>
    );
}
export default Form;