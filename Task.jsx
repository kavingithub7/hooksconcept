import { useState } from "react";
function Task ()
{
    const [color,currentcolor] = useState('');
    const  Change = () => {
        currentcolor ('green')
    }
    return (
        <div>
            <div style={{backgroundColor:color,width:100,height: 100  }}></div>
            <button onClick={Change} style={{ width :100,}}> change the color</button>
        </div>

    );
}
export default Task;

