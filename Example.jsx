import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}



 
 function Example()
{
    const [a,currentcount] = useState(1)
    const [Written,nm] = useState({nm:"noname"})
    const [b,js] = useState(1)
    const f1 = () =>{
        js(a*5)
    }
    return (
        <div>
{/*         
            <button onClick={()=>currentcount(a+1)}>click ++</button> */}
            <p>THE CURRENT COUNT VALUE IS : {a}</p>
            {/* <button onClick={()=>currentcount(a-1)}>click --</button> */}
            <h1>example program is writte by {Written.nm}</h1>
            <p>Uisng js in above the return statement{b} </p>
            {/* <button onClick={f1}>click to multiple </button> */}
            


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        click
        me
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > <button onClick={()=>currentcount(a+1)}>click ++</button></Dropdown.Item>
        <Dropdown.Item >
            <button onClick={()=>currentcount(a-1)}>click --</button></Dropdown.Item>
        <Dropdown.Item > <button onClick={f1}>click to multiple </button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
        </div>
    )
    
}
export default Example ;