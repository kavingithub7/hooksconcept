import React, { useState } from 'react';
import Task from './Task';

const New= () => {

 const [check, setbgcolor] = useState(false);

  
  const clickstatus = () => 
  {
    setbgcolor(!check);
  };

  
  const backgroundColor = check ? 'green' : 'red';

  return (
    <div style={{ backgroundColor, padding: '20px',width :200, height : 150,  marginLeft : 100 ,marginTop:100}}>
   
      <button onClick={clickstatus} style={{marginTop:150}}>
        change 
      </button>
      <Task />
    </div>
    
  );
};

export default New;