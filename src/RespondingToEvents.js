
import * as React from 'react';


function handleClick() {
    alert('You clicked me!');
  }

  
  
  
 function Event() {
    return (
        <>
      <button onClick={handleClick}>
      Click me
    </button>
        </>
    );
  }
  
  export default Event;