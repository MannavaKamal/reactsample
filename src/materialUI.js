import '@fontsource/inter';
import * as React from 'react';



const user = {
    name: 'photo',
    imageUrl: "Screenshot (390).png",
    imageSize: 90,
    
  };
  
  
 function MyButton() {
    return (
        <>
        <button>I'm a button</button>
        <h1>{user.name}</h1>
       
        <img alt="" src={user.imageUrl }/>
       {user.condition}
        <h1>{user.name}</h1>
        </>
    );
  }
  
  export default MyButton ;