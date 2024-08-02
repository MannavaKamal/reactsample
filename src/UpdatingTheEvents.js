import React, { useState } from 'react';

function ChangeState() {
  const [count, setCount] = useState("mannava kamal");
  const handleClick = () => {
    setCount("mannavav");
  };
// hook state functions  must uppercase 
  return (
    <>
      <h1>KAMAL</h1>
      <button onClick={handleClick}>times: {count}</button>
      
    </>
  );
}

export default ChangeState;
